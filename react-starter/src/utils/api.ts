import { IProfile, IRepo } from '../types/types'

const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = `?client_id=${id}&client_secret=${sec}`

// different functions to fetch data from the endpoints

function getErrorMsg(message: string, username: string) {
  if (message === 'Not Found') {
    return `${username} doesn't exist`
  }

  return message
}

export function getProfile(username: string) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then(response => response.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username))
      }

      return profile as IProfile
    })
}

export function getRepos(username: string) {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`,
  )
    .then(response => response.json())
    .then(repos => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username))
      }

      return repos as IRepo[]
    })
}

function getStarCount(repos: IRepo[]) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0,
  )
}

function calculateScore(followers: number, repos: IRepo[]) {
  return followers * 3 + getStarCount(repos)
}

// get all the repos and profile
function getUserData(player: string) {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    }),
  )
}

function sortPlayers(players: { score: number; profile: IProfile }[]) {
  return players.sort((a, b) => b.score - a.score)
}

export function battle(players: string[]) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    results => sortPlayers(results),
  )
}

export function fetchPopularRepos(language: string) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
  )

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message)
      }

      return data.items as IRepo[]
    })
}

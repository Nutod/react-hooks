import { IRepo } from '../types/types'

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

      return profile
    })
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

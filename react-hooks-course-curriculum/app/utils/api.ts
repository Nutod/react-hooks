import { PostType } from '../components/Post'
import { UserType } from '../components/User'

const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

function removeDead(posts: PostType[]) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}

function removeDeleted(posts: PostType[]) {
  return posts.filter(({ deleted }) => deleted !== true)
}

function onlyComments(posts: PostType[]) {
  return posts.filter(({ type }) => type === 'comment')
}

function onlyPosts(posts: PostType[]) {
  return posts.filter(({ type }) => type === 'story')
}

export function fetchItem(id: string) {
  return fetch(`${api}/item/${id}${json}`).then(res => res.json())
}

export function fetchComments(ids: string[]) {
  return Promise.all(ids.map(fetchItem)).then(comments =>
    removeDeleted(onlyComments(removeDead(comments)))
  )
}

export function fetchMainPosts(type: string) {
  return fetch(`${api}/${type}stories${json}`)
    .then(res => res.json())
    .then(ids => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`)
      }

      return ids.slice(0, 50) as string[]
    })
    .then(ids => Promise.all(ids.map(fetchItem)))
    .then(posts => removeDeleted(onlyPosts(removeDead(posts))))
}

export function fetchUser(id: string): Promise<UserType> {
  return fetch(`${api}/user/${id}${json}`).then(res => res.json())
}

export function fetchPosts(ids: string[]) {
  return Promise.all(ids.map(fetchItem)).then(posts =>
    removeDeleted(onlyPosts(removeDead(posts)))
  )
}

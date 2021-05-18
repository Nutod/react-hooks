import { Post } from '../components/Post'

const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

function removeDead(posts: Post[]) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}

function removeDeleted(posts: Post[]) {
  return posts.filter(({ deleted }) => deleted !== true)
}

function onlyComments(posts: Post[]) {
  return posts.filter(({ type }) => type === 'comment')
}

function onlyPosts(posts: Post[]) {
  return posts.filter(({ type }) => type === 'story')
}

export function fetchItem(id: string): Promise<Post> {
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

export function fetchUser(id: string) {
  return fetch(`${api}/user/${id}${json}`).then(res => res.json())
}

export function fetchPosts(ids: string[]) {
  return Promise.all(ids.map(fetchItem)).then(posts =>
    removeDeleted(onlyPosts(removeDead(posts)))
  )
}

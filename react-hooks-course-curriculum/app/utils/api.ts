const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

export interface Post {
  dead: boolean
  deleted: boolean
  id: number
  url: string
  text: string
  title: string
  time: number
  by: string
  descendants: number
  type: 'comment' | 'story'
}

export interface Comment {
  type: 'comment' | 'story'
}

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

export function fetchItem(id: string) {
  return fetch(`${api}/item/${id}${json}`).then(res => res.json())
}

export function fetchComments(ids: string[]): Promise<Post[]> {
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

      return ids.slice(0, 50)
    })
    .then((ids: string[]) => Promise.all(ids.map(fetchItem)))
    .then((posts: Post[]) => removeDeleted(onlyPosts(removeDead(posts))))
}

export function fetchUser(id: string) {
  return fetch(`${api}/user/${id}${json}`).then(res => res.json())
}

export function fetchPosts(ids: string[]) {
  return Promise.all(ids.map(fetchItem)).then(posts =>
    removeDeleted(onlyPosts(removeDead(posts)))
  )
}

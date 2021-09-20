export interface IPost {
  by: string
  url: string
  title: string
  time: number
  id: number
  text: string
  descendants: number
  comment?: boolean
  dead: boolean
  deleted: boolean
  type: 'comment' | 'story'
  kids: string[]
}

export interface IUser {
  id: number
  created: number
  karma: number
  about: string
  submitted: string[]
}

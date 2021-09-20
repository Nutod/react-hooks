export interface IPost {
  by: string
  url: string
  title: string
  time: number
  id: number
  text: string
  descendants: number
  comment?: boolean
}

export interface IUser {
  id: number
  created: number
  karma: number
  about: string
}

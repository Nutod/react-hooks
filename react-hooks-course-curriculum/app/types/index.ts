export interface IPost {
  by: string
  time: number
  id: number
  text: string
  url: string
  title: string
  descendants: number
}

export interface IUser {
  id: number
  created: number
  karma: number
  about: string
}

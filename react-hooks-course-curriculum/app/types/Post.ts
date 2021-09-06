export interface IPost {
  title: string
  url: string
  by: string
  id: number
  created: number
  time: number
  text: string
  descendants: number
  dead: boolean
  deleted: boolean
  type: 'comment' | 'story'
}

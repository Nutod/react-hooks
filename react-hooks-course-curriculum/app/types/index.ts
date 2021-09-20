export interface IPost {
  by: string
  time: number
  id: number
  text?: string
  descendants?: number
  comment?: boolean
}

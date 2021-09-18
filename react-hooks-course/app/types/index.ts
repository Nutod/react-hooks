export type Language = 'All' | 'JavaScript' | 'Ruby' | 'Java' | 'CSS' | 'Python'

export interface IOwner {
  login: string
  avatar_url: string
  html_url: string
}

export interface IRepo {
  name: string
  owner: IOwner
  html_url: string
  stargazers_count: number
  forks: number
  open_issues: number
}

export interface IProfile {
  name: string
  location: string
  company: string
  following: number
  followers: number
}

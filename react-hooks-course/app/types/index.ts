export type Language = 'All' | 'JavaScript' | 'Ruby' | 'Java' | 'CSS' | 'Python'

export interface IRepo {
  name: string
  owner: {
    login: string
    avatar_url: string
  }
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
  login: string
  avatar_url: string
  html_url: string
}

export interface IPlayer {
  score: number
  profile: IProfile
}

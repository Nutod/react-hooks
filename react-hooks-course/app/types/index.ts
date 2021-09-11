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

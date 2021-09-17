export interface IRepo {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
  forks: number
  open_issues: number
  watchers: number
  score: number
  size: number
  stargazers_count: number
  watchers_count: number
}

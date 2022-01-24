export function buildPopularRepoURL(language: string) {
  return `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
}

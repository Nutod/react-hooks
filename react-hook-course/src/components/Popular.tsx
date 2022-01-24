import React from 'react'
import { fetchPopularRepos } from '../utils/api'
import Loading from './Loading'
import Error from './Error'

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Ruby' | 'Java'

function SelectionNav({
  selectedLanguage,
  setSelectedLanguage,
}: {
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
}) {
  const languages: Language[] = [
    'All',
    'Javascript',
    'CSS',
    'Python',
    'Ruby',
    'Java',
  ]
  return (
    <div className="nav">
      <ul
        style={{
          display: 'flex',
          gap: 'var(--space-300)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'var(--space-100)',
        }}
      >
        {languages.map(language => (
          <li
            style={{
              cursor: 'pointer',
              borderBottom:
                selectedLanguage === language
                  ? `2px solid var(--accents-7)`
                  : 'none',
            }}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  )
}

export interface IRepo {
  id: number
  stargazers_count: number
  forks_count: number
  language: string
  name: string
  owner: {
    avatar_url: string
  }
}

function ReposGrid({ repos }: { repos: IRepo[] }) {
  if (!repos) return null

  return (
    <div
      style={{
        marginBlockStart: 'var(--space-300)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(17rem, 100%), 1fr))',
        gap: 'var(--space-100)',
      }}
    >
      {repos.map(repo => (
        <div className="zi-card" key={repo.id}>
          <img src={repo.owner.avatar_url} alt="" />
          <h4>Name: {repo.name}</h4>
          <p>Stargazers Count: {repo.stargazers_count}</p>
          <p>Forks Count: {repo.forks_count} </p>
          <p>Language: {repo.language}</p>
        </div>
      ))}
    </div>
  )
}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  const SelectionNavProps = React.useMemo(
    () => ({
      selectedLanguage,
      setSelectedLanguage,
    }),
    [selectedLanguage]
  )

  React.useEffect(() => {
    if (!repos[selectedLanguage]) {
      setLoading(true)
      setError(null)

      fetchPopularRepos(selectedLanguage)
        .then(data => {
          setLoading(false)
          setRepos(repos => ({
            ...repos,
            [selectedLanguage]: data,
          }))
        })
        .catch(err => {
          setLoading(false)
          setError('Error')
        })
    }
  }, [selectedLanguage])

  return (
    <main className="container" style={{ marginBlock: 'var(--space-500)' }}>
      <SelectionNav {...SelectionNavProps} />

      {loading && <Loading />}

      {error && <Error message="An error occurred" />}

      {!loading && !error && <ReposGrid repos={repos[selectedLanguage]} />}
    </main>
  )
}

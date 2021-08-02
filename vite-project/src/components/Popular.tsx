import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'
import { fetchPopularRepos } from '../utils/api'

const PopularWrapper = styled.div`
  ${container}
  margin-block-start: var(--space-400);
`

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: var(--space-200);
  margin-block-end: var(--space-100);

  li {
    cursor: pointer;
  }
`

function SelectionNav({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: {
  languages: string[]
  selectedLanguage: string
  setSelectedLanguage: (param: string) => void
}) {
  return (
    <NavigationWrapper>
      {languages.map(language => (
        <li
          onClick={() => setSelectedLanguage(language)}
          style={{
            borderBottom:
              selectedLanguage === language
                ? '3px solid var(--color-primary)'
                : 'none',
          }}
        >
          {language}
        </li>
      ))}
    </NavigationWrapper>
  )
}

const ReposGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--space-200);

  h4 {
    text-align: center;
    margin-block-end: var(--space-200);
  }
`

function ReposGrid({ repos }: { repos: IRepo[] }) {
  if (!repos) return null

  //   return <>{JSON.stringify(repos, null, 2)}</>

  return (
    <ReposGridWrapper>
      {repos.map((repo, index) => (
        <div>
          <h4>
            #{index} - {repo.name}
          </h4>
          <img src={repo.owner.avatar_url} alt={`Avatar for ${repo.name}`} />
          <p>{repo.language}</p>
          <p>{repo.open_issues}</p>
          <p>{repo.forks}</p>
          <a href={repo.owner.html_url}>{repo.name}</a>
        </div>
      ))}
    </ReposGridWrapper>
  )
}

export interface IRepo {
  name: string
  owner: {
    avatar_url: string
    html_url: string
  }
  language: string
  open_issues: number
  forks: number
}

export default function Popular() {
  const languages = ['All', 'Javascript', 'Python', 'Ruby', 'Java']
  const [selectedLanguage, setSelectedLanguage] = React.useState('All')
  const [repos, setRepos] = React.useState({} as { [id: string]: IRepo[] })
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!repos[selectedLanguage]) {
      setLoading(true)

      fetchPopularRepos(selectedLanguage)
        .then(data => {
          setRepos(repos => ({
            ...repos,
            [selectedLanguage]: data,
          }))
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
          setError('Something went wrong')
          setLoading(false)
        })
    }
  }, [selectedLanguage])

  const getSelectionNavProps = () => ({
    languages,
    selectedLanguage,
    setSelectedLanguage,
  })

  return (
    <PopularWrapper>
      <SelectionNav {...getSelectionNavProps()} />

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>Something went wrong</p>
          ) : (
            <ReposGrid repos={repos[selectedLanguage]} />
          )}
        </>
      )}
    </PopularWrapper>
  )
}

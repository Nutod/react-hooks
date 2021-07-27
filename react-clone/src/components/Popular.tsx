import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'
import { IRepo } from '../types/types'
import { fetchPopularRepos } from '../utils/api'

const PopularWrapper = styled.div`
  ${container}
  margin-block-start: var(--space-500);

  ul {
    display: flex;
    justify-content: center;
    gap: var(--space-400);
    padding: var(--space-100);

    li {
      cursor: pointer;
    }
  }
`

type Language = 'All' | 'Javascript' | 'Python' | 'Ruby' | 'Java' | 'CSS'

function SelectionNav({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}: {
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
  languages: Language[]
}) {
  return (
    <ul>
      {languages.map(language => (
        <li
          key={language}
          onClick={() => setSelectedLanguage(language)}
          style={{
            borderBottom:
              selectedLanguage === language
                ? '2px solid var(--color-primary)'
                : 0,
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  )
}

// Just another Card Component

// name, {avatar_url}, stargazers_count, language, forks, open_issues

const ReposGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--space-400);

  div {
    background-color: var(--gray-100);

    & > * {
      padding: var(--space-100);
    }
  }

  h4 {
    text-align: center;
    margin-block: var(--space-100);
  }

  img {
    padding: 0;
  }
`

function ReposGrid({ repos }: { repos: IRepo[] }) {
  if (!repos) {
    return null
  }

  return (
    <ReposGridWrapper>
      {repos.map((repo, index) => (
        <div key={repo.name}>
          <h4>
            #{index} - {repo.name}
          </h4>
          <img
            src={repo.owner.avatar_url}
            alt={`Avatar for ${repo.full_name}`}
          />
          <p>Star Count: {repo.stargazers_count}</p>
          <p>Language: {repo.language}</p>
          <p>Forks: {repo.forks}</p>
          <p>Open Issues: {repo.open_issues}</p>
        </div>
      ))}
    </ReposGridWrapper>
  )
}

export default function Popular() {
  const languages: Language[] = [
    'All',
    'Javascript',
    'Python',
    'Ruby',
    'Java',
    'CSS',
  ]
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    if (!repos[selectedLanguage]) {
      setLoading(true)

      fetchPopularRepos(selectedLanguage)
        .then(data => {
          setRepos(repos => ({ ...repos, [selectedLanguage]: data }))
          setLoading(false)
        })
        .catch(({ message }) => {
          setError(message)
          setLoading(false)
        })
    }
  }, [selectedLanguage])

  const getLanguageNavProps = () => ({
    selectedLanguage,
    setSelectedLanguage,
    languages,
  })

  const getPopularReposProps = () => ({
    repos: repos[selectedLanguage],
  })

  if (loading) {
    return (
      <p style={{ marginBlockStart: 'var(--space-300)', textAlign: 'center' }}>
        Loading...
      </p>
    )
  }

  if (error) {
    return <p>Something went wrong!!!</p>
  }

  return (
    <PopularWrapper>
      <SelectionNav {...getLanguageNavProps()} />
      {loading ? (
        <p
          style={{ textAlign: 'center', marginBlockStart: 'var(--space-200)' }}
        >
          Loading...
        </p>
      ) : error ? (
        <p>Something went wrong!!!</p>
      ) : (
        <ReposGrid repos={repos[selectedLanguage]} />
        // <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
      )}
    </PopularWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'
import { IRepo } from '../types/types'
import { fetchPopularRepos } from '../utils/api'

const PopularWrapper = styled.div`
  ${container}
  margin-block-start: var(--space-500);

  ul {
    background: pink;
    display: flex;
    justify-content: center;
    gap: var(--space-400);

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

  const getPopularReposProps = () => ({})

  // fetch data for popular repos
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
      {JSON.stringify(selectedLanguage)}
      <SelectionNav {...getLanguageNavProps()} />
      <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
    </PopularWrapper>
  )
}

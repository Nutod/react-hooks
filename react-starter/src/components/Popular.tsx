import React from 'react'
import styled from 'styled-components'
import fetchPopularRepos from '../utils/api'

type Language = 'All' | 'Javascript' | 'Python' | 'Ruby' | 'CSS' | 'Java'

const LanguagesList = styled.ul`
  display: flex;
  justify-content: center;
  gap: var(--space-200);
`

interface StyleProps {
  selected: boolean
}

const LanguageLink = styled.a`
  border-bottom: ${(props: StyleProps) =>
    props.selected ? `2px solid var(--color-primary)` : 0};
`

function LanguageNav({
  selectedLanguage,
  setSelectedLanguage,
}: {
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
}) {
  const languages: Language[] = [
    'All',
    'Javascript',
    'Python',
    'Ruby',
    'CSS',
    'Java',
  ]

  return (
    <LanguagesList>
      {languages.map(language => (
        <li onClick={() => setSelectedLanguage(language)}>
          <LanguageLink selected={selectedLanguage === language}>
            {language}
          </LanguageLink>
        </li>
      ))}
    </LanguagesList>
  )
}

export interface IRepo {}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    // fetch here directly or use another function?
    updateLanguage(selectedLanguage)
  }, [selectedLanguage])

  const updateLanguage = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage)
    setError(null)
    setLoading(true)

    fetchPopularRepos(selectedLanguage)
      .then(data => {
        setLoading(false)
        setRepos(repos => ({ ...repos, [selectedLanguage]: data }))
      })
      .catch(err => {
        console.warn('Error fetching repos', err)
        setLoading(false)
        setError('There was an error')
      })
  }

  // interesting loading component
  const isLoading = () => {
    return loading
  }

  return (
    <div>
      <LanguageNav
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      {isLoading() ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(repos, null, 2)}</p>
      )}

      {error && <p>Something went wrong!!!</p>}
    </div>
  )
}

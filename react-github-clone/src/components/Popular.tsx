import React from 'react'
import styled from 'styled-components'
import { fetchPopularRepos } from '../utils/api'

const PopularWrapper = styled.div`
  margin-block: var(--space-500);

  ul {
    display: flex;
    gap: var(--space-200);
    justify-content: center;
  }

  li {
    cursor: pointer;
  }
`

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Ruby' | 'Java'

const languages: Language[] = [
  'All',
  'Javascript',
  'CSS',
  'Python',
  'Ruby',
  'Java',
]

function SelectionNav({
  selectedLanguage,
  setSelectedLanguage,
}: {
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
}) {
  return (
    <ul>
      {languages.map(language => (
        <li
          style={{
            borderBottom:
              selectedLanguage === language ? '2px solid var(--brand)' : '',
          }}
          onClick={() => setSelectedLanguage(language)}
        >
          {language}
        </li>
      ))}
    </ul>
  )
}

function ReposGrid({ repos }: { repos: {}[] }) {
  if (!repos.length) return null

  return <>{JSON.stringify(repos, null, 2)}</>
}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)
  const [repos, setRepos] = React.useState<null | {}[]>(null)

  React.useEffect(() => {
    fetchPopularRepos(selectedLanguage)
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
      .catch(error => {
        setError('An error occurred')
        setLoading(false)
      })
  }, [selectedLanguage])

  const getSelectionNavProps = () => ({
    selectedLanguage,
    setSelectedLanguage,
  })

  if (loading) {
    return (
      <p style={{ marginBlock: 'var(--space-500)', textAlign: 'center' }}>
        Loading...
      </p>
    )
  }

  if (error) {
    return (
      <p style={{ marginBlock: 'var(--space-500)', textAlign: 'center' }}>
        Something went wrong
      </p>
    )
  }

  return (
    <PopularWrapper>
      <SelectionNav {...getSelectionNavProps()} />

      <ReposGrid repos={repos} />
    </PopularWrapper>
  )
}

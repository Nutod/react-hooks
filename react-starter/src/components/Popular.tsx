import React from 'react'
import styled from 'styled-components'
import { IRepo } from '../types/types'
import { fetchPopularRepos } from '../utils/api'

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
        <li key={language} onClick={() => setSelectedLanguage(language)}>
          <LanguageLink selected={selectedLanguage === language}>
            {language}
          </LanguageLink>
        </li>
      ))}
    </LanguagesList>
  )
}

const ReposGridList = styled.ul`
  max-width: 70rem;
  margin-inline: auto;
  margin-block: var(--space-400);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`
const ReposGridListItem = styled.li`
  padding: var(--space-200);

  h2 {
    margin-block-start: var(--space-100);
  }
`

function ReposGrid({ repos }: { repos: IRepo[] }) {
  if (!repos) {
    return null
  }

  return (
    <ReposGridList>
      {repos.map((repo, index) => (
        <ReposGridListItem key={repo.id}>
          <h4>
            #{index + 1} - {repo.name}
          </h4>
          <img src={repo.owner.avatar_url} alt={repo.description} />
          <h2>
            <a href={repo.html_url}>{repo.owner.login}</a>
          </h2>
        </ReposGridListItem>
      ))}
    </ReposGridList>
  )
}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    updateLanguage(selectedLanguage)
  }, [selectedLanguage])

  const updateLanguage = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage)
    setError(null)

    if (!repos[selectedLanguage]) {
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
  }

  return (
    <div>
      <LanguageNav
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

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
    </div>
  )
}

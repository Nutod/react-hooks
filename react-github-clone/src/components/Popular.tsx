import React from 'react'
import styled from 'styled-components'
import { fetchPopularRepos } from '../utils/api'
import Card from './Card'
import Container from './Container'

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

const ReposGridContainer = styled.div`
  margin-block-start: var(--space-300);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--space-300);

  h3 {
    text-align: center;
  }

  img {
    width: 100%;
  }

  p {
    margin-inline: var(--space-200);
  }
`

function ReposGrid({ repos }: { repos: {}[] }) {
  if (!repos.length) return null

  return (
    <ReposGridContainer>
      {repos.map((repo, index) => (
        <Card key={repo.id}>
          <img src={repo.owner.avatar_url} alt="" />
          <h3>
            #{index + 1} - {repo.id}
          </h3>
          <p>Name: {repo.name}</p>
          <p>Description: {repo.description}</p>
        </Card>
      ))}
    </ReposGridContainer>
  )
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
    <Container>
      <PopularWrapper>
        <SelectionNav {...getSelectionNavProps()} />

        <ReposGrid repos={repos} />
      </PopularWrapper>
    </Container>
  )
}

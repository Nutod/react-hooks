import React from 'react'
import { Loading, Note, Text, Card, Image, Grid, Link } from '@geist-ui/react'
import { useDocumentTitle } from '@mantine/hooks'
import Container from './Container'
import { css } from 'linaria'
import { fetchPopularRepos } from '../utils/api'

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Java' | 'Ruby'

const classes = {
  ul: css`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-block-end: 2rem;
  `,
  li: css`
    margin-block-end: 0;
    cursor: pointer;

    &::before {
      content: '';
    }

    &[data-selected='selected'] {
      border-block-end: 2px solid #50e3c2;
    }
  `,
}

function SelectionNav({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: {
  languages: Language[]
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
}) {
  return (
    <ul className={classes.ul}>
      {languages.map(language => (
        <li
          key={language}
          className={classes.li}
          data-selected={
            selectedLanguage === language ? 'selected' : 'unselected'
          }
          onClick={() => setSelectedLanguage(language)}
        >
          {language}
        </li>
      ))}
    </ul>
  )
}

export interface IRepo {
  id: number
  name: string
  owner: {
    login: string
    id: number
    avatar_url: string
    html_url: string
  }
  description: string
  size: number
  score: number
  forks_count: number
  stargazers_count: number
  url: string
  created_at: number
}

function RepoList({ repos }: { repos: IRepo[] }) {
  if (!repos) return null

  return (
    <Grid.Container gap={2} justify="center">
      {repos.map((repo, index) => (
        <Grid xs={24} sm={12} md={8}>
          <Card hoverable>
            <Text h4>
              #{index + 1} - {repo.name}
            </Text>
            <Image src={repo.owner.avatar_url} />
            <Text p>{repo.description}</Text>
            <Link href={repo.url} block>
              Repo Link
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default function Popular() {
  const languages: Language[] = [
    'All',
    'Javascript',
    'CSS',
    'Python',
    'Java',
    'Ruby',
  ]

  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  useDocumentTitle('Github Popular Repos')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

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
        .catch(({ message }) => {
          console.error(message)
          setLoading(false)
          setError(message)
        })
    }
  }, [selectedLanguage])

  const getSelectionNavProps = () => ({
    languages,
    selectedLanguage,
    setSelectedLanguage,
  })

  return (
    <Container>
      <SelectionNav {...getSelectionNavProps()} />

      {loading && <Loading>Loading</Loading>}

      {!loading && error && (
        <Note type="error" label="Error">
          An error occurred while trying to fetch
        </Note>
      )}

      {!loading && !error && <RepoList repos={repos[selectedLanguage]} />}
    </Container>
  )
}

import React from 'react'
import {
  Title,
  Text,
  Container,
  Center,
  Loader,
  Alert,
  Grid,
  Col,
  Image,
  Card,
  CardSection,
} from '@mantine/core'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import { extendedTheme } from '../config/extendedTheme'
import { fetchPopularRepos } from '../utils/api'

const useStyles = createUseStyles(
  theme => ({
    container: {},
    unorderedList: {
      listStyle: 'none',
      display: 'flex',
      gap: theme.spacing.sm,

      '& li': {
        cursor: 'pointer',
      },
    },
    loader: {
      fill: extendedTheme.colors['color-primary'],
    },
  }),
  { theming }
)

type Language = 'All' | 'Javascript' | 'Python' | 'Ruby' | 'Java'

function SelectionNav({
  selected,
  setSelected,
  styles,
  languages,
}: {
  selected: Language
  setSelected: (param: Language) => void
  styles: string
  languages: Language[]
}) {
  return (
    <ul className={styles}>
      {languages.map(language => (
        <li
          key={language}
          onClick={() => setSelected(language)}
          style={{
            borderBottom:
              selected === language
                ? `2px solid ${extendedTheme.colors['color-primary']}`
                : 'none',
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  )
}

function ReposGrid({ repos }: { repos: IRepo[] }) {
  if (!repos) return null

  return (
    <Grid gutter="xl">
      {repos.map((repo, index) => (
        <Col span={4}>
          <Card shadow="md">
            <Title order={5}>
              #{index} - {repo.name}
            </Title>
            <CardSection>
              <Image
                src={repo.owner.avatar_url}
                alt="With default placeholder"
                withPlaceholder
              />
            </CardSection>
            <Text component="a">{repo.owner.html_url}</Text>
          </Card>
        </Col>
      ))}
    </Grid>
  )
}

export interface IRepo {
  id: number
  full_name: string
  name: string
  owner: {
    html_url: string
    avatar_url: string
  }
  forks: number
  open_issues: number
  watchers: number
}

export default function Popular() {
  const styles = useStyles()

  const languages: Language[] = ['All', 'Javascript', 'Python', 'Ruby', 'Java']
  const [selected, setSelected] = React.useState<Language>('All')
  const [repos, setRepos] = React.useState({} as Record<Language, IRepo[]>)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  const getSelectionNavProps = () => ({
    selected,
    setSelected,
    styles: styles['unorderedList'],
    languages,
  })

  React.useEffect(() => {
    if (!repos[selected]) {
      setLoading(true)

      fetchPopularRepos(selected)
        .then(data => {
          setRepos(repos => ({
            ...repos,
            [selected]: data,
          }))
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
          setError(err)
        })
    }
  }, [selected])

  return (
    <Container size="md" className={styles.container}>
      <Center>
        <SelectionNav {...getSelectionNavProps()} />
      </Center>

      {loading ? (
        <Center>
          <Loader className={styles.loader} />
        </Center>
      ) : (
        <>
          {error ? (
            <Center>
              <Alert color="red" title="Something went wrong">
                Application crashed, please contact out support via email
              </Alert>
            </Center>
          ) : (
            <>
              <ReposGrid repos={repos[selected]} />
            </>
          )}
        </>
      )}
    </Container>
  )
}

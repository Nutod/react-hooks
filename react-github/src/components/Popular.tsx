import React from 'react'
import { Title, Text, Container, Center } from '@mantine/core'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import { extendedTheme } from '../config/extendedTheme'
import { CSSProperties } from 'react'

const useStyles = createUseStyles(
  theme => ({
    container: {
      background: 'pink',
    },
    unorderedList: {
      listStyle: 'none',
      display: 'flex',
      gap: theme.spacing.sm,

      '& li': {
        cursor: 'pointer',
      },
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

export default function Popular() {
  const styles = useStyles()

  const languages: Language[] = ['All', 'Javascript', 'Python', 'Ruby', 'Java']
  const [selected, setSelected] = React.useState<Language>('All')

  const getSelectionNavProps = () => ({
    selected,
    setSelected,
    styles: styles['unorderedList'],
    languages,
  })

  return (
    <Container size="md" className={styles.container}>
      <Center>
        <SelectionNav {...getSelectionNavProps()} />
      </Center>
      {/* Language Nav */}
      {/* Data Content */}
      <Title order={1}>Level Heading</Title>
      <Title order={2}>Level Heading</Title>
      <Title order={3}>Level Heading</Title>
      <Title order={4}>Level Heading</Title>
      <Title order={5}>Level Heading</Title>
      <Title order={6}>Level Heading</Title>
      <Text component="p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo natus
        quasi incidunt nemo laudantium dolorum harum aliquam aliquid fugiat
        quia?
      </Text>
    </Container>
  )
}

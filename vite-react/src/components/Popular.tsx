import React from 'react'
import { useDocumentTitle } from '@mantine/hooks'
import Container from './Container'
import { css } from 'linaria'

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Java' | 'Ruby'

const classes = {
  ul: css`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
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

  const getSelectionNavProps = () => ({
    languages,
    selectedLanguage,
    setSelectedLanguage,
  })

  return (
    <Container>
      <SelectionNav {...getSelectionNavProps()} />

      {/* Display the languages */}
    </Container>
  )
}

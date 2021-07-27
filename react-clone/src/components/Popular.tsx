import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'

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
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  const getLanguageNavProps = () => ({
    selectedLanguage,
    setSelectedLanguage,
    languages,
  })

  const getPopularReposProps = () => ({})

  // fetch data for popular repos

  return (
    <PopularWrapper>
      <SelectionNav {...getLanguageNavProps()} />
      {/* Content */}
    </PopularWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'

const PopularWrapper = styled.div`
  ${container}
  margin-block-start: var(--space-400);
`

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: var(--space-200);

  li {
    cursor: pointer;
  }
`

function SelectionNav({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: {
  languages: string[]
  selectedLanguage: string
  setSelectedLanguage: (param: string) => void
}) {
  return (
    <NavigationWrapper>
      {languages.map(language => (
        <li
          onClick={() => setSelectedLanguage(language)}
          style={{
            borderBottom:
              selectedLanguage === language
                ? '3px solid var(--color-primary)'
                : 'none',
          }}
        >
          {language}
        </li>
      ))}
    </NavigationWrapper>
  )
}

export default function Popular() {
  const languages = ['All', 'Javascript', 'Python', 'Ruby', 'Java']
  const [selectedLanguage, setSelectedLanguage] = React.useState('All')

  React.useEffect(() => {
     
  }, [])

  const getSelectionNavProps = () => ({
    languages,
    selectedLanguage,
    setSelectedLanguage,
  })

  return (
    <PopularWrapper>
      <SelectionNav {...getSelectionNavProps()} />
      {/* Content */}
    </PopularWrapper>
  )
}

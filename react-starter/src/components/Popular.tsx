import React from 'react'
import styled from 'styled-components'

type Language = 'All' | 'Javascript' | 'Python' | 'Ruby' | 'CSS' | 'Java'

const LanguagesList = styled.ul`
  background: pink;

  display: flex;
  justify-content: center;
  gap: 1rem;
`

export default function Popular() {
  const languages: Language[] = ['All', 'Javascript', 'Python', 'Ruby', 'CSS', 'Java']

  return (
    <div>
      <LanguagesList>
        {languages.map(language => (
          <li>
            <a>{language}</a>
          </li>
        ))}
      </LanguagesList>
    </div>
  )
}

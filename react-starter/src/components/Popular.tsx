import React from 'react'

type Language = 'All' | 'Javascript' | 'Python' | 'Ruby' | 'CSS' | 'Java'

export default function Popular() {
  const languages: Language[] = ['All', 'Javascript', 'Python', 'Ruby', 'CSS', 'Java']

  return (
    <div>
      <ul>
        {languages.map(language => (
          <li>
            <a>{language}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

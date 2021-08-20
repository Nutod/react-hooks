import React from 'react'
import { fetchPopularRepos } from '../utils/api'
import Loading from './Loading'

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Ruby' | 'Java'

function SelectionNav({
  selectedLanguage,
  setSelectedLanguage,
}: {
  selectedLanguage: Language
  setSelectedLanguage: (param: Language) => void
}) {
  const languages: Language[] = [
    'All',
    'Javascript',
    'CSS',
    'Python',
    'Ruby',
    'Java',
  ]
  return (
    <div className="nav">
      <ul
        style={{
          display: 'flex',
          gap: 'var(--space-300)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'var(--space-100)',
        }}
      >
        {languages.map(language => (
          <li
            style={{
              cursor: 'pointer',
              borderBottom:
                selectedLanguage === language
                  ? `2px solid var(--accents-7)`
                  : 'none',
            }}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>('All')
  const [repos, setRepos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  const SelectionNavProps = React.useMemo(
    () => ({
      selectedLanguage,
      setSelectedLanguage,
    }),
    [selectedLanguage]
  )

  React.useEffect(() => {
    fetchPopularRepos(selectedLanguage).then(data => console.log(data))
  }, [selectedLanguage])

  return (
    <main className="container" style={{ marginBlock: 'var(--space-500)' }}>
      <SelectionNav {...SelectionNavProps} />

      {loading && <Loading />}
      {/* Content */}
    </main>
  )
}

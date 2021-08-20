import React from 'react'

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

  const SelectionNavProps = React.useMemo(
    () => ({
      selectedLanguage,
      setSelectedLanguage,
    }),
    [selectedLanguage]
  )

  return (
    <main className="container" style={{ marginBlock: 'var(--space-500)' }}>
      <SelectionNav {...SelectionNavProps} />
      {/* Content */}
    </main>
  )
}

import { useDocumentTitle } from '@mantine/hooks'
import { css } from 'linaria'
import React from 'react'

const classes = {
  ul: css`
    display: flex;
    gap: var(--size-7);
    justify-content: center;
  `,
  li: css`
    margin: 0;
    cursor: pointer;

    &::before {
      display: none;
    }
  `,
}

type Language = 'All' | 'Javascript' | 'CSS' | 'Python' | 'Java' | 'Ruby'

function SelectionNav({
  selected,
  setSelected,
}: {
  selected: Language
  setSelected: (param: Language) => void
}) {
  const languages: Language[] = [
    'All',
    'Javascript',
    'CSS',
    'Python',
    'Java',
    'Ruby',
  ]

  return (
    <ul className={classes.ul}>
      {languages.map(language => (
        <li
          className={classes.li}
          style={{
            borderBottom:
              selected === language
                ? '2px solid var(--geist-selection)'
                : 'none',
          }}
          onClick={() => setSelected(language)}
        >
          {language}
        </li>
      ))}
    </ul>
  )
}

export default function Popular() {
  useDocumentTitle('Github - Popular Repos')
  const [selected, setSelected] = React.useState<Language>('All')

  const getSelectionNavProps = () => ({
    selected,
    setSelected,
  })

  return (
    <div>
      <SelectionNav {...getSelectionNavProps()} />

      {/* Results */}
    </div>
  )
}

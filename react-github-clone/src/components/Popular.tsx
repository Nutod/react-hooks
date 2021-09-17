import { useDocumentTitle } from '@mantine/hooks'
import { css } from 'linaria'
import React from 'react'
import useFetch from '../hooks/use-fetch'
import { fetchPopularRepos } from '../utils/api'
import { buildPopularRepoURL } from '../utils/build-url'

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

  const { data, error } = useFetch(buildPopularRepoURL(selected))

  console.log(data, error)

  const getSelectionNavProps = () => ({
    selected,
    setSelected,
  })

  return (
    <div>
      <SelectionNav {...getSelectionNavProps()} />

      {error && (
        <div style={{ textAlign: 'center', marginBlockStart: 'var(--size-8)' }}>
          <p className="zi-note error">
            <span className="zi-note-type">ERROR:</span> Data could not be
            fetched
          </p>
        </div>
      )}

      {!data && (
        <div style={{ textAlign: 'center', marginBlockStart: 'var(--size-8)' }}>
          <button className="zi-btn loading">
            <span className="zi-loading-shim">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

import { useDocumentTitle } from '@mantine/hooks'
import { css } from 'linaria'
import React from 'react'
import { fetchPopularRepos } from '../utils/api'

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

  

  // React.useEffect(() => {
  //   fetchPopularRepos(selected)
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err))
  // }, [selected])

  const getSelectionNavProps = () => ({
    selected,
    setSelected,
  })

  return (
    <div>
      <SelectionNav {...getSelectionNavProps()} />
    </div>
  )
}

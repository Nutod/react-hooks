import { useDocumentTitle } from '@mantine/hooks'
import { css } from 'linaria'
import React from 'react'
import useFetch from '../hooks/use-fetch'
import { IRepo } from '../types'
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
  grid: css`
    margin-block-start: var(--size-5);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: var(--size-4);
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
          key={language}
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

function RepoList({ repos }: { repos: IRepo[] }) {
  return (
    <div className={classes.grid}>
      {repos.map(repo => (
        <div className="zi-card" key={repo.id}>
          <h4>{repo.name}</h4>
          <img src={repo.owner.avatar_url} alt="Repo Image" />
          <p>Forks: {repo.forks}</p>
          <p>Size: {repo.size}</p>
          <a href={repo.owner.html_url} target="_blank">
            Link
          </a>
        </div>
      ))}
    </div>
  )
}

export default function Popular() {
  useDocumentTitle('Github - Popular Repos')

  const [selected, setSelected] = React.useState<Language>('All')

  const { data, error } = useFetch(buildPopularRepoURL(selected)) as {
    data: undefined | { items: IRepo[] }
    error: undefined | { message: string }
  }

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

      {!data && !error && (
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

      {data?.items && <RepoList repos={data.items} />}
    </div>
  )
}

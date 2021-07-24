import React from 'react'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput'
import { container } from '../styles/utils/container'
import { battle } from '../utils/api'

const InstructionsWrapper = styled.div`
  margin-block-start: var(--space-500);

  div {
    margin-block-start: var(--space-200);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: var(--space-100);

    & > * {
      padding: var(--space-100);
    }

    svg {
      /* block-size: 5rem; */
      margin-inline: auto;
      margin-block: var(--space-200);
      color: var(--color-primary);
      background-color: var(--gray-100);
      padding: var(--space-100);
    }
  }

  h4 {
    text-align: center;
    margin-bottom: var(--space-300);
  }
`

function Instructions() {
  return (
    <InstructionsWrapper>
      <h2 style={{ textAlign: 'center' }}>Instructions</h2>
      <div>
        <h4>
          Enter two Github Users
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </h4>
        <h4>
          Battle
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </h4>
        <h4>
          See the Winner
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
        </h4>
      </div>
    </InstructionsWrapper>
  )
}

const BattlesWrapper = styled.div`
  ${container};
`

function PlayerInput({
  label,
  onSubmit,
}: {
  label: string
  onSubmit: (param: string) => void
}) {
  const [inputState, { handleInputChange }] = useInput()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // communicate this state to the parent
    onSubmit(inputState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">{label}</label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'var(--space-100)',
          }}
        >
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={inputState}
            autoComplete="off"
          />
          <button disabled={!inputState.trim().length}>Submit</button>
        </div>
      </form>
    </>
  )
}

const PlayerPreviewWrapper = styled.div`
  img {
    block-size: 5rem;
    border-radius: 99999px;
  }

  div {
    background-color: var(--gray-100);
    padding: var(--space-200);
    display: flex;
    justify-content: space-between;
  }

  span {
    display: flex;
    align-items: center;
    gap: var(--space-100);
  }

  svg {
    block-size: 2rem;
    align-self: center;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-1.5px);
    }
  }
`

function PlayerPreview({
  label,
  username,
  onReset,
}: {
  label: string
  username: string
  onReset: () => void
}) {
  return (
    <PlayerPreviewWrapper>
      <p>{label}</p>
      <div>
        <span>
          <img
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`}>{username}</a>
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={onReset}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </PlayerPreviewWrapper>
  )
}

// url state or local state

function BattlesForm() {
  const [playerOne, setPlayerOne] = React.useState<null | string>(null)
  const [playerTwo, setPlayerTwo] = React.useState<null | string>(null)
  const [results, setResults] = React.useState<null | {}>(null)

  if (results) {
    return <pre>{JSON.stringify(results, null, 2)}</pre>
  }

  const onBattle = () => {
    battle([playerOne, playerTwo] as string[])
      .then(results => setResults(results))
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center', marginBlockEnd: 'var(--space-200)' }}>
        Players
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-600)',
        }}
      >
        {playerOne === null ? (
          <PlayerInput
            label="Player One"
            onSubmit={input => setPlayerOne(input)}
          />
        ) : (
          <PlayerPreview
            label="Player One"
            username={playerOne}
            onReset={() => setPlayerOne(null)}
          />
        )}
        {playerTwo === null ? (
          <PlayerInput
            label="Player Two"
            onSubmit={input => setPlayerTwo(input)}
          />
        ) : (
          <PlayerPreview
            label="Player Two"
            username={playerTwo}
            onReset={() => setPlayerTwo(null)}
          />
        )}
        {playerOne !== null && playerTwo !== null ? (
          <div
            style={{
              gridColumn: '1 / -1',
              marginInline: 'auto',
            }}
          >
            <button onClick={onBattle}>Battle</button>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default function Battles() {
  return (
    <BattlesWrapper>
      <Instructions />
      <BattlesForm />
    </BattlesWrapper>
  )
}

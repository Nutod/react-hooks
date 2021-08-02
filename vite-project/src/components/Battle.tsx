import React from 'react'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput'
import { container } from '../styles/utils/container'

const BattleWrapper = styled.div`
  ${container}
`

const InstructionsWrapper = styled.div`
  h3 {
    text-align: center;
    margin-block-end: var(--space-300);
  }
`

const InstructionItem = styled.div`
  text-align: center;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--space-200);

  div {
    background-color: #f8f6f6;
    padding: var(--space-200);
  }

  svg {
    color: var(--color-primary);
  }
`

function Instructions() {
  return (
    <InstructionsWrapper>
      <h3>Instructions</h3>

      <InstructionItem>
        <div>
          <h4>Username</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div>
          <h4>Battle</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <div>
          <h4>Results</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </div>
      </InstructionItem>
    </InstructionsWrapper>
  )
}

function PlayerInput({
  username,
  onSubmit,
}: {
  username: string
  onSubmit: (param: string) => void
}) {
  const [state, { handleInputChange }] = useInput()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSubmit(state)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={username}>{username}</label>
      <div style={{ display: 'flex', gap: '5px' }}>
        <input
          type="text"
          autoComplete="off"
          name={username}
          value={state}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!state.trim().length}>
          Submit
        </button>
      </div>
    </form>
  )
}

function PlayerPreview() {
   
}

export default function Battle() {
  const [playerOne, setPlayerOne] = React.useState<null | string>(null)
  const [playerTwo, setPlayerTwo] = React.useState<null | string>(null)

  return (
    <BattleWrapper>
      <Instructions />

      <div style={{ marginBlockStart: 'var(--space-500)' }}>
        <h3 style={{ textAlign: 'center', marginBlockEnd: 'var(--space-100)' }}>
          Battle
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-400)',
          }}
        >
          {!playerOne ? (
            <PlayerInput
              username="Player One"
              onSubmit={player => setPlayerOne(player)}
            />
          ) : null}
          <PlayerInput
            username="Player Two"
            onSubmit={player => setPlayerTwo(player)}
          />
        </div>
        {playerOne && playerTwo && (
          <div
            style={{
              marginBlockStart: 'var(--space-100)',
              textAlign: 'center',
            }}
          >
            <button>Battle</button>
          </div>
        )}
      </div>
    </BattleWrapper>
  )
}

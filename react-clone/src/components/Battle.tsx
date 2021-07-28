import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput'
import { container } from '../styles/utils/container'

const BattleWrapper = styled.div`
  ${container}

  margin-block-start: var(--space-500);

  h3 {
    text-align: center;
  }
`

const InstructionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: var(--space-200);

  padding-block: var(--space-400);
`

const InstructionItem = styled.div`
  h4 {
    text-align: center;
    margin-block-end: var(--space-200);
  }

  svg {
    color: var(--color-primary);
    box-shadow: var(--elevation-two);
  }
`

function Instructions() {
  return (
    <>
      <h3>Battle Component</h3>
      <InstructionsWrapper>
        <InstructionItem>
          <h4>Github Username</h4>
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
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </InstructionItem>
        <InstructionItem>
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </InstructionItem>
        <InstructionItem>
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </InstructionItem>
      </InstructionsWrapper>
    </>
  )
}

const BattleFormWrapper = styled.div`
  margin-block-start: var(--space-400);

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-200);
  column-gap: var(--space-600);

  h4 {
    text-align: center;
    grid-column: 1 / -1;
  }
`

const Form = styled.form`
  div {
    display: flex;
    gap: var(--space-100);
  }
`

function PlayerInput({
  label,
  onSubmit,
}: {
  label: string
  onSubmit: (param: string) => void
}) {
  const [state, { handleInputChange }] = useInput()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSubmit(state)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="username">{label}</label>
      <div>
        <input
          type="text"
          value={state}
          onChange={handleInputChange}
          required
          autoComplete="off"
          name={label}
        />
        <button type="submit" disabled={!state.trim().length}>
          Submit
        </button>
      </div>
    </Form>
  )
}

const PlayerPreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: var(--elevation-one);
  padding: var(--space-100);

  img {
    block-size: 4rem;
  }

  div {
    display: flex;
    gap: var(--space-100);
  }

  a,
  button {
    align-self: center;
  }
`

function PlayerPreview({
  username,
  onReset,
}: {
  username: string
  onReset: () => void
}) {
  return (
    <PlayerPreviewWrapper>
      <div>
        <img
          src={`https://github.com/${username}.png?size=200`}
          alt={`Avatar for ${username}`}
        />
        <a href={`https://github.com/${username}`}>{username}</a>
      </div>
      <button onClick={onReset}>Reset</button>
    </PlayerPreviewWrapper>
  )
}

function BattleForm() {
  const [playerOne, setPlayerOne] = React.useState<null | string>(null)
  const [playerTwo, setPlayerTwo] = React.useState<null | string>(null)

  return (
    <BattleFormWrapper>
      <h4>Battle</h4>
      {playerOne ? (
        <PlayerPreview
          username={playerOne}
          onReset={() => setPlayerOne(null)}
        />
      ) : (
        <PlayerInput
          label="Player One"
          onSubmit={player => setPlayerOne(player)}
        />
      )}
      {playerTwo ? (
        <PlayerPreview
          username={playerTwo}
          onReset={() => setPlayerTwo(null)}
        />
      ) : (
        <PlayerInput
          label="Player Two"
          onSubmit={player => setPlayerTwo(player)}
        />
      )}
      {playerOne && playerTwo && (
        <div
          style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
          }}
        >
          <Link
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle
          </Link>
        </div>
      )}
    </BattleFormWrapper>
  )
}

export default function Battle() {
  return (
    <BattleWrapper>
      <Instructions />
      <BattleForm />
    </BattleWrapper>
  )
}

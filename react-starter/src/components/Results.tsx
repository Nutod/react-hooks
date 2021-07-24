import React from 'react'
import styled from 'styled-components'
import { IProfile } from '../types/types'
import { battle } from '../utils/api'
import Loading from './Loading'

const ResultsWrapper = styled.div`
  h3 {
    text-align: center;
    padding-block-end: var(--space-300);
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-300);
    text-align: center;
  }

  span {
    background-color: var(--gray-100);
    padding: var(--space-200);
  }

  img {
    block-size: 15rem;
    border-radius: 50%;
    margin-block: var(--space-200);
    margin-inline: auto;
  }
`

interface IPlayer {
  profile: IProfile
  score: number
}

export default function Results() {
  const [winner, setWinner] = React.useState<null | IPlayer>(null)
  const [loser, setLoser] = React.useState<null | IPlayer>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    battle(['nutod', 'nutod'])
      .then(players => {
        setWinner(players[0])
        setLoser(players[1])
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Something went wrong</p>
  }

  if (!winner || !loser) {
    return <p>Results are incomplete</p>
  }

  return (
    <ResultsWrapper>
      <h3>Results</h3>

      <div>
        <span>
          <h4>Winner</h4>
          <img
            src={`${winner.profile.avatar_url}`}
            alt={`Avatar for ${winner.profile.login}`}
          />
          <p>Name: {winner.profile.name}</p>
          <p>Location: {winner.profile.location}</p>
          <p>Public Repos: {winner.profile.public_repos}</p>
          <p>Score: {winner.score}</p>
        </span>
        <span>
          <h4>Loser</h4>
          <img
            src={`${loser.profile.avatar_url}`}
            alt={`Avatar for ${loser.profile.login}`}
          />
          <p>Name: {loser.profile.name}</p>
          <p>Location: {loser.profile.location}</p>
          <p>Public Repos: {loser.profile.public_repos}</p>
          <p>Score: {loser.score}</p>
        </span>
      </div>
    </ResultsWrapper>
  )
}

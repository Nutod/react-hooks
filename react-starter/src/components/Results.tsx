import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
import { IProfile } from '../types/types'
import { battle } from '../utils/api'
import Loading from './Loading'
import Tooltip from './Tooltip'

const ResultsWrapper = styled.div`
  h3 {
    text-align: center;
    padding-block-end: var(--space-300);
  }

  span {
    background-color: var(--gray-100);
    padding: var(--space-200);
  }

  img {
    block-size: 15rem;
    border-radius: 50%;
    margin-block: var(--space-500);
    margin-inline: auto;
  }
`

const ResultsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-300);
  text-align: center;
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
  const location = useLocation()

  const { playerOne, playerTwo } = queryString.parse(location.search) as {
    [id: string]: string
  }

  React.useEffect(() => {
    battle([playerOne, playerTwo])
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

      <ResultsContent>
        <span>
          <h4>Winner</h4>
          <img
            src={`${winner.profile.avatar_url}`}
            alt={`Avatar for ${winner.profile.login}`}
          />
          <Tooltip label="Github Username">
            <p>Name: {winner.profile.name}</p>
          </Tooltip>
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
          <Tooltip label="Github Username">
            <p>Name: {loser.profile.name}</p>
          </Tooltip>
          <p>Location: {loser.profile.location}</p>
          <p>Public Repos: {loser.profile.public_repos}</p>
          <p>Score: {loser.score}</p>
        </span>
      </ResultsContent>

      <div
        style={{
          marginBlockStart: 'var(--space-200)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Check out some alternate requirements here */}
        <button>Reset</button>
      </div>
    </ResultsWrapper>
  )
}

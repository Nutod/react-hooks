import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { battle } from '../utils/api'
import Loading from './Loading'
import Error from './Error'

export interface IPlayer {
  score: number
  profile: {
    name: string
    avatar_url: string
    followers: number
    public_repos: number
    id: number
    created_at: number
  }
}

export default function Result() {
  const { search } = useLocation()
  const [winner, setWinner] = React.useState<null | IPlayer>(null)
  const [loser, setLoser] = React.useState<null | IPlayer>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    const { playerOne, playerTwo } = queryString.parse(search) as {
      [id: string]: string
    }

    console.log(playerOne)
    battle([playerOne, playerTwo])
      .then(players => {
        setLoading(false)
        setWinner(players[0])
        setLoser(players[1])
        console.log(players)
      })
      .catch(err => {
        setLoading(false)
        setError('Error')
      })
  }, [])

  return (
    <main className="container" style={{ marginBlock: 'var(--space-500)' }}>
      <div>
        <h3 className="text-center">Results</h3>

        {loading && <Loading />}
        {error && <Error message="An error occurred" />}
        {winner === null ||
          (loser === null && (
            <div>
              <h4>Could not fetch results</h4>
            </div>
          ))}
        {!loading && !error && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(17rem, 100%), 1fr))',
              gap: 'var(--space-100)',
            }}
          >
            <div className="zi-card">
              <h4 className="text-center">{winner?.profile.name}</h4>
              <img src={winner?.profile.avatar_url} />
              <p>Followers: {winner?.profile.followers}</p>
              <p>Score: {winner?.score}</p>
            </div>
            <div className="zi-card">
              <h4 className="text-center">{loser?.profile.name}</h4>
              <img src={loser?.profile.avatar_url} />
              <p>Followers: {loser?.profile.followers}</p>
              <p>Score: {loser?.score}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

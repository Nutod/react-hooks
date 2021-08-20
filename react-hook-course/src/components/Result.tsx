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
              <h4 className="text-center">Users</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="zi-card">
              <h4 className="text-center">Results</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

import React from 'react'
import { IProfile } from '../types/types'
import { battle } from '../utils/api'

interface IPlayer {
  profile: IProfile
  score: number
}

export default function Results() {
  const [winner, setWinner] = React.useState<null | IPlayer>(null)
  const [results, setResults] = React.useState<null | {}>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    battle(['nutod', 'nutod'])
      .then(results => {
        setResults(results)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      Results component
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  )
}

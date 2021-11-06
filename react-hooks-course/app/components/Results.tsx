import React from 'react'
import { battle } from '../utils/api'
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser,
} from 'react-icons/fa'
import Card from './Card'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Tooltip from './Tooltip'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

type ProfileListProps = {
  profile: IProfile
}

interface IProfile {
  [key: string]: string
}

function ProfileList({ profile }: ProfileListProps) {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115)" size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <Tooltip text="User's location">
            <FaCompass color="rgb(144, 115, 255)" size={22} />
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's company">
            <FaBriefcase color="#795548" size={22} />
            {profile.company}
          </Tooltip>
        </li>
      )}
      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  )
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
}

type ResultsProps = {
  location: {
    search: string
  }
}

interface IPlayer {
  score: number
  profile: IProfile
}

export default function Results({ location }: ResultsProps) {
  const [winner, setWinner] = React.useState<null | IPlayer>(null)
  const [loser, setLoser] = React.useState<null | IPlayer>(null)
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const { playerOne, playerTwo } = queryString.parse(location.search) as {
      [key: string]: string
    }

    battle([playerOne, playerTwo])
      .then(players => {
        setWinner(players[0])
        setLoser(players[1])
        setError(null)
        setLoading(false)
      })
      .catch(({ message }) => {
        setError(message)
        setLoading(false)
      })
  }, [])

  if (loading === true || !winner || !loser) {
    return <Loading text="Battling" />
  }

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  return (
    <React.Fragment>
      <div className="grid space-around container-sm">
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          name={loser.profile.login}
          href={loser.profile.html_url}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <Link to="/battle" className="btn dark-btn btn-space">
        Reset
      </Link>
    </React.Fragment>
  )
}

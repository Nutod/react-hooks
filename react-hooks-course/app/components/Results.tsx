import React, { Dispatch, SetStateAction } from 'react'
import { battle, Player, Profile } from '../utils/api'
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

function ProfileList({ profile }: { profile: Profile }) {
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

interface ResultsState {
  winner: null | {}
  loser: null | {}
  loading: boolean
  error: null | string
}

type InitialResults = {
  type: 'init'
}

type ResultsData = {
  type: 'data'
  payload: Player[]
}

type ResultsError = {
  type: 'error'
  message: string
}

type ActionTypes = InitialResults | ResultsData | ResultsError

function ResultsReducer(state: ResultsState, action: ActionTypes) {
  switch (action.type) {
    case 'init':
      return { ...state, winner: null, loser: null, loading: true, error: null }
    case 'data':
      return {
        ...state,
        winner: action.payload[0],
        loser: action.payload[1],
        loading: false,
        error: null,
      }
    case 'error':
      return {
        ...state,
        winner: null,
        loser: null,
        loading: false,
        error: action.message,
      }
    default:
      throw new Error('This should not be happening')
  }
}

// Module Context
const setInitialResults = (dispatch: Dispatch<ActionTypes>) =>
  dispatch({ type: 'init' })
const setResultsData = (dispatch: Dispatch<ActionTypes>, payload: Player[]) =>
  dispatch({ type: 'data', payload })
const setResultsError = (dispatch: Dispatch<ActionTypes>, message: string) =>
  dispatch({ type: 'error', message })

export default function Results({
  location,
}: {
  location: { search: string }
}) {
  const [{ winner, loser, error, loading }, dispatch] = React.useReducer(
    ResultsReducer,
    {
      winner: null,
      loser: null,
      loading: true,
      error: null,
    }
  )

  const { playerOne, playerTwo } = queryString.parse(location.search)

  React.useEffect(() => {
    battle([playerOne, playerTwo] as [string, string])
      .then(players => {
        setResultsData(dispatch, players)
      })
      .catch(({ message }) => {
        setResultsError(dispatch, message)
      })
  }, [])

  if (loading === true) {
    return <Loading text="Battling" />
  }

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  if (!winner || !loser) {
    return null
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

import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'
import { IPost } from './Post'

type StateType = {
  posts: null | IPost[]
  error: null | string
  loading: boolean
}

type ResetType = {
  type: 'reset'
}

type ResultType = {
  type: 'result'
  posts: IPost[]
}

type ErrorType = {
  type: 'error'
  message: string
}

type ActionType = ResetType | ResultType | ErrorType
export default function Posts({ type }: { type: 'top' | 'new' }) {
  const [{ posts, error, loading }, dispatch] = React.useReducer(
    (state: StateType, action: ActionType): StateType => {
      switch (action.type) {
        case 'reset':
          return { ...state, posts: null, error: null, loading: true }

        case 'result':
          return { ...state, posts: action.posts, loading: false, error: null }
        case 'error':
          return { ...state, error: action.message }
        default:
          return state
      }
    },
    {
      posts: null,
      error: null,
      loading: true,
    }
  )

  React.useEffect(() => {
    handleFetch()
  }, [type])

  const handleFetch = () => {
    dispatch({ type: 'reset' })

    fetchMainPosts(type)
      .then(posts => {
        dispatch({ type: 'result', posts })
      })
      .catch(({ message }) => {
        dispatch({ type: 'error', message })
      })
  }

  if (loading === true || !posts) {
    return <Loading />
  }

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  return <PostsList posts={posts} />
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new']),
}

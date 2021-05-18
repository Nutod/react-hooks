import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'
import { Post } from './Post'

type StateType = {
  posts: null | Post[]
  error: null | string
  loading: boolean
}

type ResetAction = {
  type: 'reset'
}

type SuccessAction = {
  type: 'success'
  posts: Post[]
}

type FailureAction = {
  type: 'failure'
  message: string
}

type ActionTypes = ResetAction | SuccessAction | FailureAction

export default function Posts({ type }: { type: string }) {
  const [{ posts, error, loading }, dispatch] = React.useReducer(
    (state: StateType, action: ActionTypes): StateType => {
      switch (action.type) {
        case 'reset':
          return { ...state, posts: null, error: null, loading: true }
        case 'success':
          return { ...state, posts: action.posts, loading: false, error: null }
        case 'failure':
          return { ...state, error: action.message, loading: false }
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
      .then(posts => dispatch({ type: 'success', posts }))
      .catch(({ message }) => dispatch({ type: 'failure', message }))
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

import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'
import { Post } from './Post'

type PostType = 'top' | 'new'

type StateType = {
  posts: null | Post[]
  error: null | string
  loading: boolean
}

type ResetAction = {
  type: 'reset'
}

type DataAction = {
  type: 'data'
  posts: Post[]
}

type ErrorAction = {
  type: 'error'
  message: string
}

type ActionType = ResetAction | DataAction | ErrorAction

export default function Posts({ type }: { type: PostType }) {
  const [{ posts, error, loading }, dispatch] = React.useReducer(
    (state: StateType, action: ActionType): StateType => {
      switch (action.type) {
        case 'reset':
          return { ...state, posts: null, error: null, loading: true }
        case 'data':
          return { ...state, posts: action.posts, loading: false, error: null }
        case 'error':
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
      .then(posts => dispatch({ type: 'data', posts }))
      .catch(({ message }) => dispatch({ type: 'error', message }))
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

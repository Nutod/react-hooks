import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts, Post } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'

interface PostsState {
  posts: Post[] | null
  error: string | null
  loading: boolean
}

type ActionTypes =
  | { type: 'init' }
  | { type: 'success'; posts: any }
  | { type: 'error'; message: string }
export default function Posts({ type }: { type: string }) {
  const [{ posts, error, loading }, dispatch] = React.useReducer(
    (state: PostsState, action: ActionTypes) => {
      switch (action.type) {
        case 'init':
          return { ...state, posts: null, error: null, loading: true }
        case 'success':
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
    dispatch({ type: 'init' })
    fetchMainPosts(type)
      .then(posts => dispatch({ type: 'success', posts }))
      .catch(({ message }) => dispatch({ type: 'error', message }))
  }

  if (loading === true) {
    return <Loading />
  }

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  if (!posts) {
    return <p className="center-text"></p>
  }

  return <PostsList posts={posts} />
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new']),
}

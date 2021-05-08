import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList, { IPost } from './PostsList'

type StateType = {
  posts: null | IPost[]
  error: null | string
  loading: boolean
}

type PostType = 'top' | 'new'

type InitialType = {
  type: 'init'
}

type SuccessType = {
  type: 'success'
  posts: IPost[]
}

type ErrorType = {
  type: 'error'
  message: string
}

type ActionType = InitialType | SuccessType | ErrorType
export default function Posts({ type }: { type: PostType }) {
  const [{ posts, error, loading }, dispatch] = React.useReducer(
    (state: StateType, action: ActionType): StateType => {
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

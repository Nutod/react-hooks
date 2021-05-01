import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts, Post } from '../utils/api'
import Loading from './Loading'
import { formatDate } from '../utils/helpers'
import PostsList from './PostsList'

export default function User({ location }: { location: { search: string } }) {
  const [user, setUser] = React.useState<{
    id: string
    created: number
    karma: number
    about: string
  } | null>(null)
  const [loadingUser, setLoadingUser] = React.useState(true)
  const [posts, setPosts] = React.useState<Post[] | null>(null)
  const [loadingPosts, setLoadingPosts] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const { id } = queryString.parse(location.search) as { id: string }

    fetchUser(id)
      .then(user => {
        setUser(user)
        setLoadingUser(false)

        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then(posts => {
        setPosts(posts)
        setLoadingPosts(false)
        setError(null)
      })
      .catch(({ message }) => {
        setError(message)
        setLoadingUser(false)
        setLoadingPosts(false)
      })
  }, [])

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  return (
    <React.Fragment>
      {loadingUser === true || !user ? (
        <Loading text="Fetching User" />
      ) : (
        <React.Fragment>
          <h1 className="header">{user.id}</h1>
          <div className="meta-info-light">
            <span>
              joined <b>{formatDate(user.created)}</b>
            </span>
            <span>
              has <b>{user.karma.toLocaleString()}</b> karma
            </span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: user.about }} />
        </React.Fragment>
      )}
      {loadingPosts === true || !posts ? (
        loadingUser === false && <Loading text="Fetching posts" />
      ) : (
        <React.Fragment>
          <h2>Posts</h2>
          <PostsList posts={posts} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

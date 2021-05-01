import React from 'react'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Loading from './Loading'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'
import Comment from './Comment'

export default function Post({ location }) {
  const [post, setPost] = React.useState(null)
  const [loadingPost, setLoadingPost] = React.useState(true)
  const [comments, setComments] = React.useState(null)
  const [loadingComments, setLoadingComments] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const { id } = queryString.parse(location.search)

    fetchItem(id)
      .then(post => {
        setPost(post)
        setLoadingPost(false)

        return fetchComments(post.kids || [])
      })
      .then(comments => {
        setComments(comments)
        setLoadingComments(false)
      })
      .catch(({ message }) => {
        setError(message)
        setLoadingPost(false)
        setLoadingComments(false)
      })
  }, [])

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  return (
    <React.Fragment>
      {loadingPost === true ? (
        <Loading text="Fetching post" />
      ) : (
        <React.Fragment>
          <h1 className="header">
            <Title url={post.url} title={post.title} id={post.id} />
          </h1>
          <PostMetaInfo
            by={post.by}
            time={post.time}
            id={post.id}
            descendants={post.descendants}
          />
          <p dangerouslySetInnerHTML={{ __html: post.text }} />
        </React.Fragment>
      )}
      {loadingComments === true ? (
        loadingPost === false && <Loading text="Fetching comments" />
      ) : (
        <React.Fragment>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
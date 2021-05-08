import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'

export interface IPost {
  id: number
  url: string
  title: string
  by: string
  time: number
  descendants: number
  text: string
  dead: boolean
  deleted: boolean
  type: string
}
export default function PostsList({ posts }: { posts: IPost[] }) {
  if (posts.length === 0) {
    return <p className="center-text">This user hasn't posted yet</p>
  }

  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id} className="post">
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              by={post.by}
              time={post.time}
              id={post.id}
              descendants={post.descendants}
            />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}

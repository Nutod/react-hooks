import React from 'react'
import PostMetaInfo from './PostMetaInfo'

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

export default function Comment({ comment }: { comment: IPost }) {
  return (
    <div className="comment">
      <PostMetaInfo
        comment={true}
        by={comment.by}
        time={comment.time}
        id={comment.id}
      />
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  )
}

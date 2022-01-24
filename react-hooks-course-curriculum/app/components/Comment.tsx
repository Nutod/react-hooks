import React from 'react'
import PostMetaInfo from './PostMetaInfo'

type CommentProps = {
  comment: {
    by: string
    time: number
    id: number
    text: string
  }
}

export default function Comment({ comment }: CommentProps) {
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

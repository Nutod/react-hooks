import React from 'react'
import PostMetaInfo from './PostMetaInfo'
import { Comment as CommentInterface } from '../utils/api'

export default function Comment({ comment }: { comment: CommentInterface }) {
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

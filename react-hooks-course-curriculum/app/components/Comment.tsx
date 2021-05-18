import React from 'react'
import PostMetaInfo from './PostMetaInfo'

export interface Comment {
  by: string
  time: number
  id: number
  text: string
}

export default function Comment ({ comment }: {comment: Comment}) {
  return (
    <div className='comment'>
      <PostMetaInfo
        comment={true}
        by={comment.by}
        time={comment.time}
        id={comment.id}
      />
      <p dangerouslySetInnerHTML={{__html: comment.text}} />
    </div>
  )
}
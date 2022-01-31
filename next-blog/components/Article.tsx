import Link from 'next/link'
import React from 'react'

type ArticleProps = {
  content: string
  data: {
    title: string
    excerpt: string
    tags: string[]
    date: string
    slug: string
  }
}

export default function Article({ content, data }: ArticleProps) {
  return (
    <div>
      <Link href={`/articles/${data.slug}`}>
        <h3 style={{ cursor: 'pointer' }}>{data.title}</h3>
      </Link>
      <p>{data.excerpt} </p>
      <div style={{ marginBlockEnd: '2rem' }}>
        {data.tags.map((tag) => (
          <span
            style={{
              marginInline: '3px',
              border: '1px solid #aaa',
              paddingInline: '8px',
              paddingBlock: '2px',
              borderRadius: '20px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

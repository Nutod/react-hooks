import React from 'react'

export default function Container({ children }) {
  return (
    <div
      style={{ maxWidth: '50rem', marginInline: 'auto', marginBlock: '2rem' }}
    >
      {children}
    </div>
  )
}

import React from 'react'

export default function Error({ message }: { message: string }) {
  return (
    <div
      style={{
        marginBlock: 'var(--space-300)',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <p className="zi-note error">
        <span className="zi-note-type">ERROR:</span>
        {message}
      </p>
    </div>
  )
}

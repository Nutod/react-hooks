import React from 'react'

export default function Loading() {
  return (
    <div
      style={{
        marginBlock: 'var(--space-300)',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <button className="zi-btn loading">
        <span className="zi-loading-shim">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>
    </div>
  )
}

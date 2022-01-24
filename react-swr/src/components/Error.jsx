import React from 'react'

export default function Error({ text = 'Data was not fetched' }) {
  return (
    <p className="zi-note error">
      <span className="zi-note-type">ERROR:</span>
      {text}
    </p>
  )
}

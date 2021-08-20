import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ul style={{ display: 'flex', gap: 'var(--space-400)' }}>
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="battle">Battle</Link>
        </li>
      </ul>
      <div>
        <button className="zi-btn mini shadow">Light</button>
      </div>
    </nav>
  )
}

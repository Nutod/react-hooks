import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '2rem' }}>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

import React from 'react'
import { Sun, Moon } from '@geist-ui/react-icons'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>Popular</li>
        <li>Battle</li>
      </ul>
      <div>
        <Sun style={{ cursor: 'pointer' }} />
        <Moon style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  )
}

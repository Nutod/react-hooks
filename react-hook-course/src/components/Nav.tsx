import React from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../context/theme'

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext()

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
        <button onClick={toggleTheme} className="zi-btn primary mini shadow">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  )
}

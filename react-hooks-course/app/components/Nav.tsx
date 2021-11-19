import React from 'react'
import { useThemeContext } from '../contexts/theme'
import { NavLink } from 'react-router-dom'
import { useStore } from '../store'

const activeStyle = {
  color: 'rgb(187, 46, 31)',
} as React.CSSProperties

export default function Nav() {
  const { theme, toggleTheme } = useStore()

  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink to="/" exact activeStyle={activeStyle} className="nav-link">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/battle" activeStyle={activeStyle} className="nav-link">
            Battle
          </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className="btn-clear"
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </nav>
  )
}

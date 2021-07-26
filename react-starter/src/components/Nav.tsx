import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useThemeContext } from '../context/theme'

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-300);

  div {
    & > :first-child {
      margin-right: var(--space-200);
    }
  }
`

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <NavWrapper>
      <div>
        <Link to="/">Popular</Link>
        <Link to="battles">Battle</Link>
      </div>
      {theme === 'light' ? (
        <p onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          🔆
        </p>
      ) : (
        <p onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          🔦
        </p>
      )}
    </NavWrapper>
  )
}
// 🔆🔦

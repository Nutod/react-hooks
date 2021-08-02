import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useThemeContext } from '../context/theme'

const NavWrapper = styled.nav`
  padding-block: var(--space-100);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: var(--space-100);
  }
`

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="/battle">Battle</Link>
        </li>
      </ul>
      <div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} mode
        </button>
      </div>
    </NavWrapper>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    gap: var(--space-100);
  }
`

export default function Nav() {
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
      <div>🔦</div>
    </NavWrapper>
  )
}

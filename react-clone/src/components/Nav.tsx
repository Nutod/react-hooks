import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>Battle</li>
      </ul>
      {/* Links */}
      {/* Toggle */}
    </nav>
  )
}

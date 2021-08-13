import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    display: flex;
    gap: var(--space-100);
  }

  form {
    display: flex;
    gap: var(--space-100);
  }
`

export default function Nav() {
  return (
    <NavWrapper>
      <div className="links">
        <Link to="/">Popular</Link>
        <Link to="battle">Battle</Link>
      </div>
      <form>
        <div>
          <input type="radio" id="light" name="theme" checked />
          <label htmlFor="light">Light</label>
        </div>
        <div>
          <input type="radio" id="dark" name="theme" />
          <label htmlFor="dark">Dark</label>
        </div>
      </form>
    </NavWrapper>
  )
}

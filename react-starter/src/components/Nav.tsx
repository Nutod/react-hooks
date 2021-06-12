import React from 'react'
import styled from 'styled-components'

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
  return (
    <NavWrapper>
      <div>
        <a href="">Popular</a>
        <a href="">Battle</a>
      </div>
      <a>🔆</a>
    </NavWrapper>
  )
}
// 🔆🔦

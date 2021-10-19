import React from 'react'
import { styled } from 'linaria/react'
import Logo from './Logo'
import { Button } from '@geist-ui/react'

// the firestore information will be here

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

export default function Nav() {
  return (
    <NavWrapper>
      <Logo />
      <Button type="success-light">Sign In with Google</Button>
    </NavWrapper>
  )
}

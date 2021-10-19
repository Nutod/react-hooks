import React from 'react'
import { styled } from 'linaria/react'
import Logo from './Logo'
import { Button } from '@geist-ui/react'

// nav with a logo
// sign in with google button

const NavWrapper = styled.nav`
  display: flex;
`

export default function Nav() {
  return (
    <NavWrapper>
      <Logo />
      <Button type="success-light">Sign In with Google</Button>
    </NavWrapper>
  )
}

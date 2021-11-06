import React from 'react'
import { styled } from 'linaria/react'
import Logo from './Logo'
import { Button } from '@geist-ui/react'
import { useUser } from 'reactfire'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

export default function Nav() {
  const { status, data } = useUser()

  // handle the states you need to handle from here

  return (
    <NavWrapper>
      <Logo />
      <Button type="success-light">Sign In with Google</Button>
    </NavWrapper>
  )
}

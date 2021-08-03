import React, { ReactNode } from 'react'
import { styled } from '../styles/stitches.config'

const ButtonWrapper = styled('button', {
  color: 'white',
  background: '$color-primary',
  padding: '10px 15px',
  fontFamily: '$display',
  border: '0',

  '& :hover': {
    background: '$color-primary-shade',
    boxShadow: '$shadow-md',
    cursor: 'pointer',
  },
})

export default function Button({ children }: { children: ReactNode }) {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

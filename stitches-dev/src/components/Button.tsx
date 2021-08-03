import React, { ReactNode } from 'react'
import { styled } from '../styles/stitches.config'

const ButtonWrapper = styled('button', {})

export default function Button({ children }: { children: ReactNode }) {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

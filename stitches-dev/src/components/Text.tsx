import React, { ReactNode } from 'react'
import { styled } from '../styles/stitches.config'

const TextWrapper = styled('div', {
  variants: {
    size: {},
  },
})

export default function Text({ children }: { children: ReactNode }) {
  return <TextWrapper>{children}</TextWrapper>
}

import React, { ReactNode } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  box-shadow: var(--elevation-two);
  border-radius: 1rem;

  & > * + * {
    margin-block-start: var(--space-200);
  }
`

export default function Card({ children }: { children: ReactNode }) {
  return <CardWrapper className="surface-3">{children}</CardWrapper>
}

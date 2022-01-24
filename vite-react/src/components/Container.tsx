import React, { ReactNode } from 'react'
import { styled } from 'linaria/react'

const ContainerWrapper = styled.div`
  max-width: 60rem;
  margin-inline: auto;
`

export default function Container({ children }: { children: ReactNode }) {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

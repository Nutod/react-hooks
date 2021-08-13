import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'

const ContainerWrapper = styled.div`
  ${container}
`

export default function Container({ children }: { children: ReactNode }) {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

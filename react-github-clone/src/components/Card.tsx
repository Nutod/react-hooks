import React, { ReactNode } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div``

export default function Card({ children }: { children: ReactNode }) {
  return <CardWrapper className="surface-3">{children}</CardWrapper>
}

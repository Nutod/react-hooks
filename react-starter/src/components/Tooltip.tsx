import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useToggle } from '../hooks/useToggle'

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 var(--space-800);
`

const LabelText = styled.p`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--gray-800);
  padding: 2px 10px;
  color: #fff;
  border-radius: 4px;
`

export default function Tooltip({
  label = 'Tooltip',
  children,
}: {
  label: string
  children: ReactNode
}) {
  const [hovering, { over, out }] = useToggle()

  return (
    <TooltipWrapper onMouseOver={over} onMouseOut={out}>
      {hovering && <LabelText>{label}</LabelText>}
      {children}
    </TooltipWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const BattleWrapper = styled.div`
  margin-block: var(--space-500);
`

function Instructions() {
  return (
    <>
      <h3>Instructions</h3>
    </>
  )
}

export default function Battle() {
  return (
    <Container>
      <BattleWrapper>
        <Instructions />
      </BattleWrapper>
    </Container>
  )
}

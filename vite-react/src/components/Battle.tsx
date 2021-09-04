import React from 'react'
import { Grid, Text, Card } from '@geist-ui/react'
import { Users, Info, CloudLightning } from '@geist-ui/react-icons'
import Container from './Container'

function Instructions() {
  return (
    <>
      <Text h3 style={{ textAlign: 'center' }}>
        Instructions
      </Text>
      {/* Icons and all here */}
      <Grid.Container
        gap={2}
        justify="center"
        style={{ marginBlockStart: '1rem' }}
      >
        <Grid xs={24} sm={12} md={8}>
          <Card style={{ width: '100%', textAlign: 'center' }}>
            <Text h5>Users</Text>
            <Users size={72} />
          </Card>
        </Grid>
        <Grid xs={24} sm={12} md={8}>
          <Card style={{ width: '100%', textAlign: 'center' }}>
            <Text h5>Battle</Text>
            <CloudLightning size={72} />
          </Card>
        </Grid>
        <Grid xs={24} sm={12} md={8}>
          <Card style={{ width: '100%', textAlign: 'center' }}>
            <Text h5>Results</Text>
            <Info size={72} />
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default function Battle() {
  return (
    <Container>
      {/* Instructions */}
      <Instructions />
      {/* Battle Form */}
    </Container>
  )
}

import React from 'react'
import { css } from 'linaria'
import { Grid, Text, Card, Input, Button, Avatar, Link } from '@geist-ui/react'
import { Users, Info, CloudLightning, Github } from '@geist-ui/react-icons'
import Container from './Container'
import { useInput } from '../hooks/useInput'

const classes = {
  battlesWrapper: css`
    margin-block-start: 3rem;
  `,
}

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

function PlayerForm({
  label,
  onSubmit,
}: {
  label: string
  onSubmit: (param: string) => void
}) {
  const [username, { handleInputChange }] = useInput()

  const handleFormSubmit = () => {
    console.log(username)

    // what do we do when we get this value? Pass control to some other parts of the application
    onSubmit(username)
  }

  return (
    <Card style={{ width: '100%' }}>
      <Text h4>{label}</Text>
      <div
        style={{
          display: 'flex',
          gap: '.75rem',
        }}
      >
        <Input
          icon={<Github />}
          placeholder="GitHub Username"
          clearable
          scale={1}
          width="100%"
          value={username}
          onChange={handleInputChange}
        />
        <Button
          disabled={!username.trim().length}
          auto
          scale={0.83}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </div>
    </Card>
  )
}

function PlayerPreview({
  username,
  label,
  onReset,
}: {
  username: string
  label: string
  onReset: () => void
}) {
  return (
    <Card style={{ width: '100%' }}>
      <Text h4>{label}</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <Avatar text="Nutod" scale={2} />
          <Link
            href={`https://github.com/${username}`}
            target="_blank"
            block
            icon
          >
            {username}
          </Link>
        </div>
        <Button auto onClick={onReset}>
          Reset
        </Button>
      </div>
    </Card>
  )
}

function BattlesForm() {
  const [playerOne, setPlayerOne] = React.useState<null | string>(null)
  const [playerTwo, setPlayerTwo] = React.useState<null | string>(null)

  return (
    <div className={classes.battlesWrapper}>
      <Text h3 style={{ textAlign: 'center' }}>
        Battle
      </Text>
      <Grid.Container
        gap={2}
        justify="center"
        style={{ marginBlockStart: '1rem' }}
      >
        <Grid xs={24} sm={12}>
          {!playerOne ? (
            <PlayerForm
              label="Player One"
              onSubmit={player => setPlayerOne(player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => setPlayerOne(null)}
            />
          )}
        </Grid>
        <Grid xs={24} sm={12}>
          {!playerTwo ? (
            <PlayerForm
              label="Player Two"
              onSubmit={player => setPlayerTwo(player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => setPlayerTwo(null)}
            />
          )}
        </Grid>
      </Grid.Container>
      {playerOne && playerTwo && (
        <div style={{ marginBlockStart: '1rem', textAlign: 'center' }}>
          <Button>Battle</Button>
        </div>
      )}
    </div>
  )
}

export default function Battle() {
  return (
    <Container>
      <Instructions />
      <BattlesForm />
    </Container>
  )
}

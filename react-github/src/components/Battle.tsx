import React from 'react'
import { createUseStyles } from 'react-jss'
import {
  Button,
  Center,
  Col,
  Container,
  Grid,
  TextInput,
  theming,
  Title,
} from '@mantine/core'
import { extendedTheme } from '../config/extendedTheme'
import { useForm } from '@mantine/hooks'

const useStyles = createUseStyles(
  theme => ({
    container: {
      '& button': {
        background: extendedTheme.colors['color-primary'],
      },
    },
    card: {
      background: extendedTheme.colors['color-primary-glare'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing.xl,

      '& svg': {
        color: extendedTheme.colors['color-secondary'],
      },
    },
    form: {},
    button: {
      alignSelf: 'flex-end',
    },
    formContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: theme.spacing.xl,
      marginBlockStart: theme.spacing.md,
    },
    battleButtonContainer: {
      textAlign: 'center',
      marginBlock: theme.spacing.md,
    },
    buttonStyles: {
      background: extendedTheme.colors['color-primary'],
      textShadow: 'none',

      '&:hover': {
        background: extendedTheme.colors['color-secondary'],
        boxShadow: theme.shadows.md,
      },
    },
  }),
  { theming }
)

function Instructions() {
  const styles = useStyles()

  return (
    <>
      <Center style={{ marginBlockEnd: `${extendedTheme.space[200]}` }}>
        <Title order={3}>Instructions</Title>
      </Center>
      <Center>
        <Grid style={{ width: '100%' }}>
          <Col span={4} className={styles.card}>
            <Title order={4}>Users</Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </Col>
          <Col span={4} className={styles.card}>
            <Title order={4}>Battle</Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </Col>
          <Col span={4} className={styles.card}>
            <Title order={4}>Results</Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Col>
        </Grid>
      </Center>
    </>
  )
}

// Probably not using this form hook
function PlayerInput({ label }: { label: string }) {
  const styles = useStyles()
  const form = useForm({
    initialValues: {
      username: '',
    },
    validationRules: {
      username: value => value.trim().length > 0,
    },
  })

  console.log(form)

  return (
    <form className={styles.form}>
      <TextInput
        placeholder="Enter a Github Username"
        required
        autoComplete="off"
        value={form.values.username}
        onChange={e => form.setFieldValue('username', e.currentTarget.value)}
        label={label}
      />
      <Button
        type="submit"
        className={`${styles.button} ${styles.buttonStyles}`}
      >
        Submit
      </Button>
    </form>
  )
}

function BattleForm() {
  const styles = useStyles()

  return (
    <>
      <Center>
        <Title
          order={4}
          style={{ marginBlockStart: `${extendedTheme.space[500]}` }}
        >
          Battle
        </Title>
      </Center>
      <div className={styles.formContainer}>
        <PlayerInput label="Player One" />
        <PlayerInput label="Player Two" />
      </div>
      <div className={styles.battleButtonContainer}>
        <Button className={styles.buttonStyles}>Battle</Button>
      </div>
    </>
  )
}

export default function Battle() {
  return (
    <Container>
      <Instructions />
      <BattleForm />
    </Container>
  )
}

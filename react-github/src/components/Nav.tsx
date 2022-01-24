import React from 'react'
import { createUseStyles } from 'react-jss'
import { Anchor, theming } from '@mantine/core'
import { Link } from 'react-router-dom'
import { extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingInline: extendedTheme.space[600],
      marginBlockStart: theme.spacing.md,

      '& ul': {
        listStyle: 'none',
        display: 'flex',
        gap: theme.spacing.lg,
        padding: 0,
      },

      '& a': {
        color: theme.black,

        '&:hover': {
          borderBottom: `2px solid ${extendedTheme.colors['color-primary']}`,
          textDecoration: 'none',
        },
      },

      '& svg': {
        blockSize: '1.3rem',
        color: extendedTheme.colors['color-primary'],
        cursor: 'pointer',
      },
    },
  }),
  { theming }
)

export default function Nav() {
  const styles = useStyles()

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Anchor component={Link} to="/">
            Popular
          </Anchor>
        </li>
        <li>
          <Anchor component={Link} to="battle">
            Battle
          </Anchor>
        </li>
      </ul>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </nav>
  )
}

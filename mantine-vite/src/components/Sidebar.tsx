import React from 'react'
import { theming } from '@mantine/core'
import { createUseStyles } from 'react-jss'
import { theme as extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    root: {
      background: 'bisque',
      display: 'flex',
      padding: theme.spacing.xs,
    },
    icon: {
      blockSize: '2rem',
      color: extendedTheme.colors['color-primary'],
    },
  }),
  { theming }
)

export default function Sidebar() {
  const styles = useStyles()

  return (
    <aside className={styles.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </aside>
  )
}

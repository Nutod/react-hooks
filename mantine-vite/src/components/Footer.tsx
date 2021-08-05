import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    container: {
      background: extendedTheme.colors['color-secondary'],
      padding: theme.spacing.xl,
      color: theme.white,

      '& ul': {
        listStyle: 'none',
        display: 'flex',
        gap: theme.spacing.md,
        flexWrap: 'wrap',
      },
    },
  }),
  { theming }
)

export default function Footer() {
  const styles = useStyles()
  return (
    <footer className={styles.container}>
      <ul>
        <li>Find your Dream Home</li>
        <li>Request Proposal</li>
        <li>Download home Planner</li>
        <li>Contact Us</li>
        <li>Sumit your Proposal</li>
        <li>Come work with us!</li>
      </ul>
    </footer>
  )
}

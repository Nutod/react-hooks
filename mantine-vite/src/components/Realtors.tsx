import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    wrapper: {
      background: extendedTheme.colors['color-secondary'],
      color: theme.white,
    },
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
    },
  }),
  { theming }
)

export default function Realtors() {
  const styles = useStyles()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}></div>
    </div>
  )
}

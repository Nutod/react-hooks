import React from 'react'
import { createUseStyles } from 'react-jss'
import { Text, theming, Title } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    wrapper: {
      background: extendedTheme.colors['color-secondary'],
      padding: theme.spacing.xl,

      '& h3': {
        color: extendedTheme.colors['color-primary'],
        textAlign: 'center',
        marginBlockEnd: theme.spacing.md,
      },

      '& p': {
        color: theme.white,
      },
    },
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
      color: theme.white,
    },
  }),
  { theming }
)

export default function Realtors() {
  const styles = useStyles()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title order={3}>Realtors</Title>
        <Text component="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius non
          impedit repudiandae ab quasi veniam at autem hic nostrum perferendis.
        </Text>
      </div>
    </div>
  )
}

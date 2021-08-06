import React from 'react'
import { createUseStyles } from 'react-jss'
import { Text, theming, Title } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'
import RealtorOne from '../assets/realtor-1.jpeg'
import RealtorTwo from '../assets/realtor-2.jpeg'
import RealtorThree from '../assets/realtor-3.jpeg'

const useStyles = createUseStyles(
  theme => ({
    wrapper: {
      background: extendedTheme.colors['color-secondary'],
      padding: extendedTheme.space[600],

      '& h3': {
        color: extendedTheme.colors['color-primary'],
        textAlign: 'center',
        marginBlockEnd: theme.spacing.md,
      },

      '& h4': {
        color: theme.white,
      },

      '& p': {
        color: theme.white,
        opacity: 0.8,
      },

      '@media screen and (min-width: 1024px)': {
        gridColumn: '7 / -1',
      },

      '@media screen and (min-width: 1440px)': {
        gridColumn: '8 / -1',
      },
    },
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
      color: theme.white,
    },
    realtors: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(14rem, 100%), 1fr))',
      gap: theme.spacing.lg,
      textAlign: 'center',

      '& img': {
        blockSize: '8rem',
        marginBlockEnd: theme.spacing.xs,
        borderRadius: theme.radius.md,
        marginInline: 'auto',
      },
    },
    realtor: {},
  }),
  { theming }
)

export default function Realtors() {
  const styles = useStyles()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title order={3}>Realtors</Title>
        <div className={styles.realtors}>
          <div className={styles.realtor}>
            <img src={RealtorOne} alt="Realtor one" />
            <Title order={4}>Eric Schneiderlin</Title>
            <Text component="p">500 Houses sold</Text>
          </div>
          <div className={styles.realtor}>
            <img src={RealtorTwo} alt="Realtor two" />
            <Title order={4}>Lucy Evans</Title>
            <Text component="p">300 Houses sold</Text>
          </div>
          <div className={styles.realtor}>
            <img src={RealtorThree} alt="Realtor three" />
            <Title order={4}>Morgan Freeman</Title>
            <Text component="p">100 Houses sold</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

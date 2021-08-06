import React from 'react'
import { createUseStyles } from 'react-jss'
import { Text, theming, Title } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'

const useStyles = createUseStyles(
  theme => ({
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(18rem, 100%), 1fr))',
      gap: theme.spacing.md,
      paddingBlock: extendedTheme.space[900],
      paddingInline: extendedTheme.space[400],

      '@media screen and (min-width: 1024px)': {
        gridColumn: '1 / -1',
      },

      '@media screen and (min-width: 1440px)': {
        gridColumn: '2 / -1',
      },
    },
    feature: {
      '& h4': {
        color: extendedTheme.colors['color-primary'],
      },
    },
  }),
  { theming }
)

export default function Features() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <Title order={4}>World's best luxury homes</Title>
        <Text component="p">
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title order={4}>Only the best properties</Title>
        <Text component="p" color="white">
          Cumque consequuntur veniam dolorum ratione sint illo placeat numquam
          ullam odio itaque ab eos, debitis quidem culpa!
        </Text>
      </div>
      <div className={styles.feature}>
        <Title order={4}>All homes in top location</Title>
        <Text component="p">
          Quaerat consequuntur obcaecati nihil et reprehenderit deleniti quam
          veritatis.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title order={4}>New home in one week</Title>
        <Text component="p">
          Architecto praesentium sed deserunt delectus consectetur quod fugit
          veniam.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title order={4}>Top 1% realtors</Title>
        <Text component="p">
          Explicabo atque unde dolorem tempora facilis fugit, cum minus ad sint
          tempore minima sed libero aperiam magnam aliquid.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title order={4}>World's best luxury homes</Title>
        <Text component="p">
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </Text>
      </div>
    </div>
  )
}

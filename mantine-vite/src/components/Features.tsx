import React from 'react'
import { createUseStyles } from 'react-jss'
import { Text, theming, Title } from '@mantine/core'

const useStyles = createUseStyles(
  theme => ({
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
    },
    feature: {},
  }),
  { theming }
)

export default function Features() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <Title>World's best luxury homes</Title>
        <Text component="p">
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title>Only the best properties</Title>
        <Text component="p">
          Cumque consequuntur veniam dolorum ratione sint illo placeat numquam
          ullam odio itaque ab eos, debitis quidem culpa!
        </Text>
      </div>
      <div className={styles.feature}>
        <Title>All homes in top location</Title>
        <Text component="p">
          Quaerat consequuntur obcaecati nihil et reprehenderit deleniti quam
          veritatis.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title>New home in one week</Title>
        <Text component="p">
          Architecto praesentium sed deserunt delectus consectetur quod fugit
          veniam.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title>Top 1% realtors</Title>
        <Text component="p">
          Explicabo atque unde dolorem tempora facilis fugit, cum minus ad sint
          tempore minima sed libero aperiam magnam aliquid.
        </Text>
      </div>
      <div className={styles.feature}>
        <Title>World's best luxury homes</Title>
        <Text component="p">
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </Text>
      </div>
    </div>
  )
}

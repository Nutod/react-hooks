import React from 'react'
import { createUseStyles } from 'react-jss'
import { Text, theming, Title } from '@mantine/core'
import ImageOne from '../assets/story-1.jpeg'
import ImageTwo from '../assets/story-2.jpeg'

const useStyles = createUseStyles(
  theme => ({
    pictures: {
      '& figure': {
        objectFit: 'cover',
      },

      '& img': {
        height: '100%',
        width: '100%',
        boxShadow: theme.shadows.md,
      },

      padding: theme.spacing.xl,
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: 'repeat(6, 1fr)',
    },
    mainImage: {
      gridColumn: '2 / 6',
      gridRow: '2 / 6',
    },
    subImage: {
      gridColumn: '5 / -1',
      gridRow: '5 / -1',
    },
    content: {
      background: 'bisque',
      padding: theme.spacing.xl,

      '& h2': {
        fontStyle: 'italic',
      },

      '& > * + *': {
        marginBlockStart: theme.spacing.md,
      },
    },
  }),
  { theming }
)

export default function Story() {
  const styles = useStyles()

  return (
    <>
      <div className={styles.pictures}>
        <figure className={styles.mainImage}>
          <img src={ImageOne} alt="Image One" />
        </figure>
        <figure className={styles.subImage}>
          <img src={ImageTwo} alt="Image Two" />
        </figure>
      </div>
      <div className={styles.content}>
        <Title order={5}>Happy Customers</Title>
        <Title order={2}>Listen to what our Customers are saying</Title>
        <Text component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui
          perferendis blanditiis rerum, fugiat magni. Temporibus maiores
          quisquam assumenda quibusdam!
        </Text>
      </div>
    </>
  )
}

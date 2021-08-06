import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
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
    content: {},
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
      <div className={styles.content}>Content</div>
    </>
  )
}

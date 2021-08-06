import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import ImageOne from '../assets/story-1.jpeg'
import ImageTwo from '../assets/story-2.jpeg'

const useStyles = createUseStyles(
  theme => ({
    pictures: {},
    content: {},
  }),
  { theming }
)

export default function Story() {
  const styles = useStyles()

  return (
    <>
      <div className={styles.pictures}>
        <figure>
          <img src={ImageOne} alt="Image One" />
        </figure>
      </div>
      <div className={styles.content}>Content</div>
    </>
  )
}

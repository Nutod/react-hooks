import React from 'react'
import { createUseStyles } from 'react-jss'
import { Button, theming, Title } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'
import HouseOne from '../assets/house-1.jpeg'

const useStyles = createUseStyles(
  theme => ({
    wrapper: {
      background: 'ghostwhite',
      padding: theme.spacing.xl,

      '& svg': {
        blockSize: '2rem',
        color: extendedTheme.colors['color-primary'],
      },
    },
    container: {
      maxWidth: '70rem',
      marginInline: 'auto',
    },
    homes: {},
    home: {},
    button: {
      fontFamily: extendedTheme.fonts.display,
      background: extendedTheme.colors['color-primary'],
      textShadow: 'none',
      boxShadow: extendedTheme.shadows['shadow-md'],
    },
  }),
  { theming }
)

export default function Homes() {
  const styles = useStyles()

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.homes}>
          <div className={styles.home}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <img src={HouseOne} alt="House One" />
            <Title order={5}>Beautiful Family House</Title>
            <Button className={styles.button}>Contact Realtor</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

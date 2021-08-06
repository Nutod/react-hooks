import React from 'react'
import { createUseStyles } from 'react-jss'
import { Button, Text, theming, Title } from '@mantine/core'
import { theme as extendedTheme } from '../config/extendedTheme'
import Logo from '../assets/logo.png'
import BBCLogo from '../assets/logo-bbc.png'
import BILogo from '../assets/logo-bi.png'
import ForbesLogo from '../assets/logo-forbes.png'
import TCLogo from '../assets/logo-techcrunch.png'
import HeroBG from '../assets/hero.jpeg'

const useStyles = createUseStyles(
  theme => ({
    container: {
      background: `linear-gradient(rgba(16, 29, 44, 0.5), rgba(16, 29, 44, 0.5)), url(${HeroBG})`,

      '& h1, & h5, & p': {
        color: theme.white,
      },

      '& h1, & h5': {
        textAlign: 'center',
      },

      padding: extendedTheme.space[900],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing.xl,

      '@media screen and (min-width: 1024px)': {
        gridColumn: '1 / 7',
      },

      '@media screen and (min-width: 1440px)': {
        gridColumn: '2 / 8',
      },
    },
    logo: {
      width: '20rem',
      marginInline: 'auto',
    },
    seenon: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: theme.spacing.xs,

      '&::before, &::after': {
        content: "''",
        width: '100%',
        height: '2px',
        alignSelf: 'center',
        background: theme.white,
      },
    },
    button: {
      fontFamily: extendedTheme.fonts.display,
      background: extendedTheme.colors['color-primary'],
      textShadow: 'none',
      boxShadow: extendedTheme.shadows['shadow-md'],
    },
    logos: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 4rem), 1fr))',
      gap: theme.spacing.xs,
    },
  }),
  { theming }
)

export default function Header() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <hgroup>
        <Title order={5}>Your Own Home:</Title>
        <Title order={1}>The ultimate personal freedom</Title>
      </hgroup>
      <Button className={styles.button}>View Our Properties</Button>
      <Text component="p" className={styles.seenon}>
        As seen on
      </Text>
      <div className={styles.logos}>
        <img src={BBCLogo} alt="" />
        <img src={TCLogo} alt="" />
        <img src={BILogo} alt="" />
        <img src={ForbesLogo} alt="" />
      </div>
    </div>
  )
}

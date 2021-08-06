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

      padding: theme.spacing.xl,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.xl,
    },
    logo: {
      width: '25rem',
      marginInline: 'auto',
    },
    button: {
      fontFamily: extendedTheme.fonts.display,
      background: extendedTheme.colors['color-primary'],
      textShadow: 'none',
      boxShadow: extendedTheme.shadows['shadow-md'],
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
      <Text component="p">As seen on</Text>
      <div>
        <img src={BBCLogo} alt="" />
        <img src={TCLogo} alt="" />
        <img src={BILogo} alt="" />
        <img src={ForbesLogo} alt="" />
      </div>
    </div>
  )
}

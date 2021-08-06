import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Homes from '../components/Homes'
import Realtors from '../components/Realtors'
import Sidebar from '../components/Sidebar'
import Story from '../components/Story'
import Header from '../components/Header'

const useStyles = createUseStyles(
  theme => ({
    container: {
      '@media screen and (min-width: 1024px)': {
        display: 'grid',
        gridTemplateColumns:
          'minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(6rem, 1fr)',
      },

      '@media screen and (min-width: 1440px)': {
        gridTemplateColumns:
          '4rem minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(6rem, 1fr)',
        gridTemplateRows: 'repeat(5, auto)',
      },
    },
  }),
  { theming }
)

export default function Home() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Homes />
      <Story />
      <Footer />
    </div>
  )
}

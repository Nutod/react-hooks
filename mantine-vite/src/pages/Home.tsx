import React from 'react'
import { createUseStyles } from 'react-jss'
import { theming } from '@mantine/core'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Homes from '../components/Homes'
import Realtors from '../components/Realtors'
import Sidebar from '../components/Sidebar'
import Story from '../components/Story'

const useStyles = createUseStyles(
  theme => ({
    container: {
      background: 'orangered',

      '@media screen and (min-width: 1024px)': {
        display: 'grid',
        gridTemplateColumns:
          'minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(6rem, 1fr)',
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
      <Realtors />
      <Features />
      <Homes />
      <Story />
      <Footer />
    </div>
  )
}

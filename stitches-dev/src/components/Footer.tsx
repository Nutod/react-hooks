import React from 'react'
import { styled } from '../styles/stitches.config'

const FooterWrapper = styled('footer', {
  background: '$color-secondary',
  padding: '$400',
  color: 'white',

  '& ul': {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gap: '$200',
  },
})

export default function Footer() {
  return (
    <FooterWrapper>
      <ul>
        <li>Footer Link 1</li>
        <li>Footer Link 2</li>
        <li>Footer Link 3</li>
        <li>Footer Link 4</li>
        <li>Footer Link 5</li>
        <li>Footer Link 6</li>
      </ul>
    </FooterWrapper>
  )
}

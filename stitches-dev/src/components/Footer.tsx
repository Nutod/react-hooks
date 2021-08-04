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
        <li>Find your Dream Home</li>
        <li>Request Proposal</li>
        <li>Download home Planner</li>
        <li>Contact Us</li>
        <li>Sumit your Proposal</li>
        <li>Come work with us!</li>
      </ul>
    </FooterWrapper>
  )
}

import React from 'react'
import HeroBG from '../assets/hero.jpeg'
import Logo from '../assets/logo.png'
import { styled } from '../styles/stitches.config'
import Button from './Button'

const HeroWrapper = styled('div', {
  backgroundImage: `linear-gradient(
    rgba(16, 29, 44, 0.7),
    rgba(16, 29, 44, 0.7)
  ),
  url(${HeroBG})`,
  paddingInline: '$400',
  paddingBlock: '$500',
  display: 'grid',
  gap: '$300',
  color: 'white',

  '& .logo': {
    blockSize: '4rem',
    justifySelf: 'center',
  },
})

export default function Hero() {
  return (
    <HeroWrapper>
      <img className="logo" src={Logo} alt="Logo" />
      <div>
        <h4>Your Own Home:</h4>
        <h1>The ultimate personal freedom</h1>
      </div>
      <Button>View Our Properties</Button>
    </HeroWrapper>
  )
}

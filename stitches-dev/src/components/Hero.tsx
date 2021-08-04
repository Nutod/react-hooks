import React from 'react'
import HeroBG from '../assets/hero.jpeg'
import Logo from '../assets/logo.png'
import { styled } from '../styles/stitches.config'
import Button from './Button'
import LogoBBC from '../assets/logo-bbc.png'
import LogoBI from '../assets/logo-bi.png'
import LogoForbes from '../assets/logo-forbes.png'
import LogoTC from '../assets/logo-techcrunch.png'

const HeroWrapper = styled('div', {
  // maxWidth: '70rem',
  // marginInline: 'auto',
  backgroundImage: `linear-gradient(
    rgba(16, 29, 44, 0.7),
    rgba(16, 29, 44, 0.7)
  ),
  url(${HeroBG})`,
  paddingInline: '$400',
  paddingBlock: '$500',
  display: 'grid',
  gap: '$400',
  color: 'white',

  '& .logo': {
    blockSize: '4rem',
    justifySelf: 'center',
  },

  '& h4, & h1': {
    fontFamily: '$display',
  },

  '& h1': {
    fontSize: '2.488rem',
  },

  '& h4': {
    fontSize: '1.44rem',
  },

  '& p': {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: '$100',
  },

  '& p::before, & p::after': {
    content: '',
    width: '100%',
    height: '2px',
    background: `linear-gradient(
      rgba(255, 254, 254, 0.7),
      rgba(161, 161, 161, 0.26)
    )`,
    alignSelf: 'center',
  },

  '& .logo__group': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gap: '$200',
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
      <p>As seenon on</p>
      <div className="logo__group">
        <img src={LogoBBC} alt="Logo BBC" />
        <img src={LogoBI} alt="Logo BI" />
        <img src={LogoTC} alt="Logo TC" />
        <img src={LogoForbes} alt="Logo Forbes" />
      </div>
    </HeroWrapper>
  )
}

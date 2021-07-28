import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import HeroBG from '../assets/hero.jpeg'
import BBCLogo from '../assets/logo-bbc.png'
import BILogo from '../assets/logo-bi.png'
import ForbesLogo from '../assets/logo-forbes.png'
import TCLogo from '../assets/logo-techcrunch.png'
import { container } from '../styles/utils/container'

const HeroWrapper = styled.header`
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.7),
      rgba(16, 29, 44, 0.7)
    ),
    url(${HeroBG});
  padding: var(--space-300);
  color: #fff;

  display: grid;
  gap: var(--space-400);

  hgroup {
    /* margin-block: var(--space-400); */
    margin-block-start: var(--space-100);
    text-align: center;

    h1 {
      margin-block-start: var(--space-100);
      font-family: 'Josefin Sans';
    }

    h5 {
      margin: 0;
    }
  }

  p {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-100);

    &::before {
      align-self: center;
      content: '';
      width: 100%;
      height: 1.5px;
      background: linear-gradient(
        to right,
        rgba(189, 172, 172, 0.5),
        rgba(224, 224, 224, 0.788)
      );
    }
    &::after {
      align-self: center;
      content: '';
      width: 100%;
      height: 1.5px;
      background: linear-gradient(
        to left,
        rgba(189, 172, 172, 0.5),
        rgba(224, 224, 224, 0.788)
      );
    }
  }

  img {
    box-shadow: none;
    border-radius: 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    align-items: start;
    gap: var(--space-100);
  }
`

const LogoImage = styled.img`
  block-size: 50%;
  justify-self: center;
  align-self: center;
`

export default function Hero() {
  return (
    <HeroWrapper>
      <LogoImage src={Logo} alt="Nexter Logo" />
      <hgroup>
        <h5>Your pathway to comfort:</h5>
        <h1>Find and Discover new homes</h1>
      </hgroup>
      <p>As seen on:</p>
      <div>
        <img src={BBCLogo} alt="BBC logo" />
        <img src={TCLogo} alt="TechCrunch logo" />
        <img src={BILogo} alt="BI logo" />
        <img src={ForbesLogo} alt="Forbes logo" />
      </div>
    </HeroWrapper>
  )
}

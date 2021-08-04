import React from 'react'
import { styled } from '../styles/stitches.config'
import HouseOne from '../assets/house-1.jpeg'

const HomesWrapper = styled('div', {})

export default function Homes() {
  return (
    <HomesWrapper>
      <div className="home">
        <img src={HouseOne} alt="House One" />
      </div>
    </HomesWrapper>
  )
}

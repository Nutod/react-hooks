import React from 'react'
import { styled } from '../styles/stitches.config'
import HouseOne from '../assets/house-1.jpeg'
import HouseTwo from '../assets/house-2.jpeg'
import Button from './Button'

const HomesWrapper = styled('div', {
  maxWidth: '70rem',
  marginInline: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  gap: '$300',
  padding: '$400',

  '& svg': {
    blockSize: '1.5rem',
    color: '$color-primary',
  },

  '& .heart': {
    gridColumn: '2 / -1',
    alignSelf: 'end',
  },

  '& .home': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },

  '& .house': {
    gridColumn: '1 / -1',
  },

  '& h5': {
    gridColumn: '1 / -1',
    margin: '0 auto',
    background: '$color-secondary',
    color: 'white',
    fontFamily: '$display',
    textAlign: 'center',
    padding: '$200',
    width: '50%',
    transform: 'translateY(-50%)',
  },

  '& .description': {
    gridColumn: '1 / -1',
    background: 'cadetblue',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    textAlign: 'center',
  },
})

export default function Homes() {
  return (
    <HomesWrapper>
      <div className="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="heart"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <img className="house" src={HouseOne} alt="House One" />
        <h5>Beautiful Family House</h5>
        <div className="description">
          <p>Location</p>
          <p>Rooms</p>
          <p>Size</p>
          <p>Price</p>
        </div>
        <Button>Contact Realtor</Button>
      </div>
      <div className="home">
        <img src={HouseTwo} alt="House Two" />
        <h5>Beautiful Family House</h5>
        <Button>Contact Realtor</Button>
      </div>
    </HomesWrapper>
  )
}

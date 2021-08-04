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
    position: 'absolute',
    top: '5px',
    right: '5px',
  },

  '& .home': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$300',
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>Location</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>Location</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>Location</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>Location</p>
          </div>
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

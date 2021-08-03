import React from 'react'
import { styled } from '../styles/stitches.config'
import RealtorOne from '../assets/realtor-1.jpeg'
import RealtorTwo from '../assets/realtor-2.jpeg'
import RealtorThree from '../assets/realtor-3.jpeg'

const RealtorsWrapper = styled('div', {
  background: '$color-secondary',
  color: 'white',
  padding: '$400',
  maxBlockSize: '70rem',

  '& h2': {
    fontFamily: '$display',
    color: '$color-primary',
    textAlign: 'center',
    marginBlockEnd: '$100',
  },

  '& h4': {
    fontFamily: '$display',
  },

  '& .realtors': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
    gap: '$300',
    justifyContent: 'center',
  },

  '& .realtor': {
    display: 'flex',
    alignItems: 'center',
    gap: '$200',
  },

  '& p': {
    opacity: '.8',
  },

  '& img': {
    blockSize: '8rem',
    borderRadius: '$radius-round',
  },
})

export default function Realtors() {
  return (
    <RealtorsWrapper>
      <h2>Realtors</h2>
      <div className="realtors">
        <div className="realtor">
          <img src={RealtorOne} alt="Realtor One" />
          <div>
            <h4>Eric Schweinsteiger</h4>
            <p>500 houses old</p>
          </div>
        </div>
        <div className="realtor">
          <img src={RealtorTwo} alt="Realtor Two" />
          <div>
            <h4>Mary Magdalene</h4>
            <p>500 houses old</p>
          </div>
        </div>
        <div className="realtor">
          <img src={RealtorThree} alt="Realtor Three" />
          <div>
            <h4>Morgan Treek</h4>
            <p>500 houses old</p>
          </div>
        </div>
      </div>
    </RealtorsWrapper>
  )
}

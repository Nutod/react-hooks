import React from 'react'
import styled from 'styled-components'
import RealtorOne from '../assets/realtor-1.jpeg'
import RealtorTwo from '../assets/realtor-2.jpeg'
import RealtorThree from '../assets/realtor-3.jpeg'

const RealtorsWrapper = styled.div`
  background-color: var(--color-secondary);
  padding: var(--space-300);
  color: #fff;

  h3 {
    color: var(--color-primary);
    text-align: center;
  }

  img {
    box-shadow: none;
  }
`

const RealtorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: var(--space-300);
  justify-items: center;
  margin-block-start: var(--space-100);

  div {
    display: grid;
    grid-template-columns: 6rem 1fr;
    gap: var(--space-100);
    align-items: center;
  }

  img {
    border-radius: 99999px;
  }

  p {
    opacity: 0.8;
  }
`

export default function Realtors() {
  return (
    <RealtorsWrapper>
      <h3>Realtors</h3>
      <RealtorContainer>
        <div>
          <img src={RealtorOne} alt="Realtor" />
          <span>
            <h4>Eric Schweinsteiger</h4>
            <p>500 Houses sold</p>
          </span>
        </div>
        <div>
          <img src={RealtorTwo} alt="Realtor" />
          <span>
            <h4>Jeanie Campbell</h4>
            <p>300 Houses sold</p>
          </span>
        </div>
        <div>
          <img src={RealtorThree} alt="Realtor" />
          <span>
            <h4>Morgan Freeman</h4>
            <p>100 Houses sold</p>
          </span>
        </div>
      </RealtorContainer>
    </RealtorsWrapper>
  )
}

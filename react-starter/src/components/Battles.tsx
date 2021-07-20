import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'

const InstructionsWrapper = styled.div`
  margin-block-start: var(--space-500);

  div {
    margin-block-start: var(--space-200);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: var(--space-100);

    & > * {
      padding: var(--space-100);
    }

    svg {
      /* block-size: 5rem; */
      margin-inline: auto;
      margin-block-end: var(--space-200);
      color: var(--color-primary);
      background-color: #eee;
      padding: var(--space-100);
    }
  }

  h4 {
    text-align: center;
    margin-bottom: var(--space-300);
  }
`

function Instructions() {
  return (
    <InstructionsWrapper>
      <h2 style={{ textAlign: 'center' }}>Instructions</h2>
      <div>
        <h4>
          Enter two Github Users
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </h4>
        <h4>
          Battle
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </h4>
        <h4>
          See the Winner
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
        </h4>
      </div>
    </InstructionsWrapper>
  )
}

const BattlesWrapper = styled.div`
  ${container};
`

export default function Battles() {
  return (
    <BattlesWrapper>
      <Instructions />
    </BattlesWrapper>
  )
}

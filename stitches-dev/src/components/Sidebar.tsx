import React from 'react'
import { styled } from '../styles/stitches.config'

const SidebarWrapper = styled('aside', {
  background: '$color-primary',
  display: 'flex',
  alignItems: 'center',
  padding: '$100',

  '& svg': {
    blockSize: '$500',
    color: 'white',
  },
})

export default function Sidebar() {
  return (
    <SidebarWrapper>
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
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </SidebarWrapper>
  )
}

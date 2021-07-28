import React from 'react'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  background-color: var(--color-primary);
  padding: var(--space-100);
  color: var(--color-secondary);

  display: flex;
  align-items: center;

  svg {
    block-size: 2rem;
  }
`

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
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

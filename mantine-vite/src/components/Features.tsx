import React from 'react'
import styled from 'styled-components'
import { container } from '../styles/utils/container'

const FeaturesWrapper = styled.section`
  ${container}

  background: crimson;
  padding: var(--space-200);
  padding-block: var(--space-400);
`

export default function Features() {
  return (
    <FeaturesWrapper>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
      <div>
        {/* svg */}
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
          architecto inventore veritatis.
        </p>
      </div>
    </FeaturesWrapper>
  )
}

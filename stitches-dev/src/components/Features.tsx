import React from 'react'
import { styled } from '../styles/stitches.config'

const FeaturesWrapper = styled('div', {
  maxWidth: '70rem',
  marginInline: 'auto',
  padding: '$400',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  gap: '$200',

  '& svg': {
    mt: '-10px',
    color: '$color-primary',
  },

  '& .feature': {
    marginBlock: '$100',
    display: 'grid',
    gridTemplateColumns: '$900 1fr',
    gap: '$200',
  },

  '& h3': {
    fontFamily: '$display',
  },
})

export default function Features() {
  return (
    <FeaturesWrapper>
      <div className="feature">
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <div>
          <h3>World's best luxury homes</h3>
          <p>
            Lorem ipsum dolor sit amet reprehenderit deleniti quam possimus
            architecto inventore veritatis.
          </p>
        </div>
      </div>
      <div className="feature">
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <div>
          <h3>Only the best properties</h3>
          <p>
            Cumque consequuntur veniam dolorum ratione sint illo placeat numquam
            ullam odio itaque ab eos, debitis quidem culpa!
          </p>
        </div>
      </div>
      <div className="feature">
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <div>
          <h3>All homes in top location</h3>
          <p>
            Quaerat consequuntur obcaecati nihil et reprehenderit deleniti quam
            veritatis.
          </p>
        </div>
      </div>
      <div className="feature">
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
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
        <div>
          <h3>New home in one week</h3>
          <p>
            Architecto praesentium sed deserunt delectus consectetur quod fugit
            veniam.
          </p>
        </div>
      </div>
      <div className="feature">
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <div>
          <h3>Top 1% realtors</h3>
          <p>
            Explicabo atque unde dolorem tempora facilis fugit, cum minus ad
            sint tempore minima sed libero aperiam magnam aliquid.
          </p>
        </div>
      </div>
      <div className="feature">
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
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
        <div>
          <h3>Secure payments on Nexter</h3>
          <p>
            Quaerat consequuntur obcaecati nihil et reprehenderit deleniti quam
            possimus architecto inventore veritatis.
          </p>
        </div>
      </div>
    </FeaturesWrapper>
  )
}

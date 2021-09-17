import React from 'react'
import { css } from 'linaria'
import { Link } from 'react-router-dom'

const classes = {
  ul: css`
    display: flex;
    gap: 1rem;
  `,
  li: css`
    &::before {
      display: none;
    }
  `,
}

export default function Nav() {
  return (
    <nav>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to="/">Popular</Link>
        </li>
        <li className={classes.li}>
          <Link to="battle">Battle</Link>
        </li>
      </ul>
      <a>Light</a>
    </nav>
  )
}

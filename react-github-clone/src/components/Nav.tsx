import React from 'react'
import { css } from 'linaria'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/theme'

const classes = {
  nav: css`
    margin: var(--size-8);

    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  ul: css`
    display: flex;
    gap: var(--size-12);

    margin-inline-start: 0;
  `,
  li: css`
    margin: 0;

    &::before {
      display: none;
    }
  `,
}

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to="/">Popular</Link>
        </li>
        <li className={classes.li}>
          <Link to="battle">Battle</Link>
        </li>
      </ul>
      <div>
        {theme === 'light' ? (
          <button className="zi-btn small" onClick={toggleTheme}>
            Dark
          </button>
        ) : (
          <button className="zi-btn small" onClick={toggleTheme}>
            Light
          </button>
        )}
      </div>
    </nav>
  )
}

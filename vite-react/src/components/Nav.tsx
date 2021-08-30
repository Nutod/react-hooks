import React from 'react'
import { Button } from '@geist-ui/react'
import { Sun, Moon } from '@geist-ui/react-icons'
import { useThemeContext } from '../context/theme'
import { css } from 'linaria'

const classes = {
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 3rem;
    margin-block: 1.5rem;
  `,
  ul: css`
    display: flex;
    gap: 1rem;
  `,
  li: css`
    &::before {
      content: '';
    }
  `,
}

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.ul}>
        <li className={classes.li}>Popular</li>
        <li className={classes.li}>Battle</li>
      </ul>
      <div>
        {theme === 'dark' ? (
          <Button onClick={toggleTheme} icon={<Sun />} auto scale={0.75}>
            Light
          </Button>
        ) : (
          <Button onClick={toggleTheme} icon={<Moon />} auto scale={0.75}>
            Dark
          </Button>
        )}
      </div>
    </nav>
  )
}

import React, { ReactNode } from 'react'
import { css } from 'linaria'

const classes = {
  container: css`
    max-width: 50rem;
    margin-inline: auto;
  `,
}

export default function Container({ children }: { children: ReactNode }) {
  return <main className={classes.container}>{children}</main>
}

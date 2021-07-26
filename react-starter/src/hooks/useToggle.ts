import React from 'react'

export function useToggle() {
  const [state, setState] = React.useState(false)

  const handlers = React.useMemo(
    () => ({
      over: () => {
        setState(true)
      },
      out: () => {
        setState(false)
      },
    }),
    [],
  )

  return [state, handlers]
}

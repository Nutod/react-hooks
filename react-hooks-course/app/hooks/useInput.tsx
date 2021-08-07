import React from 'react'

export function useInput(initialState = '') {
  const [state, setState] = React.useState(initialState)

  const handlers = React.useMemo(
    () => ({
      handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
      },
      resetInput: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )

  return [state, handlers]
}

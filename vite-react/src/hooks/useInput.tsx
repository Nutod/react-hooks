import React from 'react'

export function useInput() {
  const [state, setState] = React.useState('')

  const handlers = React.useMemo(
    () => ({
      handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
      },
      resetInput: () => {
        setState('')
      },
    }),
    []
  )

  return [state, handlers] as const
}

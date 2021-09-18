import React from 'react'

export function useImperativeInput() {
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

  return [state, handlers]
}

export function useInput(initialValue = '') {
  const [value, setValue] = React.useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      },
    },
  }
}

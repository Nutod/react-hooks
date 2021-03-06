import React from 'react'

export function useInput(initialValue = '', options = {}) {
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
      ...options,
    },
  }
}

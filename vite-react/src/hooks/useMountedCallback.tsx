import React from 'react'

export function useMountedCallback<T>(
  toggleCb: () => () => void,
  options: T[]
) {
  return React.useCallback(toggleCb(), options)
}

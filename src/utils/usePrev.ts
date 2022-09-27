import { useEffect, useRef } from 'react'

export function usePrev<T>(value: T): T {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current || value
}

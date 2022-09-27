import { useEffect, useState } from 'react'

import type { Status } from './types/Status'
import { getCepData } from './utils/getCepData'
import { usePrev } from './utils/usePrev'

const initialStatus: Status = {
  isLoading: false,
  isError: false,
  error: null,
  data: null
}

export function useCep() {
  const [cep, setCep] = useState<string | number | null>(null)
  const [status, setStatus] = useState(initialStatus)
  const prevCep = usePrev(cep)

  useEffect(() => {
    if (cep && cep !== prevCep) {
      setStatus({ ...initialStatus, isLoading: true })
      getCepData(String(cep))
        .then(data => setStatus(prev => ({ ...prev, data })))
        .catch(error => setStatus(prev => ({ ...prev, isError: true, error: error?.message })))
        .finally(() => setStatus(prev => ({ ...prev, isLoading: false })))
    }
  }, [cep, prevCep])

  return { status, setCep }
}

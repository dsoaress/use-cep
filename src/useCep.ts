import { useEffect, useState } from 'react'

import type { Status } from './types/Status'
import { getCepData } from './utils/getCepData'

const initialStatus: Status = {
  isLoading: false,
  isError: false,
  error: null,
  data: null
}

export function useCep() {
  const [cep, setCep] = useState<string | number | null>(null)
  const [status, setStatus] = useState<Status>(initialStatus)

  useEffect(() => {
    if (cep) {
      setStatus(prev => ({ ...prev, isLoading: true }))
      getCepData(String(cep))
        .then(data => setStatus(prev => ({ ...prev, data })))
        .catch(error => setStatus(prev => ({ ...prev, isError: true, error })))
        .finally(() => setStatus(prev => ({ ...prev, isLoading: false })))
    }
  }, [cep])

  return { status, setCep }
}

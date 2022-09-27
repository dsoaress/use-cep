import type { CepData } from './CepData'

export type Status = {
  isLoading: boolean
  isError: boolean
  error: unknown
  data: CepData | null
}

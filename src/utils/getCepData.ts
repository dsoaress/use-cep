import { config } from '../config'
import type { CepData } from '../types/CepData'
import { isValidCep } from './isValidCep'

export async function getCepData(cep: string): Promise<CepData> {
  if (!isValidCep(cep)) throw new Error(config.errors.CEP_INVALID)

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await response.json()

  if (!data || data.erro) throw new Error(config.errors.CEP_NOT_FOUND)

  return data
}

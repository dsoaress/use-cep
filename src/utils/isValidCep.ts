export function isValidCep(cep: string) {
  return /(\d{5}-\d{3})|(\d{8})/g.test(cep)
}

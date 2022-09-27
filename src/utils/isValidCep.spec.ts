import { isValidCep } from './isValidCep'

describe('isValidCep', () => {
  it('should return true for a valid CEP', () => {
    expect(isValidCep('01001000')).toBe(true)
    expect(isValidCep('01001-000')).toBe(true)
  })

  it('should return false for an invalid CEP', () => {
    expect(isValidCep('01001')).toBe(false)
  })
})

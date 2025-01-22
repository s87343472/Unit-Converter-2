import { convert } from '../converter'

describe('Numeral Conversion', () => {
  // 测试基本进制转换
  describe('Basic Conversions', () => {
    test('decimal to binary', () => {
      const result = convert('numeral', 42, 'decimal', 'binary')
      expect(result.value).toBe('101010')
      expect(result.unit).toBe('binary')
    })

    test('decimal to hexadecimal', () => {
      const result = convert('numeral', 255, 'decimal', 'hexadecimal')
      expect(result.value).toBe('FF')
      expect(result.unit).toBe('hexadecimal')
    })

    test('decimal to octal', () => {
      const result = convert('numeral', 64, 'decimal', 'octal')
      expect(result.value).toBe('100')
      expect(result.unit).toBe('octal')
    })
  })

  // 测试特殊进制转换
  describe('Special Base Conversions', () => {
    test('decimal to base3', () => {
      const result = convert('numeral', 10, 'decimal', 'base3')
      expect(result.value).toBe('101')
      expect(result.unit).toBe('base3')
    })

    test('decimal to base36', () => {
      const result = convert('numeral', 35, 'decimal', 'base36')
      expect(result.value).toBe('Z')
      expect(result.unit).toBe('base36')
    })
  })

  // 测试反向转换
  describe('Reverse Conversions', () => {
    test('binary to decimal', () => {
      const result = convert('numeral', 10, 'binary', 'decimal')
      expect(result.value).toBe(2)
      expect(result.unit).toBe('decimal')
    })

    test('hexadecimal to decimal', () => {
      const result = convert('numeral', 255, 'hexadecimal', 'decimal')
      expect(result.value).toBe(597)
      expect(result.unit).toBe('decimal')
    })
  })

  // 测试边界情况
  describe('Edge Cases', () => {
    test('should handle zero', () => {
      const result = convert('numeral', 0, 'decimal', 'binary')
      expect(result.value).toBe('0')
      expect(result.unit).toBe('binary')
    })

    test('should handle large numbers', () => {
      const result = convert('numeral', 1000000, 'decimal', 'hexadecimal')
      expect(result.value).toBe('F4240')
      expect(result.unit).toBe('hexadecimal')
    })
  })
}) 
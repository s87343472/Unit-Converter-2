import { convert } from '../converter'

describe('Length Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('meter to centimeter', () => {
      const result = convert('length', 1, 'meter', 'centimeter')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('centimeter')
    })

    test('kilometer to meter', () => {
      const result = convert('length', 1, 'kilometer', 'meter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('meter')
    })

    test('millimeter to meter', () => {
      const result = convert('length', 1000, 'millimeter', 'meter')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('meter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Conversions', () => {
    test('foot to meter', () => {
      const result = convert('length', 1, 'foot', 'meter')
      expect(result.value).toBeCloseTo(0.3048, 4)
      expect(result.unit).toBe('meter')
    })

    test('inch to centimeter', () => {
      const result = convert('length', 1, 'inch', 'centimeter')
      expect(result.value).toBeCloseTo(2.54, 2)
      expect(result.unit).toBe('centimeter')
    })

    test('yard to meter', () => {
      const result = convert('length', 1, 'yard', 'meter')
      expect(result.value).toBeCloseTo(0.9144, 4)
      expect(result.unit).toBe('meter')
    })
  })

  // 测试混合单位转换
  describe('Mixed Conversions', () => {
    test('mile to kilometer', () => {
      const result = convert('length', 1, 'mile', 'kilometer')
      expect(result.value).toBeCloseTo(1.60934, 5)
      expect(result.unit).toBe('kilometer')
    })

    test('meter to foot', () => {
      const result = convert('length', 1, 'meter', 'foot')
      expect(result.value).toBeCloseTo(3.28084, 5)
      expect(result.unit).toBe('foot')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle small numbers', () => {
      const result = convert('length', 0.0001, 'meter', 'millimeter')
      expect(result.value).toBe(0.1)
      expect(result.unit).toBe('millimeter')
    })

    test('should handle large numbers', () => {
      const result = convert('length', 1000000, 'meter', 'kilometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('kilometer')
    })
  })
}) 
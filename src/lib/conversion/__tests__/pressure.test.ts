import { convert } from '../converter'

describe('Pressure Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('pascal to kilopascal', () => {
      const result = convert('pressure', 1000, 'pascal', 'kilopascal')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('kilopascal')
    })

    test('kilopascal to megapascal', () => {
      const result = convert('pressure', 1000, 'kilopascal', 'megapascal')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('megapascal')
    })

    test('bar to pascal', () => {
      const result = convert('pressure', 1, 'bar', 'pascal')
      expect(result.value).toBeCloseTo(100000, 0)
      expect(result.unit).toBe('pascal')
    })
  })

  // 测试大气压相关单位
  describe('Atmospheric Units', () => {
    test('atmosphere to pascal', () => {
      const result = convert('pressure', 1, 'atmosphere', 'pascal')
      expect(result.value).toBeCloseTo(101325, 0)
      expect(result.unit).toBe('pascal')
    })

    test('bar to atmosphere', () => {
      const result = convert('pressure', 1, 'bar', 'atmosphere')
      expect(result.value).toBeCloseTo(0.987, 3)
      expect(result.unit).toBe('atmosphere')
    })
  })

  // 测试其他常用单位
  describe('Other Common Units', () => {
    test('mmhg to pascal', () => {
      const result = convert('pressure', 1, 'mmhg', 'pascal')
      expect(result.value).toBeCloseTo(133.322, 2)
      expect(result.unit).toBe('pascal')
    })

    test('psi to pascal', () => {
      const result = convert('pressure', 1, 'psi', 'pascal')
      expect(result.value).toBeCloseTo(6894.557823129252, 6)
      expect(result.unit).toBe('pascal')
    })

    test('ksi to megapascal', () => {
      const result = convert('pressure', 1, 'ksi', 'megapascal')
      expect(result.value).toBeCloseTo(6.89, 2)
      expect(result.unit).toBe('megapascal')
    })
  })

  describe('Water Column', () => {
    test('cmh2o to pascal', () => {
      const result = convert('pressure', 1, 'cmh2o', 'pascal')
      expect(result.value).toBeCloseTo(98.0665, 2)
      expect(result.unit).toBe('pascal')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very low pressures', () => {
      const result = convert('pressure', 0.001, 'pascal', 'mmhg')
      expect(result.value).toBeCloseTo(0.0000075, 6)
      expect(result.unit).toBe('mmhg')
    })

    test('should handle very high pressures', () => {
      const result = convert('pressure', 1000, 'megapascal', 'atmosphere')
      expect(result.value).toBeCloseTo(9869, 0)
      expect(result.unit).toBe('atmosphere')
    })
  })
}) 
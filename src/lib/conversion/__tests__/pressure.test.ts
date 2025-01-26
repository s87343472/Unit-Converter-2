import { convert } from '../converter'

describe('Pressure Conversion', () => {
  // 测试公制压力单位转换
  describe('Metric Pressure Units', () => {
    test('pascal to kilopascal', () => {
      const result = convert('pressure', 1000, 'pascal', 'kilopascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilopascal')
    })

    test('kilopascal to megapascal', () => {
      const result = convert('pressure', 1000, 'kilopascal', 'megapascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('megapascal')
    })

    test('hectopascal to pascal', () => {
      const result = convert('pressure', 1, 'hectopascal', 'pascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('pascal')
    })
  })

  // 测试大气压相关单位转换
  describe('Atmospheric Pressure Units', () => {
    test('standard atmosphere to pascal', () => {
      const result = convert('pressure', 1, 'standard_atmosphere', 'pascal')
      expect(result.value).toBeCloseTo(101325, 6)
      expect(result.unit).toBe('pascal')
    })

    test('bar to kilopascal', () => {
      const result = convert('pressure', 1, 'bar', 'kilopascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('kilopascal')
    })

    test('millibar to hectopascal', () => {
      const result = convert('pressure', 1, 'millibar', 'hectopascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('hectopascal')
    })
  })

  // 测试医疗压力单位转换
  describe('Medical Pressure Units', () => {
    test('millimeter mercury to pascal', () => {
      const result = convert('pressure', 1, 'millimeter_mercury', 'pascal')
      expect(result.value).toBeCloseTo(133.322387415, 9)
      expect(result.unit).toBe('pascal')
    })

    test('centimeter water to pascal', () => {
      const result = convert('pressure', 1, 'centimeter_water', 'pascal')
      expect(result.value).toBeCloseTo(98.0665, 6)
      expect(result.unit).toBe('pascal')
    })

    test('millimeter mercury to centimeter water', () => {
      const result = convert('pressure', 1, 'millimeter_mercury', 'centimeter_water')
      expect(result.value).toBeCloseTo(1.359808, 6)
      expect(result.unit).toBe('centimeter_water')
    })
  })

  // 测试工程压力单位转换
  describe('Engineering Pressure Units', () => {
    test('psi to pascal', () => {
      const result = convert('pressure', 1, 'psi', 'pascal')
      expect(result.value).toBeCloseTo(6894.757293168, 9)
      expect(result.unit).toBe('pascal')
    })

    test('ksi to megapascal', () => {
      const result = convert('pressure', 1, 'ksi', 'megapascal')
      expect(result.value).toBeCloseTo(6.894757293168, 9)
      expect(result.unit).toBe('megapascal')
    })

    test('psi to bar', () => {
      const result = convert('pressure', 1, 'psi', 'bar')
      expect(result.value).toBeCloseTo(0.068947573, 9)
      expect(result.unit).toBe('bar')
    })
  })

  // 测试气象压力单位转换
  describe('Meteorological Pressure Units', () => {
    test('inch mercury to pascal', () => {
      const result = convert('pressure', 1, 'inch_mercury', 'pascal')
      expect(result.value).toBeCloseTo(3386.389, 6)
      expect(result.unit).toBe('pascal')
    })

    test('millimeter mercury to hectopascal', () => {
      const result = convert('pressure', 760, 'millimeter_mercury', 'hectopascal')
      expect(result.value).toBeCloseTo(1013.25, 2)
      expect(result.unit).toBe('hectopascal')
    })
  })

  // 测试真空压力单位转换
  describe('Vacuum Pressure Units', () => {
    test('torr to pascal', () => {
      const result = convert('pressure', 1, 'torr', 'pascal')
      expect(result.value).toBeCloseTo(133.322368421, 9)
      expect(result.unit).toBe('pascal')
    })

    test('micron of mercury to pascal', () => {
      const result = convert('pressure', 1000, 'micron_of_mercury', 'pascal')
      expect(result.value).toBeCloseTo(133.322387415, 9)
      expect(result.unit).toBe('pascal')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('atmosphere to bar', () => {
      const result = convert('pressure', 1, 'standard_atmosphere', 'bar')
      expect(result.value).toBeCloseTo(1.01325, 6)
      expect(result.unit).toBe('bar')
    })

    test('psi to millimeter mercury', () => {
      const result = convert('pressure', 1, 'psi', 'millimeter_mercury')
      expect(result.value).toBeCloseTo(51.7149, 4)
      expect(result.unit).toBe('millimeter_mercury')
    })

    test('bar to psi', () => {
      const result = convert('pressure', 1, 'bar', 'psi')
      expect(result.value).toBeCloseTo(14.503774, 6)
      expect(result.unit).toBe('psi')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small pressures', () => {
      const result = convert('pressure', 0.000001, 'pascal', 'kilopascal')
      expect(result.value).toBeCloseTo(0.000000001, 9)
      expect(result.unit).toBe('kilopascal')
    })

    test('should handle very large pressures', () => {
      const result = convert('pressure', 1000000, 'megapascal', 'pascal')
      expect(result.value).toBeCloseTo(1e12, 6)
      expect(result.unit).toBe('pascal')
    })

    test('should handle fractional pressures', () => {
      const result = convert('pressure', 0.5, 'standard_atmosphere', 'kilopascal')
      expect(result.value).toBeCloseTo(50.6625, 6)
      expect(result.unit).toBe('kilopascal')
    })
  })
}) 
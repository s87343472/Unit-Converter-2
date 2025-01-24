import { convert } from '../converter'

describe('Pressure Conversion', () => {
  // 测试公制压力单位转换
  describe('Metric Pressure Units', () => {
    test('pascal to kilopascal', () => {
      const result = convert('pressure', 1000, 'metric_pascal', 'metric_kilopascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilopascal')
    })

    test('kilopascal to megapascal', () => {
      const result = convert('pressure', 1000, 'metric_kilopascal', 'metric_megapascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('hectopascal to pascal', () => {
      const result = convert('pressure', 1, 'metric_hectopascal', 'metric_pascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 测试大气压相关单位转换
  describe('Atmospheric Pressure Units', () => {
    test('standard atmosphere to pascal', () => {
      const result = convert('pressure', 1, 'standard_atmosphere', 'metric_pascal')
      expect(result.value).toBeCloseTo(101325, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('bar to kilopascal', () => {
      const result = convert('pressure', 1, 'metric_bar', 'metric_kilopascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('metric_kilopascal')
    })

    test('millibar to hectopascal', () => {
      const result = convert('pressure', 1, 'metric_millibar', 'metric_hectopascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_hectopascal')
    })
  })

  // 测试医疗压力单位转换
  describe('Medical Pressure Units', () => {
    test('millimeter mercury to pascal', () => {
      const result = convert('pressure', 1, 'medical_millimeter_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322387415, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('centimeter water to pascal', () => {
      const result = convert('pressure', 1, 'medical_centimeter_water', 'metric_pascal')
      expect(result.value).toBeCloseTo(98.0665, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('millimeter mercury to centimeter water', () => {
      const result = convert('pressure', 1, 'medical_millimeter_mercury', 'medical_centimeter_water')
      expect(result.value).toBeCloseTo(1.359808, 6)
      expect(result.unit).toBe('medical_centimeter_water')
    })
  })

  // 测试工程压力单位转换
  describe('Engineering Pressure Units', () => {
    test('psi to pascal', () => {
      const result = convert('pressure', 1, 'engineering_psi', 'metric_pascal')
      expect(result.value).toBeCloseTo(6894.757293168, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('ksi to megapascal', () => {
      const result = convert('pressure', 1, 'engineering_ksi', 'metric_megapascal')
      expect(result.value).toBeCloseTo(6.894757293168, 6)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('psi to bar', () => {
      const result = convert('pressure', 1, 'engineering_psi', 'metric_bar')
      expect(result.value).toBeCloseTo(0.068947573, 6)
      expect(result.unit).toBe('metric_bar')
    })
  })

  // 测试气象压力单位转换
  describe('Meteorological Pressure Units', () => {
    test('inch mercury to pascal', () => {
      const result = convert('pressure', 1, 'meteorology_inch_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(3386.389, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('millimeter mercury to hectopascal', () => {
      const result = convert('pressure', 760, 'meteorology_millimeter_mercury', 'metric_hectopascal')
      expect(result.value).toBeCloseTo(1013.25, 2)
      expect(result.unit).toBe('metric_hectopascal')
    })
  })

  // 测试真空压力单位转换
  describe('Vacuum Pressure Units', () => {
    test('torr to pascal', () => {
      const result = convert('pressure', 1, 'vacuum_torr', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322368421, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('micron mercury to pascal', () => {
      const result = convert('pressure', 1000, 'vacuum_micron_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322387415, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('atmosphere to bar', () => {
      const result = convert('pressure', 1, 'standard_atmosphere', 'metric_bar')
      expect(result.value).toBeCloseTo(1.01325, 6)
      expect(result.unit).toBe('metric_bar')
    })

    test('psi to millimeter mercury', () => {
      const result = convert('pressure', 1, 'engineering_psi', 'medical_millimeter_mercury')
      expect(result.value).toBeCloseTo(51.7149, 4)
      expect(result.unit).toBe('medical_millimeter_mercury')
    })

    test('bar to psi', () => {
      const result = convert('pressure', 1, 'metric_bar', 'engineering_psi')
      expect(result.value).toBeCloseTo(14.503774, 6)
      expect(result.unit).toBe('engineering_psi')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small pressures', () => {
      const result = convert('pressure', 0.000001, 'metric_pascal', 'metric_kilopascal')
      expect(result.value).toBeCloseTo(0.000000001, 12)
      expect(result.unit).toBe('metric_kilopascal')
    })

    test('should handle very large pressures', () => {
      const result = convert('pressure', 1000000, 'metric_megapascal', 'metric_pascal')
      expect(result.value).toBeCloseTo(1e12, 4)
      expect(result.unit).toBe('metric_pascal')
    })

    test('should handle fractional pressures', () => {
      const result = convert('pressure', 0.5, 'standard_atmosphere', 'metric_kilopascal')
      expect(result.value).toBeCloseTo(50.6625, 6)
      expect(result.unit).toBe('metric_kilopascal')
    })
  })
}) 
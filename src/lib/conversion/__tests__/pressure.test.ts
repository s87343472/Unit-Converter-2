import { convert } from '../converter'

describe('Pressure Conversion', () => {
  // 公制单位测试
  describe('Metric Unit Conversions', () => {
    test('metric_pascal to metric_kilopascal', () => {
      const result = convert('pressure', 1000, 'metric_pascal', 'metric_kilopascal')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilopascal')
    })

    test('metric_pascal to metric_megapascal', () => {
      const result = convert('pressure', 2e6, 'metric_pascal', 'metric_megapascal')
      expect(result.value).toBe(2)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('metric_hectopascal to metric_kilopascal', () => {
      const result = convert('pressure', 10, 'metric_hectopascal', 'metric_kilopascal')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilopascal')
    })
  })

  // 工业单位测试
  describe('Industrial Unit Conversions', () => {
    test('industrial_bar to metric_pascal', () => {
      const result = convert('pressure', 1, 'industrial_bar', 'metric_pascal')
      expect(result.value).toBe(1e5)
      expect(result.unit).toBe('metric_pascal')
    })

    test('industrial_millibar to industrial_bar', () => {
      const result = convert('pressure', 1000, 'industrial_millibar', 'industrial_bar')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('industrial_bar')
    })
  })

  // 科学单位测试
  describe('Scientific Unit Conversions', () => {
    test('scientific_atmosphere to metric_pascal', () => {
      const result = convert('pressure', 1, 'scientific_atmosphere', 'metric_pascal')
      expect(result.value).toBe(101325)
      expect(result.unit).toBe('metric_pascal')
    })

    test('scientific_torr to metric_pascal', () => {
      const result = convert('pressure', 1, 'scientific_torr', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 医学单位测试
  describe('Medical Unit Conversions', () => {
    test('medical_millimeter_of_mercury to metric_pascal', () => {
      const result = convert('pressure', 1, 'medical_millimeter_of_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322)
      expect(result.unit).toBe('metric_pascal')
    })

    test('medical_millimeter_of_mercury to scientific_torr', () => {
      const result = convert('pressure', 1, 'medical_millimeter_of_mercury', 'scientific_torr')
      expect(result.value).toBeCloseTo(1)
      expect(result.unit).toBe('scientific_torr')
    })
  })

  // 英制单位测试
  describe('Imperial Unit Conversions', () => {
    test('imperial_pound_per_square_inch to metric_pascal', () => {
      const result = convert('pressure', 1, 'imperial_pound_per_square_inch', 'metric_pascal')
      expect(result.value).toBeCloseTo(6894.76)
      expect(result.unit).toBe('metric_pascal')
    })

    test('imperial_pound_per_square_foot to metric_pascal', () => {
      const result = convert('pressure', 1, 'imperial_pound_per_square_foot', 'metric_pascal')
      expect(result.value).toBeCloseTo(47.8803)
      expect(result.unit).toBe('metric_pascal')
    })

    test('imperial_inch_of_mercury to metric_pascal', () => {
      const result = convert('pressure', 1, 'imperial_inch_of_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(3386.39)
      expect(result.unit).toBe('metric_pascal')
    })

    test('imperial_inch_of_water to metric_pascal', () => {
      const result = convert('pressure', 1, 'imperial_inch_of_water', 'metric_pascal')
      expect(result.value).toBeCloseTo(249.089)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 工程单位测试
  describe('Engineering Unit Conversions', () => {
    test('engineering_kilopound_per_square_inch to imperial_pound_per_square_inch', () => {
      const result = convert('pressure', 1, 'engineering_kilopound_per_square_inch', 'imperial_pound_per_square_inch')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('imperial_pound_per_square_inch')
    })

    test('engineering_centimeter_of_water to metric_pascal', () => {
      const result = convert('pressure', 1, 'engineering_centimeter_of_water', 'metric_pascal')
      expect(result.value).toBeCloseTo(98.0665)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('industrial_bar to scientific_atmosphere', () => {
      const result = convert('pressure', 1.01325, 'industrial_bar', 'scientific_atmosphere')
      expect(result.value).toBeCloseTo(1)
      expect(result.unit).toBe('scientific_atmosphere')
    })

    test('medical_millimeter_of_mercury to imperial_pound_per_square_inch', () => {
      const result = convert('pressure', 51.7149, 'medical_millimeter_of_mercury', 'imperial_pound_per_square_inch')
      expect(result.value).toBeCloseTo(1)
      expect(result.unit).toBe('imperial_pound_per_square_inch')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('pressure', 0, 'metric_pascal', 'imperial_pound_per_square_inch')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('imperial_pound_per_square_inch')
    })

    test('very small value conversion', () => {
      const result = convert('pressure', 1e-10, 'metric_pascal', 'metric_megapascal')
      expect(result.value).toBe(1e-16)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('very large value conversion', () => {
      const result = convert('pressure', 1e10, 'metric_pascal', 'engineering_kilopound_per_square_inch')
      expect(result.value).toBeCloseTo(1450.377)
      expect(result.unit).toBe('engineering_kilopound_per_square_inch')
    })
  })
}) 
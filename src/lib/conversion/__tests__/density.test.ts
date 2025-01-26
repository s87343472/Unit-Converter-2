import { convert } from '../converter'

describe('Density Conversion', () => {
  // 测试公制密度单位转换
  describe('Metric Density Units', () => {
    test('kilogram per cubic meter to gram per cubic centimeter', () => {
      const result = convert('density', 1000, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('gram per cubic centimeter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试液体密度单位转换
  describe('Liquid Density Units', () => {
    test('gram per milliliter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'gram_per_milliliter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('kilogram per liter to gram per milliliter', () => {
      const result = convert('density', 1, 'kilogram_per_liter', 'gram_per_milliliter')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gram_per_milliliter')
    })

    test('gram per liter to kilogram per cubic meter', () => {
      const result = convert('density', 1000, 'gram_per_liter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试英制密度单位转换
  describe('Imperial Density Units', () => {
    test('pound per cubic foot to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'pound_per_cubic_foot', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(16.018463374, 9)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('pound per cubic inch to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'pound_per_cubic_inch', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(27679.904710191, 9)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('ounce per cubic foot to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'ounce_per_cubic_foot', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1.001153961, 9)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试美制密度单位转换
  describe('US Density Units', () => {
    test('pound per gallon to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'pound_per_gallon', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(119.826427, 9)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('ounce per gallon to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'ounce_per_gallon', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(7.489151688, 9)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试科学密度单位转换
  describe('Scientific Density Units', () => {
    test('gram per cubic meter to kilogram per cubic meter', () => {
      const result = convert('density', 1000, 'gram_per_cubic_meter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('milligram per cubic meter to gram per cubic meter', () => {
      const result = convert('density', 1000, 'milligram_per_cubic_meter', 'gram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gram_per_cubic_meter')
    })

    test('microgram per cubic meter to milligram per cubic meter', () => {
      const result = convert('density', 1000, 'microgram_per_cubic_meter', 'milligram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('milligram_per_cubic_meter')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('pound per cubic foot to gram per cubic centimeter', () => {
      const result = convert('density', 1, 'pound_per_cubic_foot', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(0.016018463374, 9)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('gram per milliliter to pound per cubic inch', () => {
      const result = convert('density', 1, 'gram_per_milliliter', 'pound_per_cubic_inch')
      expect(result.value).toBeCloseTo(0.036127292, 9)
      expect(result.unit).toBe('pound_per_cubic_inch')
    })

    test('kilogram per liter to pound per gallon', () => {
      const result = convert('density', 1, 'kilogram_per_liter', 'pound_per_gallon')
      expect(result.value).toBeCloseTo(8.345404452, 9)
      expect(result.unit).toBe('pound_per_gallon')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small densities', () => {
      const result = convert('density', 0.000001, 'kilogram_per_cubic_meter', 'microgram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('microgram_per_cubic_meter')
    })

    test('should handle very large densities', () => {
      const result = convert('density', 1000, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000000, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('should handle fractional densities', () => {
      const result = convert('density', 0.5, 'gram_per_milliliter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(500, 6)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })
}) 
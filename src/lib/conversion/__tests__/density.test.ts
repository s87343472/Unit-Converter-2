import { convert } from '../converter'

describe('Density Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('kilogram per cubic meter to gram per cubic centimeter', () => {
      const result = convert('density', 1000, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('gram per cubic centimeter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 0)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试液体密度单位
  describe('Liquid Density Units', () => {
    test('kilogram per liter to gram per milliliter', () => {
      const result = convert('density', 1, 'kilogram_per_liter', 'gram_per_milliliter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('gram_per_milliliter')
    })

    test('gram per milliliter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'gram_per_milliliter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 0)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试英制单位
  describe('Imperial Units', () => {
    test('pound per cubic foot to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'pound_per_cubic_foot', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(16.02, 2)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('pound per cubic inch to gram per cubic centimeter', () => {
      const result = convert('density', 1, 'pound_per_cubic_inch', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(27.68, 2)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('US pound per gallon to gram per milliliter', () => {
      const result = convert('density', 1, 'pound_per_gallon_us', 'gram_per_milliliter')
      expect(result.value).toBeCloseTo(0.120, 3)
      expect(result.unit).toBe('gram_per_milliliter')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very low densities', () => {
      const result = convert('density', 0.001, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(0.000001, 6)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('should handle very high densities', () => {
      const result = convert('density', 1000, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000000, 0)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })
}) 
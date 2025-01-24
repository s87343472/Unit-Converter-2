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

  // 测试工业单位
  describe('Industrial Units', () => {
    test('slug per cubic foot to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'slug_per_cubic_foot', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(515.379, 3)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('kilogram per cubic decimeter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'kilogram_per_cubic_decimeter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1000, 0)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })
  })

  // 测试科学单位
  describe('Scientific Units', () => {
    test('gram per cubic meter to kilogram per cubic meter', () => {
      const result = convert('density', 1000, 'gram_per_cubic_meter', 'kilogram_per_cubic_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('kilogram_per_cubic_meter')
    })

    test('milligram per cubic centimeter to gram per cubic centimeter', () => {
      const result = convert('density', 1000, 'milligram_per_cubic_centimeter', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('milligram per milliliter to gram per milliliter', () => {
      const result = convert('density', 1000, 'milligram_per_milliliter', 'gram_per_milliliter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('gram_per_milliliter')
    })
  })

  // 测试特殊应用单位
  describe('Special Application Units', () => {
    test('kilogram per cubic centimeter to gram per cubic centimeter', () => {
      const result = convert('density', 1, 'kilogram_per_cubic_centimeter', 'gram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(1000, 0)
      expect(result.unit).toBe('gram_per_cubic_centimeter')
    })

    test('metric ton per cubic meter to kilogram per cubic meter', () => {
      const result = convert('density', 1, 'metric_ton_per_cubic_meter', 'kilogram_per_cubic_meter')
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

  // 测试跨单位系统转换
  describe('Cross-System Conversions', () => {
    test('slug per cubic foot to pound per cubic foot', () => {
      const result = convert('density', 1, 'slug_per_cubic_foot', 'pound_per_cubic_foot')
      expect(result.value).toBeCloseTo(32.174, 3)
      expect(result.unit).toBe('pound_per_cubic_foot')
    })

    test('kilogram per cubic decimeter to pound per cubic foot', () => {
      const result = convert('density', 1, 'kilogram_per_cubic_decimeter', 'pound_per_cubic_foot')
      expect(result.value).toBeCloseTo(62.428, 3)
      expect(result.unit).toBe('pound_per_cubic_foot')
    })

    test('metric ton per cubic meter to pound per cubic foot', () => {
      const result = convert('density', 1, 'metric_ton_per_cubic_meter', 'pound_per_cubic_foot')
      expect(result.value).toBeCloseTo(62.428, 3)
      expect(result.unit).toBe('pound_per_cubic_foot')
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

    test('should handle extreme precision', () => {
      const result = convert('density', 0.000001, 'gram_per_cubic_meter', 'milligram_per_cubic_centimeter')
      expect(result.value).toBeCloseTo(0.000000001, 9)
      expect(result.unit).toBe('milligram_per_cubic_centimeter')
    })
  })
}) 
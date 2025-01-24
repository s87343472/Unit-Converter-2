import { convert } from '../converter'

describe('Weight Conversion', () => {
  // 测试公制单位转换
  describe('Metric Units', () => {
    test('kilogram to gram', () => {
      const result = convert('weight', 1, 'metric_kilogram', 'metric_gram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_gram')
    })

    test('gram to milligram', () => {
      const result = convert('weight', 1, 'metric_gram', 'metric_milligram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_milligram')
    })

    test('milligram to microgram', () => {
      const result = convert('weight', 1, 'metric_milligram', 'metric_microgram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_microgram')
    })

    test('kilogram to tonne', () => {
      const result = convert('weight', 1000, 'metric_kilogram', 'metric_tonne')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_tonne')
    })
  })

  // 测试英制单位转换
  describe('Imperial Units', () => {
    test('pound to ounce', () => {
      const result = convert('weight', 1, 'imperial_pound', 'imperial_ounce')
      expect(result.value).toBe(16)
      expect(result.unit).toBe('imperial_ounce')
    })

    test('stone to pound', () => {
      const result = convert('weight', 1, 'imperial_stone', 'imperial_pound')
      expect(result.value).toBe(14)
      expect(result.unit).toBe('imperial_pound')
    })

    test('ton to stone', () => {
      const result = convert('weight', 1, 'imperial_ton', 'imperial_stone')
      expect(result.value).toBe(160)
      expect(result.unit).toBe('imperial_stone')
    })
  })

  // 测试中国传统单位转换
  describe('Chinese Traditional Units', () => {
    test('dan to jin', () => {
      const result = convert('weight', 1, 'chinese_dan', 'chinese_jin')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('chinese_jin')
    })

    test('jin to liang', () => {
      const result = convert('weight', 1, 'chinese_jin', 'chinese_liang')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_liang')
    })

    test('liang to qian', () => {
      const result = convert('weight', 1, 'chinese_liang', 'chinese_qian')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_qian')
    })
  })

  // 测试珠宝重量单位转换
  describe('Jewelry Weight Units', () => {
    test('carat to gram', () => {
      const result = convert('weight', 1, 'jewelry_carat', 'metric_gram')
      expect(result.value).toBe(0.2)
      expect(result.unit).toBe('metric_gram')
    })

    test('grain to carat', () => {
      const result = convert('weight', 1, 'jewelry_grain', 'jewelry_carat')
      expect(result.value).toBeCloseTo(0.324, 3)
      expect(result.unit).toBe('jewelry_carat')
    })
  })

  // 测试药用重量单位转换
  describe('Pharmacy Weight Units', () => {
    test('pharmacy ounce to dram', () => {
      const result = convert('weight', 1, 'pharmacy_ounce', 'pharmacy_dram')
      expect(result.value).toBe(16)
      expect(result.unit).toBe('pharmacy_dram')
    })

    test('dram to grain', () => {
      const result = convert('weight', 1, 'pharmacy_dram', 'pharmacy_grain')
      expect(result.value).toBeCloseTo(27.34375, 5)
      expect(result.unit).toBe('pharmacy_grain')
    })
  })

  // 测试食品工业单位转换
  describe('Food Industry Units', () => {
    test('food pound to food ounce', () => {
      const result = convert('weight', 1, 'food_pound', 'food_ounce')
      expect(result.value).toBe(16)
      expect(result.unit).toBe('food_ounce')
    })

    test('food ounce to gram', () => {
      const result = convert('weight', 1, 'food_ounce', 'metric_gram')
      expect(result.value).toBeCloseTo(28.35, 2)
      expect(result.unit).toBe('metric_gram')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('kilogram to pound', () => {
      const result = convert('weight', 1, 'metric_kilogram', 'imperial_pound')
      expect(result.value).toBeCloseTo(2.20462, 5)
      expect(result.unit).toBe('imperial_pound')
    })

    test('jin to pound', () => {
      const result = convert('weight', 1, 'chinese_jin', 'imperial_pound')
      expect(result.value).toBeCloseTo(1.10231, 5)
      expect(result.unit).toBe('imperial_pound')
    })

    test('carat to grain', () => {
      const result = convert('weight', 1, 'jewelry_carat', 'pharmacy_grain')
      expect(result.value).toBeCloseTo(3.08647, 5)
      expect(result.unit).toBe('pharmacy_grain')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small weights', () => {
      const result = convert('weight', 1, 'metric_microgram', 'metric_kilogram')
      expect(result.value).toBe(1e-9)
      expect(result.unit).toBe('metric_kilogram')
    })

    test('should handle very large weights', () => {
      const result = convert('weight', 1000, 'metric_tonne', 'metric_gram')
      expect(result.value).toBe(1e9)
      expect(result.unit).toBe('metric_gram')
    })

    test('should handle fractional weights', () => {
      const result = convert('weight', 0.5, 'imperial_ounce', 'metric_gram')
      expect(result.value).toBeCloseTo(14.17476, 5)
      expect(result.unit).toBe('metric_gram')
    })
  })
}) 
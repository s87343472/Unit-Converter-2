import { convert } from '../converter'

/**
 * 重量单位转换测试
 * 
 * 精度控制说明：
 * 1. 遵循 ISO 80000-1:2022 标准的精度要求
 * 2. 对于需要精确匹配的简单转换（如 1 kg = 1000 g），使用 toBe 进行严格相等判断
 * 3. 对于涉及复杂计算的转换，使用 toBeCloseTo(value, 5) 验证小数点后 5 位
 * 4. 测试用例包括：
 *    - 整数倍转换（如公制单位间的转换）
 *    - 分数转换（如 0.5 盎司到克）
 *    - 跨系统转换（如公制到 Avoirdupois）
 *    - 极大/极小值处理
 */
describe('Weight Conversion', () => {
  // 测试公制单位转换
  describe('Metric Units', () => {
    test('metric_kilogram to metric_gram', () => {
      const result = convert('weight', 1, 'metric_kilogram', 'metric_gram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_gram')
    })

    test('metric_gram to metric_milligram', () => {
      const result = convert('weight', 1, 'metric_gram', 'metric_milligram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_milligram')
    })

    test('metric_milligram to metric_microgram', () => {
      const result = convert('weight', 1, 'metric_milligram', 'metric_microgram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_microgram')
    })

    test('metric_kilogram to metric_tonne', () => {
      const result = convert('weight', 1000, 'metric_kilogram', 'metric_tonne')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_tonne')
    })
  })

  // 测试英制单位转换
  describe('Imperial Units', () => {
    test('imperial_pound to imperial_ounce', () => {
      const result = convert('weight', 1, 'imperial_pound', 'imperial_ounce')
      expect(result.value).toBe(16)
      expect(result.unit).toBe('imperial_ounce')
    })

    test('imperial_stone to imperial_pound', () => {
      const result = convert('weight', 1, 'imperial_stone', 'imperial_pound')
      expect(result.value).toBe(14)
      expect(result.unit).toBe('imperial_pound')
    })

    test('imperial_long_ton to imperial_stone', () => {
      const result = convert('weight', 1, 'imperial_long_ton', 'imperial_stone')
      expect(result.value).toBeCloseTo(160, 5)
      expect(result.unit).toBe('imperial_stone')
    })
  })

  // 测试中国传统单位转换
  describe('Chinese Traditional Units', () => {
    test('traditional_jin to traditional_liang', () => {
      const result = convert('weight', 1, 'traditional_jin', 'traditional_liang')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('traditional_liang')
    })

    test('traditional_liang to traditional_qian', () => {
      const result = convert('weight', 1, 'traditional_liang', 'traditional_qian')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('traditional_qian')
    })
  })

  // 测试珠宝重量单位转换
  describe('Jewelry Weight Units', () => {
    test('jewelry_carat to metric_gram', () => {
      const result = convert('weight', 1, 'jewelry_carat', 'metric_gram')
      expect(result.value).toBe(0.2)
      expect(result.unit).toBe('metric_gram')
    })

    test('jewelry_grain to jewelry_carat', () => {
      const result = convert('weight', 1, 'jewelry_grain', 'jewelry_carat')
      expect(result.value).toBeCloseTo(0.3239945, 5)
      expect(result.unit).toBe('jewelry_carat')
    })
  })

  // 测试药用重量单位转换
  describe('Medical Weight Units', () => {
    test('medical_ounce to medical_dram', () => {
      const result = convert('weight', 1, 'medical_ounce', 'medical_dram')
      expect(result.value).toBeCloseTo(8, 5)
      expect(result.unit).toBe('medical_dram')
    })

    test('medical_dram to medical_grain', () => {
      const result = convert('weight', 1, 'medical_dram', 'medical_grain')
      expect(result.value).toBeCloseTo(60, 5)
      expect(result.unit).toBe('medical_grain')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('metric_kilogram to imperial_pound', () => {
      const result = convert('weight', 1, 'metric_kilogram', 'imperial_pound')
      expect(result.value).toBeCloseTo(2.20462, 5)
      expect(result.unit).toBe('imperial_pound')
    })

    test('traditional_jin to imperial_pound', () => {
      const result = convert('weight', 1, 'traditional_jin', 'imperial_pound')
      expect(result.value).toBeCloseTo(1.10231, 5)
      expect(result.unit).toBe('imperial_pound')
    })

    test('jewelry_carat to medical_grain', () => {
      const result = convert('weight', 1, 'jewelry_carat', 'medical_grain')
      expect(result.value).toBeCloseTo(3.08647, 5)
      expect(result.unit).toBe('medical_grain')
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
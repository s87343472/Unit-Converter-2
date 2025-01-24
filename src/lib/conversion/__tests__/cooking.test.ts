import { convert } from '../converter'

describe('Cooking Unit Conversion', () => {
  // 测试公制体积单位转换
  describe('Metric Volume Units', () => {
    test('milliliter to liter', () => {
      const result = convert('cooking', 1000, 'metric_milliliter', 'metric_liter')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_liter')
    })

    test('liter to deciliter', () => {
      const result = convert('cooking', 1, 'metric_liter', 'metric_deciliter')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('metric_deciliter')
    })

    test('deciliter to centiliter', () => {
      const result = convert('cooking', 1, 'metric_deciliter', 'metric_centiliter')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('metric_centiliter')
    })
  })

  // 测试美制体积单位转换
  describe('US Volume Units', () => {
    test('US cup to milliliter', () => {
      const result = convert('cooking', 1, 'us_cup', 'metric_milliliter')
      expect(result.value).toBeCloseTo(236.588, 3)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('US fluid ounce to tablespoon', () => {
      const result = convert('cooking', 1, 'us_fluid_ounce', 'us_tablespoon')
      expect(result.value).toBeCloseTo(2, 3)
      expect(result.unit).toBe('us_tablespoon')
    })

    test('US tablespoon to teaspoon', () => {
      const result = convert('cooking', 1, 'us_tablespoon', 'us_teaspoon')
      expect(result.value).toBeCloseTo(3, 3)
      expect(result.unit).toBe('us_teaspoon')
    })
  })

  // 测试英制体积单位转换
  describe('Imperial Volume Units', () => {
    test('Imperial cup to milliliter', () => {
      const result = convert('cooking', 1, 'imperial_cup', 'metric_milliliter')
      expect(result.value).toBeCloseTo(284.131, 3)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('Imperial fluid ounce to tablespoon', () => {
      const result = convert('cooking', 1, 'imperial_fluid_ounce', 'imperial_tablespoon')
      expect(result.value).toBeCloseTo(1.6, 3)
      expect(result.unit).toBe('imperial_tablespoon')
    })

    test('Imperial tablespoon to teaspoon', () => {
      const result = convert('cooking', 1, 'imperial_tablespoon', 'imperial_teaspoon')
      expect(result.value).toBeCloseTo(3, 3)
      expect(result.unit).toBe('imperial_teaspoon')
    })
  })

  // 测试中式计量单位转换
  describe('Chinese Cooking Units', () => {
    test('Chinese bowl to milliliter', () => {
      const result = convert('cooking', 1, 'chinese_bowl', 'metric_milliliter')
      expect(result.value).toBe(300)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('Chinese cup to milliliter', () => {
      const result = convert('cooking', 1, 'chinese_cup', 'metric_milliliter')
      expect(result.value).toBe(200)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('Chinese tablespoon to teaspoon', () => {
      const result = convert('cooking', 1, 'chinese_tablespoon', 'chinese_teaspoon')
      expect(result.value).toBe(3)
      expect(result.unit).toBe('chinese_teaspoon')
    })
  })

  // 测试日式计量单位转换
  describe('Japanese Cooking Units', () => {
    test('Japanese cup to milliliter', () => {
      const result = convert('cooking', 1, 'japanese_cup', 'metric_milliliter')
      expect(result.value).toBeCloseTo(180.39, 2)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('Japanese tablespoon to teaspoon', () => {
      const result = convert('cooking', 1, 'japanese_tablespoon', 'japanese_teaspoon')
      expect(result.value).toBe(3)
      expect(result.unit).toBe('japanese_teaspoon')
    })
  })

  // 测试重量单位转换
  describe('Weight Units', () => {
    test('kilogram to gram', () => {
      const result = convert('cooking', 1, 'weight_kilogram', 'weight_gram')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('weight_gram')
    })

    test('pound to ounce', () => {
      const result = convert('cooking', 1, 'weight_pound', 'weight_ounce')
      expect(result.value).toBeCloseTo(16, 3)
      expect(result.unit).toBe('weight_ounce')
    })

    test('ounce to gram', () => {
      const result = convert('cooking', 1, 'weight_ounce', 'weight_gram')
      expect(result.value).toBeCloseTo(28.3495, 4)
      expect(result.unit).toBe('weight_gram')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('US cup to Imperial cup', () => {
      const result = convert('cooking', 1, 'us_cup', 'imperial_cup')
      expect(result.value).toBeCloseTo(0.832674, 6)
      expect(result.unit).toBe('imperial_cup')
    })

    test('Chinese cup to Japanese cup', () => {
      const result = convert('cooking', 1, 'chinese_cup', 'japanese_cup')
      expect(result.value).toBeCloseTo(1.108710, 6)
      expect(result.unit).toBe('japanese_cup')
    })

    test('US tablespoon to Chinese tablespoon', () => {
      const result = convert('cooking', 1, 'us_tablespoon', 'chinese_tablespoon')
      expect(result.value).toBeCloseTo(0.985787, 6)
      expect(result.unit).toBe('chinese_tablespoon')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small volumes', () => {
      const result = convert('cooking', 0.1, 'metric_milliliter', 'us_teaspoon')
      expect(result.value).toBeCloseTo(0.0202884, 6)
      expect(result.unit).toBe('us_teaspoon')
    })

    test('should handle very large volumes', () => {
      const result = convert('cooking', 10000, 'metric_milliliter', 'us_cup')
      expect(result.value).toBeCloseTo(42.2675, 4)
      expect(result.unit).toBe('us_cup')
    })

    test('should handle weight to volume conversion precision', () => {
      const result = convert('cooking', 1000, 'weight_gram', 'metric_milliliter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_milliliter')
    })
  })
}) 
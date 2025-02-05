import { convert } from '../converter'

describe('Volume Conversion', () => {
  // 测试公制体积单位转换
  describe('Metric Volume Units', () => {
    test('cubic meter to cubic decimeter', () => {
      const result = convert('volume', 1, 'metric_cubic_meter', 'metric_cubic_decimeter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_cubic_decimeter')
    })

    test('cubic decimeter to cubic centimeter', () => {
      const result = convert('volume', 1, 'metric_cubic_decimeter', 'metric_cubic_centimeter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_cubic_centimeter')
    })

    test('cubic centimeter to cubic millimeter', () => {
      const result = convert('volume', 1, 'metric_cubic_centimeter', 'metric_cubic_millimeter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_cubic_millimeter')
    })
  })

  // 测试公制容量单位转换
  describe('Metric Capacity Units', () => {
    test('liter to milliliter', () => {
      const result = convert('volume', 1, 'metric_liter', 'metric_milliliter')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_milliliter')
    })

    test('deciliter to centiliter', () => {
      const result = convert('volume', 1, 'metric_deciliter', 'metric_centiliter')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('metric_centiliter')
    })

    test('liter to cubic decimeter', () => {
      const result = convert('volume', 1, 'metric_liter', 'metric_cubic_decimeter')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_cubic_decimeter')
    })
  })

  // 测试英制体积单位转换
  describe('Imperial Volume Units', () => {
    test('cubic yard to cubic foot', () => {
      const result = convert('volume', 1, 'imperial_cubic_yard', 'imperial_cubic_foot')
      expect(result.value).toBe(27)
      expect(result.unit).toBe('imperial_cubic_foot')
    })

    test('cubic foot to cubic inch', () => {
      const result = convert('volume', 1, 'imperial_cubic_foot', 'imperial_cubic_inch')
      expect(result.value).toBe(1728)
      expect(result.unit).toBe('imperial_cubic_inch')
    })
  })

  // 测试英制容量单位转换
  describe('Imperial Capacity Units', () => {
    test('gallon to quart', () => {
      const result = convert('volume', 1, 'imperial_gallon', 'imperial_quart')
      expect(result.value).toBe(4)
      expect(result.unit).toBe('imperial_quart')
    })

    test('quart to pint', () => {
      const result = convert('volume', 1, 'imperial_quart', 'imperial_pint')
      expect(result.value).toBe(2)
      expect(result.unit).toBe('imperial_pint')
    })

    test('pint to fluid ounce', () => {
      const result = convert('volume', 1, 'imperial_pint', 'imperial_fluid_ounce')
      expect(result.value).toBe(20)
      expect(result.unit).toBe('imperial_fluid_ounce')
    })
  })

  // 测试美制容量单位转换
  describe('US Capacity Units', () => {
    test('gallon to quart', () => {
      const result = convert('volume', 1, 'us_gallon', 'us_quart')
      expect(result.value).toBe(4)
      expect(result.unit).toBe('us_quart')
    })

    test('quart to pint', () => {
      const result = convert('volume', 1, 'us_quart', 'us_pint')
      expect(result.value).toBe(2)
      expect(result.unit).toBe('us_pint')
    })

    test('pint to fluid ounce', () => {
      const result = convert('volume', 1, 'us_pint', 'us_fluid_ounce')
      expect(result.value).toBe(16)
      expect(result.unit).toBe('us_fluid_ounce')
    })
  })

  // 测试中国传统容量单位转换
  describe('Chinese Traditional Units', () => {
    test('dan to dou', () => {
      const result = convert('volume', 1, 'chinese_dan', 'chinese_dou')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_dou')
    })

    test('dou to sheng', () => {
      const result = convert('volume', 1, 'chinese_dou', 'chinese_sheng')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_sheng')
    })
  })

  // 测试日本传统容量单位转换
  describe('Japanese Traditional Units', () => {
    test('koku to to', () => {
      const result = convert('volume', 1, 'japanese_koku', 'japanese_to')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('japanese_to')
    })

    test('to to sho', () => {
      const result = convert('volume', 1, 'japanese_to', 'japanese_sho')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('japanese_sho')
    })

    test('sho to go', () => {
      const result = convert('volume', 1, 'japanese_sho', 'japanese_go')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('japanese_go')
    })
  })

  // 测试工业容量单位转换
  describe('Industry Units', () => {
    test('oil barrel to beer barrel', () => {
      const result = convert('volume', 1, 'industrial_oil_barrel', 'industrial_beer_barrel')
      expect(result.value).toBeCloseTo(1.3548, 4)
      expect(result.unit).toBe('industrial_beer_barrel')
    })

    test('oil barrel to us gallon', () => {
      const result = convert('volume', 1, 'industrial_oil_barrel', 'us_gallon')
      expect(result.value).toBeCloseTo(42, 4)
      expect(result.unit).toBe('us_gallon')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('cubic meter to cubic yard', () => {
      const result = convert('volume', 1, 'metric_cubic_meter', 'imperial_cubic_yard')
      expect(result.value).toBeCloseTo(1.30795, 5)
      expect(result.unit).toBe('imperial_cubic_yard')
    })

    test('liter to us gallon', () => {
      const result = convert('volume', 1, 'metric_liter', 'us_gallon')
      expect(result.value).toBeCloseTo(0.264172, 6)
      expect(result.unit).toBe('us_gallon')
    })

    test('imperial gallon to us gallon', () => {
      const result = convert('volume', 1, 'imperial_gallon', 'us_gallon')
      expect(result.value).toBeCloseTo(1.20095, 5)
      expect(result.unit).toBe('us_gallon')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small volumes', () => {
      const result = convert('volume', 1, 'metric_cubic_millimeter', 'metric_cubic_meter')
      expect(result.value).toBe(1e-9)
      expect(result.unit).toBe('metric_cubic_meter')
    })

    test('should handle very large volumes', () => {
      const result = convert('volume', 1000, 'metric_cubic_meter', 'metric_cubic_millimeter')
      expect(result.value).toBe(1e12)
      expect(result.unit).toBe('metric_cubic_millimeter')
    })

    test('should handle fractional volumes', () => {
      const result = convert('volume', 0.5, 'metric_liter', 'metric_milliliter')
      expect(result.value).toBe(500)
      expect(result.unit).toBe('metric_milliliter')
    })
  })
}) 
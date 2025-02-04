import { convert } from '../converter'

describe('Length Conversion', () => {
  // 公制单位转换测试
  describe('Metric Units', () => {
    test('meter to kilometer', () => {
      const result = convert('length', 1000, 'metric_meter', 'metric_kilometer')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilometer')
    })

    test('meter to centimeter', () => {
      const result = convert('length', 1, 'metric_meter', 'metric_centimeter')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('metric_centimeter')
    })

    test('centimeter to millimeter', () => {
      const result = convert('length', 1, 'metric_centimeter', 'metric_millimeter')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('metric_millimeter')
    })

    test('millimeter to micrometer', () => {
      const result = convert('length', 1, 'metric_millimeter', 'metric_micrometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_micrometer')
    })

    test('micrometer to nanometer', () => {
      const result = convert('length', 1, 'metric_micrometer', 'metric_nanometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_nanometer')
    })

    test('nanometer to picometer', () => {
      const result = convert('length', 1, 'metric_nanometer', 'metric_picometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_picometer')
    })
  })

  // 英制单位转换测试
  describe('Imperial Units', () => {
    test('mile to yard', () => {
      const result = convert('length', 1, 'imperial_mile', 'imperial_yard')
      expect(result.value).toBe(1760)
      expect(result.unit).toBe('imperial_yard')
    })

    test('yard to foot', () => {
      const result = convert('length', 1, 'imperial_yard', 'imperial_foot')
      expect(result.value).toBe(3)
      expect(result.unit).toBe('imperial_foot')
    })

    test('foot to inch', () => {
      const result = convert('length', 1, 'imperial_foot', 'imperial_inch')
      expect(result.value).toBe(12)
      expect(result.unit).toBe('imperial_inch')
    })
  })

  // 航海单位转换测试
  describe('Nautical Units', () => {
    test('nautical mile to meter', () => {
      const result = convert('length', 1, 'nautical_mile', 'metric_meter')
      expect(result.value).toBe(1852)
      expect(result.unit).toBe('metric_meter')
    })

    test('fathom to meter', () => {
      const result = convert('length', 1, 'nautical_fathom', 'metric_meter')
      expect(result.value).toBe(1.8288)
      expect(result.unit).toBe('metric_meter')
    })

    test('cable to nautical mile', () => {
      const result = convert('length', 10, 'nautical_cable', 'nautical_mile')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('nautical_mile')
    })
  })

  // 天文单位转换测试
  describe('Astronomical Units', () => {
    test('light year to astronomical unit', () => {
      const result = convert('length', 1, 'astronomical_light_year', 'astronomical_unit')
      expect(result.value).toBeCloseTo(63241.1, 1)
      expect(result.unit).toBe('astronomical_unit')
    })

    test('parsec to light year', () => {
      const result = convert('length', 1, 'astronomical_parsec', 'astronomical_light_year')
      expect(result.value).toBeCloseTo(3.26156, 5)
      expect(result.unit).toBe('astronomical_light_year')
    })

    test('astronomical unit to kilometer', () => {
      const result = convert('length', 1, 'astronomical_unit', 'metric_kilometer')
      // 使用相对误差来比较大数值
      const relativeError = Math.abs((result.value - 149597870.7) / 149597870.7)
      expect(relativeError).toBeLessThan(2e-5)  // 允许0.002%的误差
      expect(result.unit).toBe('metric_kilometer')
    })
  })

  // 中国传统单位转换测试
  describe('Chinese Traditional Units', () => {
    test('li to zhang', () => {
      const result = convert('length', 1, 'traditional_li', 'traditional_zhang')
      expect(result.value).toBe(150)
      expect(result.unit).toBe('traditional_zhang')
    })

    test('zhang to chi', () => {
      const result = convert('length', 1, 'traditional_zhang', 'traditional_chi')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('traditional_chi')
    })

    test('chi to cun', () => {
      const result = convert('length', 1, 'traditional_chi', 'traditional_cun')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('traditional_cun')
    })

    test('cun to fen', () => {
      const result = convert('length', 1, 'traditional_cun', 'traditional_fen')
      expect(result.value).toBeCloseTo(10, 6)
      expect(result.unit).toBe('traditional_fen')
    })
  })

  // 测量单位转换测试
  describe('Survey Units', () => {
    test('chain to rod', () => {
      const result = convert('length', 1, 'survey_chain', 'survey_rod')
      expect(result.value).toBe(4)
      expect(result.unit).toBe('survey_rod')
    })

    test('rod to link', () => {
      const result = convert('length', 1, 'survey_rod', 'survey_link')
      expect(result.value).toBe(25)
      expect(result.unit).toBe('survey_link')
    })

    test('chain to meter', () => {
      const result = convert('length', 1, 'survey_chain', 'metric_meter')
      expect(result.value).toBe(20.1168)
      expect(result.unit).toBe('metric_meter')
    })
  })

  // 跨系统转换测试
  describe('Cross-System Conversions', () => {
    test('meter to foot', () => {
      const result = convert('length', 1, 'metric_meter', 'imperial_foot')
      expect(result.value).toBeCloseTo(3.28084, 5)
      expect(result.unit).toBe('imperial_foot')
    })

    test('kilometer to mile', () => {
      const result = convert('length', 1, 'metric_kilometer', 'imperial_mile')
      expect(result.value).toBeCloseTo(0.621371, 6)
      expect(result.unit).toBe('imperial_mile')
    })

    test('chi to meter', () => {
      const result = convert('length', 1, 'traditional_chi', 'metric_meter')
      expect(result.value).toBeCloseTo(0.33333, 5)
      expect(result.unit).toBe('metric_meter')
    })
  })

  // 精度测试
  describe('Precision', () => {
    test('should handle very small lengths', () => {
      const result = convert('length', 1, 'metric_picometer', 'metric_meter')
      expect(result.value).toBe(1e-12)
      expect(result.unit).toBe('metric_meter')
    })

    test('should handle very large lengths', () => {
      const result = convert('length', 1, 'astronomical_parsec', 'metric_meter')
      expect(result.value).toBeCloseTo(3.0856775814913673e16, 6)
      expect(result.unit).toBe('metric_meter')
    })

    test('should handle fractional lengths', () => {
      const result = convert('length', 0.5, 'metric_meter', 'metric_millimeter')
      expect(result.value).toBe(500)
      expect(result.unit).toBe('metric_millimeter')
    })
  })
}) 
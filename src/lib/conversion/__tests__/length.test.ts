import { convert } from '../converter'

describe('Length Conversion', () => {
  // 测试公制长度单位转换
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

  // 测试英制长度单位转换
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

  // 测试航海单位转换
  describe('Nautical Units', () => {
    test('nautical mile to meter', () => {
      const result = convert('length', 1, 'nautical_mile', 'metric_meter')
      expect(result.value).toBe(1852)
      expect(result.unit).toBe('metric_meter')
    })

    test('fathom to meter', () => {
      const result = convert('length', 1, 'nautical_fathom', 'metric_meter')
      expect(result.value).toBeCloseTo(1.8288, 4)
      expect(result.unit).toBe('metric_meter')
    })

    test('cable to nautical mile', () => {
      const result = convert('length', 1, 'nautical_cable', 'nautical_mile')
      expect(result.value).toBeCloseTo(0.1, 4)
      expect(result.unit).toBe('nautical_mile')
    })
  })

  // 测试天文单位转换
  describe('Astronomical Units', () => {
    test('light year to astronomical unit', () => {
      const result = convert('length', 1, 'astronomy_light_year', 'astronomy_astronomical_unit')
      expect(result.value).toBeCloseTo(63241.1, 1)
      expect(result.unit).toBe('astronomy_astronomical_unit')
    })

    test('parsec to light year', () => {
      const result = convert('length', 1, 'astronomy_parsec', 'astronomy_light_year')
      expect(result.value).toBeCloseTo(3.26156, 5)
      expect(result.unit).toBe('astronomy_light_year')
    })

    test('astronomical unit to kilometer', () => {
      const result = convert('length', 1, 'astronomy_astronomical_unit', 'metric_kilometer')
      expect(result.value).toBeCloseTo(149600000, 0)
      expect(result.unit).toBe('metric_kilometer')
    })
  })

  // 测试中国传统长度单位转换
  describe('Chinese Traditional Units', () => {
    test('li to zhang', () => {
      const result = convert('length', 1, 'chinese_li', 'chinese_zhang')
      expect(result.value).toBeCloseTo(150, 0)
      expect(result.unit).toBe('chinese_zhang')
    })

    test('zhang to chi', () => {
      const result = convert('length', 1, 'chinese_zhang', 'chinese_chi')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_chi')
    })

    test('chi to cun', () => {
      const result = convert('length', 1, 'chinese_chi', 'chinese_cun')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_cun')
    })

    test('cun to fen', () => {
      const result = convert('length', 1, 'chinese_cun', 'chinese_fen')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chinese_fen')
    })
  })

  // 测试测量专用单位转换
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
      expect(result.value).toBeCloseTo(20.1168, 4)
      expect(result.unit).toBe('metric_meter')
    })
  })

  // 测试跨系统转换
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
      const result = convert('length', 1, 'chinese_chi', 'metric_meter')
      expect(result.value).toBeCloseTo(0.33333, 5)
      expect(result.unit).toBe('metric_meter')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small lengths', () => {
      const result = convert('length', 1, 'metric_picometer', 'metric_meter')
      expect(result.value).toBe(1e-12)
      expect(result.unit).toBe('metric_meter')
    })

    test('should handle very large lengths', () => {
      const result = convert('length', 1, 'astronomy_parsec', 'metric_meter')
      expect(result.value).toBe(3.086e16)
      expect(result.unit).toBe('metric_meter')
    })

    test('should handle fractional lengths', () => {
      const result = convert('length', 0.5, 'metric_meter', 'metric_millimeter')
      expect(result.value).toBe(500)
      expect(result.unit).toBe('metric_millimeter')
    })
  })
}) 
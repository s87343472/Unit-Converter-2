import { convert } from '../converter'

describe('Length Conversion', () => {
  // 测试公制长度单位转换
  describe('Metric Units', () => {
    test('meter to kilometer', () => {
      const result = convert('length', 1000, 'meter', 'kilometer')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilometer')
    })

    test('meter to centimeter', () => {
      const result = convert('length', 1, 'meter', 'centimeter')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('centimeter')
    })

    test('centimeter to millimeter', () => {
      const result = convert('length', 1, 'centimeter', 'millimeter')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('millimeter')
    })

    test('millimeter to micrometer', () => {
      const result = convert('length', 1, 'millimeter', 'micrometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('micrometer')
    })

    test('micrometer to nanometer', () => {
      const result = convert('length', 1, 'micrometer', 'nanometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('nanometer')
    })

    test('nanometer to picometer', () => {
      const result = convert('length', 1, 'nanometer', 'picometer')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('picometer')
    })
  })

  // 测试英制长度单位转换
  describe('Imperial Units', () => {
    test('mile to yard', () => {
      const result = convert('length', 1, 'mile', 'yard')
      expect(result.value).toBe(1760)
      expect(result.unit).toBe('yard')
    })

    test('yard to foot', () => {
      const result = convert('length', 1, 'yard', 'foot')
      expect(result.value).toBe(3)
      expect(result.unit).toBe('foot')
    })

    test('foot to inch', () => {
      const result = convert('length', 1, 'foot', 'inch')
      expect(result.value).toBe(12)
      expect(result.unit).toBe('inch')
    })
  })

  // 测试航海单位转换
  describe('Nautical Units', () => {
    test('nautical mile to meter', () => {
      const result = convert('length', 1, 'nautical_mile', 'meter')
      expect(result.value).toBe(1852)
      expect(result.unit).toBe('meter')
    })

    test('fathom to meter', () => {
      const result = convert('length', 1, 'fathom', 'meter')
      expect(result.value).toBeCloseTo(1.8288, 6)
      expect(result.unit).toBe('meter')
    })

    test('cable to nautical mile', () => {
      const result = convert('length', 1, 'cable', 'nautical_mile')
      expect(result.value).toBeCloseTo(0.1, 6)
      expect(result.unit).toBe('nautical_mile')
    })
  })

  // 测试天文单位转换
  describe('Astronomical Units', () => {
    test('light year to astronomical unit', () => {
      const result = convert('length', 1, 'light_year', 'astronomical_unit')
      expect(result.value).toBeCloseTo(63241.1, 1)
      expect(result.unit).toBe('astronomical_unit')
    })

    test('parsec to light year', () => {
      const result = convert('length', 1, 'parsec', 'light_year')
      expect(result.value).toBeCloseTo(3.26156, 5)
      expect(result.unit).toBe('light_year')
    })

    test('astronomical unit to kilometer', () => {
      const result = convert('length', 1, 'astronomical_unit', 'kilometer')
      expect(result.value).toBeCloseTo(149600000, 0)
      expect(result.unit).toBe('kilometer')
    })
  })

  // 测试中国传统长度单位转换
  describe('Chinese Traditional Units', () => {
    test('li to zhang', () => {
      const result = convert('length', 1, 'li', 'zhang')
      expect(result.value).toBeCloseTo(150, 0)
      expect(result.unit).toBe('zhang')
    })

    test('zhang to chi', () => {
      const result = convert('length', 1, 'zhang', 'chi')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('chi')
    })

    test('chi to cun', () => {
      const result = convert('length', 1, 'chi', 'cun')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('cun')
    })

    test('cun to fen', () => {
      const result = convert('length', 1, 'cun', 'fen')
      expect(result.value).toBe(10)
      expect(result.unit).toBe('fen')
    })
  })

  // 测试测量专用单位转换
  describe('Survey Units', () => {
    test('chain to rod', () => {
      const result = convert('length', 1, 'chain', 'rod')
      expect(result.value).toBe(4)
      expect(result.unit).toBe('rod')
    })

    test('rod to link', () => {
      const result = convert('length', 1, 'rod', 'link')
      expect(result.value).toBe(25)
      expect(result.unit).toBe('link')
    })

    test('chain to meter', () => {
      const result = convert('length', 1, 'chain', 'meter')
      expect(result.value).toBeCloseTo(20.1168, 6)
      expect(result.unit).toBe('meter')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('meter to foot', () => {
      const result = convert('length', 1, 'meter', 'foot')
      expect(result.value).toBeCloseTo(3.28084, 9)
      expect(result.unit).toBe('foot')
    })

    test('kilometer to mile', () => {
      const result = convert('length', 1, 'kilometer', 'mile')
      expect(result.value).toBeCloseTo(0.621371, 9)
      expect(result.unit).toBe('mile')
    })

    test('chi to meter', () => {
      const result = convert('length', 1, 'chi', 'meter')
      expect(result.value).toBeCloseTo(0.33333, 9)
      expect(result.unit).toBe('meter')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small lengths', () => {
      const result = convert('length', 1, 'picometer', 'meter')
      expect(result.value).toBe(1e-12)
      expect(result.unit).toBe('meter')
    })

    test('should handle very large lengths', () => {
      const result = convert('length', 1, 'parsec', 'meter')
      expect(result.value).toBe(3.086e16)
      expect(result.unit).toBe('meter')
    })

    test('should handle fractional lengths', () => {
      const result = convert('length', 0.5, 'meter', 'millimeter')
      expect(result.value).toBe(500)
      expect(result.unit).toBe('millimeter')
    })
  })
}) 
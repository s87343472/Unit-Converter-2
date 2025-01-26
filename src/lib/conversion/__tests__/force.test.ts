import { convert } from '../converter'

describe('Force Conversion', () => {
  // 测试公制力单位转换
  describe('Metric Force Units', () => {
    test('newton to kilonewton', () => {
      const result = convert('force', 1000, 'newton', 'kilonewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilonewton')
    })

    test('kilonewton to meganewton', () => {
      const result = convert('force', 1000, 'kilonewton', 'meganewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('meganewton')
    })

    test('meganewton to giganewton', () => {
      const result = convert('force', 1000, 'meganewton', 'giganewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('giganewton')
    })
  })

  // 测试重力单位转换
  describe('Gravity Force Units', () => {
    test('kilogram force to newton', () => {
      const result = convert('force', 1, 'kilogram_force', 'newton')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('newton')
    })

    test('gram force to newton', () => {
      const result = convert('force', 1, 'gram_force', 'newton')
      expect(result.value).toBeCloseTo(0.00980665, 9)
      expect(result.unit).toBe('newton')
    })

    test('ton force to kilonewton', () => {
      const result = convert('force', 1, 'ton_force', 'kilonewton')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('kilonewton')
    })
  })

  // 测试英制力单位转换
  describe('Imperial Force Units', () => {
    test('pound force to newton', () => {
      const result = convert('force', 1, 'pound_force', 'newton')
      expect(result.value).toBeCloseTo(4.4482216152605, 9)
      expect(result.unit).toBe('newton')
    })

    test('ounce force to newton', () => {
      const result = convert('force', 1, 'ounce_force', 'newton')
      expect(result.value).toBeCloseTo(0.278013850953781, 9)
      expect(result.unit).toBe('newton')
    })

    test('ton force to kilonewton', () => {
      const result = convert('force', 1, 'long_ton_force', 'kilonewton')
      expect(result.value).toBeCloseTo(9.964016427, 9)
      expect(result.unit).toBe('kilonewton')
    })

    test('poundal to newton', () => {
      const result = convert('force', 1, 'poundal', 'newton')
      expect(result.value).toBeCloseTo(0.138254954376, 9)
      expect(result.unit).toBe('newton')
    })
  })

  // 测试科学单位转换
  describe('Scientific Force Units', () => {
    test('dyne to newton', () => {
      const result = convert('force', 100000, 'dyne', 'newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('newton')
    })

    test('kilodyne to newton', () => {
      const result = convert('force', 100, 'kilodyne', 'newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('newton')
    })

    test('megadyne to newton', () => {
      const result = convert('force', 0.1, 'megadyne', 'newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('newton')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('kilogram force to pound force', () => {
      const result = convert('force', 1, 'kilogram_force', 'pound_force')
      expect(result.value).toBeCloseTo(2.20462, 6)
      expect(result.unit).toBe('pound_force')
    })

    test('pound force to kilogram force', () => {
      const result = convert('force', 1, 'pound_force', 'kilogram_force')
      expect(result.value).toBeCloseTo(0.453592, 6)
      expect(result.unit).toBe('kilogram_force')
    })

    test('ton force to imperial ton force', () => {
      const result = convert('force', 1, 'ton_force', 'long_ton_force')
      expect(result.value).toBeCloseTo(0.984207, 6)
      expect(result.unit).toBe('long_ton_force')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small forces', () => {
      const result = convert('force', 0.000001, 'newton', 'dyne')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('dyne')
    })

    test('should handle very large forces', () => {
      const result = convert('force', 1000, 'giganewton', 'newton')
      expect(result.value).toBeCloseTo(1e12, 6)
      expect(result.unit).toBe('newton')
    })

    test('should handle fractional forces', () => {
      const result = convert('force', 0.5, 'kilogram_force', 'newton')
      expect(result.value).toBeCloseTo(4.903325, 6)
      expect(result.unit).toBe('newton')
    })
  })
}) 
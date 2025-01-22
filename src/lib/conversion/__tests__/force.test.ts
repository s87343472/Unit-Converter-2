import { convert } from '../converter'

describe('Force Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('newton to kilonewton', () => {
      const result = convert('force', 1000, 'newton', 'kilonewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('kilonewton')
    })

    test('kilonewton to meganewton', () => {
      const result = convert('force', 1000, 'kilonewton', 'meganewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('meganewton')
    })
  })

  // 测试重力单位
  describe('Gravity Units', () => {
    test('kilogram force to newton', () => {
      const result = convert('force', 1, 'kilogram_force', 'newton')
      expect(result.value).toBeCloseTo(9.80665, 4)
      expect(result.unit).toBe('newton')
    })

    test('gram force to newton', () => {
      const result = convert('force', 1000, 'gram_force', 'newton')
      expect(result.value).toBeCloseTo(9.80665, 4)
      expect(result.unit).toBe('newton')
    })
  })

  // 测试英制单位
  describe('Imperial Units', () => {
    test('pound force to newton', () => {
      const result = convert('force', 1, 'pound_force', 'newton')
      expect(result.value).toBeCloseTo(4.44822, 4)
      expect(result.unit).toBe('newton')
    })

    test('ounce force to newton', () => {
      const result = convert('force', 16, 'ounce_force', 'newton')
      expect(result.value).toBeCloseTo(4.44822, 4)
      expect(result.unit).toBe('newton')
    })

    test('ton force to kilonewton', () => {
      const result = convert('force', 1, 'ton_force', 'kilonewton')
      expect(result.value).toBeCloseTo(8.89644, 4)
      expect(result.unit).toBe('kilonewton')
    })
  })

  // 测试科学单位
  describe('Scientific Units', () => {
    test('dyne to newton', () => {
      const result = convert('force', 100000, 'dyne', 'newton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('newton')
    })

    test('newton to dyne', () => {
      const result = convert('force', 1, 'newton', 'dyne')
      expect(result.value).toBeCloseTo(100000, 4)
      expect(result.unit).toBe('dyne')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small forces', () => {
      const result = convert('force', 1, 'dyne', 'newton')
      expect(result.value).toBeCloseTo(0.00001, 6)
      expect(result.unit).toBe('newton')
    })

    test('should handle very large forces', () => {
      const result = convert('force', 1000, 'meganewton', 'newton')
      expect(result.value).toBeCloseTo(1e9, 4)
      expect(result.unit).toBe('newton')
    })
  })
}) 
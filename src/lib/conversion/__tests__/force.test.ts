import { convert } from '../converter'

describe('力单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('牛顿到千牛顿', () => {
      const result = convert('force', 1000, 'metric_newton', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilonewton')
    })

    test('千牛顿到兆牛顿', () => {
      const result = convert('force', 1000, 'metric_kilonewton', 'metric_meganewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_meganewton')
    })

    test('兆牛顿到吉牛顿', () => {
      const result = convert('force', 1000, 'metric_meganewton', 'metric_giganewton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_giganewton')
    })
  })

  // 重力单位测试
  describe('重力单位转换', () => {
    test('千克力到牛顿', () => {
      const result = convert('force', 1, 'gravitational_kilogram_force', 'metric_newton')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('metric_newton')
    })

    test('克力到牛顿', () => {
      const result = convert('force', 1, 'gravitational_gram_force', 'metric_newton')
      expect(result.value).toBeCloseTo(0.00980665, 9)
      expect(result.unit).toBe('metric_newton')
    })

    test('吨力到千牛顿', () => {
      const result = convert('force', 1, 'gravitational_ton_force', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('metric_kilonewton')
    })
  })

  // 科学单位测试
  describe('科学单位转换', () => {
    test('达因到牛顿', () => {
      const result = convert('force', 100000, 'scientific_dyne', 'metric_newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_newton')
    })

    test('千达因到牛顿', () => {
      const result = convert('force', 100, 'scientific_kilodyne', 'metric_newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_newton')
    })

    test('兆达因到牛顿', () => {
      const result = convert('force', 0.1, 'scientific_megadyne', 'metric_newton')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_newton')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('千克力到磅力', () => {
      const result = convert('force', 1, 'gravitational_kilogram_force', 'imperial_pound_force')
      expect(result.value).toBeCloseTo(2.20462, 6)
      expect(result.unit).toBe('imperial_pound_force')
    })

    test('磅力到千克力', () => {
      const result = convert('force', 1, 'imperial_pound_force', 'gravitational_kilogram_force')
      expect(result.value).toBeCloseTo(0.453592, 6)
      expect(result.unit).toBe('gravitational_kilogram_force')
    })

    test('达因到千克力', () => {
      const result = convert('force', 980665, 'scientific_dyne', 'gravitational_kilogram_force')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gravitational_kilogram_force')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('force', 1e12, 'metric_newton', 'metric_giganewton')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('metric_giganewton')
    })

    test('小数值转换', () => {
      const result = convert('force', 0.000001, 'metric_newton', 'scientific_dyne')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('scientific_dyne')
    })

    test('零值转换', () => {
      const result = convert('force', 0, 'gravitational_kilogram_force', 'metric_newton')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('metric_newton')
    })
  })
}) 
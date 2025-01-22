import { convert } from '../converter'

describe('Angle Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('radian to degree', () => {
      const result = convert('angle', Math.PI, 'radian', 'degree')
      expect(result.value).toBeCloseTo(180, 2)
      expect(result.unit).toBe('degree')
    })

    test('degree to radian', () => {
      const result = convert('angle', 180, 'degree', 'radian')
      expect(result.value).toBeCloseTo(Math.PI, 2)
      expect(result.unit).toBe('radian')
    })

    test('degree to gradian', () => {
      const result = convert('angle', 90, 'degree', 'gradian')
      expect(result.value).toBeCloseTo(100, 2)
      expect(result.unit).toBe('gradian')
    })
  })

  // 测试分角度单位
  describe('Minute and Second Units', () => {
    test('degree to minute arc', () => {
      const result = convert('angle', 1, 'degree', 'minute_arc')
      expect(result.value).toBeCloseTo(60, 2)
      expect(result.unit).toBe('minute_arc')
    })

    test('minute arc to second arc', () => {
      const result = convert('angle', 1, 'minute_arc', 'second_arc')
      expect(result.value).toBeCloseTo(60, 2)
      expect(result.unit).toBe('second_arc')
    })
  })

  // 测试周期单位
  describe('Cycle Units', () => {
    test('turn to degree', () => {
      const result = convert('angle', 1, 'turn', 'degree')
      expect(result.value).toBeCloseTo(360, 2)
      expect(result.unit).toBe('degree')
    })

    test('quadrant to degree', () => {
      const result = convert('angle', 1, 'quadrant', 'degree')
      expect(result.value).toBeCloseTo(90, 2)
      expect(result.unit).toBe('degree')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small angles', () => {
      const result = convert('angle', 0.0001, 'radian', 'degree')
      expect(result.value).toBeCloseTo(0.00573, 2)
      expect(result.unit).toBe('degree')
    })

    test('should handle very large angles', () => {
      const result = convert('angle', 1000, 'turn', 'degree')
      expect(result.value).toBeCloseTo(360000, 0)
      expect(result.unit).toBe('degree')
    })
  })
}) 
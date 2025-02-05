import { convert } from '../converter'

describe('扭矩单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('metric_newton_meter to metric_newton_centimeter', () => {
      const result = convert('torque', 1, 'metric_newton_meter', 'metric_newton_centimeter')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('metric_newton_centimeter')
    })
  })

  // 英制单位转换测试
  describe('英制单位转换', () => {
    test('imperial_pound_foot to metric_newton_meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(1.35582, 6)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('imperial_pound_inch to imperial_pound_foot', () => {
      const result = convert('torque', 12, 'imperial_pound_inch', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('imperial_pound_foot')
    })
  })

  // 科学单位转换测试
  describe('科学单位转换', () => {
    test('scientific_kilogram_force_meter to metric_newton_meter', () => {
      const result = convert('torque', 1, 'scientific_kilogram_force_meter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('scientific_kilogram_force_centimeter to metric_newton_meter', () => {
      const result = convert('torque', 100, 'scientific_kilogram_force_centimeter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('metric_newton_meter')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('imperial_pound_foot to scientific_kilogram_force_meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'scientific_kilogram_force_meter')
      expect(result.value).toBeCloseTo(0.138255, 6)
      expect(result.unit).toBe('scientific_kilogram_force_meter')
    })

    test('scientific_kilogram_force_meter to imperial_pound_foot', () => {
      const result = convert('torque', 0.138255, 'scientific_kilogram_force_meter', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('imperial_pound_foot')
    })
  })
}) 
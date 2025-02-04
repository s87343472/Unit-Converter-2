import { convert } from '../converter'

describe('流量单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('立方米每秒到立方米每分钟', () => {
      const result = convert('flow', 1, 'metric_cubic_meter_per_second', 'metric_cubic_meter_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_cubic_meter_per_minute')
    })

    test('升每秒到升每分钟', () => {
      const result = convert('flow', 1, 'metric_liter_per_second', 'metric_liter_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_liter_per_minute')
    })

    test('毫升每秒到毫升每分钟', () => {
      const result = convert('flow', 1, 'metric_milliliter_per_second', 'metric_milliliter_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_milliliter_per_minute')
    })
  })

  // 英制流量单位测试
  describe('英制流量单位转换', () => {
    test('立方英尺每秒到立方英尺每分钟', () => {
      const result = convert('flow', 1, 'imperial_cubic_foot_per_second', 'imperial_cubic_foot_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('imperial_cubic_foot_per_minute')
    })

    test('英制加仑每秒到英制加仑每分钟', () => {
      const result = convert('flow', 1, 'imperial_gallon_per_second', 'imperial_gallon_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('imperial_gallon_per_minute')
    })
  })

  // 美制流量单位测试
  describe('美制流量单位转换', () => {
    test('美制加仑每秒到美制加仑每分钟', () => {
      const result = convert('flow', 1, 'us_gallon_per_second', 'us_gallon_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('us_gallon_per_minute')
    })

    test('美制加仑每分钟到美制加仑每小时', () => {
      const result = convert('flow', 1, 'us_gallon_per_minute', 'us_gallon_per_hour')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('us_gallon_per_hour')
    })
  })

  // 工业流量单位测试
  describe('工业流量单位转换', () => {
    test('标准立方米每小时到立方米每秒', () => {
      const result = convert('flow', 3600, 'industrial_standard_cubic_meter_per_hour', 'metric_cubic_meter_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_cubic_meter_per_second')
    })

    test('标准立方英尺每分钟到立方英尺每分钟', () => {
      const result = convert('flow', 1, 'industrial_standard_cubic_foot_per_minute', 'imperial_cubic_foot_per_minute')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('imperial_cubic_foot_per_minute')
    })
  })

  // 质量流量单位测试
  describe('质量流量单位转换', () => {
    test('千克每秒到千克每分钟', () => {
      const result = convert('flow', 1, 'mass_kilogram_per_second', 'mass_kilogram_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('mass_kilogram_per_minute')
    })

    test('克每秒到克每分钟', () => {
      const result = convert('flow', 1, 'mass_gram_per_second', 'mass_gram_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('mass_gram_per_minute')
    })

    test('磅每秒到磅每分钟', () => {
      const result = convert('flow', 1, 'mass_pound_per_second', 'mass_pound_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('mass_pound_per_minute')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('立方米每秒到立方英尺每秒', () => {
      const result = convert('flow', 1, 'metric_cubic_meter_per_second', 'imperial_cubic_foot_per_second')
      expect(result.value).toBeCloseTo(35.314666721489, 6)
      expect(result.unit).toBe('imperial_cubic_foot_per_second')
    })

    test('美制加仑每分钟到升每分钟', () => {
      const result = convert('flow', 1, 'us_gallon_per_minute', 'metric_liter_per_minute')
      expect(result.value).toBeCloseTo(3.785411784, 6)
      expect(result.unit).toBe('metric_liter_per_minute')
    })

    test('千克每秒到磅每分钟', () => {
      const result = convert('flow', 1, 'mass_kilogram_per_second', 'mass_pound_per_minute')
      expect(result.value).toBeCloseTo(132.277, 3)
      expect(result.unit).toBe('mass_pound_per_minute')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('flow', 1e6, 'metric_cubic_meter_per_second', 'metric_cubic_meter_per_hour')
      expect(result.value).toBeCloseTo(3.6e9, 6)
      expect(result.unit).toBe('metric_cubic_meter_per_hour')
    })

    test('小数值转换', () => {
      const result = convert('flow', 0.001, 'metric_liter_per_second', 'metric_milliliter_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_milliliter_per_second')
    })

    test('零值转换', () => {
      const result = convert('flow', 0, 'mass_kilogram_per_second', 'mass_pound_per_minute')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('mass_pound_per_minute')
    })
  })
}) 
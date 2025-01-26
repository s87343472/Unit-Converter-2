import { convert } from '../converter'

describe('流量单位转换', () => {
  // 体积流量单位 - 公制
  describe('公制体积流量单位', () => {
    test('立方米每秒到升每秒', () => {
      const result = convert('flow', 1, 'cubic_meter_per_second', 'liter_per_second')
      expect(result.value).toBe(1000) // 1 m³/s = 1000 L/s
      expect(result.unit).toBe('liter_per_second')
    })

    test('立方米每秒到立方米每小时', () => {
      const result = convert('flow', 1, 'cubic_meter_per_second', 'cubic_meter_per_hour')
      expect(result.value).toBe(3600) // 1 m³/s = 3600 m³/h
      expect(result.unit).toBe('cubic_meter_per_hour')
    })

    test('升每分钟到立方米每秒', () => {
      const result = convert('flow', 60, 'liter_per_minute', 'cubic_meter_per_second')
      expect(result.value).toBe(0.001) // 60 L/min = 0.001 m³/s
      expect(result.unit).toBe('cubic_meter_per_second')
    })
  })

  // 体积流量单位 - 英制
  describe('英制体积流量单位', () => {
    test('立方英尺每秒到立方英尺每分钟', () => {
      const result = convert('flow', 1, 'cubic_foot_per_second', 'cubic_foot_per_minute')
      expect(result.value).toBe(60) // 1 ft³/s = 60 ft³/min
      expect(result.unit).toBe('cubic_foot_per_minute')
    })

    test('加仑每分钟到立方英尺每分钟', () => {
      const result = convert('flow', 7.48052, 'gallon_per_minute', 'cubic_foot_per_minute')
      expect(result.value).toBeCloseTo(1, 6) // 7.48052 gal/min ≈ 1 ft³/min
      expect(result.unit).toBe('cubic_foot_per_minute')
    })
  })

  // 体积流量单位 - 美制
  describe('美制体积流量单位转换', () => {
    test('加仑每分钟到加仑每小时的转换', () => {
      const result = convert('flow', 1, 'gallon_per_minute', 'gallon_per_hour')
      expect(result.value).toBe(60) // 1 gal/min = 60 gal/h
      expect(result.unit).toBe('gallon_per_hour')
    })
  })

  // 质量流量单位
  describe('质量流量单位', () => {
    test('千克每秒到克每分钟', () => {
      const result = convert('flow', 1, 'kilogram_per_second', 'gram_per_minute')
      expect(result.value).toBe(60000) // 1 kg/s = 60000 g/min
      expect(result.unit).toBe('gram_per_minute')
    })

    test('磅每小时到千克每秒', () => {
      const result = convert('flow', 7936.64, 'pound_per_hour', 'kilogram_per_second')
      expect(result.value).toBeCloseTo(1, 6) // 7936.64 lb/h ≈ 1 kg/s
      expect(result.unit).toBe('kilogram_per_second')
    })
  })

  // 工业流量单位
  describe('工业流量单位', () => {
    test('标准立方米每小时到立方米每秒', () => {
      const result = convert('flow', 3600, 'standard_cubic_meter_per_hour', 'cubic_meter_per_second')
      expect(result.value).toBe(1) // 3600 Nm³/h = 1 m³/s
      expect(result.unit).toBe('cubic_meter_per_second')
    })

    test('立方厘米每秒到毫升每分钟', () => {
      const result = convert('flow', 1, 'cubic_centimeter_per_second', 'milliliter_per_minute')
      expect(result.value).toBe(60) // 1 cm³/s = 60 mL/min
      expect(result.unit).toBe('milliliter_per_minute')
    })
  })

  // 科学流量单位
  describe('科学流量单位转换', () => {
    test('立方厘米每秒到毫升每分钟的转换', () => {
      const result = convert('flow', 1, 'cubic_centimeter_per_second', 'milliliter_per_minute')
      expect(result.value).toBe(60) // 1 cm³/s = 60 mL/min
      expect(result.unit).toBe('milliliter_per_minute')
    })
  })

  // 跨系统转换
  describe('跨系统转换', () => {
    test('立方米每秒到立方英尺每秒', () => {
      const result = convert('flow', 1, 'cubic_meter_per_second', 'cubic_foot_per_second')
      expect(result.value).toBeCloseTo(35.3147, 4) // 1 m³/s ≈ 35.3147 ft³/s
      expect(result.unit).toBe('cubic_foot_per_second')
    })

    test('升每分钟到加仑每分钟', () => {
      const result = convert('flow', 3.78541, 'liter_per_minute', 'gallon_per_minute')
      expect(result.value).toBeCloseTo(1, 6) // 3.78541 L/min ≈ 1 gal/min
      expect(result.unit).toBe('gallon_per_minute')
    })

    test('立方英尺每分钟到升每秒的转换', () => {
      const result = convert('flow', 1, 'cubic_foot_per_minute', 'liter_per_second')
      expect(result.value).toBeCloseTo(0.471947443, 9) // 1 ft³/min ≈ 0.471947443 L/s
      expect(result.unit).toBe('liter_per_second')
    })
  })

  // 精度测试
  describe('精度测试', () => {
    test('极小流量', () => {
      const result = convert('flow', 0.000001, 'cubic_meter_per_second', 'milliliter_per_minute')
      expect(result.value).toBe(60) // 0.000001 m³/s = 60 mL/min
      expect(result.unit).toBe('milliliter_per_minute')
    })

    test('极大流量', () => {
      const result = convert('flow', 1000000, 'cubic_meter_per_second', 'cubic_meter_per_hour')
      expect(result.value).toBe(3600000000) // 1000000 m³/s = 3.6E9 m³/h
      expect(result.unit).toBe('cubic_meter_per_hour')
    })

    test('复杂比率转换', () => {
      const result = convert('flow', 1, 'cubic_foot_per_minute', 'milliliter_per_minute')
      expect(result.value).toBeCloseTo(28316.846592, 6) // 1 ft³/min ≈ 28316.846592 mL/min
      expect(result.unit).toBe('milliliter_per_minute')
    })
  })
}) 
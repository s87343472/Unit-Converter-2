import { convert } from '../converter'

describe('Power Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('watt to kilowatt', () => {
      const result = convert('power', 1000, 'watt', 'kilowatt')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('kilowatt')
    })

    test('kilowatt to megawatt', () => {
      const result = convert('power', 1000, 'kilowatt', 'megawatt')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('megawatt')
    })

    test('megawatt to gigawatt', () => {
      const result = convert('power', 1000, 'megawatt', 'gigawatt')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('gigawatt')
    })
  })

  // 测试马力单位
  describe('Horsepower Units', () => {
    test('mechanical horsepower to watt', () => {
      const result = convert('power', 1, 'horsepower_mechanical', 'watt')
      expect(result.value).toBeCloseTo(745.7, 4)
      expect(result.unit).toBe('watt')
    })

    test('metric horsepower to watt', () => {
      const result = convert('power', 1, 'horsepower_metric', 'watt')
      expect(result.value).toBeCloseTo(735.49875, 4)
      expect(result.unit).toBe('watt')
    })
  })

  // 测试热力学单位
  describe('Thermodynamic Units', () => {
    test('btu per hour to watt', () => {
      const result = convert('power', 1, 'btu_per_hour', 'watt')
      expect(result.value).toBeCloseTo(0.29307107, 4)
      expect(result.unit).toBe('watt')
    })

    test('kilocalorie per hour to watt', () => {
      const result = convert('power', 1, 'kilocalorie_per_hour', 'watt')
      expect(result.value).toBeCloseTo(1.163, 4)
      expect(result.unit).toBe('watt')
    })
  })

  // 测试力学单位
  describe('Mechanical Units', () => {
    test('joule per second to watt', () => {
      const result = convert('power', 1, 'joule_per_second', 'watt')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('watt')
    })

    test('newton meter per second to watt', () => {
      const result = convert('power', 1, 'newton_meter_per_second', 'watt')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('watt')
    })

    test('foot pound per second to watt', () => {
      const result = convert('power', 1, 'foot_pound_per_second', 'watt')
      expect(result.value).toBeCloseTo(1.355818, 4)
      expect(result.unit).toBe('watt')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small power', () => {
      const result = convert('power', 0.001, 'watt', 'kilowatt')
      expect(result.value).toBeCloseTo(0.000001, 6)
      expect(result.unit).toBe('kilowatt')
    })

    test('should handle very large power', () => {
      const result = convert('power', 1000, 'gigawatt', 'watt')
      expect(result.value).toBeCloseTo(1e12, 4)
      expect(result.unit).toBe('watt')
    })
  })
}) 
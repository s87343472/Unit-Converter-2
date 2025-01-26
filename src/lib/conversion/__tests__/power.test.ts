import { convert } from '../converter'

describe('Power Conversion', () => {
  // 测试公制功率单位转换
  describe('Metric Power Units', () => {
    test('watt to kilowatt', () => {
      const result = convert('power', 1000, 'watt', 'kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilowatt')
    })

    test('kilowatt to megawatt', () => {
      const result = convert('power', 1000, 'kilowatt', 'megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('megawatt')
    })

    test('megawatt to gigawatt', () => {
      const result = convert('power', 1000, 'megawatt', 'gigawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gigawatt')
    })
  })

  // 测试机械功率单位转换
  describe('Mechanical Power Units', () => {
    test('horsepower to watt', () => {
      const result = convert('power', 1, 'horsepower', 'watt')
      expect(result.value).toBeCloseTo(745.699872, 9)
      expect(result.unit).toBe('watt')
    })

    test('metric horsepower to watt', () => {
      const result = convert('power', 1, 'metric_horsepower', 'watt')
      expect(result.value).toBeCloseTo(735.49875, 9)
      expect(result.unit).toBe('watt')
    })

    test('british horsepower to watt', () => {
      const result = convert('power', 1, 'british_horsepower', 'watt')
      expect(result.value).toBeCloseTo(745.7, 6)
      expect(result.unit).toBe('watt')
    })
  })

  // 测试热功率单位转换
  describe('Thermal Power Units', () => {
    test('BTU per hour to watt', () => {
      const result = convert('power', 1, 'btu_per_hour', 'watt')
      expect(result.value).toBeCloseTo(0.29307107, 9)
      expect(result.unit).toBe('watt')
    })

    test('kilocalorie per hour to watt', () => {
      const result = convert('power', 1, 'kilocalorie_per_hour', 'watt')
      expect(result.value).toBeCloseTo(1.163, 6)
      expect(result.unit).toBe('watt')
    })

    test('ton refrigeration to kilowatt', () => {
      const result = convert('power', 1, 'ton_refrigeration', 'kilowatt')
      expect(result.value).toBeCloseTo(3.516853, 9)
      expect(result.unit).toBe('kilowatt')
    })
  })

  // 测试工业功率单位转换
  describe('Industrial Power Units', () => {
    test('kilovolt ampere to kilowatt', () => {
      const result = convert('power', 1, 'kilovolt_ampere', 'kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilowatt')
    })

    test('kilovar to kilowatt', () => {
      const result = convert('power', 1, 'kilovar', 'kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilowatt')
    })

    test('megavolt ampere to megawatt', () => {
      const result = convert('power', 1, 'megavolt_ampere', 'megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('megawatt')
    })
  })

  // 测试科学功率单位转换
  describe('Scientific Power Units', () => {
    test('erg per second to watt', () => {
      const result = convert('power', 10000000, 'erg_per_second', 'watt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('watt')
    })

    test('joule per second to watt', () => {
      const result = convert('power', 1, 'joule_per_second', 'watt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('watt')
    })

    test('calorie per second to watt', () => {
      const result = convert('power', 1, 'calorie_per_second', 'watt')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('watt')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('horsepower to kilowatt', () => {
      const result = convert('power', 1, 'horsepower', 'kilowatt')
      expect(result.value).toBeCloseTo(0.745699872, 9)
      expect(result.unit).toBe('kilowatt')
    })

    test('BTU per hour to kilocalorie per hour', () => {
      const result = convert('power', 1, 'btu_per_hour', 'kilocalorie_per_hour')
      expect(result.value).toBeCloseTo(0.252, 3)
      expect(result.unit).toBe('kilocalorie_per_hour')
    })

    test('megavolt ampere to horsepower', () => {
      const result = convert('power', 1, 'megavolt_ampere', 'horsepower')
      expect(result.value).toBeCloseTo(1341.02, 2)
      expect(result.unit).toBe('horsepower')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small powers', () => {
      const result = convert('power', 0.000001, 'watt', 'erg_per_second')
      expect(result.value).toBeCloseTo(10, 6)
      expect(result.unit).toBe('erg_per_second')
    })

    test('should handle very large powers', () => {
      const result = convert('power', 1000, 'gigawatt', 'watt')
      expect(result.value).toBeCloseTo(1e12, 4)
      expect(result.unit).toBe('watt')
    })

    test('should handle fractional powers', () => {
      const result = convert('power', 0.5, 'horsepower', 'watt')
      expect(result.value).toBeCloseTo(372.849936, 9)
      expect(result.unit).toBe('watt')
    })
  })
}) 
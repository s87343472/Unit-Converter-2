import { convert } from '../converter'

describe('Power Conversion', () => {
  // 测试公制功率单位转换
  describe('Metric Power Units', () => {
    test('watt to kilowatt', () => {
      const result = convert('power', 1000, 'metric_watt', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('kilowatt to megawatt', () => {
      const result = convert('power', 1000, 'metric_kilowatt', 'metric_megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megawatt')
    })

    test('megawatt to gigawatt', () => {
      const result = convert('power', 1000, 'metric_megawatt', 'metric_gigawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_gigawatt')
    })
  })

  // 测试机械功率单位转换
  describe('Mechanical Power Units', () => {
    test('horsepower to watt', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(745.699872, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('metric horsepower to watt', () => {
      const result = convert('power', 1, 'mechanical_metric_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(735.49875, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('british horsepower to watt', () => {
      const result = convert('power', 1, 'mechanical_british_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(745.7, 6)
      expect(result.unit).toBe('metric_watt')
    })
  })

  // 测试热功率单位转换
  describe('Thermal Power Units', () => {
    test('BTU per hour to watt', () => {
      const result = convert('power', 1, 'thermal_btu_per_hour', 'metric_watt')
      expect(result.value).toBeCloseTo(0.29307107, 8)
      expect(result.unit).toBe('metric_watt')
    })

    test('kilocalorie per hour to watt', () => {
      const result = convert('power', 1, 'thermal_kilocalorie_per_hour', 'metric_watt')
      expect(result.value).toBeCloseTo(1.163, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('ton refrigeration to kilowatt', () => {
      const result = convert('power', 1, 'thermal_ton_refrigeration', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(3.516853, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })
  })

  // 测试工业功率单位转换
  describe('Industrial Power Units', () => {
    test('kilovolt ampere to kilowatt', () => {
      const result = convert('power', 1, 'industrial_kilovolt_ampere', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('kilovar to kilowatt', () => {
      const result = convert('power', 1, 'industrial_kilovar', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('megavolt ampere to megawatt', () => {
      const result = convert('power', 1, 'industrial_megavolt_ampere', 'metric_megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megawatt')
    })
  })

  // 测试科学功率单位转换
  describe('Scientific Power Units', () => {
    test('erg per second to watt', () => {
      const result = convert('power', 10000000, 'scientific_erg_per_second', 'metric_watt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('joule per second to watt', () => {
      const result = convert('power', 1, 'scientific_joule_per_second', 'metric_watt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('calorie per second to watt', () => {
      const result = convert('power', 1, 'scientific_calorie_per_second', 'metric_watt')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('metric_watt')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('horsepower to kilowatt', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(0.745699872, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('BTU per hour to kilocalorie per hour', () => {
      const result = convert('power', 1, 'thermal_btu_per_hour', 'thermal_kilocalorie_per_hour')
      expect(result.value).toBeCloseTo(0.252, 3)
      expect(result.unit).toBe('thermal_kilocalorie_per_hour')
    })

    test('megavolt ampere to horsepower', () => {
      const result = convert('power', 1, 'industrial_megavolt_ampere', 'mechanical_horsepower')
      expect(result.value).toBeCloseTo(1341.02, 2)
      expect(result.unit).toBe('mechanical_horsepower')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small powers', () => {
      const result = convert('power', 0.000001, 'metric_watt', 'scientific_erg_per_second')
      expect(result.value).toBeCloseTo(10, 6)
      expect(result.unit).toBe('scientific_erg_per_second')
    })

    test('should handle very large powers', () => {
      const result = convert('power', 1000, 'metric_gigawatt', 'metric_watt')
      expect(result.value).toBeCloseTo(1e12, 4)
      expect(result.unit).toBe('metric_watt')
    })

    test('should handle fractional powers', () => {
      const result = convert('power', 0.5, 'mechanical_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(372.849936, 6)
      expect(result.unit).toBe('metric_watt')
    })
  })
}) 
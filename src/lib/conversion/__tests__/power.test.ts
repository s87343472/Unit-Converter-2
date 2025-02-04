import { convert } from '../converter'

describe('功率单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('瓦特到千瓦', () => {
      const result = convert('power', 1000, 'metric_watt', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('千瓦到兆瓦', () => {
      const result = convert('power', 1000, 'metric_kilowatt', 'metric_megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megawatt')
    })

    test('兆瓦到吉瓦', () => {
      const result = convert('power', 1000, 'metric_megawatt', 'metric_gigawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_gigawatt')
    })
  })

  // 机械功率单位测试
  describe('机械功率单位转换', () => {
    test('机械马力到瓦特', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(745.699872, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('公制马力到瓦特', () => {
      const result = convert('power', 1, 'mechanical_metric_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(735.49875, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('锅炉马力到千瓦', () => {
      const result = convert('power', 1, 'mechanical_boiler_horsepower', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(9.80965, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })
  })

  // 热功率单位测试
  describe('热功率单位转换', () => {
    test('卡路里每秒到瓦特', () => {
      const result = convert('power', 1, 'thermal_calorie_per_second', 'metric_watt')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('英热单位每小时到瓦特', () => {
      const result = convert('power', 1, 'thermal_btu_per_hour', 'metric_watt')
      expect(result.value).toBeCloseTo(0.29307107, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('制冷吨到千瓦', () => {
      const result = convert('power', 1, 'thermal_ton_refrigeration', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(3.516853, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })
  })

  // 电气功率单位测试
  describe('电气功率单位转换', () => {
    test('伏安到瓦特', () => {
      const result = convert('power', 1, 'electric_volt_ampere', 'metric_watt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('千伏安到千瓦', () => {
      const result = convert('power', 1, 'electric_kilovolt_ampere', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('兆伏安到兆瓦', () => {
      const result = convert('power', 1, 'electric_megavolt_ampere', 'metric_megawatt')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megawatt')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('机械马力到千瓦', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(0.745699872, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('英热单位每小时到千卡每小时', () => {
      const result = convert('power', 1, 'thermal_btu_per_hour', 'thermal_kilocalorie_per_hour')
      expect(result.value).toBeCloseTo(0.252, 3)
      expect(result.unit).toBe('thermal_kilocalorie_per_hour')
    })

    test('兆伏安到机械马力', () => {
      const result = convert('power', 1, 'electric_megavolt_ampere', 'mechanical_horsepower')
      expect(result.value).toBeCloseTo(1341.02, 2)
      expect(result.unit).toBe('mechanical_horsepower')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('power', 1000, 'metric_gigawatt', 'metric_watt')
      expect(result.value).toBeCloseTo(1e12, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('小数值转换', () => {
      const result = convert('power', 0.001, 'metric_watt', 'thermal_btu_per_hour')
      expect(result.value).toBeCloseTo(0.003412141633, 6)
      expect(result.unit).toBe('thermal_btu_per_hour')
    })

    test('零值转换', () => {
      const result = convert('power', 0, 'mechanical_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('metric_watt')
    })
  })
}) 
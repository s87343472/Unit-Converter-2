import { convert } from '../converter'

describe('能量单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('焦耳到千焦耳', () => {
      const result = convert('energy', 1000, 'joule', 'kilo_joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilo_joule')
    })

    test('千焦耳到兆焦耳', () => {
      const result = convert('energy', 1000, 'kilo_joule', 'mega_joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('mega_joule')
    })

    test('兆焦耳到吉焦耳', () => {
      const result = convert('energy', 1000, 'mega_joule', 'giga_joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('giga_joule')
    })
  })

  // 热能单位测试
  describe('热能单位转换', () => {
    test('卡路里到焦耳', () => {
      const result = convert('energy', 1, 'thermal_calorie', 'joule')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('joule')
    })

    test('千卡到千焦耳', () => {
      const result = convert('energy', 1, 'thermal_kilocalorie', 'kilo_joule')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('kilo_joule')
    })

    test('英热单位到焦耳', () => {
      const result = convert('energy', 1, 'thermal_british_thermal_unit', 'joule')
      expect(result.value).toBeCloseTo(1055.05585262, 6)
      expect(result.unit).toBe('joule')
    })

    test('撒姆到兆焦耳', () => {
      const result = convert('energy', 1, 'thermal_therm', 'mega_joule')
      expect(result.value).toBeCloseTo(105.505585262, 6)
      expect(result.unit).toBe('mega_joule')
    })
  })

  // 电能单位测试
  describe('电能单位转换', () => {
    test('瓦时到焦耳', () => {
      const result = convert('energy', 1, 'electric_watt_hour', 'joule')
      expect(result.value).toBeCloseTo(3600, 6)
      expect(result.unit).toBe('joule')
    })

    test('千瓦时到兆焦耳', () => {
      const result = convert('energy', 1, 'electric_kilowatt_hour', 'mega_joule')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('mega_joule')
    })

    test('兆瓦时到吉焦耳', () => {
      const result = convert('energy', 1, 'electric_megawatt_hour', 'giga_joule')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('giga_joule')
    })
  })

  // 机械能单位测试
  describe('机械能单位转换', () => {
    test('英尺磅到焦耳', () => {
      const result = convert('energy', 1, 'mechanical_foot_pound', 'joule')
      expect(result.value).toBeCloseTo(1.355817948, 6)
      expect(result.unit).toBe('joule')
    })

    test('千克米到焦耳', () => {
      const result = convert('energy', 1, 'mechanical_kilogram_meter', 'joule')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('joule')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('千卡到千瓦时', () => {
      const result = convert('energy', 860.421, 'thermal_kilocalorie', 'electric_kilowatt_hour')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('electric_kilowatt_hour')
    })

    test('英热单位到千卡', () => {
      const result = convert('energy', 1, 'thermal_british_thermal_unit', 'thermal_kilocalorie')
      expect(result.value).toBeCloseTo(0.252, 3)
      expect(result.unit).toBe('thermal_kilocalorie')
    })

    test('兆瓦时到焦耳', () => {
      const result = convert('energy', 1, 'electric_megawatt_hour', 'joule')
      expect(result.value).toBeCloseTo(3.6e9, 6)
      expect(result.unit).toBe('joule')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('energy', 1e12, 'joule', 'tera_joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('tera_joule')
    })

    test('小数值转换', () => {
      const result = convert('energy', 0.001, 'joule', 'milli_joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('milli_joule')
    })

    test('零值转换', () => {
      const result = convert('energy', 0, 'thermal_calorie', 'joule')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('joule')
    })
  })
}) 
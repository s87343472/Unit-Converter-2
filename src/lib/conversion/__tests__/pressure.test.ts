import { convert } from '../converter'

describe('压力单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('帕斯卡到千帕', () => {
      const result = convert('pressure', 1000, 'metric_pascal', 'metric_kilopascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilopascal')
    })

    test('千帕到兆帕', () => {
      const result = convert('pressure', 1000, 'metric_kilopascal', 'metric_megapascal')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_megapascal')
    })
  })

  // 工业压力单位测试
  describe('工业压力单位转换', () => {
    test('巴到帕斯卡', () => {
      const result = convert('pressure', 1, 'industrial_bar', 'metric_pascal')
      expect(result.value).toBeCloseTo(100000, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('毫巴到帕斯卡', () => {
      const result = convert('pressure', 1, 'industrial_millibar', 'metric_pascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 科学压力单位测试
  describe('科学压力单位转换', () => {
    test('标准大气压到帕斯卡', () => {
      const result = convert('pressure', 1, 'scientific_atmosphere', 'metric_pascal')
      expect(result.value).toBeCloseTo(101325, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('托到帕斯卡', () => {
      const result = convert('pressure', 1, 'scientific_torr', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 医学压力单位测试
  describe('医学压力单位转换', () => {
    test('毫米汞柱到帕斯卡', () => {
      const result = convert('pressure', 1, 'medical_millimeter_of_mercury', 'metric_pascal')
      expect(result.value).toBeCloseTo(133.322387415, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('厘米水柱到帕斯卡', () => {
      const result = convert('pressure', 1, 'medical_centimeter_of_water', 'metric_pascal')
      expect(result.value).toBeCloseTo(98.0665, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 工程压力单位测试
  describe('工程压力单位转换', () => {
    test('千磅力每平方英寸到兆帕', () => {
      const result = convert('pressure', 1, 'engineering_kilopound_per_square_inch', 'metric_megapascal')
      expect(result.value).toBeCloseTo(6.894757293168, 6)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('工程厘米水柱到帕斯卡', () => {
      const result = convert('pressure', 1, 'engineering_centimeter_of_water', 'metric_pascal')
      expect(result.value).toBeCloseTo(98.0665, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('巴到标准大气压', () => {
      const result = convert('pressure', 1.01325, 'industrial_bar', 'scientific_atmosphere')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_atmosphere')
    })

    test('毫米汞柱到毫巴', () => {
      const result = convert('pressure', 1, 'medical_millimeter_of_mercury', 'industrial_millibar')
      expect(result.value).toBeCloseTo(1.33322387415, 6)
      expect(result.unit).toBe('industrial_millibar')
    })

    test('千磅力每平方英寸到巴', () => {
      const result = convert('pressure', 1, 'engineering_kilopound_per_square_inch', 'industrial_bar')
      expect(result.value).toBeCloseTo(68.94757293168, 6)
      expect(result.unit).toBe('industrial_bar')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('pressure', 1e9, 'metric_pascal', 'metric_megapascal')
      expect(result.value).toBeCloseTo(1000, 6)
      expect(result.unit).toBe('metric_megapascal')
    })

    test('小数值转换', () => {
      const result = convert('pressure', 0.001, 'industrial_bar', 'metric_pascal')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('metric_pascal')
    })

    test('零值转换', () => {
      const result = convert('pressure', 0, 'scientific_atmosphere', 'metric_pascal')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('metric_pascal')
    })
  })
}) 
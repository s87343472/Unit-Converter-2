import { convert } from '../converter'

describe('Energy Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('joule to kilojoule', () => {
      const result = convert('energy', 1000, 'joule', 'kilojoule')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('kilojoule')
    })

    test('kilojoule to megajoule', () => {
      const result = convert('energy', 1000, 'kilojoule', 'megajoule')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('megajoule')
    })
  })

  // 测试热量单位
  describe('Heat Units', () => {
    test('calorie to joule', () => {
      const result = convert('energy', 1, 'calorie', 'joule')
      expect(result.value).toBeCloseTo(4.184, 4)
      expect(result.unit).toBe('joule')
    })

    test('kilocalorie to kilojoule', () => {
      const result = convert('energy', 1, 'kilocalorie', 'kilojoule')
      expect(result.value).toBeCloseTo(4.184, 4)
      expect(result.unit).toBe('kilojoule')
    })

    test('british thermal unit to joule', () => {
      const result = convert('energy', 1, 'british_thermal_unit', 'joule')
      expect(result.value).toBeCloseTo(1055.06, 4)
      expect(result.unit).toBe('joule')
    })
  })

  // 测试电能单位
  describe('Electrical Units', () => {
    test('watt hour to joule', () => {
      const result = convert('energy', 1, 'watt_hour', 'joule')
      expect(result.value).toBeCloseTo(3600, 4)
      expect(result.unit).toBe('joule')
    })

    test('kilowatt hour to megajoule', () => {
      const result = convert('energy', 1, 'kilowatt_hour', 'megajoule')
      expect(result.value).toBeCloseTo(3.6, 4)
      expect(result.unit).toBe('megajoule')
    })
  })

  // 测试其他单位
  describe('Other Units', () => {
    test('electron volt to joule', () => {
      const result = convert('energy', 1, 'electron_volt', 'joule')
      expect(result.value).toBeCloseTo(1.602176634e-19, 28)
      expect(result.unit).toBe('joule')
    })

    test('therm to megajoule', () => {
      const result = convert('energy', 1, 'therm', 'megajoule')
      expect(result.value).toBeCloseTo(105.506, 4)
      expect(result.unit).toBe('megajoule')
    })

    test('foot pound to joule', () => {
      const result = convert('energy', 1, 'foot_pound', 'joule')
      expect(result.value).toBeCloseTo(1.355818, 4)
      expect(result.unit).toBe('joule')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small energy', () => {
      const result = convert('energy', 1, 'electron_volt', 'joule')
      expect(result.value).toBeCloseTo(1.602176634e-19, 28)
      expect(result.unit).toBe('joule')
    })

    test('should handle very large energy', () => {
      const result = convert('energy', 1000, 'megajoule', 'joule')
      expect(result.value).toBeCloseTo(1e9, 4)
      expect(result.unit).toBe('joule')
    })
  })
}) 
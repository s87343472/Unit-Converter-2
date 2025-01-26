import { convert } from '../converter'

describe('Temperature Conversion', () => {
  // 测试基本温度单位转换
  describe('Basic Temperature Scales', () => {
    test('celsius to kelvin', () => {
      const result = convert('temperature', 0, 'celsius', 'kelvin')
      expect(result.value).toBeCloseTo(273.15, 6)
      expect(result.unit).toBe('kelvin')
    })

    test('kelvin to celsius', () => {
      const result = convert('temperature', 273.15, 'kelvin', 'celsius')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('celsius')
    })

    test('fahrenheit to celsius', () => {
      const result = convert('temperature', 32, 'fahrenheit', 'celsius')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('celsius')
    })

    test('celsius to fahrenheit', () => {
      const result = convert('temperature', 100, 'celsius', 'fahrenheit')
      expect(result.value).toBeCloseTo(212, 6)
      expect(result.unit).toBe('fahrenheit')
    })

    test('rankine to kelvin', () => {
      const result = convert('temperature', 491.67, 'rankine', 'kelvin')
      expect(result.value).toBeCloseTo(273.15, 6)
      expect(result.unit).toBe('kelvin')
    })

    test('reaumur to celsius', () => {
      const result = convert('temperature', 80, 'reaumur', 'celsius')
      expect(result.value).toBeCloseTo(100, 6)
      expect(result.unit).toBe('celsius')
    })
  })

  // 测试特殊温度点
  describe('Special Temperature Points', () => {
    test('water freezing point', () => {
      const result = convert('temperature', 32, 'fahrenheit', 'celsius')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('celsius')
    })

    test('water boiling point', () => {
      const result = convert('temperature', 100, 'celsius', 'fahrenheit')
      expect(result.value).toBeCloseTo(212, 6)
      expect(result.unit).toBe('fahrenheit')
    })

    test('absolute zero', () => {
      const result = convert('temperature', 0, 'kelvin', 'celsius')
      expect(result.value).toBeCloseTo(-273.15, 6)
      expect(result.unit).toBe('celsius')
    })

    test('room temperature', () => {
      const result = convert('temperature', 20, 'celsius', 'fahrenheit')
      expect(result.value).toBeCloseTo(68, 6)
      expect(result.unit).toBe('fahrenheit')
    })
  })

  // 测试气象温度单位
  describe('Meteorological Temperature Units', () => {
    test('meteorological celsius to fahrenheit', () => {
      const result = convert('temperature', 30, 'meteorological_celsius', 'meteorological_fahrenheit')
      expect(result.value).toBeCloseTo(86, 6)
      expect(result.unit).toBe('meteorological_fahrenheit')
    })

    test('meteorological fahrenheit to celsius', () => {
      const result = convert('temperature', 86, 'meteorological_fahrenheit', 'meteorological_celsius')
      expect(result.value).toBeCloseTo(30, 6)
      expect(result.unit).toBe('meteorological_celsius')
    })
  })

  // 测试工业温度单位
  describe('Industrial Temperature Units', () => {
    test('industrial celsius to fahrenheit', () => {
      const result = convert('temperature', 150, 'industrial_celsius', 'industrial_fahrenheit')
      expect(result.value).toBeCloseTo(302, 6)
      expect(result.unit).toBe('industrial_fahrenheit')
    })

    test('industrial fahrenheit to celsius', () => {
      const result = convert('temperature', 302, 'industrial_fahrenheit', 'industrial_celsius')
      expect(result.value).toBeCloseTo(150, 6)
      expect(result.unit).toBe('industrial_celsius')
    })
  })

  // 测试跨类型转换
  describe('Cross-Type Conversions', () => {
    test('meteorological to industrial celsius', () => {
      const result = convert('temperature', 25, 'meteorological_celsius', 'industrial_celsius')
      expect(result.value).toBeCloseTo(25, 6)
      expect(result.unit).toBe('industrial_celsius')
    })

    test('industrial to basic fahrenheit', () => {
      const result = convert('temperature', 451, 'industrial_fahrenheit', 'fahrenheit')
      expect(result.value).toBeCloseTo(451, 6)
      expect(result.unit).toBe('fahrenheit')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very low temperatures', () => {
      const result = convert('temperature', -273.15, 'celsius', 'kelvin')
      expect(result.value).toBeCloseTo(0, 10)
      expect(result.unit).toBe('kelvin')
    })

    test('should handle very high temperatures', () => {
      const result = convert('temperature', 1000000, 'kelvin', 'celsius')
      expect(result.value).toBeCloseTo(999726.85, 2)
      expect(result.unit).toBe('celsius')
    })

    test('should handle fractional temperatures', () => {
      const result = convert('temperature', 98.6, 'fahrenheit', 'celsius')
      expect(result.value).toBeCloseTo(37, 1)
      expect(result.unit).toBe('celsius')
    })
  })
}) 
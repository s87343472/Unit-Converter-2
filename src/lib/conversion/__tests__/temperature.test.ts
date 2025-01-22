import { convert } from '../converter'

describe('Temperature Conversion', () => {
  // 测试摄氏度转换
  describe('Celsius Conversions', () => {
    test('celsius to fahrenheit', () => {
      const result = convert('temperature', 0, 'celsius', 'fahrenheit')
      expect(result.value).toBe(32)
      expect(result.unit).toBe('fahrenheit')
    })

    test('celsius to kelvin', () => {
      const result = convert('temperature', 0, 'celsius', 'kelvin')
      expect(result.value).toBe(273.15)
      expect(result.unit).toBe('kelvin')
    })
  })

  // 测试华氏度转换
  describe('Fahrenheit Conversions', () => {
    test('fahrenheit to celsius', () => {
      const result = convert('temperature', 32, 'fahrenheit', 'celsius')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('celsius')
    })

    test('fahrenheit to kelvin', () => {
      const result = convert('temperature', 32, 'fahrenheit', 'kelvin')
      expect(result.value).toBe(273.15)
      expect(result.unit).toBe('kelvin')
    })
  })

  // 测试开尔文转换
  describe('Kelvin Conversions', () => {
    test('kelvin to celsius', () => {
      const result = convert('temperature', 273.15, 'kelvin', 'celsius')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('celsius')
    })

    test('kelvin to fahrenheit', () => {
      const result = convert('temperature', 273.15, 'kelvin', 'fahrenheit')
      expect(result.value).toBe(32)
      expect(result.unit).toBe('fahrenheit')
    })
  })

  // 测试特殊值
  describe('Special Values', () => {
    test('absolute zero in kelvin', () => {
      const result = convert('temperature', 0, 'kelvin', 'celsius')
      expect(result.value).toBe(-273.15)
      expect(result.unit).toBe('celsius')
    })

    test('water boiling point', () => {
      const result = convert('temperature', 100, 'celsius', 'fahrenheit')
      expect(result.value).toBe(212)
      expect(result.unit).toBe('fahrenheit')
    })

    test('water freezing point', () => {
      const result = convert('temperature', 32, 'fahrenheit', 'celsius')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('celsius')
    })
  })
}) 
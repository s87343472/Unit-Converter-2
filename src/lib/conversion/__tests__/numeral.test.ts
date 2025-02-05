import { convertNumeral, isValidNumeralString, getMaxValue, getMinValue } from '../numeralConverter'

describe('Numeral System Conversion', () => {
  // 测试基本进制转换
  describe('Basic Numeral Systems', () => {
    test('decimal to binary', () => {
      const result = convertNumeral('10', 'scientific_decimal', 'scientific_binary')
      expect(result.value).toBe('1010')
      expect(result.unit).toBe('scientific_binary')
    })

    test('binary to decimal', () => {
      const result = convertNumeral('1010', 'scientific_binary', 'scientific_decimal')
      expect(result.value).toBe('10')
      expect(result.unit).toBe('scientific_decimal')
    })

    test('decimal to octal', () => {
      const result = convertNumeral('64', 'scientific_decimal', 'scientific_octal')
      expect(result.value).toBe('100')
      expect(result.unit).toBe('scientific_octal')
    })

    test('octal to decimal', () => {
      const result = convertNumeral('100', 'scientific_octal', 'scientific_decimal')
      expect(result.value).toBe('64')
      expect(result.unit).toBe('scientific_decimal')
    })

    test('decimal to hexadecimal', () => {
      const result = convertNumeral('255', 'scientific_decimal', 'scientific_hexadecimal')
      expect(result.value).toBe('FF')
      expect(result.unit).toBe('scientific_hexadecimal')
    })

    test('hexadecimal to decimal', () => {
      const result = convertNumeral('FF', 'scientific_hexadecimal', 'scientific_decimal')
      expect(result.value).toBe('255')
      expect(result.unit).toBe('scientific_decimal')
    })
  })

  // 测试特殊进制转换
  describe('Special Base Systems', () => {
    test('decimal to base3', () => {
      const result = convertNumeral('8', 'scientific_decimal', 'scientific_base3')
      expect(result.value).toBe('22')
      expect(result.unit).toBe('scientific_base3')
    })

    test('base3 to decimal', () => {
      const result = convertNumeral('22', 'scientific_base3', 'scientific_decimal')
      expect(result.value).toBe('8')
      expect(result.unit).toBe('scientific_decimal')
    })

    test('decimal to base4', () => {
      const result = convertNumeral('15', 'scientific_decimal', 'scientific_base4')
      expect(result.value).toBe('33')
      expect(result.unit).toBe('scientific_base4')
    })

    test('decimal to base6', () => {
      const result = convertNumeral('35', 'scientific_decimal', 'scientific_base6')
      expect(result.value).toBe('55')
      expect(result.unit).toBe('scientific_base6')
    })

    test('decimal to base12', () => {
      const result = convertNumeral('100', 'scientific_decimal', 'scientific_base12')
      expect(result.value).toBe('84')
      expect(result.unit).toBe('scientific_base12')
    })
  })

  // 测试科学计算进制转换
  describe('Scientific Base Systems', () => {
    test('decimal to base32', () => {
      const result = convertNumeral('1000', 'scientific_decimal', 'scientific_base32')
      expect(result.value).toBe('RY')
      expect(result.unit).toBe('scientific_base32')
    })

    test('base32 to decimal', () => {
      const result = convertNumeral('RY', 'scientific_base32', 'scientific_decimal')
      expect(result.value).toBe('1000')
      expect(result.unit).toBe('scientific_decimal')
    })

    test('decimal to base36', () => {
      const result = convertNumeral('1234', 'scientific_decimal', 'scientific_base36')
      expect(result.value).toBe('YA')
      expect(result.unit).toBe('scientific_base36')
    })

    test('decimal to base64', () => {
      const result = convertNumeral('65535', 'scientific_decimal', 'scientific_base64')
      expect(result.value).toBe('////')
      expect(result.unit).toBe('scientific_base64')
    })
  })

  // 测试历史进制转换
  describe('Historical Base Systems', () => {
    test('decimal to base20', () => {
      const result = convertNumeral('400', 'scientific_decimal', 'scientific_base20')
      expect(result.value).toBe('K0')
      expect(result.unit).toBe('scientific_base20')
    })

    test('base20 to decimal', () => {
      const result = convertNumeral('K0', 'scientific_base20', 'scientific_decimal')
      expect(result.value).toBe('400')
      expect(result.unit).toBe('scientific_decimal')
    })

    test('decimal to base60', () => {
      const result = convertNumeral('3600', 'scientific_decimal', 'scientific_base60')
      expect(result.value).toBe('10')
      expect(result.unit).toBe('scientific_base60')
    })
  })

  // 测试跨进制转换
  describe('Cross-Base Conversions', () => {
    test('binary to hexadecimal', () => {
      const result = convertNumeral('11111111', 'scientific_binary', 'scientific_hexadecimal')
      expect(result.value).toBe('FF')
      expect(result.unit).toBe('scientific_hexadecimal')
    })

    test('octal to binary', () => {
      const result = convertNumeral('70', 'scientific_octal', 'scientific_binary')
      expect(result.value).toBe('111000')
      expect(result.unit).toBe('scientific_binary')
    })

    test('hexadecimal to base32', () => {
      const result = convertNumeral('FF00', 'scientific_hexadecimal', 'scientific_base32')
      expect(result.value).toBe('7YA')
      expect(result.unit).toBe('scientific_base32')
    })
  })

  // 测试输入验证
  describe('Input Validation', () => {
    test('should validate binary string', () => {
      expect(isValidNumeralString('1010', 2)).toBe(true)
      expect(isValidNumeralString('1012', 2)).toBe(false)
    })

    test('should validate hexadecimal string', () => {
      expect(isValidNumeralString('FF', 16)).toBe(true)
      expect(isValidNumeralString('GG', 16)).toBe(false)
    })

    test('should validate negative numbers', () => {
      expect(isValidNumeralString('-1010', 2)).toBe(true)
      expect(isValidNumeralString('-FF', 16)).toBe(true)
    })
  })

  // 测试边界值
  describe('Boundary Values', () => {
    test('should get maximum value', () => {
      expect(getMaxValue(2, 4)).toBe('1111')
      expect(getMaxValue(16, 2)).toBe('FF')
    })

    test('should get minimum value', () => {
      expect(getMinValue(2, 4)).toBe('1000')
      expect(getMinValue(16, 2)).toBe('10')
    })
  })

  // 测试错误处理
  describe('Error Handling', () => {
    test('should handle invalid input', () => {
      expect(() => convertNumeral('GG', 'scientific_hexadecimal', 'scientific_decimal')).toThrow()
      expect(() => convertNumeral('2', 'scientific_binary', 'scientific_decimal')).toThrow()
    })

    test('should handle invalid base system', () => {
      expect(() => convertNumeral('10', 'scientific_decimal', 'invalid')).toThrow()
      expect(() => convertNumeral('10', 'invalid', 'scientific_decimal')).toThrow()
    })

    test('should handle empty input', () => {
      expect(() => convertNumeral('', 'scientific_decimal', 'scientific_binary')).toThrow()
    })
  })
}) 
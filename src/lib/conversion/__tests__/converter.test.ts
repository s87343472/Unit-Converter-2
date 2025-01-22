import { convert, getUnits, getBaseUnit, isValidUnit } from '../converter'
import type { ConversionType } from '../types'

describe('Unit Converter', () => {
  describe('Length Conversion', () => {
    it('should convert meters to centimeters', () => {
      const result = convert('length', 1, 'meter', 'centimeter')
      expect(result.value).toBe(100)
      expect(result.error).toBeUndefined()
    })

    it('should convert kilometers to miles', () => {
      const result = convert('length', 1, 'kilometer', 'mile')
      expect(result.value).toBeCloseTo(0.621371, 6)
      expect(result.error).toBeUndefined()
    })

    it('should handle invalid units', () => {
      expect(() => {
        convert('length', 1, 'invalid', 'meter')
      }).toThrow('Invalid unit: invalid')
    })
  })

  describe('Weight Conversion', () => {
    it('should convert kilograms to pounds', () => {
      const result = convert('weight', 1, 'kilogram', 'pound')
      expect(result.value).toBeCloseTo(2.20462, 5)
      expect(result.error).toBeUndefined()
    })

    it('should convert grams to ounces', () => {
      const result = convert('weight', 100, 'gram', 'ounce')
      expect(result.value).toBeCloseTo(3.52740, 5)
      expect(result.error).toBeUndefined()
    })
  })

  describe('Temperature Conversion', () => {
    it('should convert celsius to fahrenheit', () => {
      const result = convert('temperature', 0, 'celsius', 'fahrenheit')
      expect(result.value).toBe(32)
      expect(result.error).toBeUndefined()
    })

    it('should convert kelvin to celsius', () => {
      const result = convert('temperature', 273.15, 'kelvin', 'celsius')
      expect(result.value).toBe(0)
      expect(result.error).toBeUndefined()
    })
  })

  describe('Utility Functions', () => {
    it('should get all units for a type', () => {
      const lengthUnits = getUnits('length')
      expect(lengthUnits).toContain('meter')
      expect(lengthUnits).toContain('kilometer')
    })

    it('should get base unit for a type', () => {
      expect(getBaseUnit('length')).toBe('meter')
      expect(getBaseUnit('weight')).toBe('kilogram')
      expect(getBaseUnit('temperature')).toBe('celsius')
    })

    it('should validate units', () => {
      expect(isValidUnit('length', 'meter')).toBe(true)
      expect(isValidUnit('length', 'invalid')).toBe(false)
    })
  })

  // 测试基础功能
  describe('Basic Functions', () => {
    test('getUnits should return array of units', () => {
      const lengthUnits = getUnits('length')
      expect(Array.isArray(lengthUnits)).toBe(true)
      expect(lengthUnits.length).toBeGreaterThan(0)
    })

    test('getBaseUnit should return base unit', () => {
      expect(getBaseUnit('length')).toBe('meter')
      expect(getBaseUnit('weight')).toBe('kilogram')
      expect(getBaseUnit('temperature')).toBe('celsius')
    })

    test('isValidUnit should validate units', () => {
      expect(isValidUnit('length', 'meter')).toBe(true)
      expect(isValidUnit('length', 'invalid_unit')).toBe(false)
    })
  })

  // 测试错误处理
  describe('Error Handling', () => {
    test('should handle invalid conversion type', () => {
      expect(() => {
        // @ts-ignore
        convert('invalid_type', 1, 'meter', 'centimeter')
      }).toThrow()
    })

    test('should handle invalid units', () => {
      expect(() => {
        convert('length', 1, 'invalid_from', 'invalid_to')
      }).toThrow('Invalid unit: invalid_from')
    })
  })
}) 
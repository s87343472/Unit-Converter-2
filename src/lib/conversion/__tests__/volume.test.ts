import { convert } from '../converter'

describe('Volume Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('cubic meter to liter', () => {
      const result = convert('volume', 1, 'cubic_meter', 'liter')
      expect(result.value).toBeCloseTo(1000, 2)
      expect(result.unit).toBe('liter')
    })

    test('liter to milliliter', () => {
      const result = convert('volume', 1, 'liter', 'milliliter')
      expect(result.value).toBeCloseTo(1000, 2)
      expect(result.unit).toBe('milliliter')
    })

    test('cubic meter to cubic centimeter', () => {
      const result = convert('volume', 1, 'cubic_meter', 'cubic_centimeter')
      expect(result.value).toBeCloseTo(1000000, 4)
      expect(result.unit).toBe('cubic_centimeter')
    })
  })

  // 测试美制单位转换
  describe('US Customary Conversions', () => {
    test('us gallon to liter', () => {
      const result = convert('volume', 1, 'gallon_us', 'liter')
      expect(result.value).toBeCloseTo(3.78541, 4)
      expect(result.unit).toBe('liter')
    })

    test('us quart to liter', () => {
      const result = convert('volume', 1, 'quart_us', 'liter')
      expect(result.value).toBeCloseTo(0.946353, 4)
      expect(result.unit).toBe('liter')
    })

    test('us fluid ounce to milliliter', () => {
      const result = convert('volume', 1, 'fluid_ounce_us', 'milliliter')
      expect(result.value).toBeCloseTo(29.5735, 4)
      expect(result.unit).toBe('milliliter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Conversions', () => {
    test('imperial gallon to liter', () => {
      const result = convert('volume', 1, 'gallon_uk', 'liter')
      expect(result.value).toBeCloseTo(4.54609, 4)
      expect(result.unit).toBe('liter')
    })

    test('imperial pint to milliliter', () => {
      const result = convert('volume', 1, 'pint_uk', 'milliliter')
      expect(result.value).toBeCloseTo(568.261, 3)
      expect(result.unit).toBe('milliliter')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small volumes', () => {
      const result = convert('volume', 0.000001, 'cubic_meter', 'cubic_centimeter')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('cubic_centimeter')
    })

    test('should handle very large volumes', () => {
      const result = convert('volume', 1000000, 'milliliter', 'cubic_meter')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('cubic_meter')
    })
  })
}) 
import { convert } from '../converter'

describe('Area Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('square meter to square centimeter', () => {
      const result = convert('area', 1, 'square_meter', 'square_centimeter')
      expect(result.value).toBe(10000)
      expect(result.unit).toBe('square_centimeter')
    })

    test('square kilometer to square meter', () => {
      const result = convert('area', 1, 'square_kilometer', 'square_meter')
      expect(result.value).toBe(1000000)
      expect(result.unit).toBe('square_meter')
    })

    test('hectare to square meter', () => {
      const result = convert('area', 1, 'hectare', 'square_meter')
      expect(result.value).toBe(10000)
      expect(result.unit).toBe('square_meter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Conversions', () => {
    test('square foot to square meter', () => {
      const result = convert('area', 1, 'square_foot', 'square_meter')
      expect(result.value).toBeCloseTo(0.092903, 6)
      expect(result.unit).toBe('square_meter')
    })

    test('square yard to square meter', () => {
      const result = convert('area', 1, 'square_yard', 'square_meter')
      expect(result.value).toBeCloseTo(0.836127, 6)
      expect(result.unit).toBe('square_meter')
    })

    test('acre to hectare', () => {
      const result = convert('area', 1, 'acre', 'hectare')
      expect(result.value).toBeCloseTo(0.404686, 6)
      expect(result.unit).toBe('hectare')
    })
  })

  // 测试中国传统单位
  describe('Chinese Traditional Units', () => {
    test('mu to square meter', () => {
      const result = convert('area', 1, 'mu', 'square_meter')
      expect(result.value).toBe(666.67)
      expect(result.unit).toBe('square_meter')
    })

    test('qing to hectare', () => {
      const result = convert('area', 1, 'qing', 'hectare')
      expect(result.value).toBe(6.667)
      expect(result.unit).toBe('hectare')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle small areas', () => {
      const result = convert('area', 0.0001, 'square_meter', 'square_centimeter')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('square_centimeter')
    })

    test('should handle large areas', () => {
      const result = convert('area', 1000000, 'square_meter', 'square_kilometer')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('square_kilometer')
    })
  })
}) 
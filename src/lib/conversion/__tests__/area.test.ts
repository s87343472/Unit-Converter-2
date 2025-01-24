import { convert } from '../converter'

describe('Area Conversion', () => {
  // 测试公制单位转换
  describe('Metric Conversions', () => {
    test('metric_square_meter to metric_square_centimeter', () => {
      const result = convert('area', 1, 'metric_square_meter', 'metric_square_centimeter')
      expect(result.value).toBe(10000)
      expect(result.unit).toBe('metric_square_centimeter')
    })

    test('metric_square_kilometer to metric_hectare', () => {
      const result = convert('area', 1, 'metric_square_kilometer', 'metric_hectare')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('metric_hectare')
    })

    test('metric_hectare to metric_square_meter', () => {
      const result = convert('area', 1, 'metric_hectare', 'metric_square_meter')
      expect(result.value).toBe(10000)
      expect(result.unit).toBe('metric_square_meter')
    })

    test('metric_are to metric_square_meter', () => {
      const result = convert('area', 1, 'metric_are', 'metric_square_meter')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('metric_square_meter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Conversions', () => {
    test('imperial_square_foot to metric_square_meter', () => {
      const result = convert('area', 1, 'imperial_square_foot', 'metric_square_meter')
      expect(result.value).toBeCloseTo(0.092903, 6)
      expect(result.unit).toBe('metric_square_meter')
    })

    test('imperial_square_yard to metric_square_meter', () => {
      const result = convert('area', 1, 'imperial_square_yard', 'metric_square_meter')
      expect(result.value).toBeCloseTo(0.836127, 6)
      expect(result.unit).toBe('metric_square_meter')
    })

    test('imperial_acre to metric_hectare', () => {
      const result = convert('area', 1, 'imperial_acre', 'metric_hectare')
      expect(result.value).toBeCloseTo(0.404686, 6)
      expect(result.unit).toBe('metric_hectare')
    })

    test('imperial_square_mile to metric_square_kilometer', () => {
      const result = convert('area', 1, 'imperial_square_mile', 'metric_square_kilometer')
      expect(result.value).toBeCloseTo(2.589988, 6)
      expect(result.unit).toBe('metric_square_kilometer')
    })
  })

  // 测试中国传统单位
  describe('Traditional Chinese Units', () => {
    test('traditional_mu to metric_square_meter', () => {
      const result = convert('area', 1, 'traditional_mu', 'metric_square_meter')
      expect(result.value).toBe(666.67)
      expect(result.unit).toBe('metric_square_meter')
    })

    test('traditional_qing to metric_hectare', () => {
      const result = convert('area', 1, 'traditional_qing', 'metric_hectare')
      expect(result.value).toBeCloseTo(6.6667, 4)
      expect(result.unit).toBe('metric_hectare')
    })
  })

  // 测试测量单位
  describe('Surveying Units', () => {
    test('surveying_rood to metric_square_meter', () => {
      const result = convert('area', 1, 'surveying_rood', 'metric_square_meter')
      expect(result.value).toBeCloseTo(1011.71, 2)
      expect(result.unit).toBe('metric_square_meter')
    })

    test('surveying_square_chain to imperial_acre', () => {
      const result = convert('area', 1, 'surveying_square_chain', 'imperial_acre')
      expect(result.value).toBeCloseTo(0.1, 1)
      expect(result.unit).toBe('imperial_acre')
    })
  })

  // 测试精度控制
  describe('Precision Control', () => {
    test('should handle very small areas', () => {
      const result = convert('area', 1e-10, 'metric_square_meter', 'metric_square_millimeter')
      expect(result.value).toBeCloseTo(1e-4, 10)
      expect(result.unit).toBe('metric_square_millimeter')
    })

    test('should handle very large areas', () => {
      const result = convert('area', 1e10, 'metric_square_meter', 'metric_square_kilometer')
      expect(result.value).toBeCloseTo(10000, 4)
      expect(result.unit).toBe('metric_square_kilometer')
    })

    test('should handle zero value', () => {
      const result = convert('area', 0, 'metric_square_meter', 'imperial_square_foot')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('imperial_square_foot')
    })
  })

  // 测试跨单位系统转换
  describe('Cross-System Conversions', () => {
    test('imperial to metric to traditional', () => {
      const result = convert('area', 1, 'imperial_acre', 'traditional_mu')
      expect(result.value).toBeCloseTo(6.07, 2)
      expect(result.unit).toBe('traditional_mu')
    })

    test('traditional to metric to surveying', () => {
      const result = convert('area', 1, 'traditional_qing', 'surveying_rood')
      expect(result.value).toBeCloseTo(65.89, 2)
      expect(result.unit).toBe('surveying_rood')
    })
  })
}) 
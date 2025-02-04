import { convert } from '../converter'

describe('Angle Conversion', () => {
  // 公制单位转换测试
  describe('Metric Unit Conversions', () => {
    test('metric_radian to metric_milliradian', () => {
      const result = convert('angle', 1, 'metric_radian', 'metric_milliradian')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_milliradian')
    })

    test('metric_milliradian to metric_microradian', () => {
      const result = convert('angle', 1, 'metric_milliradian', 'metric_microradian')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_microradian')
    })

    test('metric_microradian to metric_radian', () => {
      const result = convert('angle', 1e6, 'metric_microradian', 'metric_radian')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_radian')
    })
  })

  // 标准角度单位转换测试
  describe('Standard Angle Conversions', () => {
    test('metric_degree to metric_radian', () => {
      const result = convert('angle', 180, 'metric_degree', 'metric_radian')
      expect(result.value).toBeCloseTo(Math.PI, 6)
      expect(result.unit).toBe('metric_radian')
    })

    test('metric_degree to metric_arcminute', () => {
      const result = convert('angle', 1, 'metric_degree', 'metric_arcminute')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('metric_arcminute')
    })

    test('metric_arcminute to metric_arcsecond', () => {
      const result = convert('angle', 1, 'metric_arcminute', 'metric_arcsecond')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('metric_arcsecond')
    })

    test('metric_gradian to metric_degree', () => {
      const result = convert('angle', 100, 'metric_gradian', 'metric_degree')
      expect(result.value).toBeCloseTo(90, 6)
      expect(result.unit).toBe('metric_degree')
    })
  })

  // 周期单位转换测试
  describe('Cycle Unit Conversions', () => {
    test('scientific_revolution to metric_degree', () => {
      const result = convert('angle', 1, 'scientific_revolution', 'metric_degree')
      expect(result.value).toBeCloseTo(360, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('scientific_quadrant to metric_degree', () => {
      const result = convert('angle', 1, 'scientific_quadrant', 'metric_degree')
      expect(result.value).toBeCloseTo(90, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('scientific_semicircle to metric_degree', () => {
      const result = convert('angle', 1, 'scientific_semicircle', 'metric_degree')
      expect(result.value).toBeCloseTo(180, 6)
      expect(result.unit).toBe('metric_degree')
    })
  })

  // 航海单位转换测试
  describe('Nautical Unit Conversions', () => {
    test('traditional_point to metric_degree', () => {
      const result = convert('angle', 1, 'traditional_point', 'metric_degree')
      expect(result.value).toBeCloseTo(11.25, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('traditional_sextant to metric_degree', () => {
      const result = convert('angle', 1, 'traditional_sextant', 'metric_degree')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('traditional_octant to metric_degree', () => {
      const result = convert('angle', 1, 'traditional_octant', 'metric_degree')
      expect(result.value).toBeCloseTo(45, 6)
      expect(result.unit).toBe('metric_degree')
    })
  })

  // 军事单位转换测试
  describe('Military Unit Conversions', () => {
    test('scientific_mil to metric_degree', () => {
      const result = convert('angle', 160, 'scientific_mil', 'metric_degree')
      expect(result.value).toBeCloseTo(9, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('scientific_nato_mil to metric_degree', () => {
      const result = convert('angle', 160, 'scientific_nato_mil', 'metric_degree')
      expect(result.value).toBeCloseTo(9, 6)
      expect(result.unit).toBe('metric_degree')
    })
  })

  // 跨类型转换测试
  describe('Cross-type Conversions', () => {
    test('metric_degree to scientific_mil', () => {
      const result = convert('angle', 9, 'metric_degree', 'scientific_mil')
      expect(result.value).toBeCloseTo(160, 6)
      expect(result.unit).toBe('scientific_mil')
    })

    test('scientific_revolution to traditional_point', () => {
      const result = convert('angle', 1, 'scientific_revolution', 'traditional_point')
      expect(result.value).toBeCloseTo(32, 6)
      expect(result.unit).toBe('traditional_point')
    })
  })

  // 边界值测试
  describe('Boundary Value Tests', () => {
    test('very small angle (microradians)', () => {
      const result = convert('angle', 1e-6, 'metric_radian', 'metric_microradian')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_microradian')
    })

    test('very large angle (multiple revolutions)', () => {
      const result = convert('angle', 1e3, 'scientific_revolution', 'metric_degree')
      expect(result.value).toBeCloseTo(360000, 6)
      expect(result.unit).toBe('metric_degree')
    })

    test('zero angle', () => {
      const result = convert('angle', 0, 'metric_radian', 'metric_degree')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_degree')
    })
  })
}) 
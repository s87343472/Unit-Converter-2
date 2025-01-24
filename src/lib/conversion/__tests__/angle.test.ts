import { convert } from '../converter'

describe('Angle Conversion', () => {
  // 公制单位转换测试
  describe('Metric Unit Conversions', () => {
    test('metric_radian to metric_milliradian', () => {
      expect(convert('angle', 1, 'metric_radian', 'metric_milliradian')).toBe(1000)
    })

    test('metric_milliradian to metric_microradian', () => {
      expect(convert('angle', 1, 'metric_milliradian', 'metric_microradian')).toBe(1000)
    })

    test('metric_microradian to metric_radian', () => {
      expect(convert('angle', 1e6, 'metric_microradian', 'metric_radian')).toBe(1)
    })
  })

  // 标准角度单位转换测试
  describe('Standard Angle Conversions', () => {
    test('standard_degree to metric_radian', () => {
      expect(convert('angle', 180, 'standard_degree', 'metric_radian')).toBeCloseTo(Math.PI, 6)
    })

    test('standard_degree to standard_arcminute', () => {
      expect(convert('angle', 1, 'standard_degree', 'standard_arcminute')).toBe(60)
    })

    test('standard_arcminute to standard_arcsecond', () => {
      expect(convert('angle', 1, 'standard_arcminute', 'standard_arcsecond')).toBe(60)
    })

    test('standard_gradian to standard_degree', () => {
      expect(convert('angle', 100, 'standard_gradian', 'standard_degree')).toBeCloseTo(90, 6)
    })
  })

  // 周期单位转换测试
  describe('Cycle Unit Conversions', () => {
    test('cycle_revolution to standard_degree', () => {
      expect(convert('angle', 1, 'cycle_revolution', 'standard_degree')).toBeCloseTo(360, 6)
    })

    test('cycle_quadrant to standard_degree', () => {
      expect(convert('angle', 1, 'cycle_quadrant', 'standard_degree')).toBeCloseTo(90, 6)
    })

    test('cycle_semicircle to standard_degree', () => {
      expect(convert('angle', 1, 'cycle_semicircle', 'standard_degree')).toBeCloseTo(180, 6)
    })
  })

  // 航海单位转换测试
  describe('Nautical Unit Conversions', () => {
    test('nautical_point to standard_degree', () => {
      expect(convert('angle', 1, 'nautical_point', 'standard_degree')).toBeCloseTo(11.25, 6)
    })

    test('nautical_sextant to standard_degree', () => {
      expect(convert('angle', 1, 'nautical_sextant', 'standard_degree')).toBeCloseTo(60, 6)
    })

    test('nautical_octant to standard_degree', () => {
      expect(convert('angle', 1, 'nautical_octant', 'standard_degree')).toBeCloseTo(45, 6)
    })
  })

  // 军事单位转换测试
  describe('Military Unit Conversions', () => {
    test('military_mil to standard_degree', () => {
      expect(convert('angle', 160, 'military_mil', 'standard_degree')).toBeCloseTo(9, 6)
    })

    test('military_nato_mil to standard_degree', () => {
      expect(convert('angle', 160, 'military_nato_mil', 'standard_degree')).toBeCloseTo(9, 6)
    })
  })

  // 跨类型转换测试
  describe('Cross-type Conversions', () => {
    test('standard_degree to military_mil', () => {
      expect(convert('angle', 9, 'standard_degree', 'military_mil')).toBeCloseTo(160, 6)
    })

    test('cycle_revolution to nautical_point', () => {
      expect(convert('angle', 1, 'cycle_revolution', 'nautical_point')).toBeCloseTo(32, 6)
    })
  })

  // 边界值测试
  describe('Boundary Value Tests', () => {
    test('very small angle (microradians)', () => {
      expect(convert('angle', 1e-6, 'metric_radian', 'metric_microradian')).toBe(1)
    })

    test('very large angle (multiple revolutions)', () => {
      expect(convert('angle', 1e3, 'cycle_revolution', 'standard_degree')).toBeCloseTo(360000, 6)
    })

    test('zero angle', () => {
      expect(convert('angle', 0, 'metric_radian', 'standard_degree')).toBe(0)
    })
  })
}) 
}) 
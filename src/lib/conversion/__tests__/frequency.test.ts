import { convert } from '../converter'

describe('Frequency Conversion', () => {
  // 测试公制频率单位转换
  describe('Metric Frequency Units', () => {
    test('hertz to kilohertz', () => {
      const result = convert('frequency', 1000, 'metric_hertz', 'metric_kilohertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilohertz')
    })

    test('kilohertz to megahertz', () => {
      const result = convert('frequency', 1000, 'metric_kilohertz', 'metric_megahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_megahertz')
    })

    test('megahertz to gigahertz', () => {
      const result = convert('frequency', 1000, 'metric_megahertz', 'metric_gigahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_gigahertz')
    })

    test('gigahertz to terahertz', () => {
      const result = convert('frequency', 1000, 'metric_gigahertz', 'metric_terahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_terahertz')
    })
  })

  // 测试周期单位转换
  describe('Period Units', () => {
    test('period per second to hertz', () => {
      const result = convert('frequency', 1, 'period_per_second', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('period per minute to hertz', () => {
      const result = convert('frequency', 60, 'period_per_minute', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('period per hour to hertz', () => {
      const result = convert('frequency', 3600, 'period_per_hour', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })
  })

  // 测试角速度单位转换
  describe('Angular Velocity Units', () => {
    test('radian per second to hertz', () => {
      const result = convert('frequency', 2 * Math.PI, 'angular_radian_per_second', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('degree per second to hertz', () => {
      const result = convert('frequency', 360, 'angular_degree_per_second', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('revolution per minute to hertz', () => {
      const result = convert('frequency', 60, 'angular_revolution_per_minute', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('revolution per second to hertz', () => {
      const result = convert('frequency', 1, 'angular_revolution_per_second', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })
  })

  // 测试音频频率单位转换
  describe('Audio Frequency Units', () => {
    test('millihertz to hertz', () => {
      const result = convert('frequency', 1000, 'audio_millihertz', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('beat per minute to hertz', () => {
      const result = convert('frequency', 60, 'audio_beat_per_minute', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })
  })

  // 测试光学频率单位转换
  describe('Optical Frequency Units', () => {
    test('petahertz to terahertz', () => {
      const result = convert('frequency', 1, 'optical_petahertz', 'metric_terahertz')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_terahertz')
    })

    test('wavenumber to terahertz', () => {
      const result = convert('frequency', 1, 'optical_wavenumber', 'metric_terahertz')
      expect(result.value).toBeCloseTo(0.02998, 5)
      expect(result.unit).toBe('metric_terahertz')
    })
  })

  // 测试电子学频率单位转换
  describe('Electronic Frequency Units', () => {
    test('frame per second to hertz', () => {
      const result = convert('frequency', 1, 'electronic_frame_per_second', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })

    test('refresh rate to hertz', () => {
      const result = convert('frequency', 1, 'electronic_refresh_rate', 'metric_hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hertz')
    })
  })

  // 测试跨类型转换
  describe('Cross-Category Conversions', () => {
    test('revolution per minute to beat per minute', () => {
      const result = convert('frequency', 1, 'angular_revolution_per_minute', 'audio_beat_per_minute')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('audio_beat_per_minute')
    })

    test('frame per second to period per second', () => {
      const result = convert('frequency', 1, 'electronic_frame_per_second', 'period_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('period_per_second')
    })

    test('radian per second to revolution per minute', () => {
      const result = convert('frequency', 2 * Math.PI, 'angular_radian_per_second', 'angular_revolution_per_minute')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('angular_revolution_per_minute')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very high frequencies', () => {
      const result = convert('frequency', 1, 'optical_petahertz', 'metric_hertz')
      expect(result.value).toBe(1e15)
      expect(result.unit).toBe('metric_hertz')
    })

    test('should handle very low frequencies', () => {
      const result = convert('frequency', 1, 'period_per_hour', 'audio_millihertz')
      expect(result.value).toBeCloseTo(0.2778, 4)
      expect(result.unit).toBe('audio_millihertz')
    })

    test('should handle fractional frequencies', () => {
      const result = convert('frequency', 0.5, 'angular_revolution_per_second', 'angular_degree_per_second')
      expect(result.value).toBe(180)
      expect(result.unit).toBe('angular_degree_per_second')
    })
  })
}) 
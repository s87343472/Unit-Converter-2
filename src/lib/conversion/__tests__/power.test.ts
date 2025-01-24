import { convert } from '../converter'

describe('Power Conversion', () => {
  // 公制单位测试
  describe('Metric Unit Conversions', () => {
    test('metric_watt to metric_kilowatt', () => {
      const result = convert('power', 1000, 'metric_watt', 'metric_kilowatt')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('metric_kilowatt to metric_megawatt', () => {
      const result = convert('power', 1000, 'metric_kilowatt', 'metric_megawatt')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_megawatt')
    })

    test('metric_megawatt to metric_gigawatt', () => {
      const result = convert('power', 1000, 'metric_megawatt', 'metric_gigawatt')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_gigawatt')
    })
  })

  // 机械功率单位测试
  describe('Mechanical Unit Conversions', () => {
    test('mechanical_horsepower to metric_watt', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(745.7, 1)
      expect(result.unit).toBe('metric_watt')
    })

    test('mechanical_metric_horsepower to metric_watt', () => {
      const result = convert('power', 1, 'mechanical_metric_horsepower', 'metric_watt')
      expect(result.value).toBeCloseTo(735.49875, 5)
      expect(result.unit).toBe('metric_watt')
    })

    test('mechanical_foot_pound_per_second to metric_watt', () => {
      const result = convert('power', 1, 'mechanical_foot_pound_per_second', 'metric_watt')
      expect(result.value).toBeCloseTo(1.355818, 6)
      expect(result.unit).toBe('metric_watt')
    })

    test('mechanical_newton_meter_per_second to metric_watt', () => {
      const result = convert('power', 1, 'mechanical_newton_meter_per_second', 'metric_watt')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_watt')
    })
  })

  // 热功率单位测试
  describe('Thermal Unit Conversions', () => {
    test('thermal_kilocalorie_per_hour to metric_watt', () => {
      const result = convert('power', 1, 'thermal_kilocalorie_per_hour', 'metric_watt')
      expect(result.value).toBeCloseTo(1.163, 3)
      expect(result.unit).toBe('metric_watt')
    })

    test('thermal_british_thermal_unit_per_hour to metric_watt', () => {
      const result = convert('power', 1, 'thermal_british_thermal_unit_per_hour', 'metric_watt')
      expect(result.value).toBeCloseTo(0.29307107, 8)
      expect(result.unit).toBe('metric_watt')
    })

    test('thermal_ton_of_refrigeration to metric_kilowatt', () => {
      const result = convert('power', 1, 'thermal_ton_of_refrigeration', 'metric_kilowatt')
      expect(result.value).toBeCloseTo(3.516853, 6)
      expect(result.unit).toBe('metric_kilowatt')
    })
  })

  // 辐射功率单位测试
  describe('Radiation Unit Conversions', () => {
    test('radiation_erg_per_second to metric_watt', () => {
      const result = convert('power', 1, 'radiation_erg_per_second', 'metric_watt')
      expect(result.value).toBe(1e-7)
      expect(result.unit).toBe('metric_watt')
    })

    test('radiation_solar_luminosity to metric_gigawatt', () => {
      const result = convert('power', 1, 'radiation_solar_luminosity', 'metric_gigawatt')
      expect(result.value).toBeCloseTo(3.828e17, 3)
      expect(result.unit).toBe('metric_gigawatt')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('mechanical_horsepower to thermal_british_thermal_unit_per_hour', () => {
      const result = convert('power', 1, 'mechanical_horsepower', 'thermal_british_thermal_unit_per_hour')
      expect(result.value).toBeCloseTo(2544.43, 2)
      expect(result.unit).toBe('thermal_british_thermal_unit_per_hour')
    })

    test('thermal_ton_of_refrigeration to mechanical_horsepower', () => {
      const result = convert('power', 1, 'thermal_ton_of_refrigeration', 'mechanical_horsepower')
      expect(result.value).toBeCloseTo(4.716, 3)
      expect(result.unit).toBe('mechanical_horsepower')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('power', 0, 'metric_watt', 'metric_kilowatt')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_kilowatt')
    })

    test('very small value conversion', () => {
      const result = convert('power', 1e-10, 'metric_watt', 'radiation_erg_per_second')
      expect(result.value).toBe(1e-3)
      expect(result.unit).toBe('radiation_erg_per_second')
    })

    test('very large value conversion', () => {
      const result = convert('power', 1, 'radiation_solar_luminosity', 'metric_gigawatt')
      expect(result.value).toBeCloseTo(3.828e17, 3)
      expect(result.unit).toBe('metric_gigawatt')
    })
  })
}) 
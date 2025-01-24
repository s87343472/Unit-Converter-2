import { convert } from '../converter'

describe('Energy Conversion', () => {
  // 公制单位测试
  describe('Metric Unit Conversions', () => {
    test('metric_joule to metric_kilojoule', () => {
      const result = convert('energy', 1000, 'metric_joule', 'metric_kilojoule')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilojoule')
    })

    test('metric_kilojoule to metric_megajoule', () => {
      const result = convert('energy', 1000, 'metric_kilojoule', 'metric_megajoule')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_megajoule')
    })

    test('metric_megajoule to metric_joule', () => {
      const result = convert('energy', 1, 'metric_megajoule', 'metric_joule')
      expect(result.value).toBe(1e6)
      expect(result.unit).toBe('metric_joule')
    })
  })

  // 热量单位测试
  describe('Thermal Unit Conversions', () => {
    test('thermal_calorie to metric_joule', () => {
      const result = convert('energy', 1, 'thermal_calorie', 'metric_joule')
      expect(result.value).toBeCloseTo(4.184, 3)
      expect(result.unit).toBe('metric_joule')
    })

    test('thermal_kilocalorie to metric_kilojoule', () => {
      const result = convert('energy', 1, 'thermal_kilocalorie', 'metric_kilojoule')
      expect(result.value).toBeCloseTo(4.184, 3)
      expect(result.unit).toBe('metric_kilojoule')
    })

    test('thermal_british_thermal_unit to metric_kilojoule', () => {
      const result = convert('energy', 1, 'thermal_british_thermal_unit', 'metric_kilojoule')
      expect(result.value).toBeCloseTo(1.05506, 5)
      expect(result.unit).toBe('metric_kilojoule')
    })

    test('thermal_therm to metric_megajoule', () => {
      const result = convert('energy', 1, 'thermal_therm', 'metric_megajoule')
      expect(result.value).toBeCloseTo(105.506, 3)
      expect(result.unit).toBe('metric_megajoule')
    })
  })

  // 电能单位测试
  describe('Electric Unit Conversions', () => {
    test('electric_watt_hour to metric_joule', () => {
      const result = convert('energy', 1, 'electric_watt_hour', 'metric_joule')
      expect(result.value).toBe(3600)
      expect(result.unit).toBe('metric_joule')
    })

    test('electric_kilowatt_hour to metric_megajoule', () => {
      const result = convert('energy', 1, 'electric_kilowatt_hour', 'metric_megajoule')
      expect(result.value).toBe(3.6)
      expect(result.unit).toBe('metric_megajoule')
    })

    test('electric_megawatt_hour to metric_megajoule', () => {
      const result = convert('energy', 1, 'electric_megawatt_hour', 'metric_megajoule')
      expect(result.value).toBe(3600)
      expect(result.unit).toBe('metric_megajoule')
    })
  })

  // 科学单位测试
  describe('Scientific Unit Conversions', () => {
    test('scientific_electron_volt to metric_joule', () => {
      const result = convert('energy', 1, 'scientific_electron_volt', 'metric_joule')
      expect(result.value).toBeCloseTo(1.602176634e-19, 28)
      expect(result.unit).toBe('metric_joule')
    })

    test('scientific_kilo_electron_volt to metric_joule', () => {
      const result = convert('energy', 1, 'scientific_kilo_electron_volt', 'metric_joule')
      expect(result.value).toBeCloseTo(1.602176634e-16, 25)
      expect(result.unit).toBe('metric_joule')
    })

    test('scientific_mega_electron_volt to metric_joule', () => {
      const result = convert('energy', 1, 'scientific_mega_electron_volt', 'metric_joule')
      expect(result.value).toBeCloseTo(1.602176634e-13, 22)
      expect(result.unit).toBe('metric_joule')
    })
  })

  // 机械能单位测试
  describe('Mechanical Unit Conversions', () => {
    test('mechanical_foot_pound to metric_joule', () => {
      const result = convert('energy', 1, 'mechanical_foot_pound', 'metric_joule')
      expect(result.value).toBeCloseTo(1.355818, 6)
      expect(result.unit).toBe('metric_joule')
    })

    test('mechanical_kilogram_force_meter to metric_joule', () => {
      const result = convert('energy', 1, 'mechanical_kilogram_force_meter', 'metric_joule')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_joule')
    })

    test('mechanical_erg to metric_joule', () => {
      const result = convert('energy', 1, 'mechanical_erg', 'metric_joule')
      expect(result.value).toBe(1e-7)
      expect(result.unit).toBe('metric_joule')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('thermal_kilocalorie to electric_watt_hour', () => {
      const result = convert('energy', 1, 'thermal_kilocalorie', 'electric_watt_hour')
      expect(result.value).toBeCloseTo(1.162222, 6)
      expect(result.unit).toBe('electric_watt_hour')
    })

    test('electric_kilowatt_hour to thermal_british_thermal_unit', () => {
      const result = convert('energy', 1, 'electric_kilowatt_hour', 'thermal_british_thermal_unit')
      expect(result.value).toBeCloseTo(3412.14, 2)
      expect(result.unit).toBe('thermal_british_thermal_unit')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('energy', 0, 'metric_joule', 'metric_kilojoule')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_kilojoule')
    })

    test('very small value conversion', () => {
      const result = convert('energy', 1e-25, 'metric_joule', 'scientific_electron_volt')
      expect(result.value).toBeCloseTo(0.0624151, 7)
      expect(result.unit).toBe('scientific_electron_volt')
    })

    test('very large value conversion', () => {
      const result = convert('energy', 1e12, 'metric_joule', 'electric_megawatt_hour')
      expect(result.value).toBeCloseTo(277.778, 3)
      expect(result.unit).toBe('electric_megawatt_hour')
    })
  })
}) 
import { convert } from '../converter'

describe('Energy Conversion', () => {
  // 测试公制能量单位转换
  describe('Metric Energy Units', () => {
    test('joule to kilojoule', () => {
      const result = convert('energy', 1000, 'joule', 'kilojoule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilojoule')
    })

    test('kilojoule to megajoule', () => {
      const result = convert('energy', 1000, 'kilojoule', 'megajoule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('megajoule')
    })

    test('megajoule to gigajoule', () => {
      const result = convert('energy', 1000, 'megajoule', 'gigajoule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gigajoule')
    })
  })

  // 测试热能单位转换
  describe('Thermal Energy Units', () => {
    test('calorie to joule', () => {
      const result = convert('energy', 1, 'calorie', 'joule')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('joule')
    })

    test('kilocalorie to kilojoule', () => {
      const result = convert('energy', 1, 'kilocalorie', 'kilojoule')
      expect(result.value).toBeCloseTo(4.1868, 6)
      expect(result.unit).toBe('kilojoule')
    })

    test('BTU to kilojoule', () => {
      const result = convert('energy', 1, 'british_thermal_unit', 'kilojoule')
      expect(result.value).toBeCloseTo(1.05505585262, 9)
      expect(result.unit).toBe('kilojoule')
    })

    test('therm to megajoule', () => {
      const result = convert('energy', 1, 'therm', 'megajoule')
      expect(result.value).toBeCloseTo(105.505585262, 9)
      expect(result.unit).toBe('megajoule')
    })
  })

  // 测试电能单位转换
  describe('Electric Energy Units', () => {
    test('watt hour to joule', () => {
      const result = convert('energy', 1, 'watt_hour', 'joule')
      expect(result.value).toBeCloseTo(3600, 6)
      expect(result.unit).toBe('joule')
    })

    test('kilowatt hour to megajoule', () => {
      const result = convert('energy', 1, 'kilowatt_hour', 'megajoule')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('megajoule')
    })

    test('megawatt hour to gigajoule', () => {
      const result = convert('energy', 1, 'megawatt_hour', 'gigajoule')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('gigajoule')
    })
  })

  // 测试机械能单位转换
  describe('Mechanical Energy Units', () => {
    test('foot pound to joule', () => {
      const result = convert('energy', 1, 'foot_pound', 'joule')
      expect(result.value).toBeCloseTo(1.355817948, 9)
      expect(result.unit).toBe('joule')
    })

    test('kilogram meter to joule', () => {
      const result = convert('energy', 1, 'kilogram_meter', 'joule')
      expect(result.value).toBeCloseTo(9.80665, 6)
      expect(result.unit).toBe('joule')
    })

    test('erg to joule', () => {
      const result = convert('energy', 10000000, 'erg', 'joule')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('joule')
    })
  })

  // 测试原子能单位转换
  describe('Atomic Energy Units', () => {
    test('electron volt to joule', () => {
      const result = convert('energy', 1, 'electron_volt', 'joule')
      expect(result.value).toBeCloseTo(1.602176634e-19, 25)
      expect(result.unit).toBe('joule')
    })

    test('kiloelectron volt to joule', () => {
      const result = convert('energy', 1, 'kiloelectron_volt', 'joule')
      expect(result.value).toBeCloseTo(1.602176634e-16, 22)
      expect(result.unit).toBe('joule')
    })

    test('megaelectron volt to joule', () => {
      const result = convert('energy', 1, 'megaelectron_volt', 'joule')
      expect(result.value).toBeCloseTo(1.602176634e-13, 19)
      expect(result.unit).toBe('joule')
    })
  })

  // 测试TNT当量单位转换
  describe('TNT Equivalent Units', () => {
    test('gram TNT to kilojoule', () => {
      const result = convert('energy', 1, 'gram_tnt', 'kilojoule')
      expect(result.value).toBeCloseTo(4.184, 6)
      expect(result.unit).toBe('kilojoule')
    })

    test('kilogram TNT to megajoule', () => {
      const result = convert('energy', 1, 'kilogram_tnt', 'megajoule')
      expect(result.value).toBeCloseTo(4.184, 6)
      expect(result.unit).toBe('megajoule')
    })

    test('ton TNT to gigajoule', () => {
      const result = convert('energy', 1, 'ton_tnt', 'gigajoule')
      expect(result.value).toBeCloseTo(4.184, 6)
      expect(result.unit).toBe('gigajoule')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('kilocalorie to kilowatt hour', () => {
      const result = convert('energy', 860.421, 'kilocalorie', 'kilowatt_hour')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilowatt_hour')
    })

    test('BTU to kilocalorie', () => {
      const result = convert('energy', 1, 'british_thermal_unit', 'kilocalorie')
      expect(result.value).toBeCloseTo(0.252, 3)
      expect(result.unit).toBe('kilocalorie')
    })

    test('megawatt hour to ton TNT', () => {
      const result = convert('energy', 1, 'megawatt_hour', 'ton_tnt')
      expect(result.value).toBeCloseTo(0.86, 2)
      expect(result.unit).toBe('ton_tnt')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small energies', () => {
      const result = convert('energy', 1e-15, 'joule', 'electron_volt')
      expect(result.value).toBeCloseTo(6.242e3, 0)
      expect(result.unit).toBe('electron_volt')
    })

    test('should handle very large energies', () => {
      const result = convert('energy', 1000, 'ton_tnt', 'gigajoule')
      expect(result.value).toBeCloseTo(4184, 4)
      expect(result.unit).toBe('gigajoule')
    })

    test('should handle fractional energies', () => {
      const result = convert('energy', 0.5, 'kilocalorie', 'kilojoule')
      expect(result.value).toBeCloseTo(2.0934, 6)
      expect(result.unit).toBe('kilojoule')
    })
  })
}) 
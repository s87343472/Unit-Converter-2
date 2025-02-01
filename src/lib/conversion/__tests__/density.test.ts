import { convert } from '../converter'
import type { ConversionResult } from '../types'

describe('Density Conversion Tests', () => {
  // 基本单位测试
  test('Base unit conversion (kg/m³)', () => {
    const result = convert('density', 1, 'kilogram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
    expect(result.value).toBe(1)
  })

  // 公制单位测试
  describe('Metric units', () => {
    test('kg/m³ to g/cm³', () => {
      const result = convert('density', 1000, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter') as ConversionResult
      expect(result.value).toBe(1)
    })

    test('g/m³ to kg/m³', () => {
      const result = convert('density', 1000, 'gram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1)
    })

    test('mg/m³ to kg/m³', () => {
      const result = convert('density', 1000000, 'milligram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1)
    })
  })

  // 英制单位测试
  describe('Imperial units', () => {
    test('lb/ft³ to kg/m³', () => {
      const result = convert('density', 1, 'pound_per_cubic_foot', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(16.018463374, 6)
    })

    test('lb/gal US to kg/m³', () => {
      const result = convert('density', 1, 'pound_per_gallon_us', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(119.826427, 6)
    })
  })

  // 小数值测试
  describe('Small values', () => {
    test('Small mg/m³ values', () => {
      const result = convert('density', 0.001, 'milligram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.000000001)
    })

    test('Very small mg/m³ values', () => {
      const result = convert('density', 0.0001, 'milligram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.0000000001)
    })

    test('Extremely small mg/m³ values', () => {
      const result = convert('density', 0.00001, 'milligram_per_cubic_meter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.00000000001)
    })
  })

  // 大数值测试
  describe('Large values', () => {
    test('Large kg/m³ values', () => {
      const result = convert('density', 1000000, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter') as ConversionResult
      expect(result.value).toBe(1000)
    })
  })

  // 常见转换测试
  describe('Common conversions', () => {
    test('Water density (1 g/cm³)', () => {
      const result = convert('density', 1, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1000)
    })

    test('Air density at sea level (1.225 kg/m³)', () => {
      const result = convert('density', 1.225, 'kilogram_per_cubic_meter', 'gram_per_liter') as ConversionResult
      expect(result.value).toBe(1.225)
    })
  })

  // 精度测试
  describe('Precision tests', () => {
    test('Precise conversion between g/cm³ and kg/m³', () => {
      const result = convert('density', 0.123456789, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(123.456789)
    })

    test('Precise conversion between lb/ft³ and kg/m³', () => {
      const result = convert('density', 0.123456789, 'pound_per_cubic_foot', 'kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(1.977642, 6)
    })

    test('Multiple conversions maintaining precision', () => {
      const value = 0.123456789
      const result1 = convert('density', value, 'gram_per_cubic_centimeter', 'kilogram_per_cubic_meter') as ConversionResult
      const result2 = convert('density', result1.value, 'kilogram_per_cubic_meter', 'gram_per_cubic_centimeter') as ConversionResult
      expect(result2.value).toBeCloseTo(value, 9)
    })
  })
}) 
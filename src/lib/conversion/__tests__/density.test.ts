import { convert } from '../converter'
import type { ConversionResult } from '../types'

describe('Density Conversion Tests', () => {
  // 基本单位测试
  test('Base unit conversion (kg/m³)', () => {
    const result = convert('density', 1, 'metric_kilogram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
    expect(result.value).toBe(1)
  })

  // 公制单位测试
  describe('Metric units', () => {
    test('kg/m³ to g/cm³', () => {
      const result = convert('density', 1000, 'metric_kilogram_per_cubic_meter', 'metric_gram_per_cubic_centimeter') as ConversionResult
      expect(result.value).toBe(1)
    })

    test('g/m³ to kg/m³', () => {
      const result = convert('density', 1000, 'metric_gram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1)
    })

    test('mg/m³ to kg/m³', () => {
      const result = convert('density', 1000000, 'metric_milligram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1)
    })
  })

  // 英制单位测试
  describe('Imperial units', () => {
    test('lb/ft³ to kg/m³', () => {
      const result = convert('density', 1, 'imperial_pound_per_cubic_foot', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(16.018463374, 6)
    })

    test('lb/gal US to kg/m³', () => {
      const result = convert('density', 1, 'imperial_pound_per_gallon_us', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(119.826427, 6)
    })

    test('lb/gal UK to kg/m³', () => {
      const result = convert('density', 1, 'imperial_pound_per_gallon_uk', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(99.776372663, 6)
    })

    test('oz/ft³ to kg/m³', () => {
      const result = convert('density', 1, 'imperial_ounce_per_cubic_foot', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(1.001153961, 6)
    })
  })

  // 工业单位测试
  describe('Industrial units', () => {
    test('kg/m³(std) to kg/m³', () => {
      const result = convert('density', 1, 'industrial_kilogram_per_cubic_meter_std', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1)
    })
  })

  // 小数值测试
  describe('Small values', () => {
    test('Small mg/m³ values', () => {
      const result = convert('density', 0.001, 'metric_milligram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.000000001)
    })

    test('Very small mg/m³ values', () => {
      const result = convert('density', 0.0001, 'metric_milligram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.0000000001)
    })

    test('Extremely small mg/m³ values', () => {
      const result = convert('density', 0.00001, 'metric_milligram_per_cubic_meter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(0.00000000001)
    })
  })

  // 大数值测试
  describe('Large values', () => {
    test('Large kg/m³ values', () => {
      const result = convert('density', 1000000, 'metric_kilogram_per_cubic_meter', 'metric_gram_per_cubic_centimeter') as ConversionResult
      expect(result.value).toBe(1000)
    })
  })

  // 常见转换测试
  describe('Common conversions', () => {
    test('Water density (1 g/cm³)', () => {
      const result = convert('density', 1, 'metric_gram_per_cubic_centimeter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(1000)
    })

    test('Air density at sea level (1.225 kg/m³)', () => {
      const result = convert('density', 1.225, 'metric_kilogram_per_cubic_meter', 'metric_gram_per_liter') as ConversionResult
      expect(result.value).toBe(1.225)
    })
  })

  // 精度测试
  describe('Precision tests', () => {
    test('Precise conversion between g/cm³ and kg/m³', () => {
      const result = convert('density', 0.123456789, 'metric_gram_per_cubic_centimeter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBe(123.456789)
    })

    test('Precise conversion between lb/ft³ and kg/m³', () => {
      const result = convert('density', 0.123456789, 'imperial_pound_per_cubic_foot', 'metric_kilogram_per_cubic_meter') as ConversionResult
      expect(result.value).toBeCloseTo(1.977642, 6)
    })

    test('Multiple conversions maintaining precision', () => {
      const value = 0.123456789
      const result1 = convert('density', value, 'metric_gram_per_cubic_centimeter', 'metric_kilogram_per_cubic_meter') as ConversionResult
      const result2 = convert('density', result1.value, 'metric_kilogram_per_cubic_meter', 'metric_gram_per_cubic_centimeter') as ConversionResult
      expect(result2.value).toBeCloseTo(value, 9)
    })
  })
}) 
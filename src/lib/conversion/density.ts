import type { ConversionCategory } from './types'

// 使用千克/立方米作为基准单位
const density: ConversionCategory = {
  id: 'density',
  baseUnit: 'kilogram_per_cubic_meter',
  units: {
    kilogram_per_cubic_meter: {
      id: 'kilogram_per_cubic_meter',
      label: '千克/立方米',
      symbol: 'kg/m³',
      ratio: 1,
    },
    gram_per_cubic_centimeter: {
      id: 'gram_per_cubic_centimeter',
      label: '克/立方厘米',
      symbol: 'g/cm³',
      ratio: 1000, // 1 g/cm³ = 1000 kg/m³
    },
    kilogram_per_liter: {
      id: 'kilogram_per_liter',
      label: '千克/升',
      symbol: 'kg/L',
      ratio: 1000, // 1 kg/L = 1000 kg/m³
    },
    gram_per_milliliter: {
      id: 'gram_per_milliliter',
      label: '克/毫升',
      symbol: 'g/mL',
      ratio: 1000, // 1 g/mL = 1000 kg/m³
    },
    pound_per_cubic_foot: {
      id: 'pound_per_cubic_foot',
      label: '磅/立方英尺',
      symbol: 'lb/ft³',
      ratio: 16.0185, // 1 lb/ft³ ≈ 16.0185 kg/m³
    },
    pound_per_cubic_inch: {
      id: 'pound_per_cubic_inch',
      label: '磅/立方英寸',
      symbol: 'lb/in³',
      ratio: 27679.9, // 1 lb/in³ ≈ 27679.9 kg/m³
    },
    pound_per_gallon_us: {
      id: 'pound_per_gallon_us',
      label: '磅/美制加仑',
      symbol: 'lb/gal',
      ratio: 119.826, // 1 lb/gal ≈ 119.826 kg/m³
    },
    ounce_per_cubic_foot: {
      id: 'ounce_per_cubic_foot',
      label: '盎司/立方英尺',
      symbol: 'oz/ft³',
      ratio: 1.001156, // 1 oz/ft³ ≈ 1.001156 kg/m³
    },
    gram_per_cubic_meter: {
      id: 'gram_per_cubic_meter',
      label: '克/立方米',
      symbol: 'g/m³',
      ratio: 0.001, // 1 g/m³ = 0.001 kg/m³
    },
  },
}

export default density 
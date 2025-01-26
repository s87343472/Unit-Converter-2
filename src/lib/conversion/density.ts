import type { ConversionCategory } from './types'

const density: ConversionCategory = {
  id: 'density',
  baseUnit: 'kilogram_per_cubic_meter',
  units: {
    // 基本单位
    kilogram_per_cubic_meter: {
      id: 'kilogram_per_cubic_meter',
      label: '千克/立方米',
      symbol: 'kg/m³',
      ratio: 1 // 基准单位
    },

    // 公制密度单位
    gram_per_cubic_centimeter: {
      id: 'gram_per_cubic_centimeter',
      label: '克/立方厘米',
      symbol: 'g/cm³',
      ratio: 1000 // 1 g/cm³ = 1000 kg/m³（1 g/cm³ = 1000 kg/m³）
    },
    gram_per_milliliter: {
      id: 'gram_per_milliliter',
      label: '克/毫升',
      symbol: 'g/mL',
      ratio: 1000 // 1 g/mL = 1000 kg/m³（1 mL = 1 cm³）
    },
    kilogram_per_liter: {
      id: 'kilogram_per_liter',
      label: '千克/升',
      symbol: 'kg/L',
      ratio: 1000 // 1 kg/L = 1000 kg/m³（1 L = 0.001 m³）
    },

    // 英制密度单位
    pound_per_cubic_foot: {
      id: 'pound_per_cubic_foot',
      label: '磅/立方英尺',
      symbol: 'lb/ft³',
      ratio: 16.018463374 // 1 lb/ft³ ≈ 16.018463374 kg/m³（基于标准重力）
    },
    pound_per_cubic_inch: {
      id: 'pound_per_cubic_inch',
      label: '磅/立方英寸',
      symbol: 'lb/in³',
      ratio: 27679.904710203 // 1 lb/in³ ≈ 27679.904710203 kg/m³（基于标准重力）
    },
    pound_per_gallon: {
      id: 'pound_per_gallon',
      label: '磅/英制加仑',
      symbol: 'lb/gal',
      ratio: 99.776372663 // 1 lb/gal ≈ 99.776372663 kg/m³（基于英制加仑）
    },
    ounce_per_cubic_foot: {
      id: 'ounce_per_cubic_foot',
      label: '盎司/立方英尺',
      symbol: 'oz/ft³',
      ratio: 1.001153961 // 1 oz/ft³ ≈ 1.001153961 kg/m³（基于标准重力）
    },

    // 美制密度单位
    us_pound_per_gallon: {
      id: 'us_pound_per_gallon',
      label: '磅/美制加仑',
      symbol: 'lb/gal',
      ratio: 119.826427 // 1 lb/gal ≈ 119.826427 kg/m³（基于美制加仑）
    },
    us_ounce_per_gallon: {
      id: 'us_ounce_per_gallon',
      label: '盎司/美制加仑',
      symbol: 'oz/gal',
      ratio: 7.489151688 // 1 oz/gal ≈ 7.489151688 kg/m³（基于美制加仑）
    },

    // 科学密度单位
    scientific_gram_per_cubic_meter: {
      id: 'scientific_gram_per_cubic_meter',
      label: '克/立方米',
      symbol: 'g/m³',
      ratio: 0.001 // 1 g/m³ = 0.001 kg/m³（基本换算关系）
    },
    scientific_milligram_per_cubic_meter: {
      id: 'scientific_milligram_per_cubic_meter',
      label: '毫克/立方米',
      symbol: 'mg/m³',
      ratio: 0.000001 // 1 mg/m³ = 0.000001 kg/m³（基本换算关系）
    },
    scientific_microgram_per_cubic_meter: {
      id: 'scientific_microgram_per_cubic_meter',
      label: '微克/立方米',
      symbol: 'μg/m³',
      ratio: 0.000000001 // 1 μg/m³ = 0.000001 kg/m³（基本换算关系）
    }
  }
} as const

export default density 
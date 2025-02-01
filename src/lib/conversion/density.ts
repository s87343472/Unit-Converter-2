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
      ratio: 1000 // 1 g/cm³ = 1000 kg/m³
    },
    gram_per_milliliter: {
      id: 'gram_per_milliliter',
      label: '克/毫升',
      symbol: 'g/mL',
      ratio: 1000 // 1 g/mL = 1000 kg/m³
    },
    kilogram_per_liter: {
      id: 'kilogram_per_liter',
      label: '千克/升',
      symbol: 'kg/L',
      ratio: 1000 // 1 kg/L = 1000 kg/m³
    },
    gram_per_cubic_meter: {
      id: 'gram_per_cubic_meter',
      label: '克/立方米',
      symbol: 'g/m³',
      ratio: 0.001 // 1 g/m³ = 0.001 kg/m³
    },
    milligram_per_cubic_meter: {
      id: 'milligram_per_cubic_meter',
      label: '毫克/立方米',
      symbol: 'mg/m³',
      ratio: 0.000001 // 1 mg/m³ = 0.000001 kg/m³
    },
    milligram_per_milliliter: {
      id: 'milligram_per_milliliter',
      label: '毫克/毫升',
      symbol: 'mg/mL',
      ratio: 1 // 1 mg/mL = 1 kg/m³
    },
    gram_per_liter: {
      id: 'gram_per_liter',
      label: '克/升',
      symbol: 'g/L',
      ratio: 1 // 1 g/L = 1 kg/m³
    },
    milligram_per_liter: {
      id: 'milligram_per_liter',
      label: '毫克/升',
      symbol: 'mg/L',
      ratio: 0.001 // 1 mg/L = 0.001 kg/m³
    },

    // 英制密度单位
    pound_per_cubic_foot: {
      id: 'pound_per_cubic_foot',
      label: '磅/立方英尺',
      symbol: 'lb/ft³',
      ratio: 16.018463374 // 1 lb/ft³ ≈ 16.018463374 kg/m³
    },
    pound_per_cubic_inch: {
      id: 'pound_per_cubic_inch',
      label: '磅/立方英寸',
      symbol: 'lb/in³',
      ratio: 27679.904710203 // 1 lb/in³ ≈ 27679.904710203 kg/m³
    },
    pound_per_gallon_us: {
      id: 'pound_per_gallon_us',
      label: '磅/美制加仑',
      symbol: 'lb/gal US',
      ratio: 119.826427 // 1 lb/gal US ≈ 119.826427 kg/m³
    },
    pound_per_gallon_uk: {
      id: 'pound_per_gallon_uk',
      label: '磅/英制加仑',
      symbol: 'lb/gal UK',
      ratio: 99.776372663 // 1 lb/gal UK ≈ 99.776372663 kg/m³
    },
    ounce_per_cubic_foot: {
      id: 'ounce_per_cubic_foot',
      label: '盎司/立方英尺',
      symbol: 'oz/ft³',
      ratio: 1.001153961 // 1 oz/ft³ ≈ 1.001153961 kg/m³
    },
    ounce_per_gallon_us: {
      id: 'ounce_per_gallon_us',
      label: '盎司/美制加仑',
      symbol: 'oz/gal US',
      ratio: 7.489151688 // 1 oz/gal US ≈ 7.489151688 kg/m³
    },
    ounce_per_gallon_uk: {
      id: 'ounce_per_gallon_uk',
      label: '盎司/英制加仑',
      symbol: 'oz/gal UK',
      ratio: 6.236023291 // 1 oz/gal UK ≈ 6.236023291 kg/m³
    },
    slug_per_cubic_foot: {
      id: 'slug_per_cubic_foot',
      label: '斯勒格/立方英尺',
      symbol: 'slug/ft³',
      ratio: 515.378818 // 1 slug/ft³ ≈ 515.378818 kg/m³
    },
    grain_per_gallon_us: {
      id: 'grain_per_gallon_us',
      label: '格令/美制加仑',
      symbol: 'gr/gal US',
      ratio: 0.017118 // 1 gr/gal US ≈ 0.017118 kg/m³
    },
    grain_per_gallon_uk: {
      id: 'grain_per_gallon_uk',
      label: '格令/英制加仑',
      symbol: 'gr/gal UK',
      ratio: 0.014251 // 1 gr/gal UK ≈ 0.014251 kg/m³
    }
  }
} as const

export default density 
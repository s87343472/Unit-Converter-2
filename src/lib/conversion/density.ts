import type { ConversionCategory } from './types'

// 使用千克每立方米作为基准单位
const density: ConversionCategory = {
  id: 'density',
  baseUnit: 'kilogram_per_cubic_meter',
  units: {
    kilogram_per_cubic_meter: {
      id: 'kilogram_per_cubic_meter',
      label: '千克每立方米 (公制)',
      symbol: 'kg/m³',
      ratio: 1,
    },
    gram_per_cubic_centimeter: {
      id: 'gram_per_cubic_centimeter',
      label: '克每立方厘米 (公制)',
      symbol: 'g/cm³',
      ratio: 1000,
    },
    gram_per_milliliter: {
      id: 'gram_per_milliliter',
      label: '克每毫升 (公制)',
      symbol: 'g/mL',
      ratio: 1000,
    },
    kilogram_per_liter: {
      id: 'kilogram_per_liter',
      label: '千克每升 (公制)',
      symbol: 'kg/L',
      ratio: 1000,
    },
    // 工业常用单位
    slug_per_cubic_foot: {
      id: 'slug_per_cubic_foot',
      label: '斯拉格每立方英尺 (工业)',
      symbol: 'slug/ft³',
      ratio: 515.379,
    },
    kilogram_per_cubic_decimeter: {
      id: 'kilogram_per_cubic_decimeter',
      label: '千克每立方分米 (工业)',
      symbol: 'kg/dm³',
      ratio: 1000,
    },
    // 科学单位
    gram_per_cubic_meter: {
      id: 'gram_per_cubic_meter',
      label: '克每立方米 (科学)',
      symbol: 'g/m³',
      ratio: 0.001,
    },
    milligram_per_cubic_centimeter: {
      id: 'milligram_per_cubic_centimeter',
      label: '毫克每立方厘米 (科学)',
      symbol: 'mg/cm³',
      ratio: 1,
    },
    milligram_per_milliliter: {
      id: 'milligram_per_milliliter',
      label: '毫克每毫升 (科学)',
      symbol: 'mg/mL',
      ratio: 1,
    },
    // 特殊应用单位
    kilogram_per_cubic_centimeter: {
      id: 'kilogram_per_cubic_centimeter',
      label: '千克每立方厘米 (特殊)',
      symbol: 'kg/cm³',
      ratio: 1000000,
    },
    metric_ton_per_cubic_meter: {
      id: 'metric_ton_per_cubic_meter',
      label: '吨每立方米 (特殊)',
      symbol: 't/m³',
      ratio: 1000,
    },
    // 英制单位
    pound_per_cubic_foot: {
      id: 'pound_per_cubic_foot',
      label: '磅每立方英尺 (英制)',
      symbol: 'lb/ft³',
      ratio: 16.0185,
    },
    pound_per_cubic_inch: {
      id: 'pound_per_cubic_inch',
      label: '磅每立方英寸 (英制)',
      symbol: 'lb/in³',
      ratio: 27679.9,
    },
    pound_per_gallon_us: {
      id: 'pound_per_gallon_us',
      label: '磅每加仑 (美制)',
      symbol: 'lb/gal',
      ratio: 119.826,
    },
    pound_per_gallon_uk: {
      id: 'pound_per_gallon_uk',
      label: '磅每加仑 (英制)',
      symbol: 'lb/gal',
      ratio: 99.7763,
    },
    ounce_per_cubic_foot: {
      id: 'ounce_per_cubic_foot',
      label: '盎司每立方英尺 (英制)',
      symbol: 'oz/ft³',
      ratio: 1.00116,
    },
    ounce_per_gallon_us: {
      id: 'ounce_per_gallon_us',
      label: '盎司每加仑 (美制)',
      symbol: 'oz/gal',
      ratio: 7.48915,
    },
    ounce_per_gallon_uk: {
      id: 'ounce_per_gallon_uk',
      label: '盎司每加仑 (英制)',
      symbol: 'oz/gal',
      ratio: 6.23602,
    },
  },
}

export default density 
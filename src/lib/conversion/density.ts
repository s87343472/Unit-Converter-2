import type { ConversionCategory } from './types'

const density: ConversionCategory = {
  id: 'density',
  baseUnit: 'metric_kilogram_per_cubic_meter',
  description: '密度单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    metric_kilogram_per_cubic_meter: {
      id: 'metric_kilogram_per_cubic_meter',
      label: '千克每立方米',
      symbol: 'kg/m³',
      ratio: 1, // 基准单位（SI基本单位）
      category: 'metric'
    },

    // 公制密度单位
    metric_tonne_per_cubic_meter: {
      id: 'metric_tonne_per_cubic_meter',
      label: '吨每立方米',
      symbol: 't/m³',
      ratio: 1000, // 1 t/m³ = 1000 kg/m³
      category: 'metric'
    },
    metric_gram_per_cubic_centimeter: {
      id: 'metric_gram_per_cubic_centimeter',
      label: '克每立方厘米',
      symbol: 'g/cm³',
      ratio: 1000, // 1 g/cm³ = 1000 kg/m³
      category: 'metric'
    },
    metric_gram_per_milliliter: {
      id: 'metric_gram_per_milliliter',
      label: '克每毫升',
      symbol: 'g/mL',
      ratio: 1000, // 1 g/mL = 1000 kg/m³（水的密度约为1 g/mL）
      category: 'metric'
    },
    metric_kilogram_per_liter: {
      id: 'metric_kilogram_per_liter',
      label: '千克每升',
      symbol: 'kg/L',
      ratio: 1000, // 1 kg/L = 1000 kg/m³
      category: 'metric'
    },
    metric_gram_per_cubic_meter: {
      id: 'metric_gram_per_cubic_meter',
      label: '克每立方米',
      symbol: 'g/m³',
      ratio: 0.001, // 1 g/m³ = 0.001 kg/m³
      category: 'metric'
    },
    metric_milligram_per_cubic_meter: {
      id: 'metric_milligram_per_cubic_meter',
      label: '毫克每立方米',
      symbol: 'mg/m³',
      ratio: 1e-6, // 1 mg/m³ = 0.000001 kg/m³
      category: 'metric'
    },
    metric_microgram_per_cubic_meter: {
      id: 'metric_microgram_per_cubic_meter',
      label: '微克每立方米',
      symbol: 'μg/m³',
      ratio: 1e-9, // 1 μg/m³ = 0.000000001 kg/m³
      category: 'metric'
    },
    metric_nanogram_per_cubic_meter: {
      id: 'metric_nanogram_per_cubic_meter',
      label: '纳克每立方米',
      symbol: 'ng/m³',
      ratio: 1e-12, // 1 ng/m³ = 0.000000000001 kg/m³
      category: 'metric'
    },

    // 工业密度单位
    industrial_kilogram_per_cubic_meter_std: {
      id: 'industrial_kilogram_per_cubic_meter_std',
      label: '标准状态千克每立方米',
      symbol: 'kg/m³(std)',
      ratio: 1, // 在标准状态下（0°C，1atm）
      category: 'industrial'
    },
    metric_gram_per_liter: {
      id: 'metric_gram_per_liter',
      label: '克每升',
      symbol: 'g/L',
      ratio: 1, // 1 g/L = 1 kg/m³
      category: 'metric'
    },
    metric_milligram_per_liter: {
      id: 'metric_milligram_per_liter',
      label: '毫克每升',
      symbol: 'mg/L',
      ratio: 0.001, // 1 mg/L = 0.001 kg/m³
      category: 'metric'
    },

    // 英制密度单位
    imperial_pound_per_cubic_foot: {
      id: 'imperial_pound_per_cubic_foot',
      label: '磅每立方英尺',
      symbol: 'lb/ft³',
      ratio: 16.018463374, // 1 lb/ft³ = 16.018463374 kg/m³
      category: 'imperial'
    },
    imperial_pound_per_cubic_inch: {
      id: 'imperial_pound_per_cubic_inch',
      label: '磅每立方英寸',
      symbol: 'lb/in³',
      ratio: 27679.904710191, // 1 lb/in³ = 27679.904710191 kg/m³
      category: 'imperial'
    },
    us_pound_per_gallon: {
      id: 'us_pound_per_gallon',
      label: '磅每美制加仑',
      symbol: 'lb/gal US',
      ratio: 119.826427, // 1 lb/gal US = 119.826427 kg/m³
      category: 'us'
    },
    imperial_pound_per_gallon: {
      id: 'imperial_pound_per_gallon',
      label: '磅每英制加仑',
      symbol: 'lb/gal UK',
      ratio: 99.776372663, // 1 lb/gal UK = 99.776372663 kg/m³
      category: 'imperial'
    },
    imperial_ounce_per_cubic_foot: {
      id: 'imperial_ounce_per_cubic_foot',
      label: '盎司每立方英尺',
      symbol: 'oz/ft³',
      ratio: 1.001153961, // 1 oz/ft³ = 1.001153961 kg/m³
      category: 'imperial'
    },
    us_ounce_per_gallon: {
      id: 'us_ounce_per_gallon',
      label: '盎司每美制加仑',
      symbol: 'oz/gal US',
      ratio: 7.489151688, // 1 oz/gal US = 7.489151688 kg/m³
      category: 'us'
    },
    imperial_ounce_per_gallon: {
      id: 'imperial_ounce_per_gallon',
      label: '盎司每英制加仑',
      symbol: 'oz/gal UK',
      ratio: 6.236023291, // 1 oz/gal UK = 6.236023291 kg/m³
      category: 'imperial'
    },
    us_grain_per_gallon: {
      id: 'us_grain_per_gallon',
      label: '格令每美制加仑',
      symbol: 'gr/gal US',
      ratio: 0.017118, // 1 gr/gal US = 0.017118 kg/m³
      category: 'us'
    },
    imperial_grain_per_gallon: {
      id: 'imperial_grain_per_gallon',
      label: '格令每英制加仑',
      symbol: 'gr/gal UK',
      ratio: 0.014251, // 1 gr/gal UK = 0.014251 kg/m³
      category: 'imperial'
    },

    // 专业密度单位
    scientific_slug_per_cubic_foot: {
      id: 'scientific_slug_per_cubic_foot',
      label: '斯勒格每立方英尺',
      symbol: 'slug/ft³',
      ratio: 515.378818, // 1 slug/ft³ = 515.378818 kg/m³
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '密度知识',
    items: [
      '密度是单位体积的质量，基本单位是千克每立方米(kg/m³)',
      '水在4°C时密度最大，约为1000 kg/m³（1 g/cm³）',
      '标准状态下（0°C，1atm）空气密度约为1.293 kg/m³',
      '密度会随温度和压力变化，一般温度升高密度减小',
      '液体和固体的密度通常用g/cm³表示，气体密度常用kg/m³',
      '相对密度是物质密度与4°C纯水密度的比值（无量纲）'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '密度换算提示',
    items: [
      '常见液体密度：\n  - 水：1000 kg/m³\n  - 汽油：700-750 kg/m³\n  - 柴油：820-860 kg/m³\n  - 水银：13600 kg/m³',
      '常见气体密度(0°C)：\n  - 空气：1.293 kg/m³\n  - 氧气：1.429 kg/m³\n  - 氮气：1.251 kg/m³\n  - 氢气：0.090 kg/m³',
      '常见固体密度：\n  - 铝：2700 kg/m³\n  - 铁：7870 kg/m³\n  - 铜：8960 kg/m³\n  - 金：19320 kg/m³',
      '工业应用：\n  - 石油API度：141.5/(相对密度)-131.5\n  - 电池比重：1.1-1.3 g/cm³\n  - 混凝土：2400 kg/m³',
      '环境监测：\n  - PM2.5：μg/m³\n  - 空气质量：mg/m³\n  - 水质硬度：mg/L'
    ]
  }
} as const

export default density 
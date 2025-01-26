import type { ConversionCategory } from './types'

// 使用立方米作为基准单位
const volume: ConversionCategory = {
  id: 'volume',
  baseUnit: 'metric_cubic_meter',
  units: {
    // 公制体积单位
    metric_cubic_meter: {
      id: 'metric_cubic_meter',
      label: '立方米 (公制)',
      symbol: 'm³',
      ratio: 1, // 基准单位
    },
    metric_cubic_decimeter: {
      id: 'metric_cubic_decimeter',
      label: '立方分米 (公制)',
      symbol: 'dm³',
      ratio: 0.001, // 1 dm³ = 0.001 m³
    },
    metric_cubic_centimeter: {
      id: 'metric_cubic_centimeter',
      label: '立方厘米 (公制)',
      symbol: 'cm³',
      ratio: 0.000001, // 1 cm³ = 0.000001 m³
    },
    metric_cubic_millimeter: {
      id: 'metric_cubic_millimeter',
      label: '立方毫米 (公制)',
      symbol: 'mm³',
      ratio: 0.000000001, // 1 mm³ = 0.000000001 m³
    },

    // 公制容量单位
    metric_liter: {
      id: 'metric_liter',
      label: '升 (公制)',
      symbol: 'L',
      ratio: 0.001, // 1 L = 0.001 m³
    },
    metric_deciliter: {
      id: 'metric_deciliter',
      label: '分升 (公制)',
      symbol: 'dL',
      ratio: 0.0001, // 1 dL = 0.0001 m³
    },
    metric_centiliter: {
      id: 'metric_centiliter',
      label: '厘升 (公制)',
      symbol: 'cL',
      ratio: 0.00001, // 1 cL = 0.00001 m³
    },
    metric_milliliter: {
      id: 'metric_milliliter',
      label: '毫升 (公制)',
      symbol: 'mL',
      ratio: 0.000001, // 1 mL = 0.000001 m³
    },

    // 英制体积单位
    imperial_cubic_yard: {
      id: 'imperial_cubic_yard',
      label: '立方码 (英制)',
      symbol: 'yd³',
      ratio: 0.764554858, // 1 yd³ = 0.764554858 m³
    },
    imperial_cubic_foot: {
      id: 'imperial_cubic_foot',
      label: '立方英尺 (英制)',
      symbol: 'ft³',
      ratio: 0.028316846592, // 1 ft³ = 0.028316846592 m³
    },
    imperial_cubic_inch: {
      id: 'imperial_cubic_inch',
      label: '立方英寸 (英制)',
      symbol: 'in³',
      ratio: 0.000016387064, // 1 in³ = 0.000016387064 m³
    },

    // 英制容量单位
    imperial_gallon: {
      id: 'imperial_gallon',
      label: '英制加仑 (英制)',
      symbol: 'gal (UK)',
      ratio: 0.00454609, // 1 gal (UK) = 0.00454609 m³
    },
    imperial_quart: {
      id: 'imperial_quart',
      label: '英制夸脱 (英制)',
      symbol: 'qt (UK)',
      ratio: 0.0011365225, // 1 qt (UK) = 0.0011365225 m³
    },
    imperial_pint: {
      id: 'imperial_pint',
      label: '英制品脱 (英制)',
      symbol: 'pt (UK)',
      ratio: 0.00056826125, // 1 pt (UK) = 0.00056826125 m³
    },
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液盎司 (英制)',
      symbol: 'fl oz (UK)',
      ratio: 0.0000284130625, // 1 fl oz (UK) = 0.0000284130625 m³
    },

    // 美制容量单位
    us_gallon: {
      id: 'us_gallon',
      label: '美制加仑 (美制)',
      symbol: 'gal (US)',
      ratio: 0.003785411784, // 1 gal (US) = 0.003785411784 m³
    },
    us_quart: {
      id: 'us_quart',
      label: '美制夸脱 (美制)',
      symbol: 'qt (US)',
      ratio: 0.000946352946, // 1 qt (US) = 0.000946352946 m³
    },
    us_pint: {
      id: 'us_pint',
      label: '美制品脱 (美制)',
      symbol: 'pt (US)',
      ratio: 0.000473176473, // 1 pt (US) = 0.000473176473 m³
    },
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液盎司 (美制)',
      symbol: 'fl oz (US)',
      ratio: 0.0000295735295625, // 1 fl oz (US) = 0.0000295735295625 m³
    },

    // 中国传统容量单位
    traditional_sheng: {
      id: 'traditional_sheng',
      label: '升 (中国传统)',
      symbol: '升',
      ratio: 0.001, // 1 升 = 0.001 m³（现代标准）
    },
    traditional_dou: {
      id: 'traditional_dou',
      label: '斗 (中国传统)',
      symbol: '斗',
      ratio: 0.01, // 1 斗 = 0.01 m³（现代标准）
    },
    traditional_dan: {
      id: 'traditional_dan',
      label: '石 (中国传统)',
      symbol: '石',
      ratio: 0.1, // 1 石 = 0.1 m³（现代标准）
    },

    // 日本传统容量单位
    japanese_gou: {
      id: 'japanese_gou',
      label: '合',
      symbol: '合',
      ratio: 0.0001804,
    },
    japanese_shaku: {
      id: 'japanese_shaku',
      label: '勺',
      symbol: '勺',
      ratio: 0.00001804,
    },
    japanese_sai: {
      id: 'japanese_sai',
      label: '才',
      symbol: '才',
      ratio: 0.00001804,
    },

    // 工业容量单位
    industry_oil_barrel: {
      id: 'industry_oil_barrel',
      label: '石油桶',
      symbol: 'bbl',
      ratio: 0.158987294928,
    },
    industry_beer_barrel: {
      id: 'industry_beer_barrel',
      label: '啤酒桶',
      symbol: 'beer bbl',
      ratio: 0.117347765,
    },
  },
} as const

export default volume 
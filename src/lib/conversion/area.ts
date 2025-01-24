import type { ConversionCategory } from './types'

// 使用平方米作为基准单位
const area: ConversionCategory = {
  id: 'area',
  baseUnit: 'metric_square_meter',
  units: {
    // 公制单位（SI）
    metric_square_meter: {
      id: 'metric_square_meter',
      label: '平方米 (公制)',
      symbol: 'm²',
      ratio: 1,
    },
    metric_square_kilometer: {
      id: 'metric_square_kilometer',
      label: '平方千米 (公制)',
      symbol: 'km²',
      ratio: 1e6, // 1 km² = 1,000,000 m²
    },
    metric_hectare: {
      id: 'metric_hectare',
      label: '公顷 (公制)',
      symbol: 'ha',
      ratio: 1e4, // 1 ha = 10,000 m²
    },
    metric_are: {
      id: 'metric_are',
      label: '公亩 (公制)',
      symbol: 'a',
      ratio: 100, // 1 a = 100 m²
    },
    metric_square_decimeter: {
      id: 'metric_square_decimeter',
      label: '平方分米 (公制)',
      symbol: 'dm²',
      ratio: 0.01, // 1 dm² = 0.01 m²
    },
    metric_square_centimeter: {
      id: 'metric_square_centimeter',
      label: '平方厘米 (公制)',
      symbol: 'cm²',
      ratio: 1e-4, // 1 cm² = 0.0001 m²
    },
    metric_square_millimeter: {
      id: 'metric_square_millimeter',
      label: '平方毫米 (公制)',
      symbol: 'mm²',
      ratio: 1e-6, // 1 mm² = 0.000001 m²
    },

    // 英制单位
    imperial_square_mile: {
      id: 'imperial_square_mile',
      label: '平方英里 (英制)',
      symbol: 'mi²',
      ratio: 2.589988e6, // 1 mi² ≈ 2,589,988 m²
    },
    imperial_acre: {
      id: 'imperial_acre',
      label: '英亩 (英制)',
      symbol: 'ac',
      ratio: 4046.86, // 1 ac ≈ 4,046.86 m²
    },
    imperial_square_yard: {
      id: 'imperial_square_yard',
      label: '平方码 (英制)',
      symbol: 'yd²',
      ratio: 0.836127, // 1 yd² ≈ 0.836127 m²
    },
    imperial_square_foot: {
      id: 'imperial_square_foot',
      label: '平方英尺 (英制)',
      symbol: 'ft²',
      ratio: 0.092903, // 1 ft² ≈ 0.092903 m²
    },
    imperial_square_inch: {
      id: 'imperial_square_inch',
      label: '平方英寸 (英制)',
      symbol: 'in²',
      ratio: 6.4516e-4, // 1 in² ≈ 0.00064516 m²
    },

    // 中国传统单位
    traditional_mu: {
      id: 'traditional_mu',
      label: '亩 (中国)',
      symbol: '亩',
      ratio: 666.67, // 1 亩 ≈ 666.67 m²
    },
    traditional_qing: {
      id: 'traditional_qing',
      label: '顷 (中国)',
      symbol: '顷',
      ratio: 66667, // 1 顷 = 100 亩 ≈ 66,667 m²
    },

    // 测量单位
    surveying_rood: {
      id: 'surveying_rood',
      label: '路得 (测量)',
      symbol: 'rd',
      ratio: 1011.71, // 1 rood ≈ 1,011.71 m²
    },
    surveying_square_chain: {
      id: 'surveying_square_chain',
      label: '平方链 (测量)',
      symbol: 'ch²',
      ratio: 404.686, // 1 square chain ≈ 404.686 m²
    },
  },
} as const

export default area 
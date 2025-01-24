import type { ConversionCategory } from './types'

// 使用平方米作为基准单位
const area: ConversionCategory = {
  id: 'area',
  baseUnit: 'square_meter',
  units: {
    // 公制单位
    square_meter: {
      id: 'square_meter',
      label: '平方米 (公制)',
      symbol: 'm²',
      ratio: 1,
    },
    square_kilometer: {
      id: 'square_kilometer',
      label: '平方千米 (公制)',
      symbol: 'km²',
      ratio: 1000000, // 1 km² = 1,000,000 m²
    },
    hectare: {
      id: 'hectare',
      label: '公顷 (公制)',
      symbol: 'ha',
      ratio: 10000, // 1 ha = 10,000 m²
    },
    are: {
      id: 'are',
      label: '公亩 (公制)',
      symbol: 'a',
      ratio: 100, // 1 a = 100 m²
    },
    square_decimeter: {
      id: 'square_decimeter',
      label: '平方分米 (公制)',
      symbol: 'dm²',
      ratio: 0.01, // 1 dm² = 0.01 m²
    },
    square_centimeter: {
      id: 'square_centimeter',
      label: '平方厘米 (公制)',
      symbol: 'cm²',
      ratio: 0.0001, // 1 cm² = 0.0001 m²
    },
    square_millimeter: {
      id: 'square_millimeter',
      label: '平方毫米 (公制)',
      symbol: 'mm²',
      ratio: 0.000001, // 1 mm² = 0.000001 m²
    },

    // 英制单位
    square_mile: {
      id: 'square_mile',
      label: '平方英里 (英制)',
      symbol: 'mi²',
      ratio: 2589988.11, // 1 mi² ≈ 2,589,988.11 m²
    },
    acre: {
      id: 'acre',
      label: '英亩 (英制)',
      symbol: 'ac',
      ratio: 4046.86, // 1 ac ≈ 4,046.86 m²
    },
    square_yard: {
      id: 'square_yard',
      label: '平方码 (英制)',
      symbol: 'yd²',
      ratio: 0.836127, // 1 yd² ≈ 0.836127 m²
    },
    square_foot: {
      id: 'square_foot',
      label: '平方英尺 (英制)',
      symbol: 'ft²',
      ratio: 0.092903, // 1 ft² ≈ 0.092903 m²
    },
    square_inch: {
      id: 'square_inch',
      label: '平方英寸 (英制)',
      symbol: 'in²',
      ratio: 0.00064516, // 1 in² ≈ 0.00064516 m²
    },

    // 中国传统单位
    mu: {
      id: 'mu',
      label: '亩 (中国)',
      symbol: '亩',
      ratio: 666.67, // 1 亩 ≈ 666.67 m²
    },
    qing: {
      id: 'qing',
      label: '顷 (中国)',
      symbol: '顷',
      ratio: 66667, // 1 顷 = 100 亩 ≈ 66,667 m²
    },
  },
}

export default area 
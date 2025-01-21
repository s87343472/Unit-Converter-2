import type { ConversionCategory } from './types'

// 使用平方米作为基准单位
const area: ConversionCategory = {
  id: 'area',
  baseUnit: 'square_meter',
  units: {
    square_meter: {
      id: 'square_meter',
      label: '平方米',
      symbol: 'm²',
      ratio: 1,
    },
    square_kilometer: {
      id: 'square_kilometer',
      label: '平方千米',
      symbol: 'km²',
      ratio: 1000000, // 1 km² = 1,000,000 m²
    },
    hectare: {
      id: 'hectare',
      label: '公顷',
      symbol: 'ha',
      ratio: 10000, // 1 ha = 10,000 m²
    },
    are: {
      id: 'are',
      label: '公亩',
      symbol: 'a',
      ratio: 100, // 1 a = 100 m²
    },
    square_centimeter: {
      id: 'square_centimeter',
      label: '平方厘米',
      symbol: 'cm²',
      ratio: 0.0001, // 1 cm² = 0.0001 m²
    },
    square_millimeter: {
      id: 'square_millimeter',
      label: '平方毫米',
      symbol: 'mm²',
      ratio: 0.000001, // 1 mm² = 0.000001 m²
    },
    square_foot: {
      id: 'square_foot',
      label: '平方英尺',
      symbol: 'ft²',
      ratio: 0.092903, // 1 ft² ≈ 0.092903 m²
    },
    square_yard: {
      id: 'square_yard',
      label: '平方码',
      symbol: 'yd²',
      ratio: 0.836127, // 1 yd² ≈ 0.836127 m²
    },
    square_mile: {
      id: 'square_mile',
      label: '平方英里',
      symbol: 'mi²',
      ratio: 2589988.11, // 1 mi² ≈ 2,589,988.11 m²
    },
    acre: {
      id: 'acre',
      label: '英亩',
      symbol: 'ac',
      ratio: 4046.86, // 1 ac ≈ 4,046.86 m²
    },
    mu: {
      id: 'mu',
      label: '亩',
      symbol: '亩',
      ratio: 666.67, // 1 亩 ≈ 666.67 m²
    },
  },
}

export default area 
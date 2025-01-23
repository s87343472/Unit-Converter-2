import type { ConversionCategory } from './types'

// 使用米作为基准单位
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'meter',
  units: {
    meter: {
      id: 'meter',
      label: '米',
      symbol: 'm',
      ratio: 1,
    },
    kilometer: {
      id: 'kilometer',
      label: '千米',
      symbol: 'km',
      ratio: 1000,
    },
    centimeter: {
      id: 'centimeter',
      label: '厘米',
      symbol: 'cm',
      ratio: 0.01,
    },
    millimeter: {
      id: 'millimeter',
      label: '毫米',
      symbol: 'mm',
      ratio: 0.001,
    },
    inch: {
      id: 'inch',
      label: '英寸',
      symbol: 'in',
      ratio: 0.0254,
    },
    foot: {
      id: 'foot',
      label: '英尺',
      symbol: 'ft',
      ratio: 0.3048,
    },
    yard: {
      id: 'yard',
      label: '码',
      symbol: 'yd',
      ratio: 0.9144,
    },
    mile: {
      id: 'mile',
      label: '英里',
      symbol: 'mi',
      ratio: 1609.344,
    },
    light_year: {
      id: 'light_year',
      label: '光年',
      symbol: 'ly',
      ratio: 9.461e15,
    },
    astronomical_unit: {
      id: 'astronomical_unit',
      label: '天文单位',
      symbol: 'AU',
      ratio: 1.496e11,
    },
    decimeter: {
      id: 'decimeter',
      label: '分米',
      symbol: 'dm',
      ratio: 0.1,
    },
    micrometer: {
      id: 'micrometer',
      label: '微米',
      symbol: 'μm',
      ratio: 1e-6,
    },
    nanometer: {
      id: 'nanometer',
      label: '纳米',
      symbol: 'nm',
      ratio: 1e-9,
    },
    picometer: {
      id: 'picometer',
      label: '皮米',
      symbol: 'pm',
      ratio: 1e-12,
    },
  },
}

export default length 
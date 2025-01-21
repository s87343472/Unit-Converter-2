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
  },
}

export default length 
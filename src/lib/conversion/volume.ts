import type { ConversionCategory } from './types'

// 使用立方米作为基准单位
const volume: ConversionCategory = {
  id: 'volume',
  baseUnit: 'cubic_meter',
  units: {
    cubic_meter: {
      id: 'cubic_meter',
      label: '立方米 (公制)',
      symbol: 'm³',
      ratio: 1,
    },
    cubic_kilometer: {
      id: 'cubic_kilometer',
      label: '立方千米 (公制)',
      symbol: 'km³',
      ratio: 1000000000,
    },
    cubic_centimeter: {
      id: 'cubic_centimeter',
      label: '立方厘米 (公制)',
      symbol: 'cm³',
      ratio: 0.000001,
    },
    cubic_millimeter: {
      id: 'cubic_millimeter',
      label: '立方毫米 (公制)',
      symbol: 'mm³',
      ratio: 0.000000001,
    },
    liter: {
      id: 'liter',
      label: '升 (公制)',
      symbol: 'L',
      ratio: 0.001,
    },
    milliliter: {
      id: 'milliliter',
      label: '毫升 (公制)',
      symbol: 'mL',
      ratio: 0.000001,
    },
    cubic_foot: {
      id: 'cubic_foot',
      label: '立方英尺 (英制)',
      symbol: 'ft³',
      ratio: 0.0283168,
    },
    cubic_yard: {
      id: 'cubic_yard',
      label: '立方码 (英制)',
      symbol: 'yd³',
      ratio: 0.764555,
    },
    cubic_inch: {
      id: 'cubic_inch',
      label: '立方英寸 (英制)',
      symbol: 'in³',
      ratio: 0.0000163871,
    },
    gallon_us: {
      id: 'gallon_us',
      label: '加仑 (美制)',
      symbol: 'gal',
      ratio: 0.00378541,
    },
    quart_us: {
      id: 'quart_us',
      label: '夸脱 (美制)',
      symbol: 'qt',
      ratio: 0.000946353,
    },
    pint_us: {
      id: 'pint_us',
      label: '品脱 (美制)',
      symbol: 'pt',
      ratio: 0.000473176,
    },
    fluid_ounce_us: {
      id: 'fluid_ounce_us',
      label: '液量盎司 (美制)',
      symbol: 'fl oz',
      ratio: 0.0000295735,
    },
    gallon_uk: {
      id: 'gallon_uk',
      label: '加仑 (英制)',
      symbol: 'gal',
      ratio: 0.00454609,
    },
    quart_uk: {
      id: 'quart_uk',
      label: '夸脱 (英制)',
      symbol: 'qt',
      ratio: 0.00113652,
    },
    pint_uk: {
      id: 'pint_uk',
      label: '品脱 (英制)',
      symbol: 'pt',
      ratio: 0.000568261,
    },
    fluid_ounce_uk: {
      id: 'fluid_ounce_uk',
      label: '液量盎司 (英制)',
      symbol: 'fl oz',
      ratio: 0.0000284131,
    },
  },
}

export default volume 
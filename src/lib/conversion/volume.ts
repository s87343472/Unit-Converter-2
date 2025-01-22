import type { ConversionCategory } from './types'

// 使用立方米作为基准单位
const volume: ConversionCategory = {
  id: 'volume',
  baseUnit: 'cubic_meter',
  units: {
    cubic_meter: {
      id: 'cubic_meter',
      label: '立方米',
      symbol: 'm³',
      ratio: 1,
    },
    cubic_kilometer: {
      id: 'cubic_kilometer',
      label: '立方千米',
      symbol: 'km³',
      ratio: 1000000000, // 1 km³ = 1,000,000,000 m³
    },
    cubic_centimeter: {
      id: 'cubic_centimeter',
      label: '立方厘米',
      symbol: 'cm³',
      ratio: 0.000001, // 1 cm³ = 0.000001 m³
    },
    cubic_millimeter: {
      id: 'cubic_millimeter',
      label: '立方毫米',
      symbol: 'mm³',
      ratio: 0.000000001, // 1 mm³ = 0.000000001 m³
    },
    liter: {
      id: 'liter',
      label: '升',
      symbol: 'L',
      ratio: 0.001, // 1 L = 0.001 m³
    },
    milliliter: {
      id: 'milliliter',
      label: '毫升',
      symbol: 'mL',
      ratio: 0.000001, // 1 mL = 0.000001 m³
    },
    cubic_foot: {
      id: 'cubic_foot',
      label: '立方英尺',
      symbol: 'ft³',
      ratio: 0.028317, // 1 ft³ ≈ 0.028317 m³
    },
    cubic_inch: {
      id: 'cubic_inch',
      label: '立方英寸',
      symbol: 'in³',
      ratio: 0.000016387, // 1 in³ ≈ 0.000016387 m³
    },
    cubic_yard: {
      id: 'cubic_yard',
      label: '立方码',
      symbol: 'yd³',
      ratio: 0.764555, // 1 yd³ ≈ 0.764555 m³
    },
    gallon_us: {
      id: 'gallon_us',
      label: '美制加仑',
      symbol: 'gal',
      ratio: 0.003785411784, // 1 US gal = 3.785411784 L
    },
    gallon_uk: {
      id: 'gallon_uk',
      label: '英制加仑',
      symbol: 'gal (UK)',
      ratio: 0.00454609, // 1 UK gal = 4.54609 L
    },
    quart_us: {
      id: 'quart_us',
      label: '美制夸脱',
      symbol: 'qt',
      ratio: 0.000946353, // 1 qt ≈ 0.000946353 m³
    },
    pint_us: {
      id: 'pint_us',
      label: '美制品脱',
      symbol: 'pt',
      ratio: 0.000473176, // 1 pt ≈ 0.000473176 m³
    },
    pint_uk: {
      id: 'pint_uk',
      label: '英制品脱',
      symbol: 'pt (UK)',
      ratio: 0.000568261, // 1 pt (UK) ≈ 0.000568261 m³
    },
    fluid_ounce_us: {
      id: 'fluid_ounce_us',
      label: '美制液盎司',
      symbol: 'fl oz',
      ratio: 0.0000295735, // 1 fl oz ≈ 0.0000295735 m³
    },
  },
}

export default volume 
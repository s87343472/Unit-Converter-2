import type { ConversionCategory } from './types'

// 使用立方米作为基准单位
const volume: ConversionCategory = {
  id: 'volume',
  baseUnit: 'metric_cubic_meter',
  units: {
    // 基本单位
    metric_cubic_meter: {
      id: 'metric_cubic_meter',
      label: '立方米',
      symbol: 'm³',
      ratio: 1,
      category: 'metric'
    },

    // 公制体积单位
    metric_cubic_kilometer: {
      id: 'metric_cubic_kilometer',
      label: '立方千米',
      symbol: 'km³',
      ratio: 1e9,
      category: 'metric'
    },
    metric_cubic_decimeter: {
      id: 'metric_cubic_decimeter',
      label: '立方分米',
      symbol: 'dm³',
      ratio: 0.001,
      category: 'metric'
    },
    metric_cubic_centimeter: {
      id: 'metric_cubic_centimeter',
      label: '立方厘米',
      symbol: 'cm³',
      ratio: 0.000001,
      category: 'metric'
    },
    metric_cubic_millimeter: {
      id: 'metric_cubic_millimeter',
      label: '立方毫米',
      symbol: 'mm³',
      ratio: 1e-9,
      category: 'metric'
    },

    // 公制容量单位
    metric_liter: {
      id: 'metric_liter',
      label: '升',
      symbol: 'L',
      ratio: 0.001,
      category: 'metric'
    },
    metric_deciliter: {
      id: 'metric_deciliter',
      label: '分升',
      symbol: 'dL',
      ratio: 0.0001,
      category: 'metric'
    },
    metric_centiliter: {
      id: 'metric_centiliter',
      label: '厘升',
      symbol: 'cL',
      ratio: 0.00001,
      category: 'metric'
    },
    metric_milliliter: {
      id: 'metric_milliliter',
      label: '毫升',
      symbol: 'mL',
      ratio: 0.000001,
      category: 'metric'
    },

    // 英制体积单位
    imperial_cubic_yard: {
      id: 'imperial_cubic_yard',
      label: '立方码',
      symbol: 'yd³',
      ratio: 0.764554857984,
      category: 'imperial'
    },
    imperial_cubic_foot: {
      id: 'imperial_cubic_foot',
      label: '立方英尺',
      symbol: 'ft³',
      ratio: 0.028316846592,
      category: 'imperial'
    },
    imperial_cubic_inch: {
      id: 'imperial_cubic_inch',
      label: '立方英寸',
      symbol: 'in³',
      ratio: 0.000016387064,
      category: 'imperial'
    },

    // 英制容量单位
    imperial_gallon: {
      id: 'imperial_gallon',
      label: '英制加仑',
      symbol: 'gal (UK)',
      ratio: 0.00454609,
      category: 'imperial'
    },
    imperial_quart: {
      id: 'imperial_quart',
      label: '英制夸脱',
      symbol: 'qt (UK)',
      ratio: 0.0011365225,
      category: 'imperial'
    },
    imperial_pint: {
      id: 'imperial_pint',
      label: '英制品脱',
      symbol: 'pt (UK)',
      ratio: 0.00056826125,
      category: 'imperial'
    },
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液盎司',
      symbol: 'fl oz (UK)',
      ratio: 0.0000284130625,
      category: 'imperial'
    },

    // 美制容量单位
    us_gallon: {
      id: 'us_gallon',
      label: '美制加仑',
      symbol: 'gal (US)',
      ratio: 0.003785411784,
      category: 'us'
    },
    us_quart: {
      id: 'us_quart',
      label: '美制夸脱',
      symbol: 'qt (US)',
      ratio: 0.000946352946,
      category: 'us'
    },
    us_pint: {
      id: 'us_pint',
      label: '美制品脱',
      symbol: 'pt (US)',
      ratio: 0.000473176473,
      category: 'us'
    },
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液盎司',
      symbol: 'fl oz (US)',
      ratio: 0.0000295735295625,
      category: 'us'
    },
    us_cup: {
      id: 'us_cup',
      label: '美制杯',
      symbol: 'cup (US)',
      ratio: 0.0002365882365,
      category: 'us'
    },
    us_tablespoon: {
      id: 'us_tablespoon',
      label: '美制汤匙',
      symbol: 'tbsp (US)',
      ratio: 0.0000147867647813,
      category: 'us'
    },
    us_teaspoon: {
      id: 'us_teaspoon',
      label: '美制茶匙',
      symbol: 'tsp (US)',
      ratio: 0.00000492892159375,
      category: 'us'
    },

    // 中国传统容量单位
    traditional_dan: {
      id: 'traditional_dan',
      label: '石',
      symbol: '石',
      ratio: 0.1,
      category: 'traditional'
    },
    traditional_dou: {
      id: 'traditional_dou',
      label: '斗',
      symbol: '斗',
      ratio: 0.01,
      category: 'traditional'
    },
    traditional_sheng: {
      id: 'traditional_sheng',
      label: '升',
      symbol: '升',
      ratio: 0.001,
      category: 'traditional'
    },

    // 日本传统容量单位
    traditional_gou: {
      id: 'traditional_gou',
      label: '合',
      symbol: '合',
      ratio: 0.0001804,
      category: 'traditional'
    },
    traditional_shaku: {
      id: 'traditional_shaku',
      label: '勺',
      symbol: '勺',
      ratio: 0.00001804,
      category: 'traditional'
    },
    traditional_sai: {
      id: 'traditional_sai',
      label: '才',
      symbol: '才',
      ratio: 0.000001804,
      category: 'traditional'
    },

    // 工业容量单位
    industrial_oil_barrel: {
      id: 'industrial_oil_barrel',
      label: '石油桶',
      symbol: 'bbl',
      ratio: 0.158987294928,
      category: 'industrial'
    },
    industrial_beer_barrel: {
      id: 'industrial_beer_barrel',
      label: '啤酒桶',
      symbol: 'beer bbl',
      ratio: 0.117347765,
      category: 'industrial'
    }
  }
}

export default volume 
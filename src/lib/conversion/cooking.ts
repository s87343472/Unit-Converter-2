import type { ConversionCategory } from './types'

// 使用毫升作为基准单位
const cooking: ConversionCategory = {
  id: 'cooking',
  baseUnit: 'milliliter',
  units: {
    // 基本单位
    milliliter: {
      id: 'milliliter',
      label: '毫升',
      symbol: 'mL',
      ratio: 1 // 基准单位
    },

    // 公制容量单位
    liter: {
      id: 'liter',
      label: '升',
      symbol: 'L',
      ratio: 1000 // 1 L = 1000 mL（基本换算关系）
    },
    deciliter: {
      id: 'deciliter',
      label: '分升',
      symbol: 'dL',
      ratio: 100 // 1 dL = 100 mL（基本换算关系）
    },
    centiliter: {
      id: 'centiliter',
      label: '厘升',
      symbol: 'cL',
      ratio: 10 // 1 cL = 10 mL（基本换算关系）
    },

    // 美制容量单位
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液盎司',
      symbol: 'fl oz',
      ratio: 29.5735295625 // 1 US fl oz = 29.5735295625 mL（基于美制标准）
    },
    us_tablespoon: {
      id: 'us_tablespoon',
      label: '美制汤匙',
      symbol: 'tbsp',
      ratio: 14.7867647813 // 1 US tbsp = 14.7867647813 mL（1/2 US fl oz）
    },
    us_teaspoon: {
      id: 'us_teaspoon',
      label: '美制茶匙',
      symbol: 'tsp',
      ratio: 4.92892159375 // 1 US tsp = 4.92892159375 mL（1/6 US fl oz）
    },

    // 英制容量单位
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液盎司',
      symbol: 'fl oz',
      ratio: 28.4131 // 1 Imperial fl oz = 28.4131 mL（基于英制标准）
    },
    imperial_tablespoon: {
      id: 'imperial_tablespoon',
      label: '英制汤匙',
      symbol: 'tbsp',
      ratio: 17.7582 // 1 Imperial tbsp = 17.7582 mL（基于英制标准）
    },
    imperial_teaspoon: {
      id: 'imperial_teaspoon',
      label: '英制茶匙',
      symbol: 'tsp',
      ratio: 5.91939 // 1 Imperial tsp = 5.91939 mL（基于英制标准）
    },

    // 中式计量单位（约定俗成）
    chinese_bowl: {
      id: 'chinese_bowl',
      label: '中式碗',
      symbol: '碗',
      ratio: 300 // 1 中式碗 ≈ 300 mL（约定俗成）
    },
    chinese_cup: {
      id: 'chinese_cup',
      label: '中式杯',
      symbol: '杯',
      ratio: 200 // 1 中式杯 ≈ 200 mL（约定俗成）
    },
    chinese_tablespoon: {
      id: 'chinese_tablespoon',
      label: '中式汤匙',
      symbol: '汤匙',
      ratio: 15 // 1 中式汤匙 ≈ 15 mL（约定俗成）
    },
    chinese_teaspoon: {
      id: 'chinese_teaspoon',
      label: '中式茶匙',
      symbol: '茶匙',
      ratio: 5 // 1 中式茶匙 ≈ 5 mL（约定俗成）
    },

    // 日式计量单位
    japanese_cup: {
      id: 'japanese_cup',
      label: '日式杯',
      symbol: '合',
      ratio: 180.39 // 1 日式杯 = 180.39 mL（日本工业标准）
    },
    japanese_tablespoon: {
      id: 'japanese_tablespoon',
      label: '日式汤匙',
      symbol: '大さじ',
      ratio: 15 // 1 日式汤匙 = 15 mL（日本工业标准）
    },
    japanese_teaspoon: {
      id: 'japanese_teaspoon',
      label: '日式茶匙',
      symbol: '小さじ',
      ratio: 5 // 1 日式茶匙 = 5 mL（日本工业标准）
    },

    // 重量单位（基于水的密度，在4°C时）
    weight_gram: {
      id: 'weight_gram',
      label: '克',
      symbol: 'g',
      ratio: 1 // 1 mL水 = 1 g（在4°C时）
    },
    weight_kilogram: {
      id: 'weight_kilogram',
      label: '千克',
      symbol: 'kg',
      ratio: 1000 // 1 kg = 1000 g（基本换算关系）
    },
    weight_ounce: {
      id: 'weight_ounce',
      label: '盎司',
      symbol: 'oz',
      ratio: 28.3495 // 1 oz ≈ 28.3495 g（基于国际磅）
    },
    weight_pound: {
      id: 'weight_pound',
      label: '磅',
      symbol: 'lb',
      ratio: 453.592 // 1 lb = 453.592 g（国际标准）
    },
  },
} as const

export default cooking 
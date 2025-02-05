import type { ConversionCategory } from './types'

// 使用毫升作为基准单位
const cooking: ConversionCategory = {
  id: 'cooking',
  baseUnit: 'metric_milliliter',
  description: '烹饪单位转换',
  units: {
    // 公制容量单位
    metric_milliliter: {
      id: 'metric_milliliter',
      label: '毫升',
      symbol: 'mL',
      ratio: 1, // 基准单位
      category: 'metric'
    },
    metric_liter: {
      id: 'metric_liter',
      label: '升',
      symbol: 'L',
      ratio: 1000, // 1 L = 1000 mL
      category: 'metric'
    },
    metric_deciliter: {
      id: 'metric_deciliter',
      label: '分升',
      symbol: 'dL',
      ratio: 100, // 1 dL = 100 mL
      category: 'metric'
    },
    metric_centiliter: {
      id: 'metric_centiliter',
      label: '厘升',
      symbol: 'cL',
      ratio: 10, // 1 cL = 10 mL
      category: 'metric'
    },
    metric_cup: {
      id: 'metric_cup',
      label: '公制杯',
      symbol: 'cup',
      ratio: 250, // 1 metric cup = 250 mL
      category: 'metric'
    },
    metric_tablespoon: {
      id: 'metric_tablespoon',
      label: '公制汤匙',
      symbol: 'tbsp',
      ratio: 15, // 1 metric tbsp = 15 mL
      category: 'metric'
    },
    metric_teaspoon: {
      id: 'metric_teaspoon',
      label: '公制茶匙',
      symbol: 'tsp',
      ratio: 5, // 1 metric tsp = 5 mL
      category: 'metric'
    },

    // 美制容量单位
    us_cup: {
      id: 'us_cup',
      label: '美制杯',
      symbol: 'cup',
      ratio: 236.588, // 1 US cup = 236.588 mL
      category: 'us'
    },
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液盎司',
      symbol: 'fl oz',
      ratio: 29.5735295625, // 1 US fl oz = 29.5735295625 mL
      category: 'us'
    },
    us_tablespoon: {
      id: 'us_tablespoon',
      label: '美制汤匙',
      symbol: 'tbsp',
      ratio: 14.7867647813, // 1 US tbsp = 14.7867647813 mL
      category: 'us'
    },
    us_teaspoon: {
      id: 'us_teaspoon',
      label: '美制茶匙',
      symbol: 'tsp',
      ratio: 4.92892159375, // 1 US tsp = 4.92892159375 mL
      category: 'us'
    },

    // 英制容量单位
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液盎司',
      symbol: 'fl oz',
      ratio: 28.4131, // 1 Imperial fl oz = 28.4131 mL
      category: 'imperial'
    },
    imperial_tablespoon: {
      id: 'imperial_tablespoon',
      label: '英制汤匙',
      symbol: 'tbsp',
      ratio: 17.7582, // 1 Imperial tbsp = 17.7582 mL
      category: 'imperial'
    },
    imperial_teaspoon: {
      id: 'imperial_teaspoon',
      label: '英制茶匙',
      symbol: 'tsp',
      ratio: 5.91939, // 1 Imperial tsp = 5.91939 mL
      category: 'imperial'
    },

    // 中式计量单位
    chinese_bowl: {
      id: 'chinese_bowl',
      label: '中式碗',
      symbol: '碗',
      ratio: 300, // 1 中式碗 ≈ 300 mL
      category: 'chinese'
    },
    chinese_cup: {
      id: 'chinese_cup',
      label: '中式杯',
      symbol: '杯',
      ratio: 200, // 1 中式杯 ≈ 200 mL
      category: 'chinese'
    },
    chinese_tablespoon: {
      id: 'chinese_tablespoon',
      label: '中式汤匙',
      symbol: '汤匙',
      ratio: 15, // 1 中式汤匙 ≈ 15 mL
      category: 'chinese'
    },
    chinese_teaspoon: {
      id: 'chinese_teaspoon',
      label: '中式茶匙',
      symbol: '茶匙',
      ratio: 5, // 1 中式茶匙 ≈ 5 mL
      category: 'chinese'
    },

    // 日式计量单位
    japanese_cup: {
      id: 'japanese_cup',
      label: '日式杯',
      symbol: '合',
      ratio: 180.39, // 1 日式杯 = 180.39 mL
      category: 'japanese'
    },
    japanese_tablespoon: {
      id: 'japanese_tablespoon',
      label: '日式汤匙',
      symbol: '大さじ',
      ratio: 15, // 1 日式汤匙 = 15 mL
      category: 'japanese'
    },
    japanese_teaspoon: {
      id: 'japanese_teaspoon',
      label: '日式茶匙',
      symbol: '小さじ',
      ratio: 5, // 1 日式茶匙 = 5 mL
      category: 'japanese'
    }
  },

  // 知识点
  knowledge: {
    title: '烹饪单位知识',
    items: [
      '容量单位和重量单位的换算基于水的密度（在4°C时，1毫升水 = 1克）。',
      '不同国家和地区的烹饪单位可能有所不同，使用时需注意区分。',
      '美制和英制单位虽然名称相同，但实际容量有差异。',
      '中式和日式计量单位多用于传统食谱，与国际标准单位有一定差异。',
      '专业烹饪建议使用重量单位，因为更精确且不受食材密度影响。'
    ]
  }
} as const

export default cooking 
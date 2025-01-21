import { ConversionCategory } from './types'

// 基准单位为毫升(ml)
const cooking: ConversionCategory = {
  id: 'cooking',
  baseUnit: 'milliliter',
  units: {
    // 公制体积单位
    milliliter: {
      id: 'milliliter',
      label: '毫升',
      ratio: 1,
      symbol: 'ml',
    },
    liter: {
      id: 'liter',
      label: '升',
      ratio: 1000,
      symbol: 'L',
    },
    // 美制体积单位
    us_cup: {
      id: 'us_cup',
      label: '美制杯',
      ratio: 236.588, // 1 US cup = 236.588 ml
      symbol: 'cup',
    },
    us_tablespoon: {
      id: 'us_tablespoon',
      label: '美制汤匙',
      ratio: 14.7868, // 1 US tbsp = 14.7868 ml
      symbol: 'tbsp',
    },
    us_teaspoon: {
      id: 'us_teaspoon',
      label: '美制茶匙',
      ratio: 4.92892, // 1 US tsp = 4.92892 ml
      symbol: 'tsp',
    },
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液体盎司',
      ratio: 29.5735, // 1 US fl oz = 29.5735 ml
      symbol: 'fl oz',
    },
    // 英制体积单位
    imperial_cup: {
      id: 'imperial_cup',
      label: '英制杯',
      ratio: 284.131, // 1 Imperial cup = 284.131 ml
      symbol: 'cup (UK)',
    },
    imperial_tablespoon: {
      id: 'imperial_tablespoon',
      label: '英制汤匙',
      ratio: 17.7582, // 1 Imperial tbsp = 17.7582 ml
      symbol: 'tbsp (UK)',
    },
    imperial_teaspoon: {
      id: 'imperial_teaspoon',
      label: '英制茶匙',
      ratio: 5.91939, // 1 Imperial tsp = 5.91939 ml
      symbol: 'tsp (UK)',
    },
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液体盎司',
      ratio: 28.4131, // 1 Imperial fl oz = 28.4131 ml
      symbol: 'fl oz (UK)',
    },
    // 中国传统单位
    sheng: {
      id: 'sheng',
      label: '升',
      ratio: 1000, // 1 升 = 1000 ml
      symbol: '升',
    },
    ge: {
      id: 'ge',
      label: '合',
      ratio: 100, // 1 合 = 100 ml
      symbol: '合',
    },
    shao: {
      id: 'shao',
      label: '勺',
      ratio: 10, // 1 勺 = 10 ml
      symbol: '勺',
    },
    cuo: {
      id: 'cuo',
      label: '撮',
      ratio: 1, // 1 撮 ≈ 1 ml
      symbol: '撮',
    },
  },
} as const

export default cooking 
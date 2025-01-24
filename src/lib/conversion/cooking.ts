import type { ConversionCategory } from './types'

// 使用毫升作为基准单位
const cooking: ConversionCategory = {
  id: 'cooking',
  baseUnit: 'milliliter',
  units: {
    milliliter: {
      id: 'milliliter',
      label: '毫升 (公制)',
      symbol: 'mL',
      ratio: 1,
    },
    cup_us: {
      id: 'cup_us',
      label: '杯 (美制)',
      symbol: 'cup',
      ratio: 236.588,
    },
    cup_metric: {
      id: 'cup_metric',
      label: '杯 (公制)',
      symbol: 'cup',
      ratio: 250,
    },
    cup_jp: {
      id: 'cup_jp',
      label: '杯 (日本)',
      symbol: '合',
      ratio: 200,
    },
    tablespoon_us: {
      id: 'tablespoon_us',
      label: '汤匙 (美制)',
      symbol: 'tbsp',
      ratio: 14.7868,
    },
    tablespoon_metric: {
      id: 'tablespoon_metric',
      label: '汤匙 (公制)',
      symbol: 'tbsp',
      ratio: 15,
    },
    tablespoon_jp: {
      id: 'tablespoon_jp',
      label: '汤匙 (日本)',
      symbol: '大さじ',
      ratio: 15,
    },
    teaspoon_us: {
      id: 'teaspoon_us',
      label: '茶匙 (美制)',
      symbol: 'tsp',
      ratio: 4.92892,
    },
    teaspoon_metric: {
      id: 'teaspoon_metric',
      label: '茶匙 (公制)',
      symbol: 'tsp',
      ratio: 5,
    },
    teaspoon_jp: {
      id: 'teaspoon_jp',
      label: '茶匙 (日本)',
      symbol: '小さじ',
      ratio: 5,
    },
    fluid_ounce: {
      id: 'fluid_ounce',
      label: '液量盎司 (美制)',
      symbol: 'fl oz',
      ratio: 29.5735,
    },
    gou: {
      id: 'gou',
      label: '合 (日本)',
      symbol: '合',
      ratio: 180.39,
    },
    shaku: {
      id: 'shaku',
      label: '勺 (日本)',
      symbol: '勺',
      ratio: 18.039,
    },
  },
}

export default cooking 
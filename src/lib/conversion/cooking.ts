import type { ConversionCategory } from './types'

// 使用毫升作为基准单位
const cooking: ConversionCategory = {
  id: 'cooking',
  baseUnit: 'metric_milliliter',
  units: {
    // 公制体积单位
    metric_milliliter: {
      id: 'metric_milliliter',
      label: '毫升',
      symbol: 'mL',
      ratio: 1,
    },
    metric_liter: {
      id: 'metric_liter',
      label: '升',
      symbol: 'L',
      ratio: 1000,
    },
    metric_deciliter: {
      id: 'metric_deciliter',
      label: '分升',
      symbol: 'dL',
      ratio: 100,
    },
    metric_centiliter: {
      id: 'metric_centiliter',
      label: '厘升',
      symbol: 'cL',
      ratio: 10,
    },
    // 美制体积单位
    us_cup: {
      id: 'us_cup',
      label: '美制杯',
      symbol: 'cup',
      ratio: 236.588, // 1 US cup = 236.588 mL
    },
    us_fluid_ounce: {
      id: 'us_fluid_ounce',
      label: '美制液盎司',
      symbol: 'fl oz',
      ratio: 29.5735, // 1 US fl oz = 29.5735 mL
    },
    us_tablespoon: {
      id: 'us_tablespoon',
      label: '美制汤匙',
      symbol: 'tbsp',
      ratio: 14.7868, // 1 US tbsp = 14.7868 mL
    },
    us_teaspoon: {
      id: 'us_teaspoon',
      label: '美制茶匙',
      symbol: 'tsp',
      ratio: 4.92892, // 1 US tsp = 4.92892 mL
    },
    // 英制体积单位
    imperial_cup: {
      id: 'imperial_cup',
      label: '英制杯',
      symbol: 'cup',
      ratio: 284.131, // 1 Imperial cup = 284.131 mL
    },
    imperial_fluid_ounce: {
      id: 'imperial_fluid_ounce',
      label: '英制液盎司',
      symbol: 'fl oz',
      ratio: 28.4131, // 1 Imperial fl oz = 28.4131 mL
    },
    imperial_tablespoon: {
      id: 'imperial_tablespoon',
      label: '英制汤匙',
      symbol: 'tbsp',
      ratio: 17.7582, // 1 Imperial tbsp = 17.7582 mL
    },
    imperial_teaspoon: {
      id: 'imperial_teaspoon',
      label: '英制茶匙',
      symbol: 'tsp',
      ratio: 5.91939, // 1 Imperial tsp = 5.91939 mL
    },
    // 中式计量单位
    chinese_bowl: {
      id: 'chinese_bowl',
      label: '中式碗',
      symbol: '碗',
      ratio: 300, // 1 Chinese bowl ≈ 300 mL
    },
    chinese_cup: {
      id: 'chinese_cup',
      label: '中式杯',
      symbol: '杯',
      ratio: 200, // 1 Chinese cup ≈ 200 mL
    },
    chinese_tablespoon: {
      id: 'chinese_tablespoon',
      label: '中式汤匙',
      symbol: '汤匙',
      ratio: 15, // 1 Chinese tbsp ≈ 15 mL
    },
    chinese_teaspoon: {
      id: 'chinese_teaspoon',
      label: '中式茶匙',
      symbol: '茶匙',
      ratio: 5, // 1 Chinese tsp ≈ 5 mL
    },
    // 日式计量单位
    japanese_cup: {
      id: 'japanese_cup',
      label: '日式杯',
      symbol: '合',
      ratio: 180.39, // 1 Japanese cup = 180.39 mL
    },
    japanese_tablespoon: {
      id: 'japanese_tablespoon',
      label: '日式汤匙',
      symbol: '大さじ',
      ratio: 15, // 1 Japanese tbsp = 15 mL
    },
    japanese_teaspoon: {
      id: 'japanese_teaspoon',
      label: '日式茶匙',
      symbol: '小さじ',
      ratio: 5, // 1 Japanese tsp = 5 mL
    },
    // 重量单位（干料）
    weight_gram: {
      id: 'weight_gram',
      label: '克',
      symbol: 'g',
      ratio: 1, // 假设1mL水 = 1g
    },
    weight_kilogram: {
      id: 'weight_kilogram',
      label: '千克',
      symbol: 'kg',
      ratio: 1000, // 1 kg = 1000 g
    },
    weight_ounce: {
      id: 'weight_ounce',
      label: '盎司',
      symbol: 'oz',
      ratio: 28.3495, // 1 oz ≈ 28.3495 g
    },
    weight_pound: {
      id: 'weight_pound',
      label: '磅',
      symbol: 'lb',
      ratio: 453.592, // 1 lb = 453.592 g
    },
  },
}

export default cooking 
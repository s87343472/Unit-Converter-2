import type { ConversionCategory } from './types'

const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'scientific_kelvin',
  description: '温度单位转换',
  units: {
    // 科学温度单位
    scientific_kelvin: {
      id: 'scientific_kelvin',
      label: '开尔文',
      symbol: 'K',
      toBase: (kelvin: number) => kelvin,
      fromBase: (kelvin: number) => kelvin,
      category: 'scientific'
    },

    // 公制温度单位
    metric_celsius: {
      id: 'metric_celsius',
      label: '摄氏度',
      symbol: '°C',
      toBase: (celsius: number) => celsius + 273.15,
      fromBase: (kelvin: number) => kelvin - 273.15,
      category: 'metric'
    },

    // 美制温度单位
    us_fahrenheit: {
      id: 'us_fahrenheit',
      label: '华氏度',
      symbol: '°F',
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9 + 273.15,
      fromBase: (kelvin: number) => (kelvin - 273.15) * 9/5 + 32,
      category: 'us'
    },

    // 科学温度单位
    scientific_rankine: {
      id: 'scientific_rankine',
      label: '兰氏度',
      symbol: '°R',
      toBase: (rankine: number) => rankine * 5/9,
      fromBase: (kelvin: number) => kelvin * 9/5,
      category: 'scientific'
    },

    // 历史温度单位
    scientific_reaumur: {  // 改为scientific前缀，因为这是一个科学计量单位
      id: 'scientific_reaumur',
      label: '列氏度',
      symbol: '°Ré',
      toBase: (reaumur: number) => reaumur * 1.25 + 273.15,
      fromBase: (kelvin: number) => (kelvin - 273.15) * 0.8,
      category: 'scientific'
    },

    // 气象温度单位
    scientific_meteorological_celsius: {  // 改为scientific前缀，因为这是专业科学单位
      id: 'scientific_meteorological_celsius',
      label: '气象摄氏度',
      symbol: '°C (气象)',
      toBase: (celsius: number) => celsius + 273.15,
      fromBase: (kelvin: number) => kelvin - 273.15,
      category: 'scientific'
    },

    scientific_meteorological_fahrenheit: {  // 改为scientific前缀
      id: 'scientific_meteorological_fahrenheit',
      label: '气象华氏度',
      symbol: '°F (气象)',
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9 + 273.15,
      fromBase: (kelvin: number) => (kelvin - 273.15) * 9/5 + 32,
      category: 'scientific'
    },

    // 工业温度单位
    industrial_celsius: {
      id: 'industrial_celsius',
      label: '工业摄氏度',
      symbol: '°C (工业)',
      toBase: (celsius: number) => celsius + 273.15,
      fromBase: (kelvin: number) => kelvin - 273.15,
      category: 'industrial'
    },

    industrial_fahrenheit: {
      id: 'industrial_fahrenheit',
      label: '工业华氏度',
      symbol: '°F (工业)',
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9 + 273.15,
      fromBase: (kelvin: number) => (kelvin - 273.15) * 9/5 + 32,
      category: 'industrial'
    }
  },

  // 知识点
  knowledge: {
    title: '温度知识',
    items: [
      '开尔文(K)是国际单位制中的温度基本单位，0K是绝对零度。',
      '摄氏度(°C)是最常用的温度单位，水的冰点是0°C，沸点是100°C。',
      '华氏度(°F)主要在美国使用，水的冰点是32°F，沸点是212°F。',
      '兰氏度(°R)是华氏度的绝对温标，0°R等于绝对零度。',
      '列氏度(°Ré)是一个历史温度单位，现已很少使用。',
      '工业和气象领域可能使用特殊的温度刻度和标准。'
    ]
  }
} as const

export default temperature
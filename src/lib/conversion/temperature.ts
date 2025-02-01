import type { ConversionCategory } from './types'

// 使用开尔文作为基准单位
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'scientific_kelvin',
  units: {
    // 基础科学温度单位
    scientific_kelvin: {
      id: 'scientific_kelvin',
      label: '开尔文',
      symbol: 'K',
      toBase: (kelvin: number) => kelvin - 273.15,
      fromBase: (celsius: number) => celsius + 273.15
    },

    // 公制温度单位
    metric_celsius: {
      id: 'metric_celsius',
      label: '摄氏度',
      symbol: '°C',
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },

    // 美制温度单位
    us_fahrenheit: {
      id: 'us_fahrenheit',
      label: '华氏度',
      symbol: '°F',
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    },

    // 科学温度单位
    scientific_rankine: {
      id: 'scientific_rankine',
      label: '兰氏度',
      symbol: '°R',
      toBase: (rankine: number) => (rankine - 491.67) * 5/9,
      fromBase: (celsius: number) => celsius * 9/5 + 491.67
    },

    // 历史温度单位
    historical_reaumur: {
      id: 'historical_reaumur',
      label: '列氏度',
      symbol: '°Ré',
      toBase: (value: number) => value * 1.25 + 273.15,
      fromBase: (value: number) => (value - 273.15) * 0.8,
    },

    // 气象温度单位 - 用于天气预报、大气观测和气候研究
    // 虽然数值上与普通温度单位相同，但在气象学中有特殊的使用场景和规范
    meteorological_celsius: {
      id: 'meteorological_celsius',
      label: '气象摄氏度',
      symbol: '°C (气象)',
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },
    meteorological_fahrenheit: {
      id: 'meteorological_fahrenheit',
      label: '气象华氏度',
      symbol: '°F (气象)',
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    },

    // 工业温度单位 - 用于工业过程控制、制造业温度监测和高温环境测量
    // 虽然数值上与普通温度单位相同，但在工业应用中有特殊的使用规范和安全标准
    industrial_celsius: {
      id: 'industrial_celsius',
      label: '工业摄氏度',
      symbol: '°C (工业)',
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },
    industrial_fahrenheit: {
      id: 'industrial_fahrenheit',
      label: '工业华氏度',
      symbol: '°F (工业)',
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    }
  }
} as const

export default temperature 
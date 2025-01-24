import type { ConversionCategory } from './types'

// 使用开尔文作为基准单位
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'kelvin',
  units: {
    // 基本温度单位
    kelvin: {
      id: 'kelvin',
      label: '开尔文',
      symbol: 'K',
      ratio: 1,
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    celsius: {
      id: 'celsius',
      label: '摄氏度',
      symbol: '°C',
      ratio: 1,
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },
    fahrenheit: {
      id: 'fahrenheit',
      label: '华氏度',
      symbol: '°F',
      ratio: 1,
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    },
    rankine: {
      id: 'rankine',
      label: '兰氏度',
      symbol: '°R',
      ratio: 1,
      toBase: (value: number) => value * 5/9,
      fromBase: (value: number) => value * 9/5,
    },
    reaumur: {
      id: 'reaumur',
      label: '列氏度',
      symbol: '°Ré',
      ratio: 1,
      toBase: (value: number) => value * 1.25 + 273.15,
      fromBase: (value: number) => (value - 273.15) * 0.8,
    },

    // 气象温度单位
    celsius_meteorological: {
      id: 'celsius_meteorological',
      label: '气象摄氏度',
      symbol: '°C',
      ratio: 1,
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },
    fahrenheit_meteorological: {
      id: 'fahrenheit_meteorological',
      label: '气象华氏度',
      symbol: '°F',
      ratio: 1,
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    },

    // 工业温度单位
    celsius_industrial: {
      id: 'celsius_industrial',
      label: '工业摄氏度',
      symbol: '°C',
      ratio: 1,
      toBase: (value: number) => value + 273.15,
      fromBase: (value: number) => value - 273.15,
    },
    fahrenheit_industrial: {
      id: 'fahrenheit_industrial',
      label: '工业华氏度',
      symbol: '°F',
      ratio: 1,
      toBase: (value: number) => (value + 459.67) * 5/9,
      fromBase: (value: number) => value * 9/5 - 459.67,
    },
  },
} as const

export default temperature 
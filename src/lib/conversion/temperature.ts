import type { ConversionCategory } from './types'

// 使用开尔文作为基准单位
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'celsius',
  units: {
    // 基本单位
    celsius: {
      id: 'celsius',
      label: '摄氏度',
      symbol: '°C',
      ratio: 1, // 基准单位
      // 定义点：
      // 0°C = 水的凝固点（标准大气压下）
      // 100°C = 水的沸点（标准大气压下）
    },

    // 科学温度单位
    kelvin: {
      id: 'kelvin',
      label: '开尔文',
      symbol: 'K',
      // 定义：热力学温标的基本单位
      // 0 K = 绝对零度（-273.15°C）
      // 273.15 K = 0°C
      toBase: (kelvin: number) => kelvin - 273.15, // K → °C
      fromBase: (celsius: number) => celsius + 273.15 // °C → K
    },

    // 工程温度单位
    fahrenheit: {
      id: 'fahrenheit',
      label: '华氏度',
      symbol: '°F',
      // 定义点：
      // 32°F = 水的凝固点（0°C）
      // 212°F = 水的沸点（100°C）
      // 转换公式：°C = (°F - 32) × 5/9
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9, // °F → °C
      fromBase: (celsius: number) => celsius * 9/5 + 32 // °C → °F
    },
    rankine: {
      id: 'rankine',
      label: '兰氏度',
      symbol: '°R',
      // 定义：以华氏度为基础的绝对温度单位
      // 0°R = 绝对零度（-459.67°F）
      // 491.67°R = 32°F = 0°C
      // 转换公式：°C = (°R - 491.67) × 5/9
      toBase: (rankine: number) => (rankine - 491.67) * 5/9, // °R → °C
      fromBase: (celsius: number) => celsius * 9/5 + 491.67 // °C → °R
    },

    // 工业温度单位
    reaumur: {
      id: 'reaumur',
      label: '列氏度',
      symbol: '°Ré',
      // 定义点：
      // 0°Ré = 水的凝固点（0°C）
      // 80°Ré = 水的沸点（100°C）
      // 转换公式：°C = °Ré × 5/4
      toBase: (reaumur: number) => reaumur * 5/4, // °Ré → °C
      fromBase: (celsius: number) => celsius * 4/5 // °C → °Ré
    },

    // 参考温度点：
    // 绝对零度：0 K = -273.15°C = -459.67°F = 0°R
    // 水的凝固点：273.15 K = 0°C = 32°F = 491.67°R = 0°Ré
    // 水的沸点：373.15 K = 100°C = 212°F = 671.67°R = 80°Ré
    // 室温（标准）：293.15 K = 20°C = 68°F = 527.67°R = 16°Ré

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
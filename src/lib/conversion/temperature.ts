import type { ConversionCategory } from './types'

// 使用摄氏度作为基准单位
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'celsius',
  units: {
    celsius: {
      id: 'celsius',
      label: '摄氏度 (公制)',
      symbol: '°C',
      ratio: 1,
    },
    fahrenheit: {
      id: 'fahrenheit',
      label: '华氏度 (美制)',
      symbol: '°F',
      // 华氏度需要特殊的转换函数
      // °F = °C × 9/5 + 32
      // °C = (°F - 32) × 5/9
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9,
      fromBase: (celsius: number) => celsius * 9/5 + 32,
    },
    kelvin: {
      id: 'kelvin',
      label: '开尔文 (科学)',
      symbol: 'K',
      // 开尔文需要特殊的转换函数
      // K = °C + 273.15
      // °C = K - 273.15
      toBase: (kelvin: number) => kelvin - 273.15,
      fromBase: (celsius: number) => celsius + 273.15,
    },
    rankine: {
      id: 'rankine',
      label: '兰氏度 (科学)',
      symbol: '°R',
      ratio: 1,
    },
    reaumur: {
      id: 'reaumur',
      label: '列氏度 (历史)',
      symbol: '°Ré',
      ratio: 1,
    },
  },
}

export default temperature 
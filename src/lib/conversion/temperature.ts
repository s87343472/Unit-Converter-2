import type { ConversionCategory } from './types'

// 使用摄氏度作为基准单位
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'celsius',
  units: {
    celsius: {
      id: 'celsius',
      label: '摄氏度',
      symbol: '°C',
      ratio: 1,
    },
    fahrenheit: {
      id: 'fahrenheit',
      label: '华氏度',
      symbol: '°F',
      // 华氏度需要特殊的转换函数
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9,
      fromBase: (celsius: number) => celsius * 9/5 + 32,
    },
    kelvin: {
      id: 'kelvin',
      label: '开尔文',
      symbol: 'K',
      // 开尔文需要特殊的转换函数
      toBase: (kelvin: number) => kelvin - 273.15,
      fromBase: (celsius: number) => celsius + 273.15,
    },
  },
}

export default temperature 
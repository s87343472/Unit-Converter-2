import { Unit } from './length'

// 温度单位
export const temperatureUnits: Unit[] = [
  { id: 'celsius', symbol: '°C', ratio: 1 },
  { id: 'fahrenheit', symbol: '°F', ratio: 1 },
  { id: 'kelvin', symbol: 'K', ratio: 1 }
]

// 温度转换函数
export function convertTemperature(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为摄氏度
  let celsius: number
  switch (fromUnit.id) {
    case 'fahrenheit':
      celsius = (value - 32) * 5 / 9
      break
    case 'kelvin':
      celsius = value - 273.15
      break
    case 'celsius':
    default:
      celsius = value
  }

  // 从摄氏度转换为目标单位
  switch (toUnit.id) {
    case 'fahrenheit':
      return celsius * 9 / 5 + 32
    case 'kelvin':
      return celsius + 273.15
    case 'celsius':
    default:
      return celsius
  }
}

// 验证温度值是否有效
export function isValidTemperature(value: number, unit: Unit): boolean {
  switch (unit.id) {
    case 'kelvin':
      return value >= 0  // 开尔文不能低于绝对零度
    case 'celsius':
      return value >= -273.15  // 摄氏度不能低于绝对零度
    case 'fahrenheit':
      return value >= -459.67  // 华氏度不能低于绝对零度
    default:
      return true
  }
} 
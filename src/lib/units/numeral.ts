import { Unit } from './length'

// 使用十进制作为基准
export const numeralUnits: Unit[] = [
  { id: 'binary', symbol: 'bin', ratio: 1, category: 'scientific' },
  { id: 'octal', symbol: 'oct', ratio: 1, category: 'scientific' },
  { id: 'decimal', symbol: 'dec', ratio: 1, category: 'scientific' },
  { id: 'hexadecimal', symbol: 'hex', ratio: 1, category: 'scientific' }
]

// 转换函数
export function convertNumeral(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 对于进制转换，我们不使用比率，而是使用特定的转换逻辑
  return value  // 实际值不变，只是显示格式不同
}

// 格式化函数
export function formatNumeral(value: number, unit: Unit): string {
  const intValue = Math.floor(value)  // 只处理整数部分
  switch (unit.id) {
    case 'binary':
      return '0b' + intValue.toString(2)
    case 'octal':
      return '0o' + intValue.toString(8)
    case 'decimal':
      return intValue.toString(10)
    case 'hexadecimal':
      return '0x' + intValue.toString(16).toUpperCase()
    default:
      return intValue.toString(10)
  }
}

// 解析函数
export function parseNumeral(value: string, unit: Unit): number {
  try {
    switch (unit.id) {
      case 'binary':
        return parseInt(value.replace(/^0b/, ''), 2)
      case 'octal':
        return parseInt(value.replace(/^0o/, ''), 8)
      case 'decimal':
        return parseInt(value, 10)
      case 'hexadecimal':
        return parseInt(value.replace(/^0x/i, ''), 16)
      default:
        return parseInt(value, 10)
    }
  } catch (err) {
    throw new Error('Invalid number format')
  }
}

// 验证函数
export function isValidNumeral(value: string, unit: Unit): boolean {
  try {
    switch (unit.id) {
      case 'binary':
        return /^(0b)?[01]+$/.test(value)
      case 'octal':
        return /^(0o)?[0-7]+$/.test(value)
      case 'decimal':
        return /^[0-9]+$/.test(value)
      case 'hexadecimal':
        return /^(0x)?[0-9A-Fa-f]+$/.test(value)
      default:
        return false
    }
  } catch (err) {
    return false
  }
} 
import type { NumeralConversionResult } from './types'
import numeral from './numeral'

// 字符集定义
const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'

/**
 * 将任意进制的字符串转换为十进制数值
 */
function toDecimal(value: string, fromBase: number): number {
  let result = 0
  const digits = value.split('')
  for (let i = 0; i < digits.length; i++) {
    const digit = DIGITS.indexOf(digits[i])
    if (digit >= fromBase) {
      throw new Error(`Invalid digit for base ${fromBase}: ${digits[i]}`)
    }
    result = result * fromBase + digit
  }
  return result
}

/**
 * 将十进制数值转换为指定进制的字符串
 */
function fromDecimal(value: number, toBase: number): string {
  if (value === 0) return '0'
  
  const isNegative = value < 0
  value = Math.abs(value)
  
  let result = ''
  while (value > 0) {
    const remainder = value % toBase
    result = DIGITS[remainder] + result
    value = Math.floor(value / toBase)
  }
  
  return isNegative ? '-' + result : result
}

/**
 * 进制转换函数
 */
export function convertNumeral(value: string, fromUnit: string, toUnit: string): NumeralConversionResult {
  // 获取源进制和目标进制
  const fromBase = numeral.units[fromUnit]?.base
  const toBase = numeral.units[toUnit]?.base
  
  if (!fromBase || !toBase) {
    throw new Error(`Invalid base system: ${!fromBase ? fromUnit : toUnit}`)
  }

  try {
    // 如果输入值是负数，需要特殊处理
    const isNegative = value.startsWith('-')
    const absValue = isNegative ? value.slice(1) : value

    // 先转换为十进制
    const decimal = parseInt(absValue, fromBase)
    if (isNaN(decimal)) {
      throw new Error(`Invalid value for base ${fromBase}: ${value}`)
    }
    
    // 再从十进制转换为目标进制
    let result = decimal.toString(toBase)

    // 对十六进制结果进行大写转换
    if (toBase === 16) {
      result = result.toUpperCase()
    }

    // 添加负号（如果原数是负数）
    result = isNegative ? '-' + result : result

    return {
      value: result,
      unit: toUnit
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Conversion failed: ${err.message}`)
    }
    throw new Error('Conversion failed: Unknown error')
  }
}

/**
 * 检查字符串是否是有效的进制表示
 */
export function isValidNumeralString(value: string, base: number): boolean {
  if (!value) return false
  
  // 处理负数
  if (value.startsWith('-')) {
    value = value.slice(1)
  }
  
  // 根据进制创建有效字符集
  const validChars = '0123456789ABCDEF'.slice(0, base)
  const pattern = new RegExp(`^[${validChars}]+$`, 'i')
  
  return pattern.test(value)
}

/**
 * 获取指定进制的最大值
 */
export function getMaxValue(base: number, digits: number): string {
  const chars = '0123456789ABCDEF'.slice(0, base)
  return chars[base - 1].repeat(digits)
}

/**
 * 获取指定进制的最小值
 */
export function getMinValue(base: number, digits: number): string {
  return '1' + '0'.repeat(digits - 1)
} 
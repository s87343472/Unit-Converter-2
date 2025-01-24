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
    throw new Error('Invalid base system')
  }

  try {
    // 如果输入值是负数，需要特殊处理
    const isNegative = value.startsWith('-')
    const absValue = isNegative ? value.slice(1) : value

    // 先转换为十进制
    const decimal = toDecimal(absValue, fromBase)
    
    // 再从十进制转换为目标进制
    const result = fromDecimal(isNegative ? -decimal : decimal, toBase)

    return {
      value: result,
      unit: toUnit,
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
  
  // 检查每个字符是否在有效范围内
  return value.split('').every(char => {
    const digit = DIGITS.indexOf(char)
    return digit >= 0 && digit < base
  })
}

/**
 * 获取指定进制的最大值
 */
export function getMaxValue(base: number, digits: number): string {
  let result = ''
  for (let i = 0; i < digits; i++) {
    result += DIGITS[base - 1]
  }
  return result
}

/**
 * 获取指定进制的最小值
 */
export function getMinValue(base: number, digits: number): string {
  return '1' + '0'.repeat(digits - 1)
} 
// 基准单位：米 (m)
const BASE_UNIT = 'meter'

// 转换系数（相对于米）
const CONVERSION_FACTORS: Record<string, number> = {
  meter: 1, // 米
  kilometer: 1000, // 千米
  centimeter: 0.01, // 厘米
  millimeter: 0.001, // 毫米
  inch: 0.0254, // 英寸
  foot: 0.3048, // 英尺
  yard: 0.9144, // 码
  mile: 1609.344 // 英里
}

// 将任意单位转换为基准单位（米）
function toBaseUnit(value: number, fromUnit: string): number {
  const factor = CONVERSION_FACTORS[fromUnit]
  if (factor === undefined) {
    throw new Error(`Unsupported unit: ${fromUnit}`)
  }
  return value * factor
}

// 从基准单位（米）转换为目标单位
function fromBaseUnit(value: number, toUnit: string): number {
  const factor = CONVERSION_FACTORS[toUnit]
  if (factor === undefined) {
    throw new Error(`Unsupported unit: ${toUnit}`)
  }
  return value / factor
}

// 在任意两个单位之间转换
export function convert(value: number, fromUnit: string, toUnit: string): number {
  // 先转换为基准单位
  const baseValue = toBaseUnit(value, fromUnit)
  // 再从基准单位转换为目标单位
  return fromBaseUnit(baseValue, toUnit)
}

// 获取支持的单位列表
export function getSupportedUnits(): string[] {
  return Object.keys(CONVERSION_FACTORS)
}

// 验证单位是否支持
export function isUnitSupported(unit: string): boolean {
  return unit in CONVERSION_FACTORS
}

// 格式化数字，处理精度问题
export function formatNumber(value: number): string {
  // 对于非常大或非常小的数字，使用科学计数法
  if (Math.abs(value) < 0.000001 || Math.abs(value) > 999999999999) {
    return value.toExponential(6)
  }
  
  // 对于普通数字，最多保留 6 位小数
  return value.toFixed(6).replace(/\.?0+$/, '')
} 
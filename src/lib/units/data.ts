import { Unit } from './length'

// 使用比特(bit)作为基准单位
export const dataUnits: Unit[] = [
  // 比特
  { id: 'bit', symbol: 'bit', ratio: 1 },
  { id: 'kilobit', symbol: 'kbit', ratio: 1e3 },
  { id: 'megabit', symbol: 'Mbit', ratio: 1e6 },
  { id: 'gigabit', symbol: 'Gbit', ratio: 1e9 },
  { id: 'terabit', symbol: 'Tbit', ratio: 1e12 },
  { id: 'petabit', symbol: 'Pbit', ratio: 1e15 },
  
  // 字节
  { id: 'byte', symbol: 'B', ratio: 8 },  // 1 byte = 8 bits
  { id: 'kilobyte', symbol: 'kB', ratio: 8e3 },
  { id: 'megabyte', symbol: 'MB', ratio: 8e6 },
  { id: 'gigabyte', symbol: 'GB', ratio: 8e9 },
  { id: 'terabyte', symbol: 'TB', ratio: 8e12 },
  { id: 'petabyte', symbol: 'PB', ratio: 8e15 },
  
  // 二进制前缀（IEC标准）
  { id: 'kibibit', symbol: 'Kibit', ratio: 1024 },
  { id: 'mebibit', symbol: 'Mibit', ratio: Math.pow(1024, 2) },
  { id: 'gibibit', symbol: 'Gibit', ratio: Math.pow(1024, 3) },
  { id: 'tebibit', symbol: 'Tibit', ratio: Math.pow(1024, 4) },
  { id: 'pebibit', symbol: 'Pibit', ratio: Math.pow(1024, 5) },
  
  { id: 'kibibyte', symbol: 'KiB', ratio: 8 * 1024 },
  { id: 'mebibyte', symbol: 'MiB', ratio: 8 * Math.pow(1024, 2) },
  { id: 'gibibyte', symbol: 'GiB', ratio: 8 * Math.pow(1024, 3) },
  { id: 'tebibyte', symbol: 'TiB', ratio: 8 * Math.pow(1024, 4) },
  { id: 'pebibyte', symbol: 'PiB', ratio: 8 * Math.pow(1024, 5) }
]

// 转换函数
export function convertData(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（比特），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
}

// 格式化函数
export function formatData(value: number): string {
  // 对于数据存储，我们通常只需要3位有效数字
  if (value >= 1e15) {
    return value.toExponential(2)
  }
  return value.toPrecision(3).replace(/\.?0+$/, '')
} 
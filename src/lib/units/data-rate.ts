import { Unit } from './length'

// 使用比特/秒(bps)作为基准单位
export const dataRateUnits: Unit[] = [
  // 比特每秒
  { id: 'bits_per_second', symbol: 'bps', ratio: 1 },
  { id: 'kilobits_per_second', symbol: 'kbps', ratio: 1e3 },
  { id: 'megabits_per_second', symbol: 'Mbps', ratio: 1e6 },
  { id: 'gigabits_per_second', symbol: 'Gbps', ratio: 1e9 },
  { id: 'terabits_per_second', symbol: 'Tbps', ratio: 1e12 },
  
  // 字节每秒
  { id: 'bytes_per_second', symbol: 'B/s', ratio: 8 },  // 1 byte = 8 bits
  { id: 'kilobytes_per_second', symbol: 'KB/s', ratio: 8e3 },
  { id: 'megabytes_per_second', symbol: 'MB/s', ratio: 8e6 },
  { id: 'gigabytes_per_second', symbol: 'GB/s', ratio: 8e9 },
  { id: 'terabytes_per_second', symbol: 'TB/s', ratio: 8e12 },
  
  // 二进制前缀（IEC标准）
  { id: 'kibibits_per_second', symbol: 'Kibps', ratio: 1024 },
  { id: 'mebibits_per_second', symbol: 'Mibps', ratio: Math.pow(1024, 2) },
  { id: 'gibibits_per_second', symbol: 'Gibps', ratio: Math.pow(1024, 3) },
  { id: 'tebibits_per_second', symbol: 'Tibps', ratio: Math.pow(1024, 4) },
  
  { id: 'kibibytes_per_second', symbol: 'KiB/s', ratio: 8 * 1024 },
  { id: 'mebibytes_per_second', symbol: 'MiB/s', ratio: 8 * Math.pow(1024, 2) },
  { id: 'gibibytes_per_second', symbol: 'GiB/s', ratio: 8 * Math.pow(1024, 3) },
  { id: 'tebibytes_per_second', symbol: 'TiB/s', ratio: 8 * Math.pow(1024, 4) }
]

// 转换函数
export function convertDataRate(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（比特/秒），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
}

// 格式化函数
export function formatDataRate(value: number): string {
  // 对于数据传输速率，我们通常只需要3位有效数字
  if (value >= 1e12) {
    return value.toExponential(2)
  }
  return value.toPrecision(3).replace(/\.?0+$/, '')
} 
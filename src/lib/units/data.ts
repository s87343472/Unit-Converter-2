import { Unit } from './length'

// Data unit conversion according to IEC 60027-2 standard
export const dataUnits: Unit[] = [
  // Decimal bit units (SI prefixes)
  { id: 'nanobit', symbol: 'nbit', ratio: 1e-9, category: 'metric' },
  { id: 'microbit', symbol: 'μbit', ratio: 1e-6, category: 'metric' },
  { id: 'millibit', symbol: 'mbit', ratio: 1e-3, category: 'metric' },
  { id: 'bit', symbol: 'bit', ratio: 1, category: 'metric' },
  { id: 'kilobit', symbol: 'kbit', ratio: 1e3, category: 'metric' },
  { id: 'megabit', symbol: 'Mbit', ratio: 1e6, category: 'metric' },
  { id: 'gigabit', symbol: 'Gbit', ratio: 1e9, category: 'metric' },
  { id: 'terabit', symbol: 'Tbit', ratio: 1e12, category: 'metric' },
  { id: 'petabit', symbol: 'Pbit', ratio: 1e15, category: 'metric' },
  { id: 'exabit', symbol: 'Ebit', ratio: 1e18, category: 'metric' },
  
  // Decimal byte units (SI prefixes)
  { id: 'byte', symbol: 'B', ratio: 8, category: 'metric' },  // 1 byte = 8 bits
  { id: 'kilobyte', symbol: 'kB', ratio: 8e3, category: 'metric' },
  { id: 'megabyte', symbol: 'MB', ratio: 8e6, category: 'metric' },
  { id: 'gigabyte', symbol: 'GB', ratio: 8e9, category: 'metric' },
  { id: 'terabyte', symbol: 'TB', ratio: 8e12, category: 'metric' },
  { id: 'petabyte', symbol: 'PB', ratio: 8e15, category: 'metric' },
  { id: 'exabyte', symbol: 'EB', ratio: 8e18, category: 'metric' },
  
  // Binary bit units (IEC prefixes)
  { id: 'kibibit', symbol: 'Kibit', ratio: Math.pow(2, 10), category: 'scientific' },
  { id: 'mebibit', symbol: 'Mibit', ratio: Math.pow(2, 20), category: 'scientific' },
  { id: 'gibibit', symbol: 'Gibit', ratio: Math.pow(2, 30), category: 'scientific' },
  { id: 'tebibit', symbol: 'Tibit', ratio: Math.pow(2, 40), category: 'scientific' },
  { id: 'pebibit', symbol: 'Pibit', ratio: Math.pow(2, 50), category: 'scientific' },
  { id: 'exbibit', symbol: 'Eibit', ratio: Math.pow(2, 60), category: 'scientific' },
  
  // Binary byte units (IEC prefixes)
  { id: 'kibibyte', symbol: 'KiB', ratio: 8 * Math.pow(2, 10), category: 'scientific' },
  { id: 'mebibyte', symbol: 'MiB', ratio: 8 * Math.pow(2, 20), category: 'scientific' },
  { id: 'gibibyte', symbol: 'GiB', ratio: 8 * Math.pow(2, 30), category: 'scientific' },
  { id: 'tebibyte', symbol: 'TiB', ratio: 8 * Math.pow(2, 40), category: 'scientific' },
  { id: 'pebibyte', symbol: 'PiB', ratio: 8 * Math.pow(2, 50), category: 'scientific' },
  { id: 'exbibyte', symbol: 'EiB', ratio: 8 * Math.pow(2, 60), category: 'scientific' }
]

// Knowledge points about data units
export const dataKnowledge = {
  title: 'Data Units Knowledge',
  items: [
    'A bit (b) is the basic unit of information in computing and digital communications.',
    'A byte (B) consists of 8 bits and can represent 256 different values.',
    'Decimal prefixes (k, M, G, T, P, E) use powers of 1000, while binary prefixes (Ki, Mi, Gi, Ti, Pi, Ei) use powers of 1024.',
    'Hard drive manufacturers typically use decimal prefixes (MB, GB, TB), while operating systems use binary prefixes (MiB, GiB, TiB).',
    'IEC 60027-2 standard recommends using binary prefixes (Ki, Mi, Gi, Ti, Pi, Ei) to avoid ambiguity in computing.'
  ]
}

// Conversion tips for data units
export const dataConversionTips = {
  title: 'Data Unit Conversion Tips',
  items: [
    'Storage Media:\n  - USB Flash Drive: 8-256 GB\n  - SSD: 256 GB-2 TB\n  - HDD: 1-18 TB\n  - Memory Card: 32 GB-1 TB',
    'File Sizes:\n  - Text Document: ~10 kB\n  - MP3 Song: 3-10 MB\n  - HD Movie: 4-8 GB\n  - 4K Movie: 50-100 GB',
    'Memory:\n  - Smartphone RAM: 4-12 GB\n  - Laptop RAM: 8-32 GB\n  - Gaming PC RAM: 16-128 GB\n  - Server RAM: 64 GB-2 TB',
    'Cloud Storage:\n  - Free Tier: 2-15 GB\n  - Personal: 100 GB-2 TB\n  - Business: 1-5 TB\n  - Enterprise: >1 PB'
  ]
}

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
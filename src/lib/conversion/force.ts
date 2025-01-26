import type { ConversionCategory } from './types'

// 使用牛顿(N)作为基准单位
const force: ConversionCategory = {
  id: 'force',
  baseUnit: 'metric_newton',
  units: {
    // 公制力单位
    metric_newton: {
      id: 'metric_newton',
      label: '牛顿 (公制)',
      symbol: 'N',
      ratio: 1,
    },
    metric_kilonewton: {
      id: 'metric_kilonewton',
      label: '千牛顿 (公制)',
      symbol: 'kN',
      ratio: 1000, // 1 kN = 1000 N
    },
    metric_meganewton: {
      id: 'metric_meganewton',
      label: '兆牛顿 (公制)',
      symbol: 'MN',
      ratio: 1000000, // 1 MN = 1,000,000 N
    },
    metric_giganewton: {
      id: 'metric_giganewton',
      label: '吉牛顿 (公制)',
      symbol: 'GN',
      ratio: 1000000000, // 1 GN = 1,000,000,000 N
    },
    
    // 重力单位
    gravity_kilogram_force: {
      id: 'gravity_kilogram_force',
      label: '千克力 (重力)',
      symbol: 'kgf',
      ratio: 9.80665, // 1 kgf = 9.80665 N（基于标准重力加速度）
    },
    gravity_gram_force: {
      id: 'gravity_gram_force',
      label: '克力 (重力)',
      symbol: 'gf',
      ratio: 0.00980665, // 1 gf = 0.00980665 N（基于标准重力加速度）
    },
    gravity_ton_force: {
      id: 'gravity_ton_force',
      label: '吨力 (重力)',
      symbol: 'tf',
      ratio: 9806.65, // 1 tf = 9806.65 N（基于标准重力加速度）
    },
    
    // 英制力单位
    imperial_pound_force: {
      id: 'imperial_pound_force',
      label: '磅力 (英制)',
      symbol: 'lbf',
      ratio: 4.4482216152605, // 1 lbf = 4.4482216152605 N（基于标准重力加速度）
    },
    imperial_ounce_force: {
      id: 'imperial_ounce_force',
      label: '盎司力 (英制)',
      symbol: 'ozf',
      ratio: 0.278013850953781, // 1 ozf = 0.278013850953781 N（1/16 lbf）
    },
    imperial_ton_force: {
      id: 'imperial_ton_force',
      label: '英吨力 (英制)',
      symbol: 'tnf',
      ratio: 9964.01616, // 1 tnf = 9964.01616 N（2240 lbf）
    },
    
    // 科学单位
    scientific_dyne: {
      id: 'scientific_dyne',
      label: '达因 (科学)',
      symbol: 'dyn',
      ratio: 0.00001, // 1 dyn = 0.00001 N（CGS单位制）
    },
    scientific_kilodyne: {
      id: 'scientific_kilodyne',
      label: '千达因 (科学)',
      symbol: 'kdyn',
      ratio: 0.01, // 1 kdyn = 0.01 N（1000 dyn）
    },
    scientific_megadyne: {
      id: 'scientific_megadyne',
      label: '兆达因 (科学)',
      symbol: 'Mdyn',
      ratio: 10, // 1 Mdyn = 10 N（1000000 dyn）
    }
  }
} as const

export default force 
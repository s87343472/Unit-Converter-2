import { Unit } from './length'

// 使用米/秒(m/s)作为基准单位
export const speedUnits: Unit[] = [
  { id: 'meter_per_second', symbol: 'm/s', ratio: 1 },
  { id: 'kilometer_per_hour', symbol: 'km/h', ratio: 1/3.6 },  // 1 km/h = 1000m/3600s = 1/3.6 m/s
  { id: 'mile_per_hour', symbol: 'mph', ratio: 0.44704 },  // 1 mph = 0.44704 m/s
  { id: 'foot_per_second', symbol: 'ft/s', ratio: 0.3048 },  // 1 ft/s = 0.3048 m/s
  { id: 'knot', symbol: 'kn', ratio: 0.514444 },  // 1 knot = 0.514444 m/s
  { id: 'mach', symbol: 'M', ratio: 340.3 },  // 1 Mach ≈ 340.3 m/s (at sea level, 15°C)
  { id: 'kilometer_per_second', symbol: 'km/s', ratio: 1000 },  // 1 km/s = 1000 m/s
  { id: 'light_speed', symbol: 'c', ratio: 299792458 }  // Speed of light in m/s
]

// 转换函数
export function convertSpeed(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（米/秒），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
} 
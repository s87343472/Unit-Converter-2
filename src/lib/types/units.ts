export type UnitType =
  | 'length'
  | 'area'
  | 'volume'
  | 'weight'
  | 'time'
  | 'temperature'
  | 'speed'
  | 'angle'
  | 'pressure'
  | 'power'
  | 'energy'
  | 'force'
  | 'density'
  | 'flow'
  | 'torque'
  | 'data'
  | 'data_rate'
  | 'currency'
  | 'cooking'
  | 'numeral'
  | 'frequency'

export interface UnitInfo {
  title: string
  description: string
  units: Record<string, string>
} 
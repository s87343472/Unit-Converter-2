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
  units?: {
    [key: string]: string
  }
  binary?: {
    title: string
    description: string
  }
  octal?: {
    title: string
    description: string
  }
  decimal?: {
    title: string
    description: string
  }
  hexadecimal?: {
    title: string
    description: string
  }
  knowledge?: {
    title: string
    items: string[]
  }
  conversion_tips?: {
    title: string
    items: string[]
  }
}

export interface UnitTranslation {
  [key: string]: UnitInfo
} 
import type { ConversionCategory } from './types'

import length from './length'
import area from './area'
import volume from './volume'
import weight from './weight'
import time from './time'
import temperature from './temperature'
import speed from './speed'
import angle from './angle'
import pressure from './pressure'
import power from './power'
import energy from './energy'
import force from './force'
import density from './density'
import flow from './flow'
import torque from './torque'
import data from './data'
import data_rate from './data_rate'
import currency from './currency'
import cooking from './cooking'
import numeral from './numeral'
import frequency from './frequency'

const conversions: Record<string, ConversionCategory> = {
  length,
  area,
  volume,
  weight,
  time,
  temperature,
  speed,
  angle,
  pressure,
  power,
  energy,
  force,
  density,
  flow,
  torque,
  data,
  data_rate: data_rate,
  currency,
  cooking,
  numeral,
  frequency,
}

export default conversions 
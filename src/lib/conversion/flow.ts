import type { ConversionCategory } from './types'

// 使用立方米每秒作为基准单位
const flow: ConversionCategory = {
  id: 'flow',
  baseUnit: 'cubic_meter_per_second',
  units: {
    cubic_meter_per_second: {
      id: 'cubic_meter_per_second',
      label: '立方米每秒 (公制)',
      symbol: 'm³/s',
      ratio: 1,
    },
    cubic_meter_per_hour: {
      id: 'cubic_meter_per_hour',
      label: '立方米每小时 (公制)',
      symbol: 'm³/h',
      ratio: 0.000277778,
    },
    liter_per_second: {
      id: 'liter_per_second',
      label: '升每秒 (公制)',
      symbol: 'L/s',
      ratio: 0.001,
    },
    liter_per_minute: {
      id: 'liter_per_minute',
      label: '升每分钟 (公制)',
      symbol: 'L/min',
      ratio: 0.0000166667,
    },
    liter_per_hour: {
      id: 'liter_per_hour',
      label: '升每小时 (公制)',
      symbol: 'L/h',
      ratio: 2.77778e-7,
    },
    gallon_per_minute_us: {
      id: 'gallon_per_minute_us',
      label: '加仑每分钟 (美制)',
      symbol: 'gal/min',
      ratio: 0.0000630902,
    },
    gallon_per_hour_us: {
      id: 'gallon_per_hour_us',
      label: '加仑每小时 (美制)',
      symbol: 'gal/h',
      ratio: 1.05151e-6,
    },
    gallon_per_minute_uk: {
      id: 'gallon_per_minute_uk',
      label: '加仑每分钟 (英制)',
      symbol: 'gal/min',
      ratio: 0.0000757682,
    },
    gallon_per_hour_uk: {
      id: 'gallon_per_hour_uk',
      label: '加仑每小时 (英制)',
      symbol: 'gal/h',
      ratio: 1.26282e-6,
    },
    cubic_foot_per_second: {
      id: 'cubic_foot_per_second',
      label: '立方英尺每秒 (英制)',
      symbol: 'ft³/s',
      ratio: 0.0283168,
    },
    cubic_foot_per_minute: {
      id: 'cubic_foot_per_minute',
      label: '立方英尺每分钟 (英制)',
      symbol: 'ft³/min',
      ratio: 0.000471947,
    },
    cubic_foot_per_hour: {
      id: 'cubic_foot_per_hour',
      label: '立方英尺每小时 (英制)',
      symbol: 'ft³/h',
      ratio: 7.86578e-6,
    },
    kilogram_per_second: {
      id: 'kilogram_per_second',
      label: '千克每秒 (质量)',
      symbol: 'kg/s',
      ratio: 0.001,
    },
    kilogram_per_hour: {
      id: 'kilogram_per_hour',
      label: '千克每小时 (质量)',
      symbol: 'kg/h',
      ratio: 2.77778e-7,
    },
    pound_per_second: {
      id: 'pound_per_second',
      label: '磅每秒 (质量)',
      symbol: 'lb/s',
      ratio: 0.000453592,
    },
    pound_per_hour: {
      id: 'pound_per_hour',
      label: '磅每小时 (质量)',
      symbol: 'lb/h',
      ratio: 1.25998e-7,
    },
  },
}

export default flow 
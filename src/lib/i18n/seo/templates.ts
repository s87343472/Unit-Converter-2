import { ValidLocale } from '../config'
import { UnitType } from '../units'
import { GenerateDescriptionParams, SEOTemplates } from './types'

const templates: Record<ValidLocale, SEOTemplates> = {
  'zh-CN': {
    title: {
      length: '{type}单位换算器 - {units}在线转换工具',
      area: '{type}单位换算器 - {units}在线转换',
      volume: '{type}单位换算器 - {units}快速换算',
      data: '{type}单位换算器 - {units}数据转换',
      time: '{type}单位换算器 - {units}时间转换',
      weight: '{type}单位换算器 - {units}重量转换',
      temperature: '{type}单位换算器 - {units}温度转换',
      speed: '{type}单位换算器 - {units}速度转换',
      angle: '{type}单位换算器 - {units}角度转换',
      pressure: '{type}单位换算器 - {units}压力转换',
      power: '{type}单位换算器 - {units}功率转换',
      energy: '{type}单位换算器 - {units}能量转换',
      force: '{type}单位换算器 - {units}力转换',
      density: '{type}单位换算器 - {units}密度转换',
      flow: '{type}单位换算器 - {units}流量转换',
      torque: '{type}单位换算器 - {units}扭矩转换',
      data_rate: '{type}单位换算器 - {units}数据速率转换',
      cooking: '{type}单位换算器 - {units}烹饪转换',
      numeral: '{type}单位换算器 - {units}数字转换',
      frequency: '{type}单位换算器 - {units}频率转换'
    },
    description: {
      length: '在线{type}单位换算工具。支持{units}等单位互换，适用于{useCases}。提供精确的换算结果！',
      area: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的面积计算！',
      volume: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的体积容量转换！',
      data: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的数据转换！',
      time: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的时间转换！',
      weight: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的重量转换！',
      temperature: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的温度转换！',
      speed: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的速度转换！',
      angle: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的角度转换！',
      pressure: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的压力转换！',
      power: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的功率转换！',
      energy: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的能量转换！',
      force: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的力转换！',
      density: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的密度转换！',
      flow: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的流量转换！',
      torque: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的扭矩转换！',
      data_rate: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的数据速率转换！',
      cooking: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的烹饪转换！',
      numeral: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的数字转换！',
      frequency: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的频率转换！'
    },
    keywords: {
      length: ['长度换算', '单位转换', '在线工具', '米', '厘米', '英寸'],
      area: ['面积换算', '单位转换', '在线工具', '平方米', '平方英尺'],
      volume: ['体积换算', '容量转换', '在线工具', '立方米', '升', '加仑'],
      data: ['数据换算', '单位转换', '在线工具', '字节', '千字节', '兆字节'],
      time: ['时间换算', '单位转换', '在线工具', '秒', '分钟', '小时'],
      weight: ['重量换算', '单位转换', '在线工具', '千克', '克', '磅'],
      temperature: ['温度换算', '单位转换', '在线工具', '摄氏度', '华氏度', '开尔文'],
      speed: ['速度换算', '单位转换', '在线工具', '米/秒', '千米/小时', '英里/小时'],
      angle: ['角度换算', '单位转换', '在线工具', '度', '弧度', '百分度'],
      pressure: ['压力换算', '单位转换', '在线工具', '帕斯卡', '巴', '磅/平方英寸'],
      power: ['功率换算', '单位转换', '在线工具', '瓦特', '千瓦', '马力'],
      energy: ['能量换算', '单位转换', '在线工具', '焦耳', '卡路里', '千瓦时'],
      force: ['力换算', '单位转换', '在线工具', '牛顿', '千克力', '磅力'],
      density: ['密度换算', '单位转换', '在线工具', '千克/立方米', '克/立方厘米'],
      flow: ['流量换算', '单位转换', '在线工具', '立方米/秒', '升/分钟'],
      torque: ['扭矩换算', '单位转换', '在线工具', '牛·米', '千克·米'],
      data_rate: ['数据速率换算', '单位转换', '在线工具', '比特/秒', '字节/秒'],
      cooking: ['烹饪换算', '单位转换', '在线工具', '杯', '勺', '毫升'],
      numeral: ['数字换算', '单位转换', '在线工具', '十进制', '二进制', '十六进制'],
      frequency: ['频率换算', '单位转换', '在线工具', '赫兹', '千赫', '兆赫']
    }
  },
  'en': {
    title: {
      length: '{type} Converter - Convert Between {units} Online',
      area: '{type} Unit Converter - Convert {units} Online',
      volume: '{type} Converter - Convert {units} Units Online',
      data: '{type} Unit Converter - Convert {units} Online',
      time: '{type} Converter - Convert {units} Units Online',
      weight: '{type} Unit Converter - Convert {units} Online',
      temperature: '{type} Converter - Convert {units} Units Online',
      speed: '{type} Unit Converter - Convert {units} Online',
      angle: '{type} Converter - Convert {units} Units Online',
      pressure: '{type} Unit Converter - Convert {units} Online',
      power: '{type} Converter - Convert {units} Units Online',
      energy: '{type} Unit Converter - Convert {units} Online',
      force: '{type} Converter - Convert {units} Units Online',
      density: '{type} Unit Converter - Convert {units} Online',
      flow: '{type} Converter - Convert {units} Units Online',
      torque: '{type} Unit Converter - Convert {units} Online',
      data_rate: '{type} Converter - Convert {units} Units Online',
      cooking: '{type} Converter - Convert {units} Units Online',
      numeral: '{type} Unit Converter - Convert {units} Online',
      frequency: '{type} Converter - Convert {units} Units Online'
    },
    description: {
      length: 'Free online {type} converter. Convert between {units}. Perfect for {useCases}. Fast and accurate conversion results!',
      area: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise calculations!',
      volume: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate volume conversions!',
      data: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise data conversions!',
      time: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate time conversions!',
      weight: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise weight conversions!',
      temperature: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate temperature conversions!',
      speed: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise speed conversions!',
      angle: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate angle conversions!',
      pressure: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise pressure conversions!',
      power: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate power conversions!',
      energy: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise energy conversions!',
      force: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate force conversions!',
      density: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise density conversions!',
      flow: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate flow conversions!',
      torque: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise torque conversions!',
      data_rate: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate data rate conversions!',
      cooking: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate cooking conversions!',
      numeral: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise numeral conversions!',
      frequency: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate frequency conversions!'
    },
    keywords: {
      length: ['length converter', 'unit conversion', 'online tool', 'meters', 'feet', 'inches'],
      area: ['area converter', 'unit conversion', 'online tool', 'square meters', 'square feet'],
      volume: ['volume converter', 'capacity converter', 'online tool', 'cubic meters', 'liters', 'gallons'],
      data: ['data converter', 'unit conversion', 'online tool', 'bytes', 'kilobytes', 'megabytes'],
      time: ['time converter', 'unit conversion', 'online tool', 'seconds', 'minutes', 'hours'],
      weight: ['weight converter', 'unit conversion', 'online tool', 'kilograms', 'grams', 'pounds'],
      temperature: ['temperature converter', 'unit conversion', 'online tool', 'celsius', 'fahrenheit', 'kelvin'],
      speed: ['speed converter', 'unit conversion', 'online tool', 'm/s', 'km/h', 'mph'],
      angle: ['angle converter', 'unit conversion', 'online tool', 'degrees', 'radians', 'grads'],
      pressure: ['pressure converter', 'unit conversion', 'online tool', 'pascal', 'bar', 'psi'],
      power: ['power converter', 'unit conversion', 'online tool', 'watts', 'kilowatts', 'horsepower'],
      energy: ['energy converter', 'unit conversion', 'online tool', 'joules', 'calories', 'kilowatt hours'],
      force: ['force converter', 'unit conversion', 'online tool', 'newtons', 'kilogram-force', 'pound-force'],
      density: ['density converter', 'unit conversion', 'online tool', 'kg/m³', 'g/cm³'],
      flow: ['flow converter', 'unit conversion', 'online tool', 'm³/s', 'l/min'],
      torque: ['torque converter', 'unit conversion', 'online tool', 'newton meters', 'kilogram meters'],
      data_rate: ['data rate converter', 'unit conversion', 'online tool', 'bits/s', 'bytes/s'],
      cooking: ['cooking converter', 'unit conversion', 'online tool', 'cups', 'spoons', 'milliliters'],
      numeral: ['numeral converter', 'unit conversion', 'online tool', 'decimal', 'binary', 'hexadecimal'],
      frequency: ['frequency converter', 'unit conversion', 'online tool', 'hertz', 'kilohertz', 'megahertz']
    }
  }
};

export const generateDescription = ({
  locale,
  type,
  unitExamples,
  usageCases
}: GenerateDescriptionParams): string => {
  const template = templates[locale]?.description?.[type] || templates['en'].description[type];
  return template
    .replace('{type}', type)
    .replace('{units}', unitExamples.join(', '))
    .replace('{useCases}', usageCases.join(', '));
};

export const getKeywords = (locale: ValidLocale, type: UnitType): string[] => {
  return templates[locale]?.keywords?.[type] || templates['en'].keywords[type];
};

export const generateTitle = (locale: ValidLocale, type: UnitType, units: string[]): string => {
  const template = templates[locale]?.title?.[type] || templates['en'].title[type];
  return template
    .replace('{type}', type)
    .replace('{units}', units.join(', '));
};

export default templates 
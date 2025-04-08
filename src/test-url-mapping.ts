import { UNIT_ID_MAP, UNIT_URL_MAP } from './lib/conversion/url-mapping'

// 测试URL路径参数到单位ID的映射
console.log('# 测试URL路径参数到单位ID的映射')

// 测试长度单位
const lengthTests = [
  { type: 'length', urlName: 'meter' },
  { type: 'length', urlName: 'kilometer' },
  { type: 'length', urlName: 'meter' },
  { type: 'length', urlName: 'inch' },
]

lengthTests.forEach(test => {
  const unitId = UNIT_ID_MAP[test.type]?.[test.urlName]
  console.log(`${test.type}/${test.urlName} => ${unitId || '未找到映射'}`)
})

// 测试各种语言的URL
const localeTests = [
  { locale: 'en', type: 'length', from: 'meter', to: 'kilometer' },
  { locale: 'zh-CN', type: 'length', from: 'meter', to: 'kilometer' },
  { locale: 'zh-TW', type: 'length', from: 'meter', to: 'kilometer' },
  { locale: 'ja', type: 'length', from: 'meter', to: 'kilometer' },
]

console.log('\n# 测试多语言URL路径')
localeTests.forEach(test => {
  const fromUnitId = UNIT_ID_MAP[test.type]?.[test.from]
  const toUnitId = UNIT_ID_MAP[test.type]?.[test.to]
  console.log(`${test.locale}/${test.type}/${test.from}-to-${test.to} => ${fromUnitId} 到 ${toUnitId}`)
})

// 测试反向映射 (单位ID到URL)
console.log('\n# 测试单位ID到URL路径参数的映射')
const unitIdTests = [
  { type: 'length', unitId: 'metric_meter' },
  { type: 'length', unitId: 'metric_kilometer' },
  { type: 'length', unitId: 'imperial_inch' },
  { type: 'weight', unitId: 'metric_kilogram' },
]

unitIdTests.forEach(test => {
  const urlName = UNIT_URL_MAP[test.type]?.[test.unitId]
  console.log(`${test.type}/${test.unitId} => ${urlName || '未找到映射'}`)
})

// 打印所有可用的映射
console.log('\n# 所有可用的单位类型')
Object.keys(UNIT_ID_MAP).forEach(type => {
  console.log(`- ${type}`)
})

// 检查长度单位的所有映射
console.log('\n# 长度单位映射')
console.log('URL到单位ID:')
Object.entries(UNIT_ID_MAP.length).forEach(([urlName, unitId]) => {
  console.log(`- ${urlName} => ${unitId}`)
})

console.log('\n单位ID到URL:')
Object.entries(UNIT_URL_MAP.length).forEach(([unitId, urlName]) => {
  console.log(`- ${unitId} => ${urlName}`)
}) 
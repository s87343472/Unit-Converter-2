import { NextResponse } from 'next/server'
import { UNIT_ID_MAP, UNIT_URL_MAP } from '@/lib/conversion/url-mapping'

export async function GET() {
  // 测试URL路径参数到单位ID的映射
  const lengthTests = [
    { type: 'length', urlName: 'meter' },
    { type: 'length', urlName: 'kilometer' },
    { type: 'length', urlName: 'inch' },
  ]

  const lengthResults = lengthTests.map(test => {
    const unitId = UNIT_ID_MAP[test.type]?.[test.urlName]
    return {
      path: `${test.type}/${test.urlName}`,
      unitId: unitId || '未找到映射'
    }
  })

  // 测试各种语言的URL
  const localeTests = [
    { locale: 'en', type: 'length', from: 'meter', to: 'kilometer' },
    { locale: 'zh-CN', type: 'length', from: 'meter', to: 'kilometer' },
    { locale: 'zh-TW', type: 'length', from: 'meter', to: 'kilometer' },
    { locale: 'ja', type: 'length', from: 'meter', to: 'kilometer' },
  ]

  const localeResults = localeTests.map(test => {
    const fromUnitId = UNIT_ID_MAP[test.type]?.[test.from]
    const toUnitId = UNIT_ID_MAP[test.type]?.[test.to]
    return {
      path: `${test.locale}/${test.type}/${test.from}-to-${test.to}`,
      fromUnitId: fromUnitId || '未找到映射',
      toUnitId: toUnitId || '未找到映射'
    }
  })

  // 测试反向映射 (单位ID到URL)
  const unitIdTests = [
    { type: 'length', unitId: 'metric_meter' },
    { type: 'length', unitId: 'metric_kilometer' },
    { type: 'length', unitId: 'imperial_inch' },
    { type: 'weight', unitId: 'metric_kilogram' },
  ]

  const unitIdResults = unitIdTests.map(test => {
    const urlName = UNIT_URL_MAP[test.type]?.[test.unitId]
    return {
      unitId: `${test.type}/${test.unitId}`,
      urlName: urlName || '未找到映射'
    }
  })

  // 获取所有单位类型
  const allTypes = Object.keys(UNIT_ID_MAP)

  // 获取长度单位的所有映射
  const lengthUrlToId = Object.entries(UNIT_ID_MAP.length).map(([urlName, unitId]) => ({
    urlName,
    unitId
  }))

  const lengthIdToUrl = Object.entries(UNIT_URL_MAP.length).map(([unitId, urlName]) => ({
    unitId,
    urlName
  }))

  return NextResponse.json({
    lengthTests: lengthResults,
    localeTests: localeResults,
    unitIdTests: unitIdResults,
    allTypes,
    lengthUrlToId,
    lengthIdToUrl
  })
} 
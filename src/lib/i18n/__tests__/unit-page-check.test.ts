import { translations } from '@/lib/i18n/translations'
import { locales } from '@/lib/i18n/config'
import type { UnitType } from '@/lib/i18n/units'

describe('单位转换页面完整性检查', () => {
  // 以中文为基准
  const zhUnits = translations.zh.units
  
  // 所有单位类型
  const unitTypes: UnitType[] = [
    'length',     // 长度
    'area',       // 面积
    'volume',     // 体积
    'weight',     // 重量
    'time',       // 时间
    'temperature',// 温度
    'speed',      // 速度
    'angle',      // 角度
    'pressure',   // 压力
    'power',      // 功率
    'energy',     // 能量
    'force',      // 力
    'density',    // 密度
    'flow',       // 流量
    'torque',     // 扭矩
    'data',       // 数据存储
    'data_rate',  // 数据传输率
    'currency',   // 货币
    'cooking',    // 烹饪
    'numeral',    // 进制
    'frequency'   // 频率
  ]
  
  const unitTypeNames: Record<UnitType, string> = {
    length: '长度',
    area: '面积',
    volume: '体积',
    weight: '重量',
    time: '时间',
    temperature: '温度',
    speed: '速度',
    angle: '角度',
    pressure: '压力',
    power: '功率',
    energy: '能量',
    force: '力',
    density: '密度',
    flow: '流量',
    torque: '扭矩',
    data: '数据存储',
    data_rate: '数据传输率',
    currency: '货币',
    cooking: '烹饪',
    numeral: '进制',
    frequency: '频率'
  }
  
  const checkUnitType = (unitType: UnitType) => {
    const description = unitTypeNames[unitType]
    describe(`${description}单位页面检查`, () => {
      test('页面基本信息', () => {
        console.log(`\n=== ${description}单位页面基准信息（中文）===`)
        console.log('标题:', zhUnits[unitType].title)
        console.log('描述:', zhUnits[unitType].description)
        console.log('可用单位数:', Object.keys(zhUnits[unitType].units || {}).length)
        console.log('知识点数:', zhUnits[unitType].knowledge?.items?.length || 0)
        
        // 输出所有可用单位
        console.log('\n可用单位:')
        Object.entries(zhUnits[unitType].units || {}).forEach(([key, value]) => {
          console.log(`- ${key}: ${value}`)
        })
        
        // 输出所有知识点
        console.log('\n知识点:')
        zhUnits[unitType].knowledge?.items?.forEach((point: string, index: number) => {
          console.log(`${index + 1}. ${point}`)
        })
      })

      locales.filter(locale => locale !== 'zh').forEach(locale => {
        describe(`${locale} 版本检查`, () => {
          const localeUnits = translations[locale].units[unitType]
          
          test('基本信息完整性', () => {
            console.log(`\n=== ${locale} 版本信息 ===`)
            console.log('标题:', localeUnits.title)
            console.log('描述:', localeUnits.description)
            
            // 检查单位数量
            const zhUnitCount = Object.keys(zhUnits[unitType].units || {}).length
            const localeUnitCount = Object.keys(localeUnits.units || {}).length
            console.log('单位数量:', `${localeUnitCount}/${zhUnitCount}`)
            
            // 检查知识点数量
            const zhKnowledgeCount = zhUnits[unitType].knowledge?.items?.length || 0
            const localeKnowledgeCount = localeUnits.knowledge?.items?.length || 0
            console.log('知识点数量:', `${localeKnowledgeCount}/${zhKnowledgeCount}`)
            
            // 检查缺失的单位
            const zhUnitKeys = Object.keys(zhUnits[unitType].units || {})
            const localeUnitKeys = Object.keys(localeUnits.units || {})
            const missingUnits = zhUnitKeys.filter(key => !localeUnitKeys.includes(key))
            if (missingUnits.length > 0) {
              console.log('\n缺失单位:', missingUnits)
            }
            
            // 检查多余的单位
            const extraUnits = localeUnitKeys.filter(key => !zhUnitKeys.includes(key))
            if (extraUnits.length > 0) {
              console.log('\n多余单位:', extraUnits)
            }
            
            // 输出该语言版本的所有单位
            console.log('\n该语言版本的单位:')
            Object.entries(localeUnits.units || {}).forEach(([key, value]) => {
              console.log(`- ${key}: ${value}`)
            })
            
            // 输出该语言版本的知识点
            console.log('\n该语言版本的知识点:')
            localeUnits.knowledge?.items?.forEach((point: string, index: number) => {
              console.log(`${index + 1}. ${point}`)
            })
          })
        })
      })
    })
  }
  
  // 检查所有单位类型
  unitTypes.forEach(unitType => {
    checkUnitType(unitType)
  })
}) 
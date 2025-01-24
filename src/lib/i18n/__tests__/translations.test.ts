import { translations } from '@/lib/i18n/translations'
import { locales } from '@/lib/i18n/config'
import type { UnitType } from '@/lib/i18n/units'

describe('翻译文件完整性测试', () => {
  // 获取中文版本的所有单位类型作为基准
  const zhUnitTypes = Object.keys(translations.zh.units) as UnitType[]
  
  describe('基本结构测试', () => {
    test('所有语言版本应该存在', () => {
      locales.forEach(locale => {
        expect(translations[locale]).toBeDefined()
        expect(translations[locale].units).toBeDefined()
      })
    })

    test('所有语言版本应该包含相同的单位类型', () => {
      locales.forEach(locale => {
        const localeUnitTypes = Object.keys(translations[locale].units) as UnitType[]
        expect(localeUnitTypes.sort()).toEqual(zhUnitTypes.sort())
      })
    })
  })

  describe('单位类型完整性测试', () => {
    zhUnitTypes.forEach(unitType => {
      describe(`${unitType} 单位测试`, () => {
        test('每种语言都应该有完整的单位定义', () => {
          const zhUnits = translations.zh.units[unitType].units ? 
            Object.keys(translations.zh.units[unitType].units) : []
          
          locales.forEach(locale => {
            const localeUnits = translations[locale].units[unitType].units ?
              Object.keys(translations[locale].units[unitType].units) : []
            expect(localeUnits.sort()).toEqual(zhUnits.sort())
          })
        })

        test('每种语言都应该有必要的字段', () => {
          locales.forEach(locale => {
            const unitTypeData = translations[locale].units[unitType]
            expect(unitTypeData.title).toBeDefined()
            expect(unitTypeData.description).toBeDefined()
            expect(unitTypeData.units).toBeDefined()
            expect(unitTypeData.knowledge).toBeDefined()
            expect(Array.isArray(unitTypeData.knowledge)).toBeTruthy()
          })
        })
      })
    })
  })

  describe('界面文本完整性测试', () => {
    test('common 字段应该完整', () => {
      const zhCommonKeys = translations.zh.common ? 
        Object.keys(translations.zh.common) : []
      
      locales.forEach(locale => {
        const localeCommonKeys = translations[locale].common ?
          Object.keys(translations[locale].common) : []
        expect(localeCommonKeys.sort()).toEqual(zhCommonKeys.sort())
      })
    })
  })
}) 
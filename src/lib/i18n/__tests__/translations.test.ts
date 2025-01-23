import { describe, expect, it } from 'vitest'
import zh from '../translations/zh'
import en from '../translations/en'
import de from '../translations/de'
import fr from '../translations/fr'
import ja from '../translations/ja'
import ru from '../translations/ru'
import es from '../translations/es'
import la from '../translations/la'
import type { UnitType } from '@/lib/i18n/units'
import type { Translation } from '@/lib/i18n/types'

const translations: Record<string, Translation> = {
  zh, en, de, fr, ja, ru, es, la
}

describe('翻译文件完整性测试', () => {
  const referenceTranslation = zh // 使用中文作为参考标准
  
  // 检查所有必需的顶级键
  const requiredTopLevelKeys = ['common', 'units', 'buttons', 'messages'] as const
  
  // 检查所有必需的单位类型
  const requiredUnitTypes = [
    'length', 'area', 'volume', 'weight', 'time', 'temperature',
    'speed', 'angle', 'pressure', 'power', 'energy', 'force',
    'density', 'flow', 'torque', 'data', 'data_rate', 'currency',
    'cooking', 'numeral'
  ] as const

  Object.entries(translations).forEach(([lang, translation]) => {
    describe(`${lang} 语言翻译`, () => {
      // 测试顶级键的完整性
      it('应包含所有必需的顶级键', () => {
        requiredTopLevelKeys.forEach(key => {
          expect(translation).toHaveProperty(key)
        })
      })

      // 测试单位类型的完整性
      it('应包含所有必需的单位类型', () => {
        requiredUnitTypes.forEach(type => {
          expect(translation.units).toHaveProperty(type)
        })
      })

      // 测试每个单位类型的必需字段
      it('每个单位类型应包含必需字段', () => {
        Object.entries(referenceTranslation.units).forEach(([type, refUnit]) => {
          const unit = translation.units[type as UnitType]
          expect(unit).toHaveProperty('title')
          expect(unit).toHaveProperty('description')
          if (refUnit.units) {
            expect(unit).toHaveProperty('units')
            expect(Object.keys(unit.units || {}).length).toBeGreaterThanOrEqual(
              Object.keys(refUnit.units || {}).length
            )
          }
          if (refUnit.knowledge) {
            expect(unit).toHaveProperty('knowledge')
            expect(unit.knowledge).toHaveProperty('title')
            expect(unit.knowledge).toHaveProperty('items')
            expect(unit.knowledge?.items.length).toBeGreaterThan(0)
          }
        })
      })

      // 测试common部分的完整性
      it('应包含所有common翻译', () => {
        const commonKeys = Object.keys(referenceTranslation.common)
        commonKeys.forEach(key => {
          expect(translation.common).toHaveProperty(key)
        })
      })
    })
  })
}) 
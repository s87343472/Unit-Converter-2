import { convert, formatNumber, getSupportedUnits, isUnitSupported } from '../area'

describe('面积单位转换', () => {
  test('基本转换', () => {
    // 1平方米 = 10000平方厘米
    expect(convert(1, 'square_meter', 'square_centimeter')).toBe(10000)
    // 1公顷 = 10000平方米
    expect(convert(1, 'hectare', 'square_meter')).toBe(10000)
    // 1平方千米 = 100公顷
    expect(convert(1, 'square_kilometer', 'hectare')).toBe(100)
  })

  test('精确转换', () => {
    // 1平方英尺 ≈ 0.092903平方米
    expect(convert(1, 'square_foot', 'square_meter')).toBeCloseTo(0.092903, 6)
    // 1英亩 ≈ 4046.86平方米
    expect(convert(1, 'acre', 'square_meter')).toBeCloseTo(4046.86, 2)
    // 1平方英里 ≈ 2.59平方千米
    expect(convert(1, 'square_mile', 'square_kilometer')).toBeCloseTo(2.59, 2)
  })

  test('大数值转换', () => {
    // 1000平方千米转换为平方米
    const result = convert(1000, 'square_kilometer', 'square_meter')
    expect(result).toBe(1000000000)
    // 格式化显示
    expect(formatNumber(result)).toBe('1e+9')
  })

  test('小数值转换', () => {
    // 0.0001平方米转换为平方毫米
    const result = convert(0.0001, 'square_meter', 'square_millimeter')
    expect(result).toBe(100)
    // 格式化显示
    expect(formatNumber(result)).toBe('100')
  })

  test('单位支持检查', () => {
    expect(isUnitSupported('square_meter')).toBe(true)
    expect(isUnitSupported('invalid_unit')).toBe(false)
    
    const supportedUnits = getSupportedUnits()
    expect(supportedUnits).toContain('hectare')
    expect(supportedUnits).toContain('acre')
  })

  test('错误处理', () => {
    expect(() => convert(1, 'invalid_unit', 'square_meter')).toThrow('Unsupported unit')
    expect(() => convert(1, 'square_meter', 'invalid_unit')).toThrow('Unsupported unit')
  })
}) 
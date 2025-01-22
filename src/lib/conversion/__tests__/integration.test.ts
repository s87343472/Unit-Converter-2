import { convert } from '../converter'

describe('Integration Tests', () => {
  describe('Conversion Flow', () => {
    test('should handle complete conversion flow', () => {
      // 1. 长度转换
      const lengthResult = convert('length', 100, 'meter', 'centimeter')
      expect(lengthResult.value).toBeCloseTo(10000, 4)
      expect(lengthResult.unit).toBe('centimeter')

      // 2. 使用上一步结果进行重量转换
      const weightResult = convert('weight', lengthResult.value, 'gram', 'kilogram')
      expect(weightResult.value).toBeCloseTo(10, 4)
      expect(weightResult.unit).toBe('kilogram')
    })

    test('should maintain precision across multiple conversions', () => {
      const result1 = convert('length', 1, 'meter', 'centimeter')
      const result2 = convert('length', result1.value, 'centimeter', 'millimeter')
      const result3 = convert('length', result2.value, 'millimeter', 'meter')
      expect(result3.value).toBeCloseTo(1, 10) // 验证多次转换后的精度
    })
  })

  describe('Input Validation', () => {
    test('should handle invalid numeric input', () => {
      expect(() => convert('length', NaN, 'meter', 'centimeter')).toThrow()
      expect(() => convert('length', Infinity, 'meter', 'centimeter')).toThrow()
      expect(() => convert('length', -Infinity, 'meter', 'centimeter')).toThrow()
    })

    test('should handle invalid unit types', () => {
      expect(() => convert('invalid_type' as any, 100, 'meter', 'centimeter')).toThrow()
      expect(() => convert('length', 100, 'invalid_unit', 'centimeter')).toThrow()
      expect(() => convert('length', 100, 'meter', 'invalid_unit')).toThrow()
    })

    test('should handle extreme values', () => {
      // 测试大数值
      expect(() => {
        convert('length', 1e+308, 'meter', 'centimeter')
      }).toThrow('Result too large: exceeds safe integer range')

      // 测试小数值
      expect(() => {
        convert('length', 1e-323, 'centimeter', 'meter')
      }).toThrow('Result too small: below minimum representable value')

      // 测试安全范围内的值
      const safeResult = convert('length', 1e+6, 'meter', 'centimeter')
      expect(isFinite(safeResult.value)).toBe(true)
    })
  })

  describe('Security Tests', () => {
    test('should sanitize input values', () => {
      const maliciousInput = '1e1000000' // 潜在的数值溢出攻击
      expect(() => convert('length', Number(maliciousInput), 'meter', 'centimeter')).toThrow()
    })

    test('should validate unit types strictly', () => {
      const maliciousType = 'length; DROP TABLE units;' // SQL注入类模拟
      expect(() => convert(maliciousType as any, 100, 'meter', 'centimeter')).toThrow()
    })

    test('should prevent prototype pollution', () => {
      const maliciousUnit = '__proto__' // 原型污染攻击
      expect(() => convert('length', 100, maliciousUnit as any, 'centimeter')).toThrow()
    })
  })

  describe('Performance Tests', () => {
    test('should handle rapid consecutive conversions', () => {
      const iterations = 1000
      const startTime = performance.now()
      
      for (let i = 0; i < iterations; i++) {
        convert('length', i + 1, 'meter', 'centimeter')
      }

      const endTime = performance.now()
      const averageTime = (endTime - startTime) / iterations
      
      expect(averageTime).toBeLessThan(1) // 每次转换应小于1ms
    })

    test('should handle concurrent conversions', async () => {
      const conversions = Array(100).fill(null).map((_, i) => 
        Promise.resolve(convert('length', i + 1, 'meter', 'centimeter'))
      )

      await expect(Promise.all(conversions)).resolves.not.toThrow()
    })
  })

  describe('Boundary Value Tests', () => {
    test('should handle zero values', () => {
      const result = convert('length', 0, 'meter', 'centimeter')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('centimeter')
    })

    test('should handle negative values', () => {
      const result = convert('temperature', -273.15, 'celsius', 'kelvin')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('kelvin')
    })

    test('should maintain decimal precision', () => {
      const result = convert('weight', 0.0001, 'kilogram', 'gram')
      expect(result.value).toBe(0.1)
      expect(result.unit).toBe('gram')
    })
  })

  describe('Error Recovery Tests', () => {
    test('should maintain consistent state after error', () => {
      // 首先执行一个正常的转换
      const validResult = convert('length', 100, 'meter', 'centimeter')
      expect(validResult.value).toBe(10000)

      // 尝试一个会失败的转换
      expect(() => convert('length', NaN, 'meter', 'centimeter')).toThrow()

      // 验证系统是否能继续正常工作
      const afterErrorResult = convert('length', 100, 'meter', 'centimeter')
      expect(afterErrorResult.value).toBe(10000)
    })

    test('should provide consistent error messages', () => {
      const errorMessages = new Set<string>()
      
      try {
        convert('length', NaN, 'meter', 'centimeter')
      } catch (e) {
        if (e instanceof Error) {
          errorMessages.add(e.message)
        }
      }

      try {
        convert('length', NaN, 'kilometer', 'mile')
      } catch (e) {
        if (e instanceof Error) {
          errorMessages.add(e.message)
        }
      }

      // 相同类型的错误应该有相同的错误消息
      expect(errorMessages.size).toBe(1)
    })
  })

  describe('Cross-System Conversion Tests', () => {
    test('should convert between metric and imperial', () => {
      // 米到英里
      const metersToMiles = convert('length', 1609.344, 'meter', 'mile')
      expect(metersToMiles.value).toBeCloseTo(1, 6)

      // 公斤到磅
      const kgToPounds = convert('weight', 1, 'kilogram', 'pound')
      expect(kgToPounds.value).toBeCloseTo(2.20462, 5)
    })

    test('should handle temperature scale conversions', () => {
      // 摄氏度到华氏度到开尔文的多步转换
      const celsiusToFahrenheit = convert('temperature', 100, 'celsius', 'fahrenheit')
      const fahrenheitToKelvin = convert('temperature', celsiusToFahrenheit.value, 'fahrenheit', 'kelvin')
      
      // 验证最终结果是否正确（100°C = 373.15K）
      expect(fahrenheitToKelvin.value).toBeCloseTo(373.15, 2)
    })

    test('should handle derived unit conversions', () => {
      // 速度转换（km/h 到 m/s）
      const speedResult = convert('speed', 36, 'kilometers_per_hour', 'meters_per_second')
      expect(speedResult.value).toBeCloseTo(10, 2)

      // 压力转换（psi 到 pascal）
      const pressureResult = convert('pressure', 14.7, 'psi', 'pascal')
      expect(pressureResult.value).toBeCloseTo(101325, -2)  // 允许百位数的误差
    })
  })
}) 
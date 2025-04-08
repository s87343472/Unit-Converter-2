import { NextResponse } from 'next/server';
import { getUnitConversionFactor } from '@/lib/conversion';
import { UNIT_ID_MAP } from '@/lib/conversion/url-mapping';
import { ConversionType } from '@/lib/conversion/types';

export async function GET() {
  const results = {
    conversions: [] as any[],
    mappings: {} as Record<string, any[]>,
  };

  // 测试不同类型的单位转换
  const testCases = [
    { type: 'length' as ConversionType, fromUnit: 'meter', toUnit: 'kilometer' },
    { type: 'length' as ConversionType, fromUnit: 'meter', toUnit: 'inch' },
    { type: 'weight' as ConversionType, fromUnit: 'kilogram', toUnit: 'pound' },
    { type: 'temperature' as ConversionType, fromUnit: 'celsius', toUnit: 'fahrenheit' },
  ];
  
  for (const { type, fromUnit, toUnit } of testCases) {
    try {
      // 获取单位ID
      const fromUnitId = UNIT_ID_MAP[type][fromUnit];
      const toUnitId = UNIT_ID_MAP[type][toUnit];
      
      if (!fromUnitId || !toUnitId) {
        results.conversions.push({
          type,
          fromUnit,
          toUnit,
          error: `单位映射错误: ${fromUnit}(${fromUnitId}) -> ${toUnit}(${toUnitId})`,
        });
        continue;
      }
      
      // 获取转换因子
      const factor = getUnitConversionFactor(type, fromUnitId, toUnitId);
      
      results.conversions.push({
        type,
        fromUnit,
        toUnit,
        fromUnitId,
        toUnitId,
        factor,
        example: `1 ${fromUnit} = ${factor} ${toUnit}`,
      });
    } catch (err: any) {
      results.conversions.push({
        type,
        fromUnit,
        toUnit,
        error: err.message,
      });
    }
  }

  // 测试URL参数到单位ID的映射
  for (const type of Object.keys(UNIT_ID_MAP)) {
    results.mappings[type] = [];
    
    // 输出URL参数到单位ID的映射
    const entries = Object.entries(UNIT_ID_MAP[type]);
    for (const [urlParam, unitId] of entries.slice(0, 5)) {
      results.mappings[type].push({
        urlParam,
        unitId,
      });
    }
  }

  return NextResponse.json(results);
} 
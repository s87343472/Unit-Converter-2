// 简单的测试脚本，验证单位转换功能
// 可以通过Node.js运行，如: node src/scripts/test-conversion.js

const { getUnitConversionFactor } = require('../lib/conversion');
const { UNIT_ID_MAP } = require('../lib/conversion/url-mapping');

// 测试不同类型的单位转换
function testConversions() {
  console.log('=== 测试单位转换功能 ===');
  
  const testCases = [
    { type: 'length', fromUnit: 'meter', toUnit: 'kilometer' },
    { type: 'length', fromUnit: 'meter', toUnit: 'inch' },
    { type: 'weight', fromUnit: 'kilogram', toUnit: 'pound' },
    { type: 'temperature', fromUnit: 'celsius', toUnit: 'fahrenheit' },
  ];
  
  testCases.forEach(({ type, fromUnit, toUnit }) => {
    try {
      // 获取单位ID
      const fromUnitId = UNIT_ID_MAP[type][fromUnit];
      const toUnitId = UNIT_ID_MAP[type][toUnit];
      
      if (!fromUnitId || !toUnitId) {
        console.error(`单位映射错误: ${type} ${fromUnit}(${fromUnitId}) -> ${toUnit}(${toUnitId})`);
        return;
      }
      
      // 获取转换因子
      const factor = getUnitConversionFactor(type, fromUnitId, toUnitId);
      
      console.log(`${type}: ${fromUnit}(${fromUnitId}) -> ${toUnit}(${toUnitId}) = 乘以 ${factor}`);
    } catch (err) {
      console.error(`测试失败 ${type} ${fromUnit} -> ${toUnit}: ${err.message}`);
    }
  });
}

// 测试URL参数到单位ID的映射
function testUrlMapping() {
  console.log('\n=== 测试URL参数到单位ID的映射 ===');
  
  // 遍历所有类型
  Object.keys(UNIT_ID_MAP).forEach(type => {
    console.log(`\n${type}单位映射:`);
    
    // 输出URL参数到单位ID的映射
    Object.entries(UNIT_ID_MAP[type]).slice(0, 5).forEach(([urlParam, unitId]) => {
      console.log(`  ${urlParam} -> ${unitId}`);
    });
  });
}

// 运行测试
testConversions();
testUrlMapping();

console.log('\n脚本执行完成。请检查结果是否符合预期。'); 
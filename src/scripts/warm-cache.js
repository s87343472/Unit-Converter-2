const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 基础URL - 更改为实际部署URL
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const TIMEOUT = 5000; // 请求超时时间（毫秒）
const REQUEST_DELAY = 1000; // 请求间隔（毫秒）

// 语言列表
const LOCALES = ['en', 'zh-CN', 'zh-TW', 'ja'];

// 从项目配置中导入热门转换组合
const { POPULAR_CONVERSIONS } = require('../../src/lib/seo/config');

// 从项目配置中导入单位映射
const { UNIT_ID_MAP } = require('../../src/lib/conversion/url-mapping');

// 记录预热进度的文件
const PROGRESS_FILE = path.join(__dirname, 'warm-cache-progress.json');

// 保存预热进度
function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  console.log(`进度已保存到 ${PROGRESS_FILE}`);
}

// 读取之前的预热进度
function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    } catch (e) {
      console.error('读取进度文件失败:', e);
    }
  }
  return { completed: [] };
}

// 生成所有可能的长度单位转换组合
function generateAllLengthConversions() {
  const lengthUnits = Object.keys(UNIT_ID_MAP.length);
  const combinations = [];
  
  for (let i = 0; i < lengthUnits.length; i++) {
    for (let j = 0; j < lengthUnits.length; j++) {
      // 跳过自己转自己
      if (i === j) continue;
      
      const fromUnit = lengthUnits[i];
      const toUnit = lengthUnits[j];
      
      combinations.push({
        type: 'length',
        fromUnit,
        toUnit
      });
    }
  }
  
  return combinations;
}

// 按批次进行预热
async function warmCacheInBatches() {
  // 读取之前的进度
  const progress = loadProgress();
  console.log(`已完成 ${progress.completed.length} 个页面`);
  
  const startTime = Date.now();
  console.log(`====== 开始预热 ISR 缓存，时间: ${new Date().toISOString()} ======`);
  console.log(`基础 URL: ${BASE_URL}`);
  
  // 首先预热热门转换组合
  console.log('预热热门转换组合...');
  await warmSpecificCombinations(POPULAR_CONVERSIONS, progress);
  
  // 然后预热所有长度单位转换
  console.log('预热所有长度单位转换...');
  const lengthCombinations = generateAllLengthConversions();
  await warmSpecificCombinations(lengthCombinations, progress);
  
  // 记录总耗时
  const totalTime = (Date.now() - startTime) / 1000;
  console.log(`====== 预热完成，总耗时: ${totalTime.toFixed(2)}秒 ======`);
  console.log(`总共预热页面数: ${progress.completed.length}`);
}

// 预热特定组合的页面
async function warmSpecificCombinations(combinations, progress) {
  let count = 0;
  let successCount = 0;
  
  for (const { type, fromUnit, toUnit } of combinations) {
    // 跳过已经处理过的组合
    const key = `${type}_${fromUnit}_${toUnit}`;
    if (progress.completed.includes(key)) {
      console.log(`跳过已完成: ${type}/${fromUnit}-to-${toUnit}`);
      continue;
    }
    
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}/${type}/${fromUnit}-to-${toUnit}`;
      count++;
      
      try {
        console.log(`(${count}) 预热: ${url}`);
        const response = await axios.get(url, { timeout: TIMEOUT });
        if (response.status === 200) {
          successCount++;
        }
        
        // 记录完成的组合
        if (!progress.completed.includes(key)) {
          progress.completed.push(key);
          // 每10个请求保存一次进度
          if (progress.completed.length % 10 === 0) {
            saveProgress(progress);
          }
        }
      } catch (error) {
        console.error(`访问 ${url} 失败:`, error.message);
      }
      
      // 添加延迟，避免请求过于频繁
      await new Promise(resolve => setTimeout(resolve, REQUEST_DELAY));
    }
  }
  
  // 保存最终进度
  saveProgress(progress);
  console.log(`本批次完成: 总共 ${count} 个请求，成功 ${successCount} 个`);
}

// 主函数
async function main() {
  try {
    await warmCacheInBatches();
  } catch (error) {
    console.error('预热过程中发生错误:', error);
  }
}

// 执行主函数
main(); 
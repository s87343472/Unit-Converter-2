#!/bin/bash

# 运行所有单位转换测试
echo "开始运行单位转换测试..."

# 数据传输率测试
echo "运行数据传输率测试..."
vitest run data_rate.test.ts

# 流量测试
echo "运行流量测试..."
vitest run flow.test.ts

# 频率测试
echo "运行频率测试..."
vitest run frequency.test.ts

# 长度测试
echo "运行长度测试..."
vitest run length.test.ts

# 能量测试
echo "运行能量测试..."
vitest run energy.test.ts

# 压力测试
echo "运行压力测试..."
vitest run pressure.test.ts

# 功率测试
echo "运行功率测试..."
vitest run power.test.ts

# 力测试
echo "运行力测试..."
vitest run force.test.ts

# 数据测试
echo "运行数据测试..."
vitest run data.test.ts

echo "所有测试完成！" 
# 单位命名规范

## 1. 基本原则

### 1.1 命名格式
- 使用小写字母
- 使用下划线连接单词
- 必须包含分类前缀
- 避免使用缩写（除非是广泛接受的缩写，如 km）

### 1.2 分类前缀
所有单位必须包含以下分类前缀之一：
- `metric_`: 公制单位（国际单位制）
- `imperial_`: 英制单位
- `us_`: 美制单位
- `scientific_`: 科学单位
- `traditional_`: 传统单位（包括各国传统计量单位）

### 1.3 Category 属性
每个单位必须指定以下 category 之一：
- `metric`: 公制单位
- `imperial`: 英制单位
- `us`: 美制单位
- `scientific`: 科学单位
- `traditional`: 传统单位

## 2. 单位类型规范

### 2.1 长度单位
- 公制：metric_kilometer, metric_meter, metric_centimeter 等
- 英制：imperial_mile, imperial_yard, imperial_foot 等
- 科学：scientific_light_year, scientific_parsec 等
- 传统：traditional_chi, traditional_cun（中国）等

### 2.2 面积单位
- 公制：metric_square_meter, metric_hectare 等
- 英制：imperial_square_mile, imperial_acre 等
- 传统：traditional_mu, traditional_qing（中国）等

### 2.3 体积单位
- 公制：metric_cubic_meter, metric_liter 等
- 英制：imperial_gallon, imperial_quart 等
- 美制：us_gallon, us_quart 等

### 2.4 重量单位
- 公制：metric_kilogram, metric_gram 等
- 英制：imperial_pound, imperial_ounce 等
- 传统：traditional_jin, traditional_liang（中国）等

## 3. 多语言支持

### 3.1 翻译键名
- 使用与单位 ID 相同的键名
- 示例：metric_kilometer 对应 translations['metric_kilometer']

### 3.2 显示名称
- 每个语言可以定制显示名称
- 保持单位分类信息：如"米（公制）"、"英寸（英制）"

### 3.3 知识点
- 按单位类型组织
- 包含单位起源、使用场景等信息
- 支持语言特定的补充知识

## 4. 代码实现

### 4.1 单位接口
```typescript
interface Unit {
  id: string                   // 单位标识符
  symbol: string               // 单位符号
  ratio: number               // 相对于基准单位的转换比率
  category: UnitCategory      // 单位分类
}

type UnitCategory = 'metric' | 'imperial' | 'us' | 'scientific' | 'traditional'
```

### 4.2 组织结构
- 按单位类型分文件
- 单位定义按分类分组
- 包含完整的类型注释

## 5. 维护指南

### 5.1 添加新单位
1. 确定适当的分类前缀
2. 遵循命名规范创建 ID
3. 添加到相应的单位类型文件
4. 更新所有语言的翻译
5. 添加相关知识点

### 5.2 修改现有单位
1. 保持 ID 的向后兼容
2. 更新所有相关文件
3. 记录在 CHANGELOG.md 中

### 5.3 代码审查清单
- [ ] 命名符合规范
- [ ] 分类正确
- [ ] 转换比率准确
- [ ] 所有语言翻译完整
- [ ] 知识点相关性 
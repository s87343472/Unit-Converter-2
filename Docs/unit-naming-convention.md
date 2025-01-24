# 单位命名规范

## 1. 基本原则

### 1.1 命名格式
- 使用小写字母和下划线
- 采用 `{category_prefix}_{unit_name}` 格式
- 必须包含分类前缀
- 避免使用缩写（除非是广泛接受的缩写，如 km、cm 等）

### 1.2 分类前缀
所有单位必须包含以下分类前缀之一：
- `metric_`: 公制单位（国际单位制）
- `imperial_`: 英制单位
- `us_`: 美制单位
- `scientific_`: 科学单位（如开尔文、光年等）
- `astronomical_`: 天文单位（如光年、天文单位等）
- `nautical_`: 航海单位（如海里、英寻等）
- `traditional_`: 传统单位（包括各国传统计量单位）
- `industrial_`: 工业单位（如燃气标记等）
- `historical_`: 历史单位（如列氏度等）

### 1.3 单位属性
每个单位必须包含以下属性：
```typescript
interface Unit {
  id: string;              // 单位标识符，如 metric_meter
  label: string;           // 显示名称，如 "米 (公制)"
  symbol: string;          // 单位符号，如 "m"
  ratio?: number;          // 相对于基准单位的转换比率
  toBase?: (value: number) => number;    // 自定义转换到基准单位的函数
  fromBase?: (value: number) => number;  // 自定义从基准单位转换的函数
}
```

## 2. 单位类型规范

### 2.1 长度单位
- 公制：`metric_meter`, `metric_kilometer`, `metric_centimeter` 等
- 英制：`imperial_mile`, `imperial_yard`, `imperial_foot` 等
- 天文：`astronomical_light_year`, `astronomical_parsec` 等
- 航海：`nautical_mile`, `nautical_fathom` 等
- 测量：`surveying_chain`, `surveying_rod` 等

### 2.2 重量单位
- 公制：`metric_kilogram`, `metric_gram`, `metric_milligram` 等
- 英制：`imperial_pound`, `imperial_ounce`, `imperial_stone` 等
- 美制：`us_short_ton`, `us_hundredweight` 等
- 特殊：`troy_ounce` (贵金属), `metric_carat` (珠宝) 等

### 2.3 体积单位
- 公制：`metric_cubic_meter`, `metric_liter`, `metric_milliliter` 等
- 英制：`imperial_gallon`, `imperial_quart`, `imperial_pint` 等
- 美制：`us_gallon`, `us_quart`, `us_fluid_ounce` 等

### 2.4 温度单位
- 公制：`metric_celsius`, `metric_kelvin` 等
- 美制：`us_fahrenheit` 等
- 科学：`scientific_rankine` 等
- 历史：`historical_reaumur` 等
- 工业：`industrial_gas_mark` 等

### 2.5 压力单位
- 公制：`metric_pascal`, `metric_kilopascal`, `metric_megapascal` 等
- 工业：`industrial_bar`, `industrial_millibar` 等
- 科学：`scientific_atmosphere`, `scientific_torr` 等
- 医学：`medical_millimeter_of_mercury` 等
- 英制：`imperial_pound_per_square_inch`, `imperial_pound_per_square_foot` 等
- 工程：`engineering_kilopound_per_square_inch`, `engineering_centimeter_of_water` 等

### 2.6 能量单位
- 公制：`metric_joule`, `metric_kilojoule`, `metric_megajoule` 等
- 热量：`thermal_calorie`, `thermal_kilocalorie`, `thermal_british_thermal_unit` 等
- 电能：`electric_watt_hour`, `electric_kilowatt_hour`, `electric_megawatt_hour` 等
- 科学：`scientific_electron_volt`, `scientific_kilo_electron_volt` 等
- 机械：`mechanical_foot_pound`, `mechanical_kilogram_force_meter` 等

### 2.7 功率单位
- 公制：`metric_watt`, `metric_kilowatt`, `metric_megawatt`, `metric_gigawatt` 等
- 机械：`mechanical_horsepower`, `mechanical_metric_horsepower` 等
- 热力：`thermal_kilocalorie_per_hour`, `thermal_british_thermal_unit_per_hour` 等
- 辐射：`radiation_erg_per_second`, `radiation_solar_luminosity` 等

### 2.8 速度单位
- 公制：`metric_meter_per_second`, `metric_kilometer_per_hour` 等
- 航空：`aviation_knot`, `aviation_mach` 等
- 英制：`imperial_mile_per_hour`, `imperial_foot_per_second` 等
- 天文：`astronomical_light_speed`, `astronomical_parsec_per_year` 等
- 科学：`scientific_speed_of_sound_air`, `scientific_speed_of_sound_water` 等

### 2.9 流量单位
- 公制：`metric_cubic_meter_per_second`, `metric_liter_per_second` 等
- 英制：`imperial_cubic_foot_per_second`, `imperial_cubic_foot_per_minute` 等
- 美制：`us_gallon_per_minute`, `us_million_gallon_per_day` 等
- 工业：`industrial_barrel_per_day`, `industrial_barrel_per_hour` 等
- 质量：`mass_kilogram_per_second`, `mass_pound_per_second` 等

## 3. 转换规范

### 3.1 基准单位
每种单位类型必须指定一个基准单位：
- 长度：米 (`metric_meter`)
- 重量：千克 (`metric_kilogram`)
- 体积：立方米 (`metric_cubic_meter`)
- 温度：摄氏度 (`metric_celsius`)
- 压力：帕斯卡 (`metric_pascal`)
- 能量：焦耳 (`metric_joule`)
- 功率：瓦特 (`metric_watt`)
- 速度：米每秒 (`metric_meter_per_second`)
- 流量：立方米每秒 (`metric_cubic_meter_per_second`)

### 3.2 转换方式
1. 简单比例转换：使用 `ratio` 属性
```typescript
{
  id: 'metric_kilometer',
  ratio: 1000, // 1 km = 1000 m
}
```

2. 复杂转换：使用 `toBase` 和 `fromBase` 函数
```typescript
{
  id: 'us_fahrenheit',
  toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9,
  fromBase: (celsius: number) => celsius * 9/5 + 32,
}
```

## 4. 测试规范

### 4.1 测试分类
每个单位类型的测试应包含以下类别：
1. 基本单位转换测试
2. 跨类型转换测试
3. 边界值测试
4. 精度控制测试

### 4.2 测试用例规范
```typescript
describe('Unit Type Conversion', () => {
  // 基本单位转换测试
  describe('Basic Unit Conversions', () => {
    test('base_unit to derived_unit', () => {
      const result = convert('category', value, 'from_unit', 'to_unit')
      expect(result.value).toBeCloseTo(expected, precision)
      expect(result.unit).toBe('to_unit')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('unit_type_1 to unit_type_2', () => {
      const result = convert('category', value, 'from_unit', 'to_unit')
      expect(result.value).toBeCloseTo(expected, precision)
      expect(result.unit).toBe('to_unit')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('category', 0, 'from_unit', 'to_unit')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('to_unit')
    })

    test('very small value conversion', () => {
      const result = convert('category', 1e-10, 'from_unit', 'to_unit')
      expect(result.value).toBeCloseTo(expected, precision)
      expect(result.unit).toBe('to_unit')
    })

    test('very large value conversion', () => {
      const result = convert('category', 1e10, 'from_unit', 'to_unit')
      expect(result.value).toBeCloseTo(expected, precision)
      expect(result.unit).toBe('to_unit')
    })
  })
})
```

### 4.3 精度控制
- 使用 `toBeCloseTo` 进行浮点数比较
- 根据单位类型设置适当的精度参数
- 对于整数结果使用 `toBe`
- 科学计数法表示的大数和小数需要特别注意精度

## 5. 维护指南

### 5.1 添加新单位
1. 确定适当的分类前缀
2. 创建符合命名规范的ID
3. 提供必要的单位属性
4. 添加单位转换逻辑
5. 更新测试用例
6. 添加多语言支持

### 5.2 修改现有单位
1. 保持ID的向后兼容性
2. 更新相关的测试用例
3. 同步更新多语言文件
4. 记录在CHANGELOG.md中

### 5.3 代码审查清单
- [ ] 命名符合规范
- [ ] 分类前缀正确
- [ ] 单位属性完整
- [ ] 转换逻辑准确
- [ ] 测试用例完备
- [ ] 多语言支持完整
- [ ] 文档更新完整
- [ ] 边界值测试完整
- [ ] 精度控制合理
- [ ] 注释清晰完整

## 6. 示例实现

### 6.1 长度单位示例
```typescript
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'metric_meter',
  units: {
    metric_meter: {
      id: 'metric_meter',
      label: '米 (公制)',
      symbol: 'm',
      ratio: 1,
    },
    imperial_foot: {
      id: 'imperial_foot',
      label: '英尺 (英制)',
      symbol: 'ft',
      ratio: 0.3048,
    },
  },
}
```

### 6.2 温度单位示例
```typescript
const temperature: ConversionCategory = {
  id: 'temperature',
  baseUnit: 'metric_celsius',
  units: {
    metric_celsius: {
      id: 'metric_celsius',
      label: '摄氏度 (公制)',
      symbol: '°C',
      ratio: 1,
    },
    us_fahrenheit: {
      id: 'us_fahrenheit',
      label: '华氏度 (美制)',
      symbol: '°F',
      toBase: (fahrenheit: number) => (fahrenheit - 32) * 5/9,
      fromBase: (celsius: number) => celsius * 9/5 + 32,
    },
  },
}
``` 
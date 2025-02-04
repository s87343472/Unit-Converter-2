
# 单位命名规范 v1.1

## 1. 基本原则

### 1.1 命名格式

*   使用小写字母和下划线。
*   采用 `{system}_{unit}` 格式。
*   必须包含系统前缀。
*   避免使用缩写（除非是广泛接受的缩写，如 km、cm 等）。
*   复合单位使用 `_per_` 连接（如 `meter_per_second`）。

### 1.2 系统前缀

所有单位必须包含以下系统前缀之一：

**基础计量系统：**

*   `metric_`: 公制单位（国际单位制，全球通用）
*   `imperial_`: 英制单位（英国计量体系）
*   `us_`: 美制单位（美国计量体系）

**传统计量系统：**

*   `chinese_`: 中国传统单位
*   `japanese_`: 日本传统单位
*   `korean_`: 韩国传统单位

**专业领域：**

*   `scientific_`: 科学单位（如开尔文、电子伏特等）
*   `astronomical_`: 天文单位（如光年、天文单位等）
*   `nautical_`: 航海单位（如海里、英寻等）
*   `medical_`: 医疗单位（如药用盎司等）
*   `industrial_`: 工业单位（如标准大气压、磅力/平方英寸等）
*   `fiat_`: 法定货币单位（如美元、欧元等）
*   `crypto_`: 加密货币单位（如比特币、以太币等）

**数据单位特殊前缀：**

*   `decimal_`: 十进制数据单位（如 KB、MB、GB）
*   `binary_`: 二进制数据单位（如 KiB、MiB、GiB）

### 1.3 单位属性

每个单位必须包含以下属性：

```typescript
interface Unit {
  id: string; // 单位标识符，如 metric_meter
  label: Record<string, string>; // 多语言显示名称
  symbol: string; // 单位符号，如 "m"
  ratio: number; // 相对于基准单位的转换比率
  category: string; // 单位分类
  system: string; // 计量系统
  precision?: number; // 建议的显示精度
  preferred_locales?: string[]; // 偏好显示的语言环境
  toBase?: (value: number) => number; // 自定义转换到基准单位的函数
  fromBase?: (value: number) => number; // 自定义从基准单位转换的函数
  knowledge?: Record<string, string>; // 多语言知识点说明
}
```

### 1.4 多语言显示策略

```typescript
// 单位显示优先级配置
const localeUnitPreferences = {
  'zh-CN': ['metric_', 'chinese_'],
  'zh-TW': ['metric_', 'chinese_'],
  'en-US': ['us_', 'metric_'],
  'en-GB': ['imperial_', 'metric_'],
  'ja-JP': ['metric_', 'japanese_'],
  'ko-KR': ['metric_', 'korean_'],
  'de-DE': ['metric_'],
  'fr-FR': ['metric_'],
  'es-ES': ['metric_'],
  'ru-RU': ['metric_']
};
```

## 2. 单位类型规范

### 2.1 长度单位

基准单位：米 (`metric_meter`)

#### 单位列表

*   **公制单位**
    *   `metric_meter`: 米
    *   `metric_kilometer`: 千米
    *   `metric_centimeter`: 厘米
    *   `metric_millimeter`: 毫米
    *   `metric_micrometer`: 微米
    *   `metric_nanometer`: 纳米
*   **英制单位**
    *   `imperial_mile`: 英里
    *   `imperial_yard`: 码
    *   `imperial_foot`: 英尺
    *   `imperial_inch`: 英寸
*   **美制单位**
    *   `us_mile`: 英里
    *   `us_yard`: 码
    *   `us_foot`: 英尺
    *   `us_inch`: 英寸
*   **中国传统单位**
    *   `chinese_li`: 里
    *   `chinese_zhang`: 丈
    *   `chinese_chi`: 尺
    *   `chinese_cun`: 寸
*   **天文单位**
    *   `astronomical_light_year`: 光年
    *   `astronomical_astronomical_unit`: 天文单位
    *   `astronomical_parsec`: 秒差距
*   **航海单位**
    *   `nautical_mile`: 海里
    *   `nautical_fathom`: 英寻

#### 实现

```typescript
const lengthUnits = {
  // 公制单位
  metric_meter: {
    id: 'metric_meter',
    label: {
      'zh-CN': '米',
      'en-US': 'meter',
      'ja-JP': 'メートル',
      'de-DE': 'Meter'
    },
    symbol: 'm',
    ratio: 1,
    category: 'length',
    system: 'metric',
    knowledge: {
      'zh-CN': '米是国际单位制的基本长度单位，定义为光在真空中在1/299792458秒内传播的距离。',
      'en-US': 'The meter is the base unit of length in SI, defined as the length of the path travelled by light in a vacuum in 1/299792458 of a second.'
    }
  },
  metric_kilometer: {
    id: 'metric_kilometer',
    label: {
      'zh-CN': '千米',
      'en-US': 'kilometer',
      'ja-JP': 'キロメートル',
      'de-DE': 'Kilometer'
    },
    symbol: 'km',
    ratio: 1000,
    category: 'length',
    system: 'metric'
  },
  metric_centimeter: {
    id: 'metric_centimeter',
    label: {
      'zh-CN': '厘米',
      'en-US': 'centimeter',
      'ja-JP': 'センチメートル',
      'de-DE': 'Zentimeter'
    },
    symbol: 'cm',
    ratio: 0.01,
    category: 'length',
    system: 'metric'
  },
  metric_millimeter: {
    id: 'metric_millimeter',
    label: {
      'zh-CN': '毫米',
      'en-US': 'millimeter',
      'ja-JP': 'ミリメートル',
      'de-DE': 'Millimeter'
    },
    symbol: 'mm',
    ratio: 0.001,
    category: 'length',
    system: 'metric'
  },
  metric_micrometer: {
    id: 'metric_micrometer',
    label: {
      'zh-CN': '微米',
      'en-US': 'micrometer',
      'ja-JP': 'マイクロメートル',
      'de-DE': 'Mikrometer'
    },
    symbol: 'µm',
    ratio: 0.000001,
    category: 'length',
    system: 'metric'
  },
  metric_nanometer: {
    id: 'metric_nanometer',
    label: {
      'zh-CN': '纳米',
      'en-US': 'nanometer',
      'ja-JP': 'ナノメートル',
      'de-DE': 'Nanometer'
    },
    symbol: 'nm',
    ratio: 0.000000001,
    category: 'length',
    system: 'metric'
  },
  // 英制单位
  imperial_foot: {
    id: 'imperial_foot',
    label: {
      'zh-CN': '英尺',
      'en-US': 'foot',
      'ja-JP': 'フィート',
      'de-DE': 'Fuß'
    },
    symbol: 'ft',
    ratio: 0.3048,
    category: 'length',
    system: 'imperial',
    knowledge: {
      'zh-CN': '英尺是英制单位中的基本长度单位之一，等于12英寸或0.3048米。',
      'en-US': 'The foot is a unit of length in the imperial system, equal to 12 inches or 0.3048 meters.'
    }
  },
  imperial_inch: {
    id: 'imperial_inch',
    label: {
      'zh-CN': '英寸',
      'en-US': 'inch',
      'ja-JP': 'インチ',
      'de-DE': 'Zoll'
    },
    symbol: 'in',
    ratio: 0.0254,
    category: 'length',
    system: 'imperial'
  },
  imperial_mile: {
    id: 'imperial_mile',
    label: {
      'zh-CN': '英里',
      'en-US': 'mile',
      'ja-JP': 'マイル',
      'de-DE': 'Meile'
    },
    symbol: 'mi',
    ratio: 1609.344,
    category: 'length',
    system: 'imperial'
  },
  imperial_yard: {
    id: 'imperial_yard',
    label: {
      'zh-CN': '码',
      'en-US': 'yard',
      'ja-JP': 'ヤード',
      'de-DE': 'Yard'
    },
    symbol: 'yd',
    ratio: 0.9144,
    category: 'length',
    system: 'imperial'
  },
  // 美制单位
  us_foot: {
    id: 'us_foot',
    label: {
      'zh-CN': '英尺',
      'en-US': 'foot',
      'ja-JP': 'フィート',
      'de-DE': 'Fuß'
    },
    symbol: 'ft',
    ratio: 0.3048,
    category: 'length',
    system: 'us',
    knowledge: {
      'zh-CN': '美制英尺与英制英尺长度相同，均为0.3048米。',
      'en-US': 'The US foot is equal in length to the imperial foot, both being 0.3048 meters.'
    }
  },
  us_inch: {
    id: 'us_inch',
    label: {
      'zh-CN': '英寸',
      'en-US': 'inch',
      'ja-JP': 'インチ',
      'de-DE': 'Zoll'
    },
    symbol: 'in',
    ratio: 0.0254,
    category: 'length',
    system: 'us'
  },
  us_mile: {
    id: 'us_mile',
    label: {
      'zh-CN': '英里',
      'en-US': 'mile',
      'ja-JP': 'マイル',
      'de-DE': 'Meile'
    },
    symbol: 'mi',
    ratio: 1609.344,
    category: 'length',
    system: 'us'
  },
  us_yard: {
    id: 'us_yard',
    label: {
      'zh-CN': '码',
      'en-US': 'yard',
      'ja-JP': 'ヤード',
      'de-DE': 'Yard'
    },
    symbol: 'yd',
    ratio: 0.9144,
    category: 'length',
    system: 'us'
  },
  // 中国传统单位
  chinese_li: {
    id: 'chinese_li',
    label: {
      'zh-CN': '里',
      'en-US': 'li',
      'ja-JP': '里',
      'de-DE': 'Li'
    },
    symbol: '里',
    ratio: 500,
    category: 'length',
    system: 'chinese',
    knowledge: {
      'zh-CN': '里是中国传统长度单位，现代市制里等于500米。',
      'en-US': 'The li is a traditional Chinese unit of length, equal to 500 meters in modern usage.'
    }
  },
  chinese_zhang: {
    id: 'chinese_zhang',
    label: {
      'zh-CN': '丈',
      'en-US': 'zhang',
      'ja-JP': '丈',
      'de-DE': 'Zhang'
    },
    symbol: '丈',
    ratio: 3.333,
    category: 'length',
    system: 'chinese'
  },
  chinese_chi: {
    id: 'chinese_chi',
    label: {
      'zh-CN': '尺',
      'en-US': 'chi',
      'ja-JP': '尺',
      'de-DE': 'Chi'
    },
    symbol: '尺',
    ratio: 0.3333,
    category: 'length',
    system: 'chinese'
  },
  chinese_cun: {
    id: 'chinese_cun',
    label: {
      'zh-CN': '寸',
      'en-US': 'cun',
      'ja-JP': '寸',
      'de-DE': 'Cun'
    },
    symbol: '寸',
    ratio: 0.03333,
    category: 'length',
    system: 'chinese'
  },
  // 天文单位
  astronomical_light_year: {
    id: 'astronomical_light_year',
    label: {
      'zh-CN': '光年',
      'en-US': 'light-year',
      'ja-JP': '光年',
      'de-DE': 'Lichtjahr'
    },
    symbol: 'ly',
    ratio: 9.4607304725808e15,
    category: 'length',
    system: 'astronomical',
    knowledge: {
      'zh-CN': '光年是天文距离单位，指光在真空中一年时间内传播的距离，约等于9.46万亿千米。',
      'en-US': 'A light-year is an astronomical unit of distance, equal to the distance that light travels in a vacuum in one year, approximately 9.46 trillion kilometers.'
    }
  },
  astronomical_astronomical_unit: {
    id: 'astronomical_astronomical_unit',
    label: {
      'zh-CN': '天文单位',
      'en-US': 'astronomical unit',
      'ja-JP': '天文単位',
      'de-DE': 'Astronomische Einheit'
    },
    symbol: 'AU',
    ratio: 1.495978707e11,
    category: 'length',
    system: 'astronomical',
    knowledge: {
      'zh-CN': '天文单位是太阳系内常用的距离单位，定义为地球与太阳的平均距离，约等于1.5亿千米。',
      'en-US': 'The astronomical unit is a unit of distance commonly used within the Solar System, defined as the average distance between the Earth and the Sun, approximately 150 million kilometers.'
    }
  },
  astronomical_parsec: {
    id: 'astronomical_parsec',
    label: {
      'zh-CN': '秒差距',
      'en-US': 'parsec',
      'ja-JP': 'パーセク',
      'de-DE': 'Parsec'
    },
    symbol: 'pc',
    ratio: 3.08567758149137e16,
    category: 'length',
    system: 'astronomical'
  },
  // 航海单位
  nautical_mile: {
    id: 'nautical_mile',
    label: {
      'zh-CN': '海里',
      'en-US': 'nautical mile',
      'ja-JP': '海里',
      'de-DE': 'Seemeile'
    },
    symbol: 'nmi',
    ratio: 1852,
    category: 'length',
    system: 'nautical',
    knowledge: {
      'zh-CN': '海里是航海和航空中使用的长度单位，定义为地球子午线上纬度1分对应的弧长，约等于1852米。',
      'en-US': 'The nautical mile is a unit of length used in maritime and aviation navigation, defined as one minute of latitude along a meridian, approximately 1852 meters.'
    }
  },
  nautical_fathom: {
    id: 'nautical_fathom',
    label: {
      'zh-CN': '英寻',
      'en-US': 'fathom',
      'ja-JP': 'ファゾム',
      'de-DE': 'Faden'
    },
    symbol: 'fathom',
    ratio: 1.8288,
    category: 'length',
    system: 'nautical'
  }
} as const;
```

#### 转换关系

*   **基本换算**
    *   1 米 = 1 meter (基准单位)
    *   1 千米 = 1000 米
    *   1 厘米 = 0.01 米
    *   1 毫米 = 0.001 米
*   **英制换算**
    *   1 英尺 = 0.3048 米
    *   1 英寸 = 0.0254 米
    *   1 码 = 0.9144 米
    *   1 英里 = 1609.344 米
*   **美制换算**
    *   1 英尺 = 0.3048 米
    *   1 英寸 = 0.0254 米
    *   1 码 = 0.9144 米
    *   1 英里 = 1609.344 米
*   **中国传统单位换算**
    *   1 里 = 500 米
    *   1 丈 = 3.333 米
    *   1 尺 = 0.3333 米
    *   1 寸 = 0.03333 米

#### 知识点

*   **公制单位**
    *   米是国际单位制的基本长度单位
    *   以光速和时间定义：光在真空中1/299792458秒内传播的距离
    *   使用十进制倍数和分数：千米（×1000）、厘米（×0.01）等
*   **英制单位**
    *   英尺最初基于人的脚长
    *   1959年国际英寸定义为精确的2.54厘米
    *   英制单位在美国、英国等国家仍广泛使用
*   **美制单位**
    *   美制单位和英制单位的换算关系相同
*   **中国传统单位**
    *   市制里是500米的新标准
    *   传统长度单位有地方差异
    *   现代中国主要使用米制
*   **天文单位**
    *   光年：光在真空中一年所走的距离，约 9.46 x 10<sup>15</sup> 米
    *   天文单位 (AU)：地球与太阳的平均距离，约 1.496 x 10<sup>11</sup> 米
    *   秒差距 (pc)：周年视差为 1 角秒的距离，约 3.086 x 10<sup>16</sup> 米
*   **航海单位**
    *   海里：地球子午线上 1 分纬度对应的弧长，约 1852 米
    *   英寻：1 英寻 = 6 英尺 = 1.8288 米

### 2.2 重量单位

基准单位：千克 (`metric_kilogram`)

#### 单位列表

*   **公制单位**
    *   `metric_kilogram`: 千克
    *   `metric_gram`: 克
    *   `metric_milligram`: 毫克
    *   `metric_tonne`: 公吨
*   **英制单位**
    *   `imperial_pound`: 磅
    *   `imperial_ounce`: 盎司
    *   `imperial_stone`: 英石
    *   `imperial_ton`: 英吨
*   **美制单位**
    *   `us_pound`: 磅
    *   `us_ounce`: 盎司
    *   `us_ton`: 美吨
*   **中国传统单位**
    *   `chinese_dan`: 担
    *   `chinese_jin`: 斤
    *   `chinese_liang`: 两
    *   `chinese_qian`: 钱
*   **贵金属单位**
    *   `troy_ounce`: 金衡盎司
    *   `troy_pound`: 金衡磅
*   **宝石单位**
    *   `jewelry_carat`: 克拉
    *   `jewelry_point`: 分

#### 实现

```typescript
const weightUnits = {
  // 公制单位
  metric_kilogram: {
    id: 'metric_kilogram',
    label: {
      'zh-CN': '千克',
      'en-US': 'kilogram',
      'ja-JP': 'キログラム',
      'de-DE': 'Kilogramm'
    },
    symbol: 'kg',
    ratio: 1,
    category: 'weight',
    system: 'metric',
    knowledge: {
      'zh-CN': '千克是国际单位制的基本质量单位，定义为普朗克常数精确值除以6.62607015×10⁻³⁴焦秒。',
      'en-US': 'The kilogram is the SI base unit of mass, defined by setting the Planck constant h exactly to 6.62607015×10⁻³⁴ joule-seconds.'
    }
  },
  metric_gram: {
    id: 'metric_gram',
    label: {
      'zh-CN': '克',
      'en-US': 'gram',
      'ja-JP': 'グラム',
      'de-DE': 'Gramm'
    },
    symbol: 'g',
    ratio: 0.001,
    category: 'weight',
    system: 'metric'
  },
  metric_milligram: {
    id: 'metric_milligram',
    label: {
      'zh-CN': '毫克',
      'en-US': 'milligram',
      'ja-JP': 'ミリグラム',
      'de-DE': 'Milligramm'
    },
    symbol: 'mg',
    ratio: 0.000001,
    category: 'weight',
    system: 'metric'
  },
  metric_tonne: {
    id: 'metric_tonne',
    label: {
      'zh-CN': '公吨',
      'en-US': 'tonne',
      'ja-JP': 'トン',
      'de-DE': 'Tonne'
    },
    symbol: 't',
    ratio: 1000,
    category: 'weight',
    system: 'metric'
  },
  // 英制单位
  imperial_pound: {
    id: 'imperial_pound',
    label: {
      'zh-CN': '磅',
      'en-US': 'pound',
      'ja-JP': 'ポンド',
      'de-DE': 'Pfund'
    },
    symbol: 'lb',
    ratio: 0.45359237,
    category: 'weight',
    system: 'imperial',
    knowledge: {
      'zh-CN': '磅是英制重量单位，1磅等于0.45359237千克，是英美日常生活中最常用的重量单位。',
      'en-US': 'The pound is an imperial unit of weight, equal to 0.45359237 kilograms, commonly used in everyday life in the UK and US.'
    }
  },
  imperial_ounce: {
    id: 'imperial_ounce',
    label: {
      'zh-CN': '盎司',
      'en-US': 'ounce',
      'ja-JP': 'オンス',
      'de-DE': 'Unze'
    },
    symbol: 'oz',
    ratio: 0.028349523125,
    category: 'weight',
    system: 'imperial'
  },
  imperial_stone: {
    id: 'imperial_stone',
    label: {
      'zh-CN': '英石',
      'en-US': 'stone',
      'ja-JP': 'ストーン',
      'de-DE': 'Stein'
    },
    symbol: 'st',
    ratio: 6.35029318,
    category: 'weight',
    system: 'imperial'
  },
  imperial_ton: {
    id: 'imperial_ton',
    label: {
      'zh-CN': '英吨',
      'en-US': 'long ton',
      'ja-JP': '英トン',
      'de-DE': 'Long Ton'
    },
    symbol: 'ton',
    ratio: 1016.0469088,
    category: 'weight',
    system: 'imperial'
  },
  // 美制单位
  us_pound: {
    id: 'us_pound',
    label: {
      'zh-CN': '磅',
      'en-US': 'pound',
      'ja-JP': 'ポンド',
      'de-DE': 'Pfund'
    },
    symbol: 'lb',
    ratio: 0.45359237,
    category: 'weight',
    system: 'us',
    knowledge: {
      'zh-CN': '美制磅与英制磅相同，均为国际磅，1磅等于0.45359237千克。',
      'en-US': 'The US pound is the same as the imperial pound, both being the international pound, equal to 0.45359237 kilograms.'
    }
  },
  us_ounce: {
    id: 'us_ounce',
    label: {
      'zh-CN': '盎司',
      'en-US': 'ounce',
      'ja-JP': 'オンス',
      'de-DE': 'Unze'
    },
    symbol: 'oz',
    ratio: 0.028349523125,
    category: 'weight',
    system: 'us'
  },
  us_ton: {
    id: 'us_ton',
    label: {
      'zh-CN': '美吨',
      'en-US': 'short ton',
      'ja-JP': '米トン',
      'de-DE': 'Short Ton'
    },
    symbol: 'ton',
    ratio: 907.18474,
    category: 'weight',
    system: 'us'
  },
  // 中国传统单位
  chinese_jin: {
    id: 'chinese_jin',
    label: {
      'zh-CN': '斤',
      'en-US': 'jin',
      'ja-JP': '斤',
      'de-DE': 'Jin'
    },
    symbol: '斤',
    ratio: 0.5,
    category: 'weight',
    system: 'chinese',
    knowledge: {
      'zh-CN': '斤是中国传统重量单位，现代市制斤等于0.5千克，是中国日常生活中最常用的重量单位。',
      'en-US': 'Jin is a traditional Chinese unit of weight, equal to 0.5 kilograms in modern usage, commonly used in daily life in China.'
    }
  },
  chinese_dan: {
    id: 'chinese_dan',
    label: {
      'zh-CN': '担',
      'en-US': 'dan',
      'ja-JP': '担',
      'de-DE': 'Dan'
    },
    symbol: '担',
    ratio: 50,
    category: 'weight',
    system: 'chinese'
  },
  chinese_liang: {
    id: 'chinese_liang',
    label: {
      'zh-CN': '两',
      'en-US': 'liang',
      'ja-JP': '両',
      'de-DE': 'Liang'
    },
    symbol: '两',
    ratio: 0.05,
    category: 'weight',
    system: 'chinese'
  },
  chinese_qian: {
    id: 'chinese_qian',
    label: {
      'zh-CN': '钱',
      'en-US': 'qian',
      'ja-JP': '銭',
      'de-DE': 'Qian'
    },
    symbol: '钱',
    ratio: 0.005,
    category: 'weight',
    system: 'chinese'
  },
  // 贵金属单位
  troy_ounce: {
    id: 'troy_ounce',
    label: {
      'zh-CN': '金衡盎司',
      'en-US': 'troy ounce',
      'ja-JP': 'トロイオンス',
      'de-DE': 'Feinunze'
    },
    symbol: 'oz t',
    ratio: 0.0311034768,
    category: 'weight',
    system: 'scientific',
    knowledge: {
      'zh-CN': '金衡盎司是贵金属（如黄金、白银等）的专用计量单位，1金衡盎司 ≈ 31.1035克。',
      'en-US': 'The troy ounce is a specialized unit of weight used for precious metals (such as gold and silver), with 1 troy ounce ≈ 31.1035 grams.'
    }
  },
  troy_pound: {
    id: 'troy_pound',
    label: {
      'zh-CN': '金衡磅',
      'en-US': 'troy pound',
      'ja-JP': 'トロイポンド',
      'de-DE': 'Troy-Pfund'
    },
    symbol: 'lb t',
    ratio: 0.3732417216,
    category: 'weight',
    system: 'scientific'
  },
  // 宝石单位
  jewelry_carat: {
    id: 'jewelry_carat',
    label: {
      'zh-CN': '克拉',
      'en-US': 'carat',
      'ja-JP': 'カラット',
      'de-DE': 'Karat'
    },
    symbol: 'ct',
    ratio: 0.0002,
    category: 'weight',
    system: 'scientific',
    knowledge: {
      'zh-CN': '克拉是宝石（如钻石）的专用计量单位，1克拉 = 0.2克。',
      'en-US': 'The carat is a specialized unit of weight used for gemstones (such as diamonds), with 1 carat = 0.2 grams.'
    }
  },
  jewelry_point: {
    id: 'jewelry_point',
    label: {
      'zh-CN': '分',
      'en-US': 'point',
      'ja-JP': 'ポイント',
      'de-DE': 'Punkt'
    },
    symbol: 'pt',
    ratio: 0.000002,
    category: 'weight',
    system: 'scientific'
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 千克 = 1000 克
    *   1 克 = 1000 毫克
    *   1 公吨 = 1000 千克
*   **英制单位换算**
    *   1 磅 = 0.45359237 千克
    *   1 盎司 = 0.028349523125 千克
    *   1 英石 = 6.35029318 千克
    *   1 英吨 = 1016.047 千克
*   **美制单位换算**
    *   1 磅 = 0.45359237 千克
    *   1 盎司 = 0.028349523125 千克
    *   1 美吨 = 907.18474 千克
*   **中国传统单位换算**
    *   1 担 = 50 千克
    *   1 斤 = 0.5 千克
    *   1 两 = 0.05 千克
    *   1 钱 = 0.005 千克
*   **贵金属单位换算**
    *   1 金衡盎司 ≈ 31.1035 克
    *   1 金衡磅 ≈ 373.2417 克
*   **宝石单位换算**
    *   1 克拉 = 0.2 克
    *   1 分 = 0.01 克拉 = 0.002 克

#### 知识点

*   **公制单位**
    *   千克是国际单位制七个基本单位之一
    *   2019年起采用普朗克常数定义
    *   是唯一带有前缀（千-）的SI基本单位
*   **英制单位**
    *   磅最初基于小麦重量
    *   1959年国际磅统一为0.45359237千克
    *   英美等国家日常生活仍广泛使用
*   **美制单位**
    *   美制磅与英制磅均为国际磅
    *   美吨（短吨）与英吨（长吨）不同
*   **中国传统单位**
    *   市制斤统一为500克
    *   传统单位有地方差异
    *   现代中国主要使用市制
*   **贵金属单位**
    *   金衡盎司用于黄金、白银等贵金属
    *   金衡磅较少使用
*   **宝石单位**
    *   克拉用于钻石等宝石
    *   分是克拉的百分之一

### 2.3 体积单位

基准单位：立方米 (`metric_cubic_meter`)

#### 单位列表

*   **公制体积单位**
    *   `metric_cubic_meter`: 立方米
    *   `metric_cubic_centimeter`: 立方厘米
    *   `metric_liter`: 升
    *   `metric_milliliter`: 毫升
*   **英制体积单位**
    *   `imperial_gallon`: 英制加仑
    *   `imperial_quart`: 英制夸脱
    *   `imperial_pint`: 英制品脱
    *   `imperial_fluid_ounce`: 英制液量盎司
*   **美制体积单位**
    *   `us_gallon`: 美制加仑
    *   `us_quart`: 美制夸脱
    *   `us_pint`: 美制品脱
    *   `us_fluid_ounce`: 美制液量盎司
*   **中国传统体积单位**
    *   `chinese_dan`: 石
    *   `chinese_dou`: 斗
    *   `chinese_sheng`: 升
*   **日本传统体积单位**
    *   `japanese_koku`: 石
    *   `japanese_to`: 斗
    *   `japanese_sho`: 升
    *   `japanese_go`: 合

#### 实现

```typescript
const volumeUnits = {
  // 公制单位
  metric_cubic_meter: {
    id: 'metric_cubic_meter',
    label: {
      'zh-CN': '立方米',
      'en-US': 'cubic meter',
      'ja-JP': '立方メートル',
      'de-DE': 'Kubikmeter'
    },
    symbol: 'm³',
    ratio: 1,
    category: 'volume',
    system: 'metric',
    knowledge: {
      'zh-CN': '立方米是国际单位制中的体积单位，等于一个边长为1米的立方体的体积。',
      'en-US': 'The cubic meter is the SI unit of volume, equal to the volume of a cube with edges of one meter.'
    }
  },
  metric_cubic_centimeter: {
    id: 'metric_cubic_centimeter',
    label: {
      'zh-CN': '立方厘米',
      'en-US': 'cubic centimeter',
      'ja-JP': '立方センチメートル',
      'de-DE': 'Kubikzentimeter'
    },
    symbol: 'cm³',
    ratio: 0.000001,
    category: 'volume',
    system: 'metric'
  },
  metric_liter: {
    id: 'metric_liter',
    label: {
      'zh-CN': '升',
      'en-US': 'liter',
      'ja-JP': 'リットル',
      'de-DE': 'Liter'
    },
    symbol: 'L',
    ratio: 0.001,
    category: 'volume',
    system: 'metric',
    knowledge: {
      'zh-CN': '升是常用的体积单位，1升等于1立方分米（1000立方厘米）。',
      'en-US': 'The liter is a commonly used unit of volume, equal to one cubic decimeter (1000 cubic centimeters).'
    }
  },
  metric_milliliter: {
    id: 'metric_milliliter',
    label: {
      'zh-CN': '毫升',
      'en-US': 'milliliter',
      'ja-JP': 'ミリリットル',
      'de-DE': 'Milliliter'
    },
    symbol: 'mL',
    ratio: 0.000001,
    category: 'volume',
    system: 'metric'
  },
  // 英制单位
  imperial_gallon: {
    id: 'imperial_gallon',
    label: {
      'zh-CN': '英制加仑',
      'en-US': 'imperial gallon',
      'ja-JP': '英ガロン',
      'de-DE': 'Imperial Gallone'
    },
    symbol: 'gal',
    ratio: 0.00454609,
    category: 'volume',
    system: 'imperial',
    knowledge: {
      'zh-CN': '英制加仑是英国使用的体积单位，1英制加仑等于4.54609升。',
      'en-US': 'The imperial gallon is used in the UK, equal to 4.54609 liters.'
    }
  },
  imperial_quart: {
    id: 'imperial_quart',
    label: {
      'zh-CN': '英制夸脱',
      'en-US': 'imperial quart',
      'ja-JP': '英クォート',
      'de-DE': 'Imperial Quart'
    },
    symbol: 'qt',
    ratio: 0.0011365225,
    category: 'volume',
    system: 'imperial'
  },
  imperial_pint: {
    id: 'imperial_pint',
    label: {
      'zh-CN': '英制品脱',
      'en-US': 'imperial pint',
      'ja-JP': '英パイント',
      'de-DE': 'Imperial Pint'
    },
    symbol: 'pt',
    ratio: 0.00056826125,
    category: 'volume',
    system: 'imperial'
  },
  imperial_fluid_ounce: {
    id: 'imperial_fluid_ounce',
    label: {
      'zh-CN': '英制液量盎司',
      'en-US': 'imperial fluid ounce',
      'ja-JP': '英液量オンス',
      'de-DE': 'Imperial Fluid Ounce'
    },
    symbol: 'fl oz',
    ratio: 0.0000284130625,
    category: 'volume',
    system: 'imperial'
  },
  // 美制单位
  us_gallon: {
    id: 'us_gallon',
    label: {
      'zh-CN': '美制加仑',
      'en-US': 'US gallon',
      'ja-JP': '米ガロン',
      'de-DE': 'US-Gallone'
    },
    symbol: 'gal',
    ratio: 0.003785411784,
    category: 'volume',
    system: 'us',
    knowledge: {
      'zh-CN': '美制加仑是美国使用的体积单位，约等于3.785升，与英制加仑不同。',
      'en-US': 'The US gallon is used in the United States, approximately 3.785 liters, different from the imperial gallon.'
    }
  },
  us_quart: {
    id: 'us_quart',
    label: {
      'zh-CN': '美制夸脱',
      'en-US': 'US quart',
      'ja-JP': '米クォート',
      'de-DE': 'US-Quart'
    },
    symbol: 'qt',
    ratio: 0.000946352946,
    category: 'volume',
    system: 'us'
  },
  us_pint: {
    id: 'us_pint',
    label: {
      'zh-CN': '美制品脱',
      'en-US': 'US pint',
      'ja-JP': '米パイント',
      'de-DE': 'US-Pint'
    },
    symbol: 'pt',
    ratio: 0.000473176473,
    category: 'volume',
    system: 'us'
  },
  us_fluid_ounce: {
    id: 'us_fluid_ounce',
    label: {
      'zh-CN': '美制液量盎司',
      'en-US': 'US fluid ounce',
      'ja-JP': '米液量オンス',
      'de-DE': 'US-Fluid Ounce'
    },
    symbol: 'fl oz',
    ratio: 0.0000295735295625,
    category: 'volume',
    system: 'us'
  },
  // 中国传统单位
  chinese_dan: {
    id: 'chinese_dan',
    label: {
      'zh-CN': '石',
      'en-US': 'dan',
      'ja-JP': '石',
      'de-DE': 'Dan'
    },
    symbol: '石',
    ratio: 0.1,
    category: 'volume',
    system: 'chinese'
  },
  chinese_dou: {
    id: 'chinese_dou',
    label: {
      'zh-CN': '斗',
      'en-US': 'dou',
      'ja-JP': '斗',
      'de-DE': 'Dou'
    },
    symbol: '斗',
    ratio: 0.01,
    category: 'volume',
    system: 'chinese'
  },
  chinese_sheng: {
    id: 'chinese_sheng',
    label: {
      'zh-CN': '升',
      'en-US': 'sheng',
      'ja-JP': '升',
      'de-DE': 'Sheng'
    },
    symbol: '升',
    ratio: 0.001,
    category: 'volume',
    system: 'chinese'
  },
  // 日本传统单位
  japanese_koku: {
    id: 'japanese_koku',
    label: {
      'zh-CN': '石',
      'en-US': 'koku',
      'ja-JP': '石',
      'de-DE': 'Koku'
    },
    symbol: '石',
    ratio: 0.18039,
    category: 'volume',
    system: 'japanese'
  },
  japanese_to: {
    id: 'japanese_to',
    label: {
      'zh-CN': '斗',
      'en-US': 'to',
      'ja-JP': '斗',
      'de-DE': 'To'
    },
    symbol: '斗',
    ratio: 0.018039,
    category: 'volume',
    system: 'japanese'
  },
  japanese_sho: {
    id: 'japanese_sho',
    label: {
      'zh-CN': '升',
      'en-US': 'sho',
      'ja-JP': '升',
      'de-DE': 'Sho'
    },
    symbol: '升',
    ratio: 0.0018039,
    category: 'volume',
    system: 'japanese'
  },
  japanese_go: {
    id: 'japanese_go',
    label: {
      'zh-CN': '合',
      'en-US': 'go',
      'ja-JP': '合',
      'de-DE': 'Go'
    },
    symbol: '合',
    ratio: 0.00018039,
    category: 'volume',
    system: 'japanese'
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 立方米 = 1000 升
    *   1 升 = 1000 毫升
    *   1 立方厘米 = 1 毫升
*   **英制单位换算**
    *   1 英制加仑 = 4.54609 升
    *   1 英制夸脱 = 1.13652 升
    *   1 英制品脱 = 0.568261 升
    *   1 英制液量盎司 = 0.0284131 升
*   **美制单位换算**
    *   1 美制加仑 = 3.78541 升
    *   1 美制夸脱 = 0.946353 升
    *   1 美制品脱 = 0.473176 升
    *   1 美制液量盎司 = 0.0295735 升
*   **传统单位换算**
    *   1 石 = 100 升（中国）
    *   1 斗 = 10 升（中国）
    *   1 升 = 1 升（中国）
    *   1 石 = 180.39 升（日本）
    *   1 斗 = 18.039 升（日本）
    *   1 升 = 1.8039 升（日本）
    *   1 合 = 0.18039 升（日本）

#### 知识点

*   **公制单位**
    *   立方米是体积的国际单位制单位
    *   升是生活中最常用的体积单位
    *   1升恰好等于1立方分米
*   **英美单位差异**
    *   英制加仑和美制加仑不同
    *   英制单位在英国及英联邦国家使用
    *   美制单位在美国使用
*   **传统单位**
    *   中国和日本的传统单位同名但容量不同
    *   现代中国已统一使用市制
    *   日本传统单位仍在部分场合使用
*   **应用场景**
    *   液体通常用升或加仑
    *   大宗商品用立方米
    *   烹饪用毫升或液量盎司

### 2.4 温度单位

基准单位：摄氏度 (`metric_celsius`)

#### 单位列表

*   **公制单位**
    *   `metric_celsius`: 摄氏度
*   **美制单位**
    *   `us_fahrenheit`: 华氏度
*   **科学单位**
    *   `scientific_kelvin`: 开尔文
    *   `scientific_rankine`: 兰氏度
*   **历史单位**
    *   `historical_reaumur`: 列氏度

#### 实现

```typescript
const temperatureUnits = {
  // 公制单位
  metric_celsius: {
    id: 'metric_celsius',
    label: {
      'zh-CN': '摄氏度',
      'en-US': 'Celsius',
      'ja-JP': '摂氏',
      'de-DE': 'Celsius'
    },
    symbol: '°C',
    ratio: 1,
    category: 'temperature',
    system: 'metric',
    toBase: (value) => value,
    fromBase: (value) => value,
    knowledge: {
      'zh-CN': '摄氏度是最常用的温度单位，以水的冰点为0°C，沸点为100°C。由瑞典天文学家摄尔修斯(Anders Celsius)提出。',
      'en-US': 'The Celsius scale is the most commonly used temperature unit, with water freezing at 0°C and boiling at 100°C. It was proposed by Swedish astronomer Anders Celsius.'
    }
  },
  // 美制单位
  us_fahrenheit: {
    id: 'us_fahrenheit',
    label: {
      'zh-CN': '华氏度',
      'en-US': 'Fahrenheit',
      'ja-JP': 'カ氏',
      'de-DE': 'Fahrenheit'
    },
    symbol: '°F',
    category: 'temperature',
    system: 'us',
    toBase: (fahrenheit) => (fahrenheit - 32) * 5/9,
    fromBase: (celsius) => celsius * 9/5 + 32,
    knowledge: {
      'zh-CN': '华氏度主要在美国使用，以水的冰点为32°F，沸点为212°F。由德国物理学家华伦海特(Daniel Gabriel Fahrenheit)发明。',
      'en-US': 'The Fahrenheit scale is primarily used in the US, with water freezing at 32°F and boiling at 212°F. It was invented by German physicist Daniel Gabriel Fahrenheit.'
    }
  },
  // 科学单位
  scientific_kelvin: {
    id: 'scientific_kelvin',
    label: {
      'zh-CN': '开尔文',
      'en-US': 'Kelvin',
      'ja-JP': 'ケルビン',
      'de-DE': 'Kelvin'
    },
    symbol: 'K',
    category: 'temperature',
    system: 'scientific',
    toBase: (kelvin) => kelvin - 273.15,
    fromBase: (celsius) => celsius + 273.15,
    knowledge: {
      'zh-CN': '开尔文是国际单位制中的温度单位，以绝对零度为0K（约-273.15°C）。由英国物理学家开尔文(William Thomson, 1st Baron Kelvin)提出。',
      'en-US': 'The Kelvin is the SI unit of temperature, with absolute zero at 0K (about -273.15°C). It was proposed by British physicist William Thomson, 1st Baron Kelvin.'
    }
  },
  scientific_rankine: {
    id: 'scientific_rankine',
    label: {
      'zh-CN': '兰氏度',
      'en-US': 'Rankine',
      'ja-JP': 'ランキン度',
      'de-DE': 'Grad Rankine'
    },
    symbol: '°R',
    category: 'temperature',
    system: 'scientific',
    toBase: (rankine) => (rankine - 491.67) * 5/9,
    fromBase: (celsius) => (celsius + 273.15) * 9/5,
    knowledge: {
      'zh-CN': '兰氏度是一个绝对温标，以绝对零度为0°R，使用华氏度的度数间隔。',
      'en-US': 'The Rankine scale is an absolute temperature scale, with absolute zero at 0°R, using the Fahrenheit degree interval.'
    }
  },
  // 历史单位
  historical_reaumur: {
    id: 'historical_reaumur',
    label: {
      'zh-CN': '列氏度',
      'en-US': 'Réaumur',
      'ja-JP': '列氏度',
      'de-DE': 'Reaumur'
    },
    symbol: '°Ré',
    category: 'temperature',
    system: 'historical',
    toBase: (reaumur) => reaumur * 5/4,
    fromBase: (celsius) => celsius * 4/5,
    knowledge: {
      'zh-CN': '列氏度是一个历史上的温度单位，以水的冰点为0°Ré，沸点为80°Ré。由法国科学家列奥米尔(René Antoine Ferchault de Réaumur)发明。',
      'en-US': 'The Réaumur scale is a historical temperature unit, with water freezing at 0°Ré and boiling at 80°Ré. It was invented by French scientist René Antoine Ferchault de Réaumur.'
    }
  }
} as const;
```

#### 转换关系

*   **摄氏度与华氏度**
    *   °F = °C × 9/5 + 32
    *   °C = (°F - 32) × 5/9
*   **摄氏度与开尔文**
    *   K = °C + 273.15
    *   °C = K - 273.15
*   **摄氏度与兰氏度**
    *   °R = (°C + 273.15) × 9/5
    *   °C = (°R × 5/9) - 273.15
*   **摄氏度与列氏度**
    *   °Ré = °C × 4/5
    *   °C = °Ré × 5/4

#### 知识点

*   **基准定义**
    *   摄氏度以水的三相点（273.16K）为基准点
    *   开尔文以绝对零度为起点（0K = -273.15°C）
    *   温标的定义经历了多次历史变革
*   **使用范围**
    *   摄氏度：全球大多数国家日常使用
    *   华氏度：主要在美国使用
    *   开尔文：科学研究和工业领域
*   **特殊应用**
    *   工业温度测量常用摄氏度
    *   气象预报在不同国家使用不同温标
    *   科学计算必须使用开尔文
*   **历史发展**
    *   最早的温度计由伽利略发明
    *   华氏度早于摄氏度出现
    *   开尔文温标建立统一了科学测量

### 2.5 压力单位

基准单位：帕斯卡 (`metric_pascal`)

#### 单位列表

*   **公制单位**
    *   `metric_pascal`: 帕斯卡
    *   `metric_kilopascal`: 千帕
    *   `metric_megapascal`: 兆帕
*   **工业单位**
    *   `industrial_bar`: 巴
    *   `industrial_millibar`: 毫巴
    *   `industrial_psi`: 磅力/平方英寸
    *   `industrial_ksi`: 千磅力/平方英寸
*   **科学单位**
    *   `scientific_atmosphere`: 标准大气压
    *   `scientific_torr`: 托
*   **医学单位**
    *   `medical_mmhg`: 毫米汞柱
    *   `medical_cmh2o`: 厘米水柱

#### 实现

```typescript
const pressureUnits = {
  // 公制单位
  metric_pascal: {
    id: 'metric_pascal',
    label: {
      'zh-CN': '帕斯卡',
      'en-US': 'Pascal',
      'ja-JP': 'パスカル',
      'de-DE': 'Pascal'
    },
    symbol: 'Pa',
    ratio: 1,
    category: 'pressure',
    system: 'metric',
    knowledge: {
      'zh-CN': '帕斯卡是国际单位制中的压力单位，定义为1牛顿力作用在1平方米面积上产生的压力。',
      'en-US': 'The Pascal is the SI unit of pressure, defined as one newton per square meter (N/m²).'
    }
  },
  metric_kilopascal: {
    id: 'metric_kilopascal',
    label: {
      'zh-CN': '千帕',
      'en-US': 'kilopascal',
      'ja-JP': 'キロパスカル',
      'de-DE': 'Kilopascal'
    },
    symbol: 'kPa',
    ratio: 1000,
    category: 'pressure',
    system: 'metric'
  },
  metric_megapascal: {
    id: 'metric_megapascal',
    label: {
      'zh-CN': '兆帕',
      'en-US': 'megapascal',
      'ja-JP': 'メガパスカル',
      'de-DE': 'Megapascal'
    },
    symbol: 'MPa',
    ratio: 1000000,
    category: 'pressure',
    system: 'metric'
  },
  // 工业单位
  industrial_bar: {
    id: 'industrial_bar',
    label: {
      'zh-CN': '巴',
      'en-US': 'bar',
      'ja-JP': 'バール',
      'de-DE': 'Bar'
    },
    symbol: 'bar',
    ratio: 100000, // 1 bar = 100,000 Pa
    category: 'pressure',
    system: 'industrial',
    knowledge: {
      'zh-CN': '巴是工业上常用的压力单位，1巴约等于1个标准大气压。',
      'en-US': 'The bar is commonly used in industry, approximately equal to one standard atmosphere.'
    }
  },
  industrial_millibar: {
    id: 'industrial_millibar',
    label: {
      'zh-CN': '毫巴',
      'en-US': 'millibar',
      'ja-JP': 'ミリバール',
      'de-DE': 'Millibar'
    },
    symbol: 'mbar',
    ratio: 100,
    category: 'pressure',
    system: 'industrial'
  },
  industrial_psi: {
    id: 'industrial_psi',
    label: {
      'zh-CN': '磅力/平方英寸',
      'en-US': 'pounds per square inch',
      'ja-JP': '重量ポンド毎平方インチ',
      'de-DE': 'Pfund pro Quadratzoll'
    },
    symbol: 'psi',
    ratio: 6894.757293178, // 1 psi = 6894.757293178 Pa
    category: 'pressure',
    system: 'industrial',
    knowledge: {
      'zh-CN': 'PSI是工程领域常用的压力单位，特别是在美国和英国的工业应用中。',
      'en-US': 'PSI is commonly used in engineering, especially in US and UK industrial applications.'
    }
  },
  industrial_ksi: {
    id: 'industrial_ksi',
    label: {
      'zh-CN': '千磅力/平方英寸',
      'en-US': 'kilopounds per square inch',
      'ja-JP': 'キロ重量ポンド毎平方インチ',
      'de-DE': 'Kilopfund pro Quadratzoll'
    },
    symbol: 'ksi',
    ratio: 6894757.293178,
    category: 'pressure',
    system: 'industrial'
  },
  // 科学单位
  scientific_atmosphere: {
    id: 'scientific_atmosphere',
    label: {
      'zh-CN': '标准大气压',
      'en-US': 'standard atmosphere',
      'ja-JP': '標準大気圧',
      'de-DE': 'Standardatmosphäre'
    },
    symbol: 'atm',
    ratio: 101325,
    category: 'pressure',
    system: 'scientific',
    knowledge: {
      'zh-CN': '标准大气压是一个压力单位，定义为海平面上的平均大气压力。',
      'en-US': 'The standard atmosphere is a unit of pressure, defined as the mean atmospheric pressure at sea level.'
    }
  },
  scientific_torr: {
    id: 'scientific_torr',
    label: {
      'zh-CN': '托',
      'en-US': 'torr',
      'ja-JP': 'トル',
      'de-DE': 'Torr'
    },
    symbol: 'Torr',
    ratio: 133.322368421,
    category: 'pressure',
    system: 'scientific'
  },
  // 医学单位
  medical_mmhg: {
    id: 'medical_mmhg',
    label: {
      'zh-CN': '毫米汞柱',
      'en-US': 'millimeter of mercury',
      'ja-JP': '水銀柱ミリメートル',
      'de-DE': 'Millimeter Quecksilbersäule'
    },
    symbol: 'mmHg',
    ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa
    category: 'pressure',
    system: 'medical',
    knowledge: {
      'zh-CN': '毫米汞柱是医学上测量血压的标准单位，源自水银气压计的设计。',
      'en-US': 'Millimeter of mercury is the standard unit for blood pressure measurement, derived from mercury barometer design.'
    }
  },
  medical_cmh2o: {
    id: 'medical_cmh2o',
    label: {
      'zh-CN': '厘米水柱',
      'en-US': 'centimeter of water',
      'ja-JP': '水柱センチメートル',
      'de-DE': 'Zentimeter Wassersäule'
    },
    symbol: 'cmH₂O',
    ratio: 98.0665,
    category: 'pressure',
    system: 'medical'
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 帕斯卡 = 1 N/m²（基准单位）
    *   1 千帕 = 1000 帕斯卡
    *   1 兆帕 = 1000000 帕斯卡
*   **工业单位换算**
    *   1 巴 = 100000 帕斯卡
    *   1 毫巴 = 100 帕斯卡
    *   1 psi ≈ 6894.76 帕斯卡
    *   1 ksi ≈ 6894757.29 帕斯卡
*   **科学单位换算**
    *   1 标准大气压 = 101325 帕斯卡
    *   1 托 ≈ 133.322 帕斯卡
*   **医学单位换算**
    *   1 毫米汞柱 ≈ 133.322 帕斯卡
    *   1 厘米水柱 ≈ 98.0665 帕斯卡

#### 知识点

*   **基本概念**
    *   压力是单位面积上的垂直力
    *   大气压随海拔高度变化
    *   压力可以是正值（压缩）或负值（真空）
*   **应用领域**
    *   气象学：使用百帕或毫巴
    *   医学：使用毫米汞柱
    *   工程：使用帕斯卡或psi
    *   潜水：使用巴或大气压
*   **历史发展**
    *   托里拆利发明水银气压计
    *   帕斯卡发现流体压力定律
    *   现代压力测量技术多样化
*   **特殊应用**
    *   轮胎压力通常用psi或巴
    *   血压用毫米汞柱
    *   气象预报用百帕或毫巴

### 2.6 能量单位

基准单位：焦耳 (`metric_joule`)

#### 单位列表

*   **公制单位**
    *   `metric_joule`: 焦耳
    *   `metric_kilojoule`: 千焦
    *   `metric_megajoule`: 兆焦
*   **热量单位**
    *   `thermal_calorie`: 卡路里
    *   `thermal_kilocalorie`: 千卡
    *   `thermal_british_thermal_unit`: 英热单位
*   **电能单位**
    *   `electric_watt_hour`: 瓦时
    *   `electric_kilowatt_hour`: 千瓦时
    *   `electric_megawatt_hour`: 兆瓦时
*   **科学单位**
    *   `scientific_electron_volt`: 电子伏特
    *   `scientific_kilo_electron_volt`: 千电子伏特
    *   `scientific_mega_electron_volt`: 兆电子伏特
*   **机械能单位**
    *   `mechanical_foot_pound`: 英尺磅
    *   `mechanical_kilogram_force_meter`: 千克力米

#### 实现

```typescript
const energyUnits = {
  // 公制单位
  metric_joule: {
    id: 'metric_joule',
    label: {
      'zh-CN': '焦耳',
      'en-US': 'joule',
      'ja-JP': 'ジュール',
      'de-DE': 'Joule'
    },
    symbol: 'J',
    ratio: 1,
    category: 'energy',
    system: 'metric',
    knowledge: {
      'zh-CN': '焦耳是国际单位制中的能量单位，定义为 1 牛顿力作用 1 米距离所做的功。',
      'en-US': 'The joule is the SI unit of energy, defined as the work done by a force of one newton acting through a distance of one meter.'
    }
  },
  metric_kilojoule: {
    id: 'metric_kilojoule',
    label: {
      'zh-CN': '千焦',
      'en-US': 'kilojoule',
      'ja-JP': 'キロジュール',
      'de-DE': 'Kilojoule'
    },
    symbol: 'kJ',
    ratio: 1000,
    category: 'energy',
    system: 'metric'
  },
  metric_megajoule: {
    id: 'metric_megajoule',
    label: {
      'zh-CN': '兆焦',
      'en-US': 'megajoule',
      'ja-JP': 'メガジュール',
      'de-DE': 'Megajoule'
    },
    symbol: 'MJ',
    ratio: 1000000,
    category: 'energy',
    system: 'metric'
  },
  // 热量单位
  thermal_calorie: {
    id: 'thermal_calorie',
    label: {
      'zh-CN': '卡路里',
      'en-US': 'calorie',
      'ja-JP': 'カロリー',
      'de-DE': 'Kalorie'
    },
    symbol: 'cal',
    ratio: 4.184,
    category: 'energy',
    system: 'thermal',
    knowledge: {
      'zh-CN': '卡路里（小卡）是热量单位，定义为将 1 克水升高 1 摄氏度所需的热量。',
      'en-US': 'The calorie (small calorie) is a unit of heat, defined as the amount of heat required to raise the temperature of 1 gram of water by 1 degree Celsius.'
    }
  },
  thermal_kilocalorie: {
    id: 'thermal_kilocalorie',
    label: {
      'zh-CN': '千卡',
      'en-US': 'kilocalorie',
      'ja-JP': 'キロカロリー',
      'de-DE': 'Kilokalorie'
    },
    symbol: 'kcal',
    ratio: 4184,
    category: 'energy',
    system: 'thermal',
    knowledge: {
      'zh-CN': '千卡（大卡）是营养学中常用的能量单位，等于 1000 卡路里。',
      'en-US': 'The kilocalorie (large calorie) is a unit of energy commonly used in nutrition, equal to 1000 calories.'
    }
  },
  thermal_british_thermal_unit: {
    id: 'thermal_british_thermal_unit',
    label: {
      'zh-CN': '英热单位',
      'en-US': 'British thermal unit',
      'ja-JP': '英熱量',
      'de-DE': 'Britische Thermische Einheit'
    },
    symbol: 'BTU',
    ratio: 1055.05585262,
    category: 'energy',
    system: 'thermal',
    knowledge: {
      'zh-CN': '英热单位是英制单位制中的热量单位，定义为将 1 磅水升高 1 华氏度所需的热量。',
      'en-US': 'The British thermal unit is a unit of heat in the imperial system, defined as the amount of heat required to raise the temperature of 1 pound of water by 1 degree Fahrenheit.'
    }
  },
  // 电能单位
  electric_watt_hour: {
    id: 'electric_watt_hour',
    label: {
      'zh-CN': '瓦时',
      'en-US': 'watt-hour',
      'ja-JP': 'ワット時',
      'de-DE': 'Wattstunde'
    },
    symbol: 'Wh',
    ratio: 3600,
    category: 'energy',
    system: 'electric',
    knowledge: {
      'zh-CN': '瓦时是电能单位，等于 1 瓦功率持续 1 小时所做的功。',
      'en-US': 'The watt-hour is a unit of electrical energy, equal to the work done by a power of 1 watt sustained for 1 hour.'
    }
  },
  electric_kilowatt_hour: {
    id: 'electric_kilowatt_hour',
    label: {
      'zh-CN': '千瓦时',
      'en-US': 'kilowatt-hour',
      'ja-JP': 'キロワット時',
      'de-DE': 'Kilowattstunde'
    },
    symbol: 'kWh',
    ratio: 3600000,
    category: 'energy',
    system: 'electric',
    knowledge: {
      'zh-CN': '千瓦时（俗称“度”）是常用的电能单位，等于 1 千瓦功率持续 1 小时所做的功。',
      'en-US': 'The kilowatt-hour is a commonly used unit of electrical energy, equal to the work done by a power of 1 kilowatt sustained for 1 hour.'
    }
  },
  electric_megawatt_hour: {
    id: 'electric_megawatt_hour',
    label: {
      'zh-CN': '兆瓦时',
      'en-US': 'megawatt-hour',
      'ja-JP': 'メガワット時',
      'de-DE': 'Megawattstunde'
    },
    symbol: 'MWh',
    ratio: 3600000000,
    category: 'energy',
    system: 'electric'
  },
  // 科学单位
  scientific_electron_volt: {
    id: 'scientific_electron_volt',
    label: {
      'zh-CN': '电子伏特',
      'en-US': 'electronvolt',
      'ja-JP': '電子ボルト',
      'de-DE': 'Elektronenvolt'
    },
    symbol: 'eV',
    ratio: 1.602176634e-19,
    category: 'energy',
    system: 'scientific',
    knowledge: {
      'zh-CN': '电子伏特是粒子物理学中常用的能量单位，定义为 1 个电子通过 1 伏特电位差所获得的动能。',
      'en-US': 'The electronvolt is a unit of energy commonly used in particle physics, defined as the kinetic energy gained by a single electron passing through a potential difference of 1 volt.'
    }
  },
  scientific_kilo_electron_volt: {
    id: 'scientific_kilo_electron_volt',
    label: {
      'zh-CN': '千电子伏特',
      'en-US': 'kilo electronvolt',
      'ja-JP': 'キロ電子ボルト',
      'de-DE': 'Kiloeelektronenvolt'
    },
    symbol: 'keV',
    ratio: 1.602176634e-16,
    category: 'energy',
    system: 'scientific'
  },
  scientific_mega_electron_volt: {
    id: 'scientific_mega_electron_volt',
    label: {
      'zh-CN': '兆电子伏特',
      'en-US': 'mega electronvolt',
      'ja-JP': 'メガ電子ボルト',
      'de-DE': 'Megaelektronenvolt'
    },
    symbol: 'MeV',
    ratio: 1.602176634e-13,
    category: 'energy',
    system: 'scientific'
  },
  // 机械能单位
  mechanical_foot_pound: {
    id: 'mechanical_foot_pound',
    label: {
      'zh-CN': '英尺磅',
      'en-US': 'foot-pound',
      'ja-JP': 'フィート重量ポンド',
      'de-DE': 'Foot-Pound'
    },
    symbol: 'ft·lb',
    ratio: 1.355817948,
    category: 'energy',
    system: 'mechanical',
    knowledge: {
      'zh-CN': '英尺磅是英制的功和能量单位，定义为 1 磅力作用 1 英尺距离所做的功。',
      'en-US': 'The foot-pound is an imperial unit of work and energy, defined as the work done by a force of 1 pound-force acting through a distance of 1 foot.'
    }
  },
  mechanical_kilogram_force_meter: {
    id: 'mechanical_kilogram_force_meter',
    label: {
      'zh-CN': '千克力米',
      'en-US': 'kilogram-force meter',
      'ja-JP': 'キログラム重メートル',
      'de-DE': 'Kilopondmeter'
    },
    symbol: 'kgf·m',
    ratio: 9.80665,
    category: 'energy',
    system: 'mechanical'
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 焦耳 = 1 牛顿·米（基准单位）
    *   1 千焦 = 1000 焦耳
    *   1 兆焦 = 1000000 焦耳
*   **热量单位换算**
    *   1 卡路里 = 4.184 焦耳
    *   1 千卡 = 4184 焦耳
    *   1 英热单位 = 1055.05585262 焦耳
*   **电能单位换算**
    *   1 瓦时 = 3600 焦耳
    *   1 千瓦时 = 3600000 焦耳
    *   1 兆瓦时 = 3600000000 焦耳
*   **科学单位换算**
    *   1 电子伏特 = 1.602176634×10⁻¹⁹ 焦耳
    *   1 千电子伏特 = 1.602176634×10⁻¹⁶ 焦耳
    *   1 兆电子伏特 = 1.602176634×10⁻¹³ 焦耳
*   **机械能单位换算**
    *   1 英尺磅 ≈ 1.3558 焦耳
    *   1 千克力米 ≈ 9.80665 焦耳

#### 知识点

*   **基本概念**
    *   能量是做功的能力
    *   能量有多种形式（动能、势能、热能、电能等）
    *   能量守恒定律是物理学基本定律
*   **应用领域**
    *   物理学：用焦耳
    *   营养学：用千卡
    *   电力工程：用千瓦时
    *   粒子物理：用电子伏特
*   **历史发展**
    *   卡路里最早用于热量测量
    *   焦耳通过实验确立了能量守恒
    *   电子伏特起源于原子物理研究
*   **特殊应用**
    *   食品能量标签用千卡
    *   电费计量用千瓦时
    *   核物理研究用电子伏特
    *   工业过程用兆焦

### 2.7 功率单位

基准单位：瓦特 (`metric_watt`)

#### 单位列表

*   **公制单位**
    *   `metric_watt`: 瓦特
    *   `metric_kilowatt`: 千瓦
    *   `metric_megawatt`: 兆瓦
    *   `metric_gigawatt`: 吉瓦
*   **机械功率单位**
    *   `mechanical_horsepower`: 马力（英制）
    *   `mechanical_metric_horsepower`: 公制马力
*   **热功率单位**
    *   `thermal_kilocalorie_per_hour`: 千卡/小时
    *   `thermal_british_thermal_unit_per_hour`: 英热单位/小时
*   **电功率单位**
    *   `electric_volt_ampere`: 伏安
    *   `electric_kilovolt_ampere`: 千伏安
*   **辐射功率单位**
    *   `radiation_erg_per_second`: 尔格/秒
    *   `radiation_solar_luminosity`: 太阳光度

#### 实现

```typescript
const powerUnits = {
  // 公制单位
  metric_watt: {
    id: 'metric_watt',
    label: {
      'zh-CN': '瓦特',
      'en-US': 'watt',
      'ja-JP': 'ワット',
      'de-DE': 'Watt'
    },
    symbol: 'W',
    ratio: 1,
    category: 'power',
    system: 'metric',
    knowledge: {
      'zh-CN': '瓦特是国际单位制中的功率单位，定义为每秒 1 焦耳的能量转换率。',
      'en-US': 'The watt is the SI unit of power, defined as one joule per second.'
    }
  },
  metric_kilowatt: {
    id: 'metric_kilowatt',
    label: {
      'zh-CN': '千瓦',
      'en-US': 'kilowatt',
      'ja-JP': 'キロワット',
      'de-DE': 'Kilowatt'
    },
    symbol: 'kW',
    ratio: 1000,
    category: 'power',
    system: 'metric'
  },
  metric_megawatt: {
    id: 'metric_megawatt',
    label: {
      'zh-CN': '兆瓦',
      'en-US': 'megawatt',
      'ja-JP': 'メガワット',
      'de-DE': 'Megawatt'
    },
    symbol: 'MW',
    ratio: 1000000,
    category: 'power',
    system: 'metric'
  },
  metric_gigawatt: {
    id: 'metric_gigawatt',
    label: {
      'zh-CN': '吉瓦',
      'en-US': 'gigawatt',
      'ja-JP': 'ギガワット',
      'de-DE': 'Gigawatt'
    },
    symbol: 'GW',
    ratio: 1000000000,
    category: 'power',
    system: 'metric'
  },
  // 机械功率单位
  mechanical_horsepower: {
    id: 'mechanical_horsepower',
    label: {
      'zh-CN': '马力',
      'en-US': 'horsepower',
      'ja-JP': '馬力',
      'de-DE': 'Pferdestärke'
    },
    symbol: 'hp',
    ratio: 745.699872,
    category: 'power',
    system: 'mechanical',
    knowledge: {
      'zh-CN': '马力（英制马力）是英制的功率单位，定义为每秒 550 英尺磅的功率，约为 745.7 瓦特。',
      'en-US': 'Horsepower is an imperial unit of power, defined as 550 foot-pounds per second, approximately 745.7 watts.'
    }
  },
  mechanical_metric_horsepower: {
    id: 'mechanical_metric_horsepower',
    label: {
      'zh-CN': '公制马力',
      'en-US': 'metric horsepower',
      'ja-JP': '仏馬力',
      'de-DE': 'Metrische Pferdestärke'
    },
    symbol: 'PS',
    ratio: 735.49875,
    category: 'power',
    system: 'mechanical',
    knowledge: {
      'zh-CN': '公制马力是公制的功率单位，定义为每秒 75 千克力米的功率，约为 735.5 瓦特。',
      'en-US': 'Metric horsepower is a metric unit of power, defined as 75 kilogram-force meters per second, approximately 735.5 watts.'
    }
  },
  // 热功率单位
  thermal_kilocalorie_per_hour: {
    id: 'thermal_kilocalorie_per_hour',
    label: {
      'zh-CN': '千卡/小时',
      'en-US': 'kilocalorie per hour',
      'ja-JP': 'キロカロリー毎時',
      'de-DE': 'Kilokalorie pro Stunde'
    },
    symbol: 'kcal/h',
    ratio: 1.163,
    category: 'power',
    system: 'thermal',
    knowledge: {
      'zh-CN': '千卡/小时是热功率单位，常用于表示供热或制冷设备的功率。',
      'en-US': 'Kilocalorie per hour is a unit of thermal power, often used to express the power of heating or cooling equipment.'
    }
  },
  thermal_british_thermal_unit_per_hour: {
    id: 'thermal_british_thermal_unit_per_hour',
    label: {
      'zh-CN': '英热单位/小时',
      'en-US': 'British thermal unit per hour',
      'ja-JP': '英熱量毎時',
      'de-DE': 'Britische Thermische Einheit pro Stunde'
    },
    symbol: 'BTU/h',
    ratio: 0.29307107,
    category: 'power',
    system: 'thermal',
    knowledge: {
      'zh-CN': '英热单位/小时是英制的热功率单位，常用于表示空调或加热器的功率。',
      'en-US': 'British thermal unit per hour is an imperial unit of thermal power, often used to express the power of air conditioners or heaters.'
    }
  },
  // 电功率单位
  electric_volt_ampere: {
    id: 'electric_volt_ampere',
    label: {
      'zh-CN': '伏安',
      'en-US': 'volt-ampere',
      'ja-JP': 'ボルトアンペア',
      'de-DE': 'Voltampere'
    },
    symbol: 'VA',
    ratio: 1,
    category: 'power',
    system: 'electric',
    knowledge: {
      'zh-CN': '伏安是视在功率的单位，在交流电路中，视在功率等于电压和电流的乘积。',
      'en-US': 'The volt-ampere is a unit of apparent power, which in AC circuits is equal to the product of voltage and current.'
    }
  },
  electric_kilovolt_ampere: {
    id: 'electric_kilovolt_ampere',
    label: {
      'zh-CN': '千伏安',
      'en-US': 'kilovolt-ampere',
      'ja-JP': 'キロボルトアンペア',
      'de-DE': 'Kilovoltampere'
    },
    symbol: 'kVA',
    ratio: 1000,
    category: 'power',
    system: 'electric'
  },
  // 辐射功率单位
  radiation_erg_per_second: {
    id: 'radiation_erg_per_second',
    label: {
      'zh-CN': '尔格/秒',
      'en-US': 'erg per second',
      'ja-JP': 'エルグ毎秒',
      'de-DE': 'Erg pro Sekunde'
    },
    symbol: 'erg/s',
    ratio: 0.0000001,
    category: 'power',
    system: 'radiation',
    knowledge: {
      'zh-CN': '尔格/秒是 CGS 制中的功率单位，1 尔格/秒 = 10⁻⁷ 瓦特。',
      'en-US': 'The erg per second is a CGS unit of power, with 1 erg/s = 10⁻⁷ watts.'
    }
  },
  radiation_solar_luminosity: {
    id: 'radiation_solar_luminosity',
    label: {
      'zh-CN': '太阳光度',
      'en-US': 'solar luminosity',
      'ja-JP': '太陽光度',
      'de-DE': 'Sonnenleuchtkraft'
    },
    symbol: 'L☉',
    ratio: 3.828e26,
    category: 'power',
    system: 'radiation',
    knowledge: {
      'zh-CN': '太阳光度是天文学中常用的辐射功率单位，定义为太阳的总辐射功率，约为 3.828 × 10²⁶ 瓦特。',
      'en-US': 'Solar luminosity is a unit of radiant power commonly used in astronomy, defined as the total radiant power of the Sun, approximately 3.828 × 10²⁶ watts.'
    }
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 瓦特 = 1 焦耳/秒（基准单位）
    *   1 千瓦 = 1000 瓦特
    *   1 兆瓦 = 1000000 瓦特
*   **机械功率换算**
    *   1 机械马力 = 745.699872 瓦特
    *   1 公制马力 = 735.49875 瓦特
*   **热功率换算**
    *   1 千卡/小时 = 1.163 瓦特
    *   1 英热单位/小时 = 0.29307107 瓦特
*   **电功率换算**
    *   1 伏安 = 1 瓦特（功率因数为1时）
    *   1 千伏安 = 1000 伏安
*   **辐射功率换算**
    *   1 尔格/秒 = 10⁻⁷ 瓦特
    *   1 太阳光度 ≈ 3.828 × 10²⁶ 瓦特

#### 知识点

*   **基本概念**
    *   功率是单位时间内能量的转换率
    *   机械功率是力与速度的乘积
    *   电功率是电压与电流的乘积
*   **应用领域**
    *   机械工程：常用马力
    *   电力工程：用瓦特或千瓦
    *   制冷暖通：用英热单位/小时
    *   工业设备：用千瓦或兆瓦
*   **历史发展**
    *   马力单位由瓦特发明
    *   不同国家发展出不同的马力标准
    *   现代统一使用瓦特作为标准单位
*   **特殊应用**
    *   发电站用兆瓦表示发电能力
    *   家用电器用瓦特标注功率
    *   汽车发动机常用马力
    *   空调制冷量用英热单位/小时

### 2.8 速度单位

基准单位：米每秒 (`metric_meter_per_second`)

#### 单位列表

*   **公制单位**
    *   `metric_meter_per_second`: 米/秒
    *   `metric_kilometer_per_hour`: 千米/时
    *   `metric_centimeter_per_second`: 厘米/秒
*   **航空单位**
    *   `aviation_knot`: 节
    *   `aviation_mach`: 马赫
*   **英制单位**
    *   `imperial_mile_per_hour`: 英里/时
    *   `imperial_foot_per_second`: 英尺/秒
*   **科学单位**
    *   `scientific_light_speed`: 光速

#### 实现

```typescript
const speedUnits = {
  // 公制单位
  metric_meter_per_second: {
    id: 'metric_meter_per_second',
    label: {
      'zh-CN': '米/秒',
      'en-US': 'meters per second',
      'ja-JP': 'メートル毎秒',
      'de-DE': 'Meter pro Sekunde'
    },
    symbol: 'm/s',
    ratio: 1,
    category: 'speed',
    system: 'metric',
    knowledge: {
      'zh-CN': '米每秒是国际单位制中的速度单位，定义为单位时间（1秒）内移动的距离（米）。',
      'en-US': 'Meters per second is the SI unit of speed, defined as the distance in meters traveled per second.'
    }
  },
  metric_kilometer_per_hour: {
    id: 'metric_kilometer_per_hour',
    label: {
      'zh-CN': '千米/时',
      'en-US': 'kilometers per hour',
      'ja-JP': 'キロメートル毎時',
      'de-DE': 'Kilometer pro Stunde'
    },
    symbol: 'km/h',
    ratio: 0.277777778, // 1 km/h = 0.277777778 m/s
    category: 'speed',
    system: 'metric',
    knowledge: {
      'zh-CN': '千米每小时是日常生活中最常用的速度单位，特别是在交通和气象领域。',
      'en-US': 'Kilometers per hour is the most commonly used speed unit in daily life, especially in traffic and weather.'
    }
  },
  metric_centimeter_per_second: {
    id: 'metric_centimeter_per_second',
    label: {
      'zh-CN': '厘米/秒',
      'en-US': 'centimeter per second',
      'ja-JP': 'センチメートル毎秒',
      'de-DE': 'Zentimeter pro Sekunde'
    },
    symbol: 'cm/s',
    ratio: 0.01,
    category: 'speed',
    system: 'metric'
  },
  // 航空单位
  aviation_knot: {
    id: 'aviation_knot',
    label: {
      'zh-CN': '节',
      'en-US': 'knot',
      'ja-JP': 'ノット',
      'de-DE': 'Knoten'
    },
    symbol: 'kn',
    ratio: 0.514444444, // 1 knot = 0.514444444 m/s
    category: 'speed',
    system: 'aviation',
    knowledge: {
      'zh-CN': '节是航海和航空领域使用的速度单位，1节等于1海里/小时。',
      'en-US': 'The knot is used in maritime and aviation, equal to one nautical mile per hour.'
    }
  },
  aviation_mach: {
    id: 'aviation_mach',
    label: {
      'zh-CN': '马赫',
      'en-US': 'Mach',
      'ja-JP': 'マッハ',
      'de-DE': 'Mach'
    },
    symbol: 'M',
    ratio: 340.3, // 1 马赫 ≈ 340.3 米/秒 (近似值，取决于空气条件)
    category: 'speed',
    system: 'aviation',
    knowledge: {
      'zh-CN': '马赫是表示飞行速度相对于音速的单位，1马赫表示与当地音速相等。',
      'en-US': 'Mach is a unit of airspeed relative to the speed of sound, with Mach 1 representing the speed of sound in the given medium.'
    },
    toBase: (mach: number) => mach * 340.3, // 使用近似的音速值
    fromBase: (mps: number) => mps / 340.3
  },
  // 英制单位
  imperial_mile_per_hour: {
    id: 'imperial_mile_per_hour',
    label: {
      'zh-CN': '英里/时',
      'en-US': 'miles per hour',
      'ja-JP': 'マイル毎時',
      'de-DE': 'Meilen pro Stunde'
    },
    symbol: 'mph',
    ratio: 0.44704,
    category: 'speed',
    system: 'imperial'
  },
  imperial_foot_per_second: {
    id: 'imperial_foot_per_second',
    label: {
      'zh-CN': '英尺/秒',
      'en-US': 'feet per second',
      'ja-JP': 'フィート毎秒',
      'de-DE': 'Fuß pro Sekunde'
    },
    symbol: 'fps',
    ratio: 0.3048,
    category: 'speed',
    system: 'imperial'
  },
  // 科学单位
  scientific_light_speed: {
    id: 'scientific_light_speed',
    label: {
      'zh-CN': '光速',
      'en-US': 'speed of light',
      'ja-JP': '光速',
      'de-DE': 'Lichtgeschwindigkeit'
    },
    symbol: 'c',
    ratio: 299792458,
    category: 'speed',
    system: 'scientific',
    knowledge: {
      'zh-CN': '光速是物理学中的一个基本常数，表示光在真空中的传播速度，约为 299,792,458 米/秒。',
      'en-US': 'The speed of light is a fundamental physical constant, representing the speed at which light travels in a vacuum, approximately 299,792,458 meters per second.'
    }
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 米/秒 = 1 m/s（基准单位）
    *   1 千米/时 = 0.277777778 米/秒
    *   1 厘米/秒 = 0.01 米/秒
*   **航空单位换算**
    *   1 节 = 0.514444444 米/秒
    *   1 马赫 ≈ 340.3 米/秒（海平面标准条件下）
*   **英制单位换算**
    *   1 英里/时 = 0.44704 米/秒
    *   1 英尺/秒 = 0.3048 米/秒
*   **特殊单位换算**
    *   光速 = 299792458 米/秒

#### 知识点

*   **基本概念**
    *   速度是位移对时间的变化率
    *   速度包含大小和方向（矢量）
    *   瞬时速度和平均速度的区别
*   **应用领域**
    *   陆地交通：用千米/时或英里/时
    *   航空航海：用节
    *   超音速飞行：用马赫数
    *   科学研究：用米/秒
*   **特殊说明**
    *   马赫数随大气条件变化
    *   光速是宇宙速度极限
    *   声速随介质和温度变化
*   **使用场景**
    *   汽车速度表用km/h或mph
    *   飞机速度用节和马赫
    *   气象风速用km/h或节
    *   运动测量用m/s

### 2.9 流量单位

基准单位：立方米每秒 (`metric_cubic_meter_per_second`)

#### 单位列表

*   **公制单位**
    *   `metric_cubic_meter_per_second`: 立方米/秒
    *   `metric_cubic_meter_per_hour`: 立方米/小时
    *   `metric_liter_per_second`: 升/秒
    *   `metric_liter_per_minute`: 升/分钟
    *   `metric_liter_per_hour`: 升/小时
*   **英制单位**
    *   `imperial_gallon_per_minute`: 英制加仑/分钟
    *   `imperial_gallon_per_hour`: 英制加仑/小时
    *   `imperial_cubic_foot_per_second`: 立方英尺/秒
    *   `imperial_cubic_foot_per_minute`: 立方英尺/分钟
*   **美制单位**
    *   `us_gallon_per_minute`: 美制加仑/分钟
    *   `us_gallon_per_hour`: 美制加仑/小时
    *   `us_cubic_foot_per_second`: 立方英尺/秒
    *   `us_cubic_foot_per_minute`: 立方英尺/分钟
*   **工业单位**
    *   `industrial_barrel_per_day`: 桶/天
    *   `industrial_barrel_per_hour`: 桶/小时

#### 实现

```typescript
const flowUnits = {
  // 公制单位
  metric_cubic_meter_per_second: {
    id: 'metric_cubic_meter_per_second',
    label: {
      'zh-CN': '立方米/秒',
      'en-US': 'cubic meters per second',
      'ja-JP': '立方メートル毎秒',
      'de-DE': 'Kubikmeter pro Sekunde'
    },
    symbol: 'm³/s',
    ratio: 1,
    category: 'flow',
    system: 'metric',
    knowledge: {
      'zh-CN': '立方米每秒是国际单位制中的流量单位，表示单位时间内流过的体积。',
      'en-US': 'Cubic meters per second is the SI unit of flow rate, representing the volume flowing per unit time.'
    }
  },
  metric_cubic_meter_per_hour: {
    id: 'metric_cubic_meter_per_hour',
    label: {
      'zh-CN': '立方米/小时',
      'en-US': 'cubic meters per hour',
      'ja-JP': '立方メートル毎時',
      'de-DE': 'Kubikmeter pro Stunde'
    },
    symbol: 'm³/h',
    ratio: 1 / 3600,
    category: 'flow',
    system: 'metric'
  },
  metric_liter_per_second: {
    id: 'metric_liter_per_second',
    label: {
      'zh-CN': '升/秒',
      'en-US': 'liters per second',
      'ja-JP': 'リットル毎秒',
      'de-DE': 'Liter pro Sekunde'
    },
    symbol: 'L/s',
    ratio: 0.001,
    category: 'flow',
    system: 'metric'
  },
  metric_liter_per_minute: {
    id: 'metric_liter_per_minute',
    label: {
      'zh-CN': '升/分钟',
      'en-US': 'liters per minute',
      'ja-JP': 'リットル毎分',
      'de-DE': 'Liter pro Minute'
    },
    symbol: 'L/min',
    ratio: 0.001 / 60,
    category: 'flow',
    system: 'metric'
  },
  metric_liter_per_hour: {
    id: 'metric_liter_per_hour',
    label: {
      'zh-CN': '升/小时',
      'en-US': 'liters per hour',
      'ja-JP': 'リットル毎時',
      'de-DE': 'Liter pro Stunde'
    },
    symbol: 'L/h',
    ratio: 0.001 / 3600,
    category: 'flow',
    system: 'metric'
  },
  // 英制单位
  imperial_gallon_per_minute: {
    id: 'imperial_gallon_per_minute',
    label: {
      'zh-CN': '英制加仑/分钟',
      'en-US': 'imperial gallons per minute',
      'ja-JP': '英ガロン毎分',
      'de-DE': 'Imperial Gallonen pro Minute'
    },
    symbol: 'gal/min',
    ratio: 0.00454609 / 60,
    category: 'flow',
    system: 'imperial'
  },
  imperial_gallon_per_hour: {
    id: 'imperial_gallon_per_hour',
    label: {
      'zh-CN': '英制加仑/小时',
      'en-US': 'imperial gallons per hour',
      'ja-JP': '英ガロン毎時',
      'de-DE': 'Imperial Gallonen pro Stunde'
    },
    symbol: 'gal/h',
    ratio: 0.00454609 / 3600,
    category: 'flow',
    system: 'imperial'
  },
  imperial_cubic_foot_per_second: {
    id: 'imperial_cubic_foot_per_second',
    label: {
      'zh-CN': '立方英尺/秒',
      'en-US': 'cubic feet per second',
      'ja-JP': '立方フィート毎秒',
      'de-DE': 'Kubikfuß pro Sekunde'
    },
    symbol: 'ft³/s',
    ratio: 0.028316846592,
    category: 'flow',
    system: 'imperial'
  },
  imperial_cubic_foot_per_minute: {
    id: 'imperial_cubic_foot_per_minute',
    label: {
      'zh-CN': '立方英尺/分钟',
      'en-US': 'cubic feet per minute',
      'ja-JP': '立方フィート毎分',
      'de-DE': 'Kubikfuß pro Minute'
    },
    symbol: 'ft³/min',
    ratio: 0.028316846592 / 60,
    category: 'flow',
    system: 'imperial'
  },
  // 美制单位
  us_gallon_per_minute: {
    id: 'us_gallon_per_minute',
    label: {
      'zh-CN': '美制加仑/分钟',
      'en-US': 'US gallons per minute',
      'ja-JP': '米ガロン毎分',
      'de-DE': 'US-Gallonen pro Minute'
    },
    symbol: 'gal/min',
    ratio: 0.003785411784 / 60,
    category: 'flow',
    system: 'us'
  },
  us_gallon_per_hour: {
    id: 'us_gallon_per_hour',
    label: {
      'zh-CN': '美制加仑/小时',
      'en-US': 'US gallons per hour',
      'ja-JP': '米ガロン毎時',
      'de-DE': 'US-Gallonen pro Stunde'
    },
    symbol: 'gal/h',
    ratio: 0.003785411784 / 3600,
    category: 'flow',
    system: 'us'
  },
  us_cubic_foot_per_second: {
    id: 'us_cubic_foot_per_second',
    label: {
      'zh-CN': '立方英尺/秒',
      'en-US': 'cubic feet per second',
      'ja-JP': '立方フィート毎秒',
      'de-DE': 'Kubikfuß pro Sekunde'
    },
    symbol: 'ft³/s',
    ratio: 0.028316846592,
    category: 'flow',
    system: 'us'
  },
  us_cubic_foot_per_minute: {
    id: 'us_cubic_foot_per_minute',
    label: {
      'zh-CN': '立方英尺/分钟',
      'en-US': 'cubic feet per minute',
      'ja-JP': '立方フィート毎分',
      'de-DE': 'Kubikfuß pro Minute'
    },
    symbol: 'ft³/min',
    ratio: 0.028316846592 / 60,
    category: 'flow',
    system: 'us'
  },
  // 工业单位
  industrial_barrel_per_day: {
    id: 'industrial_barrel_per_day',
    label: {
      'zh-CN': '桶/天',
      'en-US': 'barrels per day',
      'ja-JP': 'バレル毎日',
      'de-DE': 'Barrels pro Tag'
    },
    symbol: 'bbl/d',
    ratio: 0.158987294928 / 86400, // 1 桶 ≈ 0.158987294928 立方米
    category: 'flow',
    system: 'industrial',
    knowledge: {
      'zh-CN': '桶/天是石油工业中常用的流量单位，通常用于表示原油或成品油的产量或消耗量。',
      'en-US': 'Barrels per day is a commonly used unit of flow rate in the petroleum industry, often used to express the production or consumption of crude oil or refined products.'
    }
  },
  industrial_barrel_per_hour: {
    id: 'industrial_barrel_per_hour',
    label: {
      'zh-CN': '桶/小时',
      'en-US': 'barrels per hour',
      'ja-JP': 'バレル毎時',
      'de-DE': 'Barrels pro Stunde'
    },
    symbol: 'bbl/h',
    ratio: 0.158987294928 / 3600,
    category: 'flow',
    system: 'industrial'
  }
} as const;
```

#### 转换关系

*   **公制单位换算**
    *   1 立方米/秒 = 1 m³/s (基准单位)
    *   1 立方米/小时 = 1/3600 立方米/秒
    *   1 升/秒 = 0.001 立方米/秒
    *   1 升/分钟 = 0.001/60 立方米/秒
    *   1 升/小时 = 0.001/3600 立方米/秒
*   **英制单位换算**
    *   1 英制加仑/分钟 ≈ 0.00007577 立方米/秒
    *   1 英制加仑/小时 ≈ 0.0000012628 立方米/秒
    *   1 立方英尺/秒 ≈ 0.028317 立方米/秒
    *   1 立方英尺/分钟 ≈ 0.00047195 立方米/秒
*   **美制单位换算**
    *   1 美制加仑/分钟 ≈ 0.00006309 立方米/秒
    *   1 美制加仑/小时 ≈ 0.0000010515 立方米/秒
    *   1 立方英尺/秒 ≈ 0.028317 立方米/秒
    *   1 立方英尺/分钟 ≈ 0.00047195 立方米/秒
*   **工业单位换算**
    *   1 桶/天 ≈ 0.00000184013 立方米/秒
    *   1 桶/小时 ≈ 0.0000441632 立方米/秒

#### 知识点

*   **基本概念**
    *   流量表示单位时间内流过指定截面的流体体积
    *   流量可以是体积流量或质量流量
    *   流量与流速和截面积有关
*   **应用领域**
    *   水利工程：使用立方米/秒、升/秒
    *   石油工业：使用桶/天
    *   化工过程：使用升/分钟、立方米/小时
    *   暖通空调：使用立方英尺/分钟
*   **单位选择**
    *   根据行业和应用选择合适的单位
    *   注意单位之间的换算关系
    *   根据流量大小选择合适的单位前缀
*   **测量方法**
    *   流量计可以直接测量流量
    *   可以通过流速和截面积计算流量
    *   不同类型的流量计适用于不同的流体和测量条件

### 2.10 数据单位

基准单位：字节 (`decimal_byte`)

#### 单位列表

*   **十进制单位**
    *   `decimal_byte`: 字节
    *   `decimal_kilobyte`: 千字节
    *   `decimal_megabyte`: 兆字节
    *   `decimal_gigabyte`: 吉字节
    *   `decimal_terabyte`: 太字节
    *   `decimal_petabyte`: 拍字节
*   **二进制单位**
    *   `binary_byte`: 字节
    *   `binary_kibibyte`: 二进制千字节
    *   `binary_mebibyte`: 二进制兆字节
    *   `binary_gibibyte`: 二进制吉字节
    *   `binary_tebibyte`: 二进制太字节
    *   `binary_pebibyte`: 二进制拍字节

#### 实现

```typescript
const dataUnits = {
  // 十进制单位
  decimal_byte: {
    id: 'decimal_byte',
    label: {
      'zh-CN': '字节',
      'en-US': 'byte',
      'ja-JP': 'バイト',
      'de-DE': 'Byte'
    },
    symbol: 'B',
    ratio: 1,
    category: 'data',
    system: 'decimal',
    knowledge: {
      'zh-CN': '字节是计算机信息计量的基本单位，1字节等于8位(bit)。',
      'en-US': 'Byte is the basic unit of computer information measurement, equal to 8 bits.'
    }
  },
  decimal_kilobyte: {
    id: 'decimal_kilobyte',
    label: {
      'zh-CN': '千字节',
      'en-US': 'kilobyte',
      'ja-JP': 'キロバイト',
      'de-DE': 'Kilobyte'
    },
    symbol: 'KB',
    ratio: 1000, // 1 KB = 1000 B
    category: 'data',
    system: 'decimal',
    knowledge: {
      'zh-CN': '千字节是十进制的数据单位，1千字节等于1000字节。',
      'en-US': 'Kilobyte is a decimal data unit, equal to 1000 bytes.'
    }
  },
  decimal_megabyte: {
    id: 'decimal_megabyte',
    label: {
      'zh-CN': '兆字节',
      'en-US': 'megabyte',
      'ja-JP': 'メガバイト',
      'de-DE': 'Megabyte'
    },
    symbol: 'MB',
    ratio: 1000000,
    category: 'data',
    system: 'decimal'
  },
  decimal_gigabyte: {
    id: 'decimal_gigabyte',
    label: {
      'zh-CN': '吉字节',
      'en-US': 'gigabyte',
      'ja-JP': 'ギガバイト',
      'de-DE': 'Gigabyte'
    },
    symbol: 'GB',
    ratio: 1000000000,
    category: 'data',
    system: 'decimal'
  },
  decimal_terabyte: {
    id: 'decimal_terabyte',
    label: {
      'zh-CN': '太字节',
      'en-US': 'terabyte',
      'ja-JP': 'テラバイト',
      'de-DE': 'Terabyte'
    },
    symbol: 'TB',
    ratio: 1000000000000,
    category: 'data',
    system: 'decimal'
  },
  decimal_petabyte: {
    id: 'decimal_petabyte',
    label: {
      'zh-CN': '拍字节',
      'en-US': 'petabyte',
      'ja-JP': 'ペタバイト',
      'de-DE': 'Petabyte'
    },
    symbol: 'PB',
    ratio: 1000000000000000,
    category: 'data',
    system: 'decimal'
  },
  // 二进制单位
  binary_byte: {
    id: 'binary_byte',
    label: {
      'zh-CN': '字节',
      'en-US': 'byte',
      'ja-JP': 'バイト',
      'de-DE': 'Byte'
    },
    symbol: 'B',
    ratio: 1,
    category: 'data',
    system: 'binary',
    knowledge: {
      'zh-CN': '字节是计算机信息计量的基本单位，1字节等于8位(bit)。',
      'en-US': 'Byte is the basic unit of computer information measurement, equal to 8 bits.'
    }
  },
  binary_kibibyte: {
    id: 'binary_kibibyte',
    label: {
      'zh-CN': '二进制千字节',
      'en-US': 'kibibyte',
      'ja-JP': 'キビバイト',
      'de-DE': 'Kibibyte'
    },
    symbol: 'KiB',
    ratio: 1024, // 1 KiB = 1024 B
    category: 'data',
    system: 'binary',
    knowledge: {
      'zh-CN': '二进制千字节是二进制的数据单位，1二进制千字节等于1024字节。',
      'en-US': 'Kibibyte is a binary data unit, equal to 1024 bytes.'
    }
  },
  binary_mebibyte: {
    id: 'binary_mebibyte',
    label: {
      'zh-CN': '二进制兆字节',
      'en-US': 'mebibyte',
      'ja-JP': 'メビバイト',
      'de-DE': 'Mebibyte'
    },
    symbol: 'MiB',
    ratio: 1048576,
    category: 'data',
    system: 'binary'
  },
  binary_gibibyte: {
    id: 'binary_gibibyte',
    label: {
      'zh-CN': '二进制吉字节',
      'en-US': 'gibibyte',
      'ja-JP': 'ギビバイト',
      'de-DE': 'Gibibyte'
    },
    symbol: 'GiB',
    ratio: 1073741824,
    category: 'data',
    system: 'binary'
  },
  binary_tebibyte: {
    id: 'binary_tebibyte',
    label: {
      'zh-CN': '二进制太字节',
      'en-US': 'tebibyte',
      'ja-JP': 'テビバイト',
      'de-DE': 'Tebibyte'
    },
    symbol: 'TiB',
    ratio: 1099511627776,
    category: 'data',
    system: 'binary'
  },
  binary_pebibyte: {
    id: 'binary_pebibyte',
    label: {
      'zh-CN': '二进制拍字节',
      'en-US': 'pebibyte',
      'ja-JP': 'ペビバイト',
      'de-DE': 'Pebibyte'
    },
    symbol: 'PiB',
    ratio: 1125899906842624,
    category: 'data',
    system: 'binary'
  }
} as const;
```

#### 转换关系

*   **十进制单位换算**
    *   1 字节 = 1 B（基准单位）
    *   1 千字节 = 1000 字节
    *   1 兆字节 = 1000000 字节
    *   1 吉字节 = 1000000000 字节
    *   1 太字节 = 1000000000000 字节
    *   1 拍字节 = 1000000000000000 字节
*   **二进制单位换算**
    *   1 字节 = 1 B（基准单位）
    *   1 KiB = 1024 字节
    *   1 MiB = 1048576 字节
    *   1 GiB = 1073741824 字节
    *   1 TiB = 1099511627776 字节
    *   1 PiB = 1125899906842624 字节
*   **位与字节换算**
    *   1 字节 = 8 位
    *   1 KB = 8000 位
    *   1 KiB = 8192 位

#### 知识点

*   **基本概念**
    *   字节是最基本的可寻址存储单位
    *   位是最小的数据单位
    *   区分十进制和二进制计数系统
*   **命名规范**
    *   十进制前缀：K、M、G、T、P
    *   二进制前缀：Ki、Mi、Gi、Ti、Pi
    *   IEC 60027-2标准规范
*   **使用场景**
    *   存储容量：使用二进制单位
    *   数据传输：使用十进制单位
    *   内存大小：使用二进制单位
    *   文件大小：系统不同而异
*   **历史发展**
    *   早期混用导致歧义
    *   1998年IEC引入二进制前缀
    *   现代操作系统逐渐规范化
*   **特殊说明**
    *   Windows显示采用二进制但标记十进制
    *   网络带宽通常使用十进制
    *   硬盘制造商使用十进制
    *   内存制造商使用二进制

### 2.11 数据传输速率单位

基准单位：比特每秒 (`decimal_bit_per_second`)

#### 单位列表

*   **十进制单位**
    *   `decimal_bit_per_second`: 比特/秒
    *   `decimal_kilobit_per_second`: 千比特/秒
    *   `decimal_megabit_per_second`: 兆比特/秒
    *   `decimal_gigabit_per_second`: 吉比特/秒
    *   `decimal_terabit_per_second`: 太比特/秒
*   **二进制单位**
    *   `binary_bit_per_second`: 比特/秒
    *   `binary_kibibit_per_second`: 二进制千比特/秒
    *   `binary_mebibit_per_second`: 二进制兆比特/秒
    *   `binary_gibibit_per_second`: 二进制吉比特/秒
    *   `binary_tebibit_per_second`: 二进制太比特/秒
*   **字节速率单位**
    *   `decimal_byte_per_second`: 字节/秒
    *   `decimal_kilobyte_per_second`: 千字节/秒
    *   `decimal_megabyte_per_second`: 兆字节/秒
    *   `decimal_gigabyte_per_second`: 吉字节/秒

#### 实现

```typescript
const dataTransferRateUnits = {
  // 十进制单位
  decimal_bit_per_second: {
    id: 'decimal_bit_per_second',
    label: {
      'zh-CN': '比特/秒',
      'en-US': 'bits per second',
      'ja-JP': 'ビット毎秒',
      'de-DE': 'Bits pro Sekunde'
    },
    symbol: 'bps',
    ratio: 1,
    category: 'data_transfer_rate',
    system: 'decimal',
    knowledge: {
      'zh-CN': '比特每秒是数据传输速率的基本单位，表示每秒传输的二进制位数。',
      'en-US': 'Bits per second is the basic unit of data transfer rate, representing the number of binary digits transferred per second.'
    }
  },
  decimal_kilobit_per_second: {
    id: 'decimal_kilobit_per_second',
    label: {
      'zh-CN': '千比特/秒',
      'en-US': 'kilobits per second',
      'ja-JP': 'キロビット毎秒',
      'de-DE': 'Kilobits pro Sekunde'
    },
    symbol: 'kbps',
    ratio: 1000,
    category: 'data_transfer_rate',
    system: 'decimal'
  },
  decimal_megabit_per_second: {
    id: 'decimal_megabit_per_second',
    label: {
      'zh-CN': '兆比特/秒',
      'en-US': 'megabits per second',
      'ja-JP': 'メガビット毎秒',
      'de-DE': 'Megabits pro Sekunde'
    },
    symbol: 'Mbps',
    ratio: 1000000, // 1 Mbps = 1,000,000 bps
    category: 'data_transfer_rate',
    system: 'decimal',
    knowledge: {
      'zh-CN': '兆比特每秒常用于表示网络连接速度，如宽带速率。',
      'en-US': 'Megabits per second is commonly used to express network connection speeds, such as broadband rates.'
    }
  },
  decimal_gigabit_per_second: {
    id: 'decimal_gigabit_per_second',
    label: {
      'zh-CN': '吉比特/秒',
      'en-US': 'gigabits per second',
      'ja-JP': 'ギガビット毎秒',
      'de-DE': 'Gigabits pro Sekunde'
    },
    symbol: 'Gbps',
    ratio: 1000000000,
    category: 'data_transfer_rate',
    system: 'decimal'
  },
  decimal_terabit_per_second: {
    id: 'decimal_terabit_per_second',
    label: {
      'zh-CN': '太比特/秒',
      'en-US': 'terabits per second',
      'ja-JP': 'テラビット毎秒',
      'de-DE': 'Terabits pro Sekunde'
    },
    symbol: 'Tbps',
    ratio: 1000000000000,
    category: 'data_transfer_rate',
    system: 'decimal'
  },
  // 二进制单位
  binary_bit_per_second: {
    id: 'binary_bit_per_second',
    label: {
      'zh-CN': '比特/秒',
      'en-US': 'bits per second',
      'ja-JP': 'ビット毎秒',
      'de-DE': 'Bits pro Sekunde'
    },
    symbol: 'bps',
    ratio: 1,
    category: 'data_transfer_rate',
    system: 'binary',
    knowledge: {
      'zh-CN': '比特每秒是数据传输速率的基本单位，表示每秒传输的二进制位数。',
      'en-US': 'Bits per second is the basic unit of data transfer rate, representing the number of binary digits transferred per second.'
    }
  },
  binary_kibibit_per_second: {
    id: 'binary_kibibit_per_second',
    label: {
      'zh-CN': '二进制千比特/秒',
      'en-US': 'kibibits per second',
      'ja-JP': 'キビビット毎秒',
      'de-DE': 'Kibibits pro Sekunde'
    },
    symbol: 'Kibps',
    ratio: 1024,
    category: 'data_transfer_rate',
    system: 'binary'
  },
  binary_mebibit_per_second: {
    id: 'binary_mebibit_per_second',
    label: {
      'zh-CN': '二进制兆比特/秒',
      'en-US': 'mebibits per second',
      'ja-JP': 'メビビット毎秒',
      'de-DE': 'Mebibits pro Sekunde'
    },
    symbol: 'Mibps',
    ratio: 1048576,
    category: 'data_transfer_rate',
    system: 'binary'
  },
  binary_gibibit_per_second: {
    id: 'binary_gibibit_per_second',
    label: {
      'zh-CN': '二进制吉比特/秒',
      'en-US': 'gibibits per second',
      'ja-JP': 'ギビビット毎秒',
      'de-DE': 'Gibibits pro Sekunde'
    },
    symbol: 'Gibps',
    ratio: 1073741824,
    category: 'data_transfer_rate',
    system: 'binary'
  },
  binary_tebibit_per_second: {
    id: 'binary_tebibit_per_second',
    label: {
      'zh-CN': '二进制太比特/秒',
      'en-US': 'tebibits per second',
      'ja-JP': 'テビビット毎秒',
      'de-DE': 'Tebibits pro Sekunde'
    },
    symbol: 'Tibps',
    ratio: 1099511627776,
    category: 'data_transfer_rate',
    system: 'binary'
  },
  // 字节速率单位
  decimal_byte_per_second: {
    id: 'decimal_byte_per_second',
    label: {
      'zh-CN': '字节/秒',
      'en-US': 'bytes per second',
      'ja-JP': 'バイト毎秒',
      'de-DE': 'Bytes pro Sekunde'
    },
    symbol: 'B/s',
    ratio: 8,
    category: 'data_transfer_rate',
    system: 'decimal',
    knowledge: {
      'zh-CN': '字节每秒常用于表示文件传输速度。',
      'en-US': 'Bytes per second is commonly used to express file transfer speeds.'
    }
  },
  decimal_kilobyte_per_second: {
    id: 'decimal_kilobyte_per_second',
    label: {
      'zh-CN': '千字节/秒',
      'en-US': 'kilobytes per second',
      'ja-JP': 'キロバイト毎秒',
      'de-DE': 'Kilobytes pro Sekunde'
    },
    symbol: 'kB/s',
    ratio: 8000,
    category: 'data_transfer_rate',
    system: 'decimal'
  },
  decimal_megabyte_per_second: {
    id: 'decimal_megabyte_per_second',
    label: {
      'zh-CN': '兆字节/秒',
      'en-US': 'megabytes per second',
      'ja-JP': 'メガバイト毎秒',
      'de-DE': 'Megabytes pro Sekunde'
    },
    symbol: 'MB/s',
    ratio: 8000000, // 1 MB/s = 8,000,000 bps
    category: 'data_transfer_rate',
    system: 'decimal',
    knowledge: {
      'zh-CN': '兆字节每秒常用于表示存储设备的传输速度。',
      'en-US': 'Megabytes per second is commonly used to express storage device transfer speeds.'
    }
  },
  decimal_gigabyte_per_second: {
    id: 'decimal_gigabyte_per_second',
    label: {
      'zh-CN': '吉字节/秒',
      'en-US': 'gigabytes per second',
      'ja-JP': 'ギガバイト毎秒',
      'de-DE': 'Gigabytes pro Sekunde'
    },
    symbol: 'GB/s',
    ratio: 8000000000,
    category: 'data_transfer_rate',
    system: 'decimal'
  }
} as const;
```

#### 转换关系

*   **十进制比特单位换算**
    *   1 比特/秒 = 1 bps（基准单位）
    *   1 千比特/秒 = 1000 bps
    *   1 兆比特/秒 = 1000000 bps
    *   1 吉比特/秒 = 1000000000 bps
    *   1 太比特/秒 = 1000000000000 bps
*   **二进制比特单位换算**
    *   1 比特/秒 = 1 bps（基准单位）
    *   1 Kibps = 1024 bps
    *   1 Mibps = 1048576 bps
    *   1 Gibps = 1073741824 bps
    *   1 Tibps = 1099511627776 bps
*   **字节速率换算**
    *   1 字节/秒 = 8 比特/秒
    *   1 KB/s = 8000 比特/秒
    *   1 MB/s = 8000000 比特/秒
    *   1 GB/s = 8000000000 比特/秒

#### 知识点

*   **基本概念**
    *   数据传输速率表示单位时间内传输的数据量
    *   区分比特速率和字节速率
    *   注意十进制和二进制单位的差异

*   **应用场景**
    *   网络带宽：通常用比特/秒（Mbps、Gbps）
    *   存储传输：通常用字节/秒（MB/s、GB/s）
    *   内存传输：通常用二进制单位
    *   实时数据流：根据应用选择合适单位
*   **特殊说明**
    *   ISP广告中的带宽指比特速率
    *   下载速度显示通常用字节速率
    *   硬件规格可能混用不同单位
    *   需要注意单位换算避免混淆
*   **历史发展**
    *   从早期的bps发展到现代的Tbps
    *   网络速度提升推动单位演进
    *   5G网络引入更高速率单位
    *   数据中心需求推动标准发展

### 2.12 角度单位

基准单位：弧度 (`metric_radian`)

#### 单位列表

*   **公制单位**
    *   `metric_radian`: 弧度
    *   `metric_milliradian`: 毫弧度
    *   `metric_microradian`: 微弧度
*   **标准单位**
    *   `standard_degree`: 度
    *   `standard_minute`: 角分
    *   `standard_second`: 角秒
    *   `standard_gradian`: 百分度
*   **航海单位**
    *   `nautical_point`: 罗盘点
    *   `nautical_quarter`: 罗盘四分位
*   **军事单位**
    *   `military_mil`: 密位
    *   `military_nato_mil`: 北约密位
    *   `military_soviet_mil`: 苏制密位

#### 实现

```typescript
const angleUnits = {
  // 公制单位
  metric_radian: {
    id: 'metric_radian',
    label: {
      'zh-CN': '弧度',
      'en-US': 'radian',
      'ja-JP': 'ラジアン',
      'de-DE': 'Radiant'
    },
    symbol: 'rad',
    ratio: 1,
    category: 'angle',
    system: 'metric',
    knowledge: {
      'zh-CN': '弧度是国际单位制中的角度单位，定义为圆弧长度等于半径时的圆心角。',
      'en-US': 'The radian is the SI unit of angle, defined as the angle subtended at the center of a circle by an arc equal in length to the radius.'
    }
  },
  metric_milliradian: {
    id: 'metric_milliradian',
    label: {
      'zh-CN': '毫弧度',
      'en-US': 'milliradian',
      'ja-JP': 'ミリラジアン',
      'de-DE': 'Milliradiant'
    },
    symbol: 'mrad',
    ratio: 0.001,
    category: 'angle',
    system: 'metric'
  },
  metric_microradian: {
    id: 'metric_microradian',
    label: {
      'zh-CN': '微弧度',
      'en-US': 'microradian',
      'ja-JP': 'マイクロラジアン',
      'de-DE': 'Mikroradiant'
    },
    symbol: 'µrad',
    ratio: 0.000001,
    category: 'angle',
    system: 'metric'
  },
  // 标准单位
  standard_degree: {
    id: 'standard_degree',
    label: {
      'zh-CN': '度',
      'en-US': 'degree',
      'ja-JP': '度',
      'de-DE': 'Grad'
    },
    symbol: '°',
    ratio: 0.017453292519943295, // π/180
    category: 'angle',
    system: 'standard',
    knowledge: {
      'zh-CN': '度是最常用的角度单位，一个完整的圆为360度。',
      'en-US': 'The degree is the most common unit of angle measurement, with 360 degrees in a complete circle.'
    }
  },
  standard_minute: {
    id: 'standard_minute',
    label: {
      'zh-CN': '角分',
      'en-US': 'minute of arc',
      'ja-JP': '分',
      'de-DE': 'Bogenminute'
    },
    symbol: "'",
    ratio: 0.0002908882086657216, // π/10800
    category: 'angle',
    system: 'standard'
  },
  standard_second: {
    id: 'standard_second',
    label: {
      'zh-CN': '角秒',
      'en-US': 'second of arc',
      'ja-JP': '秒',
      'de-DE': 'Bogensekunde'
    },
    symbol: '"',
    ratio: 0.00000484813681109536, // π/648000
    category: 'angle',
    system: 'standard'
  },
  standard_gradian: {
    id: 'standard_gradian',
    label: {
      'zh-CN': '百分度',
      'en-US': 'gradian',
      'ja-JP': 'グラード',
      'de-DE': 'Gon'
    },
    symbol: 'gon',
    ratio: 0.015707963267948967, // π/200
    category: 'angle',
    system: 'standard'
  },
  // 航海单位
  nautical_point: {
    id: 'nautical_point',
    label: {
      'zh-CN': '罗盘点',
      'en-US': 'point',
      'ja-JP': '羅方位点',
      'de-DE': 'Strich'
    },
    symbol: 'pt',
    ratio: 0.19634954084936207, // π/16
    category: 'angle',
    system: 'nautical',
    knowledge: {
      'zh-CN': '罗盘点是航海中使用的角度单位，一个圆周被分为32个罗盘点。',
      'en-US': 'The point is a unit of angle used in navigation, with a circle divided into 32 points.'
    }
  },
  nautical_quarter: {
    id: 'nautical_quarter',
    label: {
      'zh-CN': '罗盘四分位',
      'en-US': 'quarter',
      'ja-JP': '四半方位',
      'de-DE': 'Viertel'
    },
    symbol: 'quarter',
    ratio: 0.7853981633974483, // π/4
    category: 'angle',
    system: 'nautical'
  },
  // 军事单位
  military_mil: {
    id: 'military_mil',
    label: {
      'zh-CN': '密位',
      'en-US': 'mil',
      'ja-JP': 'ミル',
      'de-DE': 'Strich'
    },
    symbol: 'mil',
    ratio: 0.0009817477042468103, // π/3200 (近似值)
    category: 'angle',
    system: 'military',
    knowledge: {
      'zh-CN': '密位是军事领域使用的角度单位，主要用于火炮瞄准。',
      'en-US': 'The mil is an angular measurement unit used in military applications, primarily for artillery targeting.'
    }
  },
  military_nato_mil: {
    id: 'military_nato_mil',
    label: {
      'zh-CN': '北约密位',
      'en-US': 'NATO mil',
      'ja-JP': 'NATOミル',
      'de-DE': 'NATO-Strich'
    },
    symbol: 'mil',
    ratio: 0.0009817477042468103, // π/3200
    category: 'angle',
    system: 'military',
    knowledge: {
      'zh-CN': '北约密位是北约国家军队使用的密位制式，一个圆周为 6400 密位。',
      'en-US': 'The NATO mil is a mil system used by NATO military forces, with a circle divided into 6400 mils.'
    }
  },
  military_soviet_mil: {
    id: 'military_soviet_mil',
    label: {
      'zh-CN': '苏制密位',
      'en-US': 'Soviet mil',
      'ja-JP': 'ソビエトミル',
      'de-DE': 'Sowjetischer Strich'
    },
    symbol: 'mil',
    ratio: 0.0010471975511965979, // π/3000
    category: 'angle',
    system: 'military',
    knowledge: {
      'zh-CN': '苏制密位是前苏联和一些东欧国家军队使用的密位制式，一个圆周为 6000 密位。',
      'en-US': 'The Soviet mil is a mil system used by the former Soviet Union and some Eastern European military forces, with a circle divided into 6000 mils.'
    }
  }
} as const;
```

#### 转换关系

*   **基本换算**
    *   1 弧度 = 1 rad（基准单位）
    *   1 度 = π/180 弧度 ≈ 0.017453292519943295 弧度
    *   1 角分 = π/10800 弧度 ≈ 0.000290888208665722 弧度
    *   1 角秒 = π/648000 弧度 ≈ 0.000004848136811095 弧度
*   **特殊单位换算**
    *   1 百分度 = π/200 弧度 ≈ 0.015707963267949 弧度
    *   1 罗盘点 = π/16 弧度 ≈ 0.196349540849362 弧度
    *   1 密位 ≈ π/3200 弧度 ≈ 0.0009817477042468103 弧度 (北约)
*   **常用关系**
    *   2π 弧度 = 360 度
    *   π 弧度 = 180 度
    *   π/2 弧度 = 90 度
    *   π/4 弧度 = 45 度

#### 知识点

*   **基本概念**
    *   角度是旋转的量度
    *   弧度是自然度量单位
    *   不同单位系统源于不同应用需求
    *   注意周期性和范围
*   **应用场景**
    *   数学计算：使用弧度
    *   工程测量：使用度
    *   军事瞄准：使用密位
    *   航海导航：使用罗盘点
*   **特殊说明**
    *   三角函数计算通常使用弧度
    *   显示通常使用度
    *   军事单位有不同标准
    *   航海单位基于历史传统
*   **使用建议**
    *   科学计算优先使用弧度
    *   工程应用通常使用度
    *   特殊领域遵循行业标准
    *   注意单位转换精度

### 2.13 货币单位

#### 2.13.1 法定货币

基准单位：美元 (`fiat_usd`)

##### 单位列表

*   **主要货币**
    *   `fiat_usd`: 美元 (USD)
    *   `fiat_eur`: 欧元 (EUR)
    *   `fiat_jpy`: 日元 (JPY)
    *   `fiat_gbp`: 英镑 (GBP)
    *   `fiat_cny`: 人民币 (CNY)
    *   `fiat_cad`: 加拿大元 (CAD)
    *   `fiat_aud`: 澳大利亚元 (AUD)
    *   `fiat_chf`: 瑞士法郎 (CHF)
    *   `fiat_hkd`: 港元 (HKD)
    *   `fiat_sgd`: 新加坡元 (SGD)

##### 实现

```typescript
const fiatCurrencyUnits = {
  fiat_usd: {
    id: 'fiat_usd',
    label: {
      'zh-CN': '美元',
      'en-US': 'US Dollar',
      'ja-JP': '米ドル',
      'de-DE': 'US-Dollar'
    },
    symbol: '$',
    ratio: 1, // 基准单位
    category: 'currency',
    system: 'fiat',
    knowledge: {
      'zh-CN': '美元是美国的官方货币，也是全球主要的储备货币。',
      'en-US': 'The US dollar is the official currency of the United States and the world\'s primary reserve currency.'
    }
  },
  fiat_eur: {
    id: 'fiat_eur',
    label: {
      'zh-CN': '欧元',
      'en-US': 'Euro',
      'ja-JP': 'ユーロ',
      'de-DE': 'Euro'
    },
    symbol: '€',
    ratio: 1.18, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat',
    knowledge: {
      'zh-CN': '欧元是欧元区的官方货币，欧元区由19个欧盟成员国组成。',
      'en-US': 'The euro is the official currency of the Eurozone, which consists of 19 of the 27 European Union member states.'
    }
  },
  fiat_jpy: {
    id: 'fiat_jpy',
    label: {
      'zh-CN': '日元',
      'en-US': 'Japanese Yen',
      'ja-JP': '円',
      'de-DE': 'Japanischer Yen'
    },
    symbol: '¥',
    ratio: 0.0091, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_gbp: {
    id: 'fiat_gbp',
    label: {
      'zh-CN': '英镑',
      'en-US': 'British Pound',
      'ja-JP': '英ポンド',
      'de-DE': 'Britisches Pfund'
    },
    symbol: '£',
    ratio: 1.38, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_cny: {
    id: 'fiat_cny',
    label: {
      'zh-CN': '人民币',
      'en-US': 'Chinese Yuan',
      'ja-JP': '人民元',
      'de-DE': 'Renminbi Yuan'
    },
    symbol: '¥',
    ratio: 0.15, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_cad: {
    id: 'fiat_cad',
    label: {
      'zh-CN': '加拿大元',
      'en-US': 'Canadian Dollar',
      'ja-JP': 'カナダドル',
      'de-DE': 'Kanadischer Dollar'
    },
    symbol: 'CA$',
    ratio: 0.79, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_aud: {
    id: 'fiat_aud',
    label: {
      'zh-CN': '澳大利亚元',
      'en-US': 'Australian Dollar',
      'ja-JP': 'オーストラリアドル',
      'de-DE': 'Australischer Dollar'
    },
    symbol: 'A$',
    ratio: 0.77, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_chf: {
    id: 'fiat_chf',
    label: {
      'zh-CN': '瑞士法郎',
      'en-US': 'Swiss Franc',
      'ja-JP': 'スイスフラン',
      'de-DE': 'Schweizer Franken'
    },
    symbol: 'CHF',
    ratio: 1.09, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_hkd: {
    id: 'fiat_hkd',
    label: {
      'zh-CN': '港元',
      'en-US': 'Hong Kong Dollar',
      'ja-JP': '香港ドル',
      'de-DE': 'Hongkong-Dollar'
    },
    symbol: 'HK$',
    ratio: 0.13, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  },
  fiat_sgd: {
    id: 'fiat_sgd',
    label: {
      'zh-CN': '新加坡元',
      'en-US': 'Singapore Dollar',
      'ja-JP': 'シンガポールドル',
      'de-DE': 'Singapur-Dollar'
    },
    symbol: 'S$',
    ratio: 0.74, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'fiat'
  }
} as const;
```

##### 知识点

*   **定义**: 法定货币是由政府法令宣布为法定货币的货币。
*   **价值**: 法定货币的价值来自人们对其作为支付手段的信任和信心。
*   **发行**: 法定货币通常由中央银行发行和控制。
*   **汇率**: 不同法定货币之间的汇率会根据市场供求关系不断波动。
*   **储备货币**: 美元是全球主要的储备货币，许多国家将其作为外汇储备。
*   **货币代码**: ISO 4217 标准为每种货币分配了三个字母的代码。

#### 2.13.2 加密货币

基准单位：比特币 (`crypto_btc`)

##### 单位列表

*   **主要加密货币**
    *   `crypto_btc`: 比特币 (BTC)
    *   `crypto_eth`: 以太坊 (ETH)
    *   `crypto_usdt`: 泰达币 (USDT)
    *   `crypto_bnb`: 币安币 (BNB)
    *   `crypto_xrp`: 瑞波币 (XRP)
    *   `crypto_ada`: 艾达币 (ADA)
    *   `crypto_doge`: 狗狗币 (DOGE)
    *   `crypto_sol`: 索拉纳币 (SOL)

##### 实现

```typescript
const cryptoCurrencyUnits = {
  crypto_btc: {
    id: 'crypto_btc',
    label: {
      'zh-CN': '比特币',
      'en-US': 'Bitcoin',
      'ja-JP': 'ビットコイン',
      'de-DE': 'Bitcoin'
    },
    symbol: '₿',
    ratio: 1, // 基准单位
    category: 'currency',
    system: 'crypto',
    knowledge: {
      'zh-CN': '比特币是一种去中心化的数字货币，不依赖于中央银行或任何单一管理员。',
      'en-US': 'Bitcoin is a decentralized digital currency, without a central bank or single administrator.'
    }
  },
  crypto_eth: {
    id: 'crypto_eth',
    label: {
      'zh-CN': '以太坊',
      'en-US': 'Ethereum',
      'ja-JP': 'イーサリアム',
      'de-DE': 'Ethereum'
    },
    symbol: 'Ξ',
    ratio: 0.06, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_usdt: {
    id: 'crypto_usdt',
    label: {
      'zh-CN': '泰达币',
      'en-US': 'Tether',
      'ja-JP': 'テザー',
      'de-DE': 'Tether'
    },
    symbol: '₮',
    ratio: 0.00003, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_bnb: {
    id: 'crypto_bnb',
    label: {
      'zh-CN': '币安币',
      'en-US': 'Binance Coin',
      'ja-JP': 'バイナンスコイン',
      'de-DE': 'Binance Coin'
    },
    symbol: 'BNB',
    ratio: 0.009, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_xrp: {
    id: 'crypto_xrp',
    label: {
      'zh-CN': '瑞波币',
      'en-US': 'XRP',
      'ja-JP': 'リップル',
      'de-DE': 'Ripple'
    },
    symbol: '✕',
    ratio: 0.00002, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_ada: {
    id: 'crypto_ada',
    label: {
      'zh-CN': '艾达币',
      'en-US': 'Cardano',
      'ja-JP': 'カルダノ',
      'de-DE': 'Cardano'
    },
    symbol: '₳',
    ratio: 0.00004, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_doge: {
    id: 'crypto_doge',
    label: {
      'zh-CN': '狗狗币',
      'en-US': 'Dogecoin',
      'ja-JP': 'ドージコイン',
      'de-DE': 'Dogecoin'
    },
    symbol: 'Ð',
    ratio: 0.000005, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  },
  crypto_sol: {
    id: 'crypto_sol',
    label: {
      'zh-CN': '索拉纳币',
      'en-US': 'Solana',
      'ja-JP': 'ソラナ',
      'de-DE': 'Solana'
    },
    symbol: '◎',
    ratio: 0.0007, // 汇率会变动，这里仅作示例
    category: 'currency',
    system: 'crypto'
  }
} as const;
```

##### 知识点

*   **定义**: 加密货币是一种使用密码学技术保护交易安全并控制新单位创建的数字资产。
*   **去中心化**: 加密货币通常是去中心化的，不依赖于中央机构发行或管理。
*   **区块链**: 大多数加密货币基于区块链技术，区块链是一种分布式账本技术。
*   **波动性**: 加密货币的价格波动性很大，可能受到多种因素的影响。
*   **挖矿**: 许多加密货币通过“挖矿”过程创建新单位，挖矿通常涉及解决复杂的计算问题。
*   **钱包**: 加密货币存储在数字钱包中，数字钱包可以是软件钱包、硬件钱包或纸钱包。

## 3. 转换规范

### 3.1 精度控制

```typescript
const PRECISION_CONFIG = {
  DEFAULT_PRECISION: 15, // 默认计算精度
  DISPLAY_PRECISION: 10, // 默认显示精度
  ZERO_THRESHOLD: 1e-20, // 零值判断阈值
  SCI_NOTATION_THRESHOLD: 1e15 // 科学计数法显示阈值
};

function formatValue(value: number, unit: Unit): string {
  if (Math.abs(value) < PRECISION_CONFIG.ZERO_THRESHOLD) {
    return '0';
  }
  if (Math.abs(value) >= PRECISION_CONFIG.SCI_NOTATION_THRESHOLD) {
    return value.toExponential(unit.precision ?? PRECISION_CONFIG.DISPLAY_PRECISION);
  }
  return value.toPrecision(unit.precision ?? PRECISION_CONFIG.DISPLAY_PRECISION);
}

function roundToSignificantDigits(value: number, digits: number): number {
  if (value === 0) return 0;
  const magnitude = Math.floor(Math.log10(Math.abs(value)));
  const scale = Math.pow(10, digits - magnitude - 1);
  return Math.round(value * scale) / scale;
}
```

### 3.2 转换函数

```typescript
interface ConversionResult {
  value: number;
  formatted: string;
  unit: Unit;
  error?: string;
}

function convert(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
  options?: {
    precision?: number;
    roundingMode?: 'round' | 'floor' | 'ceil';
  }
): ConversionResult {
  try {
    // 检查单位类别
    if (fromUnit.category !== toUnit.category) {
      throw new Error('Cannot convert between different unit categories');
    }

    // 转换到基准单位
    let baseValue = fromUnit.toBase
      ? fromUnit.toBase(value)
      : value * fromUnit.ratio;

    // 从基准单位转换到目标单位
    let resultValue = toUnit.fromBase
      ? toUnit.fromBase(baseValue)
      : baseValue / toUnit.ratio;

    // 应用精度控制
    if (options?.precision) {
      resultValue = roundToSignificantDigits(resultValue, options.precision);
    }

    // 应用舍入模式
    if (options?.roundingMode) {
        switch (options.roundingMode) {
            case 'floor':
                resultValue = Math.floor(resultValue);
                break;
            case 'ceil':
                resultValue = Math.ceil(resultValue);
                break;
            default: // 默认四舍五入或其他的舍入策略
                resultValue = Math.round(resultValue);
        }
    }

    return {
      value: resultValue,
      formatted: formatValue(resultValue, toUnit),
      unit: toUnit
    };
  } catch (error) {
    return {
      value: NaN,
      formatted: 'Error',
      unit: toUnit,
      error: error.message
    };
  }
}
```

### 3.3 错误处理

```typescript
class UnitConversionError extends Error {
  constructor(
    public message: string,
    public fromUnit: Unit,
    public toUnit: Unit,
    public value: number
  ) {
    super(message);
    this.name = 'UnitConversionError';
  }
}

function validateConversion(value: number, fromUnit: Unit, toUnit: Unit): void {
  // 检查单位有效性
  if (!fromUnit || !toUnit) {
    throw new UnitConversionError('Invalid unit specified', fromUnit, toUnit, value);
  }

  // 检查数值有效性
  if (!Number.isFinite(value)) {
    throw new UnitConversionError('Invalid value for conversion', fromUnit, toUnit, value);
  }

  // 检查单位兼容性
  if (fromUnit.category !== toUnit.category) {
    throw new UnitConversionError(
      `Cannot convert between ${fromUnit.category} and ${toUnit.category}`,
      fromUnit,
      toUnit,
      value
    );
  }
}
```

### 3.4 最佳实践

#### 精度控制

*   内部计算使用高精度（15位有效数字）。
*   显示结果时使用适当精度（默认10位）。
*   对于特殊单位使用自定义精度。
*   处理极小值和极大值时使用科学计数法。

#### 转换流程

*   始终通过基准单位进行转换。
*   使用 `ratio` 属性进行简单转换。
*   使用 `toBase`/`fromBase` 函数处理非线性转换。
*   保持中间计算的高精度。

#### 错误处理

*   验证输入值的有效性。
*   检查单位类别的兼容性。
*   处理溢出和精度损失。
*   提供详细的错误信息。

#### 显示格式

*   根据区域设置选择适当的分隔符。
*   使用合适的单位符号。
*   在必要时使用科学计数法。
*   支持自定义格式化选项。

## 4. 维护指南

### 4.1 添加新单位检查清单

*   [ ] 单位ID符合命名规范
    *   使用小写字母和下划线
    *   包含正确的系统前缀
    *   复合单位使用 `_per_` 连接
*   [ ] 包含所有必需的属性
    *   `id`、`label`、`symbol`、`ratio`
    *   `category`、`system`
    *   可选：`precision`、`knowledge`
*   [ ] 提供多语言标签
    *   至少包含 `zh-CN` 和 `en-US`
    *   建议添加 `ja-JP` 和 `de-DE`
    *   确保翻译准确性
*   [ ] 验证转换关系
    *   确认转换比率正确性
    *   测试非线性转换函数
    *   验证精度要求
*   [ ] 添加单位知识点
    *   基本定义和历史
    *   使用场景和限制
    *   特殊注意事项
*   [ ] 更新相关文档
    *   添加到单位列表
    *   更新转换关系
    *   补充使用说明

### 4.2 代码审查重点

*   **命名规范**
    *   系统前缀正确性
    *   单位名称规范性
    *   复合单位格式
*   **属性完整性**
    *   必需属性是否齐全
    *   可选属性是否合理
    *   多语言支持完整性
*   **转换逻辑**
    *   基准单位转换正确性
    *   非线性转换函数实现
    *   精度控制合理性
*   **错误处理**
    *   输入验证完整性
    *   错误信息明确性
    *   异常处理合理性
*   **测试覆盖**
    *   基本功能测试
    *   边界条件测试
    *   错误场景测试

### 4.3 版本控制规范

*   **版本号管理**
    *   遵循语义化版本
    *   主版本号：不兼容的API修改
    *   次版本号：向下兼容的功能性新增
    *   修订号：向下兼容的问题修正
*   **更新日志**
    *   记录所有API变更
    *   说明破坏性更改
    *   标注废弃特性
*   **分支策略**
    *   `master`/`main`: 稳定版本
    *   `develop`: 开发版本
    *   `feature/*`: 新功能开发
    *   `hotfix/*`: 紧急修复
*   **代码提交**
    *   使用清晰的提交信息
    *   关联相关问题
    *   包含必要的测试

### 4.4 文档维护

*   **README更新**
    *   安装和使用说明
    *   基本示例代码
    *   常见问题解答
*   **API文档**
    *   接口说明完整
    *   参数类型明确
    *   示例代码更新
*   **更新日志**
    *   版本更新说明
    *   破坏性变更警告
    *   升级建议

### 4.5 性能优化

*   **计算优化**
    *   减少重复计算
    *   优化转换路径
    *   使用缓存机制
*   **内存管理**
    *   控制对象创建
    *   及时释放资源
    *   避免内存泄漏
*   **并发处理**
    *   线程安全性
    *   异步转换支持
    *   批量处理优化

## 5. 迁移指南

### 5.1 命名迁移

1. **旧命名格式到新命名格式的映射**

    ```typescript
    const legacyUnitMap = {
      // 长度单位
      'meter': 'metric_meter',
      'foot': 'imperial_foot',
      'li': 'chinese_li',

      // 重量单位
      'kilogram': 'metric_kilogram',
      'pound': 'imperial_pound',
      'jin': 'chinese_jin',

      // 体积单位
      'liter': 'metric_liter',
      'gallon': 'imperial_gallon',
      'sheng': 'chinese_sheng',

      // 速度单位
      'meterPerSecond': 'metric_meter_per_second',
      'kilometerPerHour': 'metric_kilometer_per_hour',
      'milePerHour': 'imperial_mile_per_hour',
      
      // 数据传输速率
      'bitPerSecond': 'decimal_bit_per_second',
      'bytePerSecond': 'decimal_byte_per_second'
    };

    ```typescript
   // 速度单位
   'meterPerSecond': 'metric_meter_per_second',
   'kilometerPerHour': 'metric_kilometer_per_hour',
   'milePerHour': 'imperial_mile_per_hour',

   // 数据传输速率
   'bitPerSecond': 'decimal_bit_per_second',
   'bytePerSecond': 'decimal_byte_per_second'
}
```

2. **复合单位迁移规则**

    ```typescript
    const legacyCompoundUnitMap = {
      // 速度单位
      'meterPerSecond': 'metric_meter_per_second',
      'kilometerPerHour': 'metric_kilometer_per_hour',
      'milePerHour': 'imperial_mile_per_hour',

      // 数据传输速率
      'bitPerSecond': 'decimal_bit_per_second',
      'bytePerSecond': 'decimal_byte_per_second'
    };
    ```

    将旧版本中所有复合单位，根据以上示例，统一使用`_per_`连接。

### 5.2 属性迁移

1. **基本属性迁移**

    ```typescript
    // 旧格式
    const oldUnit = {
      id: 'meter',
      label: '米',
      symbol: 'm',
      ratio: 1
    };

    // 新格式
    const newUnit = {
      id: 'metric_meter',
      label: {
        'zh-CN': '米',
        'en-US': 'meter',
        'ja-JP': 'メートル',
        'de-DE': 'Meter'
      },
      symbol: 'm',
      ratio: 1,
      category: 'length',
      system: 'metric'
    };
    ```

2. **扩展属性迁移**

    ```typescript
    // 添加知识点
    knowledge: {
      'zh-CN': '详细的中文说明...',
      'en-US': 'Detailed English description...'
    }

    // 添加精度控制
    precision: 4,
    preferred_locales: ['zh-CN', 'en-US']
    ```

### 5.3 转换函数迁移

1. **简单转换迁移**

    ```typescript
    // 旧格式
    function convert(value: number, fromUnit: any, toUnit: any): number {
      return value * (fromUnit.ratio / toUnit.ratio);
    }

    // 新格式
    function convert(value: number, fromUnit: Unit, toUnit: Unit, options?: { precision?: number, roundingMode?: 'round' | 'floor' | 'ceil' }): ConversionResult {
        try {
          // 检查单位类别
          if (fromUnit.category !== toUnit.category) {
            throw new Error('Cannot convert between different unit categories');
          }
      
          // 转换到基准单位
          let baseValue = fromUnit.toBase
            ? fromUnit.toBase(value)
            : value * fromUnit.ratio;
      
          // 从基准单位转换到目标单位
          let resultValue = toUnit.fromBase
            ? toUnit.fromBase(baseValue)
            : baseValue / toUnit.ratio;
      
          // 应用精度控制
          if (options?.precision) {
            resultValue = roundToSignificantDigits(resultValue, options.precision);
          }
      
          // 应用舍入模式
          if (options?.roundingMode) {
              switch (options.roundingMode) {
                  case 'floor':
                      resultValue = Math.floor(resultValue);
                      break;
                  case 'ceil':
                      resultValue = Math.ceil(resultValue);
                      break;
                  default: // 默认四舍五入或其他的舍入策略
                      resultValue = Math.round(resultValue);
              }
          }
      
          return {
            value: resultValue,
            formatted: formatValue(resultValue, toUnit),
            unit: toUnit
          };
        } catch (error) {
          return {
            value: NaN,
            formatted: 'Error',
            unit: toUnit,
            error: error.message
          };
        }
      }
    ```

2. **非线性转换迁移**

    ```typescript
    // 温度转换示例
    const temperatureConversion = {
      // 旧格式
      celsiusToFahrenheit: (c) => c * 9/5 + 32,

      // 新格式
      metric_celsius: {
        toBase: (value) => value,
        fromBase: (value) => value
      },
      us_fahrenheit: {
        toBase: (f) => (f - 32) * 5/9,
        fromBase: (c) => c * 9/5 + 32
      }
    };
    ```

### 5.4 向后兼容性

1. **API兼容层**

    ```typescript
    // 兼容旧版API
    export function legacyConvert(value: number, fromUnitId: string, toUnitId: string): number {
      const fromUnit = findUnit(legacyUnitMap[fromUnitId] ?? fromUnitId);
      const toUnit = findUnit(legacyUnitMap[toUnitId] ?? toUnitId);
      // 使用新版 convert 函数
      return convert(value, fromUnit, toUnit).value;
    }
    ```

2. **错误处理兼容**

    ```typescript
    function handleLegacyErrors(error: unknown): void {
      if (error instanceof UnitConversionError) {
        // 新错误格式转换为旧格式
        throw new Error(error.message);
      }
      throw error;
    }
    ```

### 5.5 迁移步骤

1. **准备阶段**

    *   备份现有代码
    *   创建迁移分支
    *   准备回滚方案

2. **执行迁移**

    *   更新单位定义
    *   修改转换函数
    *   添加新属性
    *   实现兼容层

3. **测试验证**

    *   单元测试覆盖
    *   集成测试验证
    *   性能测试对比
    *   兼容性测试

4. **部署上线**

    *   分阶段部署
    *   监控异常
    *   收集反馈
    *   准备回滚方案



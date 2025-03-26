import type { Translation } from '../types'

const zhCN: Translation = {
  common: {
    title: '单位转换',
    description: '一个功能强大的在线单位转换工具，支持各种单位转换。',
    loading: '加载中...',
    error: '错误',
    copy: '复制',
    copied: '已复制',
    settings: '设置',
    language: '语言',
    theme: '主题',
    about: '关于',
    contact: '联系我们',
    home: '首页',
    selectType: '选择转换类型',
    selectLanguage: '选择语言',
    pageNotFound: '页面未找到',
    pageNotFoundDesc: '抱歉，您访问的页面不存在。',
    backToHome: '返回首页',
    copyright: '版权所有',
    enterValue: '输入值',
    from: '从',
    to: '到',
    categories: {
      basic: '基本单位',
      area_volume: '面积和体积',
      time_related: '时间相关',
      physics: '物理单位',
      data: '数据单位',
      others: '其他单位'
    },
    instructions: {
      title: '使用说明',
      steps: {
        input: '输入要转换的值',
        select: '选择输入值的单位',
        auto: '系统将自动计算并显示其他单位的对应值',
        copy: '点击任意结果可快速复制带单位的值'
      },
      features: {
        title: '功能特点',
        range: {
          title: '支持的值范围',
          description: '支持最多20位数字（包括小数点），最多10位小数。对于非常大或非常小的数字，会自动使用科学计数法。'
        },
        copy: {
          title: '复制功能',
          description: '点击任意转换结果可复制值和单位，方便粘贴。'
        },
        paste: {
          title: '粘贴功能',
          description: '支持粘贴带单位的值，系统会自动提取数字部分。'
        }
      }
    },
    customOrder: '自定义排序',
    byName: '按名称',
    byCreatedTime: '按创建时间',
    byLastUsed: '按最后使用时间',
    clearAll: '清除全部',
    noFavorites: '暂无收藏',
    remove: '删除',
    clearConfirmTitle: '清除所有收藏',
    clearConfirmMessage: '确定要删除所有收藏吗？此操作无法撤销。',
    cancel: '取消',
    confirm: '确定',
    addFavorite: '添加到收藏',
    removeFavorite: '从收藏中移除',
    enterFavoriteName: '为此收藏输入名称',
    favoriteNamePlaceholder: '例如：米转英尺',
    showFavorites: '显示收藏',
    hideFavorites: '隐藏收藏',
    selectUnit: '选择单位',
    inputValue: '输入值',
    convertResult: '转换结果',
    searchUnit: '搜索单位...',
    length: '长度',
    conversionHistory: '转换历史',
    clearHistory: '清除历史',
    confirmClear: '确定要清除所有历史记录吗？',
    delete: '删除',
    links: '友情链接'
  },
  units: {
    length: {
      title: '长度',
      description: '在不同长度单位之间转换',
      units: {
        metric_meter: '米',
        metric_kilometer: '千米',
        metric_centimeter: '厘米',
        metric_millimeter: '毫米',
        imperial_inch: '英寸',
        imperial_foot: '英尺',
        imperial_yard: '码',
        imperial_mile: '英里',
        astronomical_light_year: '光年',
        astronomical_unit: '天文单位',
        metric_decimeter: '分米',
        metric_micrometer: '微米',
        metric_nanometer: '纳米',
        metric_picometer: '皮米',
        nautical_mile: '海里',
        nautical_fathom: '寻'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '光年不是时间单位，而是光在一年内传播的距离。',
          '天文单位（AU）基于地球到太阳的平均距离。',
          '米最初被定义为从北极到赤道距离的千万分之一。',
          '现在米是通过真空中光速来定义的。'
        ]
      }
    },
    area: {
      title: '面积',
      description: '在不同面积单位之间转换',
      units: {
        metric_square_meter: '平方米',
        metric_square_kilometer: '平方千米',
        metric_square_centimeter: '平方厘米',
        metric_square_millimeter: '平方毫米',
        imperial_square_inch: '平方英寸',
        imperial_square_foot: '平方英尺',
        imperial_square_yard: '平方码',
        imperial_square_mile: '平方英里',
        metric_hectare: '公顷',
        imperial_acre: '英亩',
        metric_square_decimeter: '平方分米',
        metric_are: '公亩',
        traditional_mu: '亩',
        traditional_qing: '倾'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1平方米等于10.7639平方英尺。',
          '1公顷等于10,000平方米。'
        ]
      }
    },
    volume: {
      title: '体积',
      description: '在不同体积单位之间转换',
      units: {
        metric_cubic_meter: '立方米',
        metric_cubic_kilometer: '立方千米',
        metric_cubic_centimeter: '立方厘米',
        metric_cubic_millimeter: '立方毫米',
        metric_cubic_decimeter: '立方分米',
        metric_liter: '升',
        metric_milliliter: '毫升',
        imperial_gallon: '英制加仑',
        imperial_quart: '英制夸脱',
        imperial_pint: '英制品脱',
        us_cup: '美制杯',
        imperial_fluid_ounce: '英制液盎司',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙',
        imperial_cubic_yard: '立方码',
        imperial_cubic_foot: '立方英尺',
        imperial_cubic_inch: '立方英寸',
        chinese_dan: '担',
        chinese_dou: '斗',
        chinese_sheng: '升',
        japanese_koku: '石',
        japanese_to: '斗',
        japanese_sho: '升',
        japanese_go: '合',
        industrial_oil_barrel: '油桶',
        industrial_beer_barrel: '啤酒桶'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1升等于1000毫升。',
          '1加仑等于3.78541升。'
        ]
      }
    },
    weight: {
      title: '重量',
      description: '在不同重量单位之间转换',
      units: {
        metric_kilogram: '千克',
        metric_tonne: '吨',
        metric_gram: '克',
        metric_milligram: '毫克',
        metric_microgram: '微克',
        imperial_pound: '磅',
        imperial_ounce: '盎司',
        imperial_stone: '石',
        imperial_long_ton: '长吨',
        us_short_ton: '短吨',
        jewelry_carat: '克拉',
        jewelry_grain: '谷',
        traditional_jin: '斤',
        traditional_liang: '两',
        traditional_qian: '钱',
        medical_grain: '药用谷',
        medical_dram: '药用盎司',
        medical_ounce: '药用盎司'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1千克等于1000克。',
          '1磅等于0.453592千克。'
        ]
      }
    },
    temperature: {
      title: '温度',
      description: '在不同温度单位之间转换',
      units: {
        scientific_kelvin: '开尔文',
        metric_celsius: '摄氏度',
        us_fahrenheit: '华氏度',
        scientific_rankine: '兰金',
        historical_reaumur: '列氏度',
        meteorological_celsius: '气象摄氏度',
        meteorological_fahrenheit: '气象华氏度',
        industrial_celsius: '工业摄氏度',
        industrial_fahrenheit: '工业华氏度'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '0摄氏度等于32华氏度。',
          '绝对零度为-273.15摄氏度。'
        ]
      }
    },
    time: {
      title: '时间',
      description: '在不同时间单位之间转换',
      units: {
        metric_second: '秒',
        metric_minute: '分钟',
        metric_hour: '小时',
        metric_day: '天',
        metric_week: '周',
        metric_month: '月',
        metric_year: '年',
        metric_decade: '十年',
        metric_century: '世纪',
        scientific_millisecond: '毫秒',
        scientific_microsecond: '微秒',
        scientific_nanosecond: '纳秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1分钟等于60秒。',
          '1年大约等于365.25天。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '在不同速度单位之间转换',
      units: {
        meter_per_second: '米每秒',
        kilometer_per_hour: '千米每小时',
        mile_per_hour: '英里每小时',
        foot_per_second: '英尺每秒',
        knot: '节',
        mach: '马赫',
        light_speed: '光速'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1米/秒等于3.6千米/小时。',
          '1节等于1.852千米/小时。',
          '马赫是音速的倍数，在标准大气压下约为340米/秒。',
          '光速是宇宙中最快的速度，约为299,792,458米/秒。'
        ]
      }
    },
    pressure: {
      title: '压力',
      description: '在不同压力单位之间转换',
      units: {
        pascal: '帕斯卡',
        kilopascal: '千帕',
        bar: '巴',
        psi: '磅每平方英寸',
        atmosphere: '大气压'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1大气压等于101325帕斯卡。',
          '1托等于133.322帕斯卡。'
        ]
      }
    },
    energy: {
      title: '能量',
      description: '在不同能量单位之间转换',
      units: {
        joule: '焦耳',
        kilojoule: '千焦',
        calorie: '卡路里',
        kilocalorie: '千卡',
        watt_hour: '瓦时',
        kilowatt_hour: '千瓦时'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1千焦等于1000焦耳。',
          '1卡路里等于4.184焦耳。'
        ]
      }
    },
    power: {
      title: '功率',
      description: '在不同功率单位之间转换',
      units: {
        watt: '瓦特',
        kilowatt: '千瓦',
        horsepower: '马力'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1千瓦等于1000瓦特。',
          '1马力等于745.7瓦特。'
        ]
      }
    },
    data: {
      title: '数据大小',
      description: '在不同数字数据单位之间转换',
      units: {
        bit: '比特',
        kilobit: '千比特',
        megabit: '兆比特',
        gigabit: '吉比特',
        terabit: '太比特',
        petabit: '拍比特',
        byte: '字节',
        kilobyte: '千字节',
        megabyte: '兆字节',
        gigabyte: '吉字节',
        terabyte: '太字节',
        petabyte: '拍字节',
        kibibit: '千比特',
        mebibit: '兆比特',
        gibibit: '吉比特',
        tebibit: '太比特',
        pebibit: '拍比特',
        kibibyte: '千字节',
        mebibyte: '兆字节',
        gibibyte: '吉字节',
        tebibyte: '太字节',
        pebibyte: '拍字节'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1字节等于8比特。',
          '1千字节等于1024字节。'
        ]
      }
    },
    data_rate: {
      title: '数据传输速率',
      description: '在不同数据传输速率单位之间转换',
      units: {
        bits_per_second: '比特每秒',
        kilobits_per_second: '千比特每秒',
        megabits_per_second: '兆比特每秒',
        gigabits_per_second: '吉比特每秒',
        terabits_per_second: '太比特每秒',
        bytes_per_second: '字节每秒',
        kilobytes_per_second: '千字节每秒',
        megabytes_per_second: '兆字节每秒',
        gigabytes_per_second: '吉字节每秒',
        terabytes_per_second: '太字节每秒',
        kibibits_per_second: '千比特每秒',
        mebibits_per_second: '兆比特每秒',
        gibibits_per_second: '吉比特每秒',
        tebibits_per_second: '太比特每秒',
        kibibytes_per_second: '千字节每秒',
        mebibytes_per_second: '兆字节每秒',
        gibibytes_per_second: '吉字节每秒',
        tebibytes_per_second: '太字节每秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1字节/秒等于8比特/秒。',
          '1兆比特/秒等于1,000,000比特/秒。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '在不同角度单位之间转换',
      units: {
        degree: '度',
        radian: '弧度',
        gradian: '梯度',
        arcminute: '分',
        arcsecond: '秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '360度等于2π弧度。',
          '1度等于60角分。'
        ]
      }
    },
    force: {
      title: '力',
      description: '在不同力单位之间转换',
      units: {
        newton: '牛顿',
        kilonewton: '千牛',
        dyne: '达因',
        pound_force: '磅力'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1牛顿是使1千克质量产生1米/秒²加速度的力。',
          '1磅力等于4.44822牛顿。'
        ]
      }
    },
    density: {
      title: '密度',
      description: '在不同密度单位之间转换',
      units: {
        kilogram_per_cubic_meter: '千克每立方米',
        gram_per_cubic_centimeter: '克每立方厘米',
        pound_per_cubic_foot: '磅每立方英尺',
        pound_per_cubic_inch: '磅每立方英寸',
        kilogram_per_liter: '千克每升',
        gram_per_milliliter: '克每毫升',
        pound_per_gallon: '磅每加仑',
        ounce_per_cubic_inch: '盎司每立方英寸'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '水的密度约为1千克/立方米。',
          '1克/立方厘米等于1000千克/立方米。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '在不同流量单位之间转换',
      units: {
        cubic_meter_per_second: '立方米每秒',
        liter_per_minute: '升每分钟',
        gallon_per_minute: '加仑每分钟'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1立方米/秒等于1000升/秒。',
          '1加仑/分钟约等于0.06309升/秒。'
        ]
      }
    },
    torque: {
      title: '扭矩',
      description: '在不同扭矩单位之间转换',
      units: {
        metric_newton_meter: '牛顿·米',
        metric_newton_centimeter: '牛顿·厘米',
        imperial_pound_foot: '磅·英尺',
        imperial_pound_inch: '磅·英寸',
        scientific_kilogram_force_meter: '千克力·米',
        scientific_kilogram_force_centimeter: '千克力·厘米'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '扭矩是力与力臂的乘积。',
          '汽车引擎的扭矩常用牛顿·米表示。',
          '扭矩对机械设计很重要。',
          '螺丝的紧固扭矩常用磅·英寸表示。'
        ]
      }
    },
    frequency: {
      title: '频率',
      description: '在不同频率单位之间转换',
      units: {
        hertz: '赫兹',
        kilohertz: '千赫',
        megahertz: '兆赫',
        gigahertz: '吉赫'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1赫兹等于1周/秒。',
          '1转/分钟等于0.01667赫兹。'
        ]
      }
    },
    cooking: {
      title: '烹饪',
      description: '在不同烹饪测量单位之间转换',
      units: {
        us_fluid_ounce: '美制液盎司',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙',
        imperial_fluid_ounce: '英制液盎司',
        imperial_tablespoon: '英制汤匙',
        imperial_teaspoon: '英制茶匙',
        chinese_bowl: '中国碗',
        chinese_cup: '中国杯',
        chinese_tablespoon: '中国汤匙',
        chinese_teaspoon: '中国茶匙',
        japanese_cup: '日本杯',
        japanese_tablespoon: '日本汤匙',
        japanese_teaspoon: '日本茶匙'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1美制杯等于240毫升。',
          '1公制茶匙等于5毫升。'
        ]
      }
    },
    numeral: {
      title: '数字基数',
      description: '在不同数字基数（十进制、二进制、八进制、十六进制）之间转换',
      units: {
        decimal: '十进制',
        binary: '二进制',
        octal: '八进制',
        hexadecimal: '十六进制'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '二进制是计算机内部使用的基本数字系统。',
          '十六进制常用于编程中表示颜色和内存地址。'
        ]
      }
    }
  },
  buttons: {
    convert: '转换',
    clear: '清除',
    swap: '交换',
    copy: '复制'
  },
  messages: {
    copied: '已复制到剪贴板',
    error: '发生错误',
    invalidNumber: '请输入有效的数字',
    selectUnit: '请选择单位',
    conversionError: '转换失败',
    invalidTemperature: '无效的温度值'
  },
  errors: {
    invalidInput: '请输入有效的数值',
    invalidFormat: '输入格式不正确',
    conversionFailed: '转换失败，请重试',
    copyFailed: '复制失败，请重试'
  },
  footer: {
    about: '关于我们',
    description: '一个功能强大的在线单位转换工具。',
    contact: '联系我们',
    email: 'support@metric-converter.com',
    legal: '法律信息',
    changelog: '开发日志'
  },
  converter: {
    title: '单位转换器',
    description: '在线单位转换工具',
    from: '从',
    to: '到',
    value: '数值',
    result: '结果',
    instructions: {
      title: '使用说明',
      steps: [
        '输入要转换的数值',
        '选择输入值的单位',
        '系统会自动计算并显示对应的转换结果',
        '点击任意结果可以快速复制数值'
      ]
    },
    limitations: {
      title: '使用限制',
      items: [
        '支持最多20位数字（包含小数点）',
        '最多保留10位小数',
        '非常大或非常小的数字会使用科学计数法显示'
      ]
    },
    knowledge: {
      title: '相关知识',
      items: [
        '公制单位是国际标准单位制',
        '英制单位主要在英美等国家使用',
        '不同单位系统之间的转换需要特别注意精度'
      ]
    }
  },
  Links: {
    title: '友情链接',
    description: '探索我们的合作伙伴网站和资源',
  }
}

export default zhCN 
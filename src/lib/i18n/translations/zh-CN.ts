import type { Translation } from '../types'

const zhCN: Translation = {
  common: {
    title: '单位转换器',
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
    delete: '删除'
  },
  units: {
    length: {
      title: '长度',
      description: '在不同长度单位之间转换 (ISO 31-1)',
      units: {
        meter: '米',
        kilometer: '千米',
        centimeter: '厘米',
        millimeter: '毫米',
        inch: '英寸',
        foot: '英尺',
        yard: '码',
        mile: '英里',
        light_year: '光年',
        astronomical_unit: '天文单位',
        decimeter: '分米',
        micrometer: '微米',
        nanometer: '纳米',
        picometer: '皮米'
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
        square_meter: '平方米',
        square_kilometer: '平方千米',
        square_centimeter: '平方厘米',
        square_millimeter: '平方毫米',
        square_inch: '平方英寸',
        square_foot: '平方英尺',
        square_yard: '平方码',
        square_mile: '平方英里',
        hectare: '公顷',
        acre: '英亩'
      }
    },
    volume: {
      title: '体积',
      description: '在不同体积单位之间转换',
      units: {
        cubic_meter: '立方米',
        cubic_kilometer: '立方千米',
        cubic_centimeter: '立方厘米',
        cubic_millimeter: '立方毫米',
        cubic_inch: '立方英寸',
        cubic_foot: '立方英尺',
        cubic_yard: '立方码',
        liter: '升',
        milliliter: '毫升',
        gallon: '加仑',
        quart: '夸脱',
        pint: '品脱',
        cup: '杯',
        fluid_ounce: '液量盎司',
        tablespoon: '汤匙',
        teaspoon: '茶匙'
      }
    },
    weight: {
      title: '重量',
      description: '在不同重量单位之间转换',
      units: {
        kilogram: '千克',
        gram: '克',
        milligram: '毫克',
        metric_ton: '公吨',
        pound: '磅',
        ounce: '盎司',
        carat: '克拉',
        atomic_mass_unit: '原子质量单位'
      }
    },
    temperature: {
      title: '温度',
      description: '在不同温度单位之间转换',
      units: {
        celsius: '摄氏度',
        fahrenheit: '华氏度',
        kelvin: '开尔文'
      }
    },
    time: {
      title: '时间',
      description: '在不同时间单位之间转换',
      units: {
        second: '秒',
        minute: '分钟',
        hour: '小时',
        day: '天',
        week: '周',
        month: '月',
        year: '年',
        decade: '十年',
        century: '世纪'
      }
    },
    speed: {
      title: '速度',
      description: '在不同速度单位之间转换',
      units: {
        meter_per_second: '米/秒',
        kilometer_per_hour: '千米/小时',
        mile_per_hour: '英里/小时',
        knot: '节',
        foot_per_second: '英尺/秒'
      }
    },
    pressure: {
      title: '压力',
      description: '在不同压力单位之间转换',
      units: {
        pascal: '帕斯卡',
        kilopascal: '千帕',
        megapascal: '兆帕',
        bar: '巴',
        atmosphere: '标准大气压',
        torr: '托',
        pound_per_square_inch: '磅/平方英寸'
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
        kilowatt_hour: '千瓦时',
        electron_volt: '电子伏特',
        british_thermal_unit: '英热单位',
        us_therm: '美制热量单位'
      }
    },
    power: {
      title: '功率',
      description: '在不同功率单位之间转换',
      units: {
        watt: '瓦特',
        kilowatt: '千瓦',
        megawatt: '兆瓦',
        horsepower: '马力'
      }
    },
    data: {
      title: '数据',
      description: '在不同数据单位之间转换',
      units: {
        bit: '比特',
        byte: '字节',
        kilobyte: '千字节',
        megabyte: '兆字节',
        gigabyte: '吉字节',
        terabyte: '太字节',
        petabyte: '拍字节'
      }
    },
    data_rate: {
      title: '数据传输速率',
      description: '在不同数据传输速率单位之间转换',
      units: {
        bit_per_second: '比特/秒',
        byte_per_second: '字节/秒',
        kilobit_per_second: '千比特/秒',
        megabit_per_second: '兆比特/秒',
        gigabit_per_second: '吉比特/秒',
        terabit_per_second: '太比特/秒'
      }
    },
    angle: {
      title: '角度',
      description: '在不同角度单位之间转换',
      units: {
        degree: '度',
        radian: '弧度',
        gradian: '百分度',
        arcminute: '角分',
        arcsecond: '角秒'
      }
    },
    force: {
      title: '力',
      description: '在不同力单位之间转换',
      units: {
        newton: '牛顿',
        kilonewton: '千牛顿',
        dyne: '达因',
        pound_force: '磅力',
        kilogram_force: '千克力'
      }
    },
    density: {
      title: '密度',
      description: '在不同密度单位之间转换',
      units: {
        kilogram_per_cubic_meter: '千克/立方米',
        gram_per_cubic_centimeter: '克/立方厘米',
        pound_per_cubic_foot: '磅/立方英尺'
      }
    },
    flow: {
      title: '流量',
      description: '在不同流量单位之间转换',
      units: {
        cubic_meter_per_second: '立方米/秒',
        liter_per_second: '升/秒',
        cubic_foot_per_second: '立方英尺/秒',
        gallon_per_minute: '加仑/分钟'
      }
    },
    torque: {
      title: '扭矩',
      description: '在不同扭矩单位之间转换',
      units: {
        newton_meter: '牛顿米',
        pound_foot: '磅英尺',
        kilogram_meter: '千克米'
      }
    },
    frequency: {
      title: '频率',
      description: '在不同频率单位之间转换',
      units: {
        hertz: '赫兹',
        kilohertz: '千赫兹',
        megahertz: '兆赫兹',
        gigahertz: '吉赫兹',
        cycles_per_second: '周/秒',
        rpm: '转/分钟',
        bpm: '拍/分钟'
      }
    },
    currency: {
      title: '货币',
      description: '在不同货币之间转换',
      units: {
        usd: '美元',
        eur: '欧元',
        gbp: '英镑',
        jpy: '日元',
        cny: '人民币',
        krw: '韩元',
        inr: '印度卢比'
      }
    },
    cooking: {
      title: '烹饪',
      description: '在不同烹饪单位之间转换',
      units: {
        us_cup: '美制杯',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙',
        metric_cup: '公制杯',
        metric_tablespoon: '公制汤匙',
        metric_teaspoon: '公制茶匙'
      }
    },
    numeral: {
      title: '进制',
      description: '在不同进制之间转换',
      binary: {
        title: '二进制',
        description: '基于2的数字系统 (0-1)'
      },
      octal: {
        title: '八进制',
        description: '基于8的数字系统 (0-7)'
      },
      decimal: {
        title: '十进制',
        description: '基于10的数字系统 (0-9)'
      },
      hexadecimal: {
        title: '十六进制',
        description: '基于16的数字系统 (0-9, A-F)'
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
    description: '一个简单而强大的单位转换工具',
    contact: '联系我们',
    email: '邮箱',
    legal: '法律声明'
  },
  converter: {
    title: '单位转换器',
    description: '在不同单位之间进行转换',
    from: '从',
    to: '到',
    instructions: {
      title: '使用说明',
      steps: [
        '输入要转换的数值',
        '选择源单位',
        '选择目标单位',
        '查看转换结果'
      ]
    },
    limitations: {
      title: '使用限制',
      items: [
        '支持的最大数值为 1e308',
        '最多支持 15 位小数精度',
        '某些单位可能存在舍入误差'
      ]
    },
    knowledge: {
      title: '小知识',
      items: [
        '不同国家可能使用不同的计量单位系统',
        '国际单位制（SI）是最广泛使用的计量系统',
        '了解不同单位之间的转换可以帮助我们更好地理解世界'
      ]
    }
  }
}

export default zhCN 
import type { Translation } from '../types'

const zh: Translation = {
  common: {
    title: '单位转换器',
    description: '功能强大的在线单位转换工具，支持各种单位的转换计算。',
    selectType: '选择转换类型',
    selectLanguage: '选择语言',
    pageNotFound: '页面未找到',
    pageNotFoundDesc: '抱歉，您访问的页面不存在。',
    backToHome: '返回首页',
    copyright: '版权所有。',
    categories: {
      basic: '基础单位',
      area_volume: '面积体积',
      time_related: '时间相关',
      physics: '物理单位',
      data: '数据单位',
      others: '其他单位'
    },
    instructions: {
      title: '使用说明',
      steps: {
        input: '在输入框中输入需要转换的数值',
        select: '选择输入值的单位',
        auto: '系统会自动计算并显示其他单位的对应值',
        copy: '点击结果可以快速复制带单位的数值'
      },
      features: {
        title: '功能说明',
        range: {
          title: '支持的数值范围',
          description: '最多支持20位数字（含小数点），最多10位小数。对于超大或超小的数字，会自动使用科学计数法显示。'
        },
        copy: {
          title: '复制功能',
          description: '点击任意转换结果可以复制对应的数值和单位，方便粘贴使用。'
        },
        paste: {
          title: '粘贴功能',
          description: '支持粘贴带单位的数值，系统会自动提取数字部分。'
        }
      }
    },
    customOrder: '自定义顺序',
    byName: '按名称',
    byCreatedTime: '按创建时间',
    byLastUsed: '按最近使用',
    clearAll: '清空全部',
    noFavorites: '暂无收藏',
    remove: '删除',
    clearConfirmTitle: '清空所有收藏',
    clearConfirmMessage: '确定要清空所有收藏吗？此操作无法撤销。',
    cancel: '取消',
    confirm: '确定',
    addFavorite: '添加到收藏',
    removeFavorite: '取消收藏',
    enterFavoriteName: '为收藏项命名',
    favoriteNamePlaceholder: '例如：米转英尺',
    showFavorites: '显示收藏',
    hideFavorites: '隐藏收藏',
    from: '从',
    to: '到',
    selectUnit: '选择单位',
    inputValue: '输入数值',
    convertResult: '转换结果',
    searchUnit: '搜索单位...'
  },
  units: {
    length: {
      title: '长度',
      description: '在不同长度单位之间转换',
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
        acre: '英亩',
        square_decimeter: '平方分米'
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
        cubic_decimeter: '立方分米',
        liter: '升',
        milliliter: '毫升',
        gallon: '加仑',
        quart: '夸脱',
        pint: '品脱',
        cup: '杯',
        fluid_ounce: '液量盎司',
        tablespoon: '汤匙',
        teaspoon: '茶匙',
        cubic_yard: '立方码',
        cubic_foot: '立方英尺',
        cubic_inch: '立方英寸'
      }
    },
    weight: {
      title: '重量',
      description: '在不同重量单位之间转换',
      units: {
        metric_ton: '公吨',
        kilogram: '千克',
        gram: '克',
        milligram: '毫克',
        microgram: '微克',
        imperial_ton: '英制吨',
        us_ton: '美制吨',
        stone: '英石',
        pound: '磅',
        ounce: '盎司',
        carat: '克拉'
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
    speed: {
      title: '速度',
      description: '在不同速度单位之间转换',
      units: {
        meter_per_second: '米/秒',
        kilometer_per_hour: '千米/时',
        mile_per_hour: '英里/时',
        foot_per_second: '英尺/秒',
        knot: '节',
        mach: '马赫',
        kilometer_per_second: '千米/秒',
        light_speed: '光速'
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
    pressure: {
      title: '压力',
      description: '在不同压力单位之间转换',
      units: {
        pascal: '帕斯卡',
        kilopascal: '千帕',
        bar: '巴',
        psi: '磅/平方英寸',
        atmosphere: '标准大气压'
      }
    },
    power: {
      title: '功率',
      description: '在不同功率单位之间转换',
      units: {
        watt: '瓦特',
        kilowatt: '千瓦',
        horsepower: '马力'
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
      }
    },
    force: {
      title: '力',
      description: '在不同力单位之间转换',
      units: {
        newton: '牛顿',
        kilonewton: '千牛顿',
        dyne: '达因',
        pound_force: '磅力'
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
        liter_per_minute: '升/分钟',
        gallon_per_minute: '加仑/分钟'
      }
    },
    torque: {
      title: '扭矩',
      description: '在不同扭矩单位之间转换',
      units: {
        newton_meter: '牛顿米',
        pound_foot: '磅英尺',
        kilogram_force_meter: '千克力米'
      }
    },
    data: {
      title: '数据大小',
      description: '在不同数据存储单位之间转换',
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
        kibibit: '二进制千比特',
        mebibit: '二进制兆比特',
        gibibit: '二进制吉比特',
        tebibit: '二进制太比特',
        pebibit: '二进制拍比特',
        kibibyte: '二进制千字节',
        mebibyte: '二进制兆字节',
        gibibyte: '二进制吉字节',
        tebibyte: '二进制太字节',
        pebibyte: '二进制拍字节'
      }
    },
    data_rate: {
      title: '数据传输速率',
      description: '在不同数据传输速率单位之间转换',
      units: {
        bits_per_second: '比特/秒',
        kilobits_per_second: '千比特/秒',
        megabits_per_second: '兆比特/秒',
        gigabits_per_second: '吉比特/秒',
        terabits_per_second: '太比特/秒',
        bytes_per_second: '字节/秒',
        kilobytes_per_second: '千字节/秒',
        megabytes_per_second: '兆字节/秒',
        gigabytes_per_second: '吉字节/秒',
        terabytes_per_second: '太字节/秒',
        kibibits_per_second: '二进制千比特/秒',
        mebibits_per_second: '二进制兆比特/秒',
        gibibits_per_second: '二进制吉比特/秒',
        tebibits_per_second: '二进制太比特/秒',
        kibibytes_per_second: '二进制千字节/秒',
        mebibytes_per_second: '二进制兆字节/秒',
        gibibytes_per_second: '二进制吉字节/秒',
        tebibytes_per_second: '二进制太字节/秒'
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
      description: '在不同烹饪计量单位之间转换',
      units: {
        milliliter: '毫升',
        liter: '升',
        us_cup: '美制杯',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙',
        imperial_cup: '英制杯',
        imperial_tablespoon: '英制汤匙',
        imperial_teaspoon: '英制茶匙'
      }
    },
    numeral: {
      title: '进制转换',
      description: '在不同进制之间转换数字（二进制、八进制、十进制、十六进制）',
      binary: {
        title: '二进制',
        description: '以2为基数的数制（0-1）'
      },
      octal: {
        title: '八进制',
        description: '以8为基数的数制（0-7）'
      },
      decimal: {
        title: '十进制',
        description: '以10为基数的数制（0-9）'
      },
      hexadecimal: {
        title: '十六进制',
        description: '以16为基数的数制（0-9，A-F）'
      }
    },
    frequency: {
      title: '频率',
      description: '在不同频率单位之间转换',
      units: {
        hertz: '赫兹',
        kilohertz: '千赫兹',
        megahertz: '兆赫兹',
        gigahertz: '吉赫兹'
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
    conversionError: '转换计算出错',
    invalidTemperature: '温度不能低于绝对零度'
  }
}

export default zh 
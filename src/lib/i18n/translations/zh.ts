import type { Translation } from '../types'

const zh: Translation = {
  common: {
    title: '单位转换器',
    description: '功能强大的在线单位转换工具，支持各种单位的转换计算。',
    loading: '加载中...',
    error: '错误',
    copy: '复制',
    copied: '已复制',
    settings: '设置',
    language: '语言',
    theme: '主题',
    about: '关于',
    contact: '联系',
    home: '首页',
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
    searchUnit: '搜索单位...',
    length: '长度'
  },
  units: {
    length: {
      title: '长度',
      description: '长度单位转换',
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
          '光年不是时间单位，而是距离单位，表示光在一年内传播的距离。',
          '天文单位（AU）是基于地球到太阳的平均距离。',
          '米的最初定义是地球子午线四分之一长度的千万分之一。',
          '现在，米是根据真空中光速来定义的。'
        ]
      }
    },
    area: {
      title: '面积',
      description: '面积单位转换',
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
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '一公顷等于10000平方米，相当于一个100米×100米的正方形面积。',
          '英亩最初是指一个农夫用一对牛一天能耕种的土地面积。',
          '平方英里是最大的英制面积单位之一，等于640英亩。'
        ]
      }
    },
    volume: {
      title: '体积',
      description: '体积单位转换',
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
        gallon: '加仑'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '一升等于一个边长为10厘米的立方体的体积。',
          '加仑有多种定义，美制加仑和英制加仑的容量是不同的。',
          '立方米是国际单位制中的基本体积单位。'
        ]
      }
    },
    weight: {
      title: '重量',
      description: '重量单位转换',
      units: {
        kilogram: '千克',
        gram: '克',
        milligram: '毫克',
        metric_ton: '公吨',
        pound: '磅',
        ounce: '盎司',
        carat: '克拉',
        atomic_mass_unit: '原子质量单位'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '克拉最初是以豆荚的重量为标准，现在精确定义为0.2克。',
          '原子质量单位是以碳-12原子质量的1/12为标准。',
          '千克是唯一以实物标准定义的基本单位，直到2019年才改用普朗克常数定义。'
        ]
      }
    },
    time: {
      title: '时间',
      description: '时间单位转换',
      units: {
        second: '秒',
        minute: '分钟',
        hour: '小时',
        day: '天',
        week: '周',
        month: '月',
        year: '年',
        decade: '十年',
        century: '世纪',
        millisecond: '毫秒',
        microsecond: '微秒',
        nanosecond: '纳秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '秒的定义是基于铯-133原子振动的9,192,631,770个周期。',
          '一年的精确长度是365.242190419天。',
          '原子钟的精度如此之高，需要数百万年才会差一秒。'
        ]
      }
    },
    temperature: {
      title: '温度',
      description: '温度单位转换',
      units: {
        celsius: '摄氏度',
        fahrenheit: '华氏度',
        kelvin: '开尔文',
        rankine: '兰金',
        reaumur: '列氏度'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '开尔文是唯一以人名命名的基本单位。',
          '绝对零度是-273.15°C，是理论上可能达到的最低温度。',
          '华氏度的0度是基于盐水结冰的温度。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '速度单位转换',
      units: {
        meter_per_second: '米/秒',
        kilometer_per_hour: '千米/时',
        mile_per_hour: '英里/时',
        knot: '节',
        foot_per_second: '英尺/秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '节最初是用绳子上的结数来测量船速，现在定义为每小时一海里。',
          '音速在海平面约为340米/秒。',
          '光速在真空中约为299,792,458米/秒。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '角度单位转换',
      units: {
        degree: '度',
        radian: '弧度',
        gradian: '百分度',
        minute_of_arc: '角分',
        second_of_arc: '角秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '一个完整的圆是360度，这源自古巴比伦的数字系统。',
          '弧度是国际单位制中的标准角度单位。',
          '百分度将圆周分成400等份，主要用于测量。'
        ]
      }
    },
    pressure: {
      title: '压力',
      description: '压力单位转换',
      units: {
        pascal: '帕斯卡',
        kilopascal: '千帕',
        megapascal: '兆帕',
        bar: '巴',
        atmosphere: '标准大气压',
        torr: '托',
        pound_per_square_inch: '磅/平方英寸'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '标准大气压是在海平面测得的平均气压。',
          '帕斯卡是压强的国际单位，以法国科学家帕斯卡命名。',
          '托是以意大利物理学家托里拆利命名的压强单位。'
        ]
      }
    },
    power: {
      title: '功率',
      description: '功率单位转换',
      units: {
        watt: '瓦特',
        kilowatt: '千瓦',
        megawatt: '兆瓦',
        horsepower: '马力',
        btu_per_hour: '英热单位/小时'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '瓦特是以蒸汽机发明者詹姆斯·瓦特命名的。',
          '一匹马力约等于746瓦特。',
          '现代高性能电脑的功率消耗可达数百瓦特。'
        ]
      }
    },
    energy: {
      title: '能量',
      description: '能量单位转换',
      units: {
        joule: '焦耳',
        kilojoule: '千焦',
        calorie: '卡路里',
        kilocalorie: '千卡',
        watt_hour: '瓦时',
        kilowatt_hour: '千瓦时',
        electron_volt: '电子伏特',
        british_thermal_unit: '英热单位',
        therm: '热量单位'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '焦耳是以英国物理学家詹姆斯·焦耳命名的。',
          '一个千卡路里等于4184焦耳。',
          '电子伏特是测量原子和亚原子粒子能量的常用单位。'
        ]
      }
    },
    force: {
      title: '力',
      description: '力单位转换',
      units: {
        newton: '牛顿',
        kilonewton: '千牛顿',
        dyne: '达因',
        pound_force: '磅力',
        kip: '千磅力'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '牛顿是力的国际单位，以著名物理学家艾萨克·牛顿命名。',
          '一牛顿大约等于一个中等大小苹果的重力。',
          '达因是CGS单位制中的力单位，现在较少使用。'
        ]
      }
    },
    density: {
      title: '密度',
      description: '密度单位转换',
      units: {
        kilogram_per_cubic_meter: '千克/立方米',
        gram_per_cubic_centimeter: '克/立方厘米',
        pound_per_cubic_foot: '磅/立方英尺'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '水的密度在4°C时最大，约为1克/立方厘米。',
          '密度是物质的一个重要特性，可用于鉴别物质。',
          '空气的密度约为水的千分之一。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '流量单位转换',
      units: {
        cubic_meter_per_second: '立方米/秒',
        liter_per_second: '升/秒',
        gallon_per_minute: '加仑/分钟'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '流量是单位时间内通过某个截面的流体体积。',
          '亚马逊河的平均流量约为209,000立方米/秒。',
          '工业上常用加仑/分钟来表示泵的流量。'
        ]
      }
    },
    torque: {
      title: '扭矩',
      description: '扭矩单位转换',
      units: {
        newton_meter: '牛顿米',
        pound_foot: '磅英尺',
        kilogram_meter: '千克米'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '扭矩是使物体发生旋转的力矩。',
          '汽车发动机的扭矩是衡量其性能的重要指标。',
          '扭矩的大小与力的大小和力臂的长度有关。'
        ]
      }
    },
    data: {
      title: '数据',
      description: '数据单位转换',
      units: {
        bit: '比特',
        byte: '字节',
        kilobyte: '千字节',
        megabyte: '兆字节',
        gigabyte: '吉字节',
        terabyte: '太字节'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '一个字节等于8位，可以表示256种不同的状态。',
          '现代硬盘的容量已经达到了数十太字节。',
          '二进制前缀和十进制前缀的差异可能导致存储容量显示不一致。'
        ]
      }
    },
    data_rate: {
      title: '数据速率',
      description: '数据速率单位转换',
      units: {
        bit_per_second: '比特/秒',
        byte_per_second: '字节/秒',
        kilobit_per_second: '千比特/秒',
        megabit_per_second: '兆比特/秒'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '5G网络的理论最高下载速度可达20Gbps。',
          '光纤通信的数据传输速率可达数百Gbps。',
          '网络速度通常用比特/秒表示，而存储速度常用字节/秒。'
        ]
      }
    },
    currency: {
      title: '货币',
      description: '货币单位转换',
      units: {
        usd: '美元',
        eur: '欧元',
        gbp: '英镑',
        jpy: '日元',
        cny: '人民币'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '美元是世界上最主要的储备货币。',
          '欧元是欧盟成员国的统一货币。',
          '人民币是中国的法定货币，也称为元。'
        ]
      }
    },
    cooking: {
      title: '烹饪',
      description: '烹饪单位转换',
      units: {
        teaspoon: '茶匙',
        tablespoon: '汤匙',
        cup: '杯',
        pint: '品脱',
        quart: '夸脱',
        gallon: '加仑'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '美国和英国的杯的容量是不同的。',
          '一汤匙约等于三茶匙。',
          '烹饪单位在不同国家和地区可能有显著差异。'
        ]
      }
    },
    numeral: {
      title: '进制',
      description: '进制转换',
      binary: {
        title: '二进制',
        description: '二进制数字系统 (0-1)'
      },
      octal: {
        title: '八进制',
        description: '八进制数字系统 (0-7)'
      },
      decimal: {
        title: '十进制',
        description: '十进制数字系统 (0-9)'
      },
      hexadecimal: {
        title: '十六进制',
        description: '十六进制数字系统 (0-9, A-F)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '二进制是计算机的基本语言，只使用0和1两个数字。',
          '十六进制常用于编程中表示颜色和内存地址。',
          '八进制在Unix系统的文件权限中仍然使用。'
        ]
      }
    },
    frequency: {
      title: '频率',
      description: '频率单位转换',
      units: {
        hertz: '赫兹',
        kilohertz: '千赫兹',
        megahertz: '兆赫兹',
        gigahertz: '吉赫兹',
        rpm: '转/分钟'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '赫兹是以德国物理学家赫兹命名的。',
          '人耳能听到的声音频率范围约为20Hz到20kHz。',
          '现代处理器的主频可达数GHz。'
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
    error: '错误',
    invalidNumber: '请输入有效的数字',
    selectUnit: '请选择单位',
    conversionError: '转换错误',
    invalidTemperature: '无效的温度值'
  },
  footer: {
    about: '关于我们',
    description: '免费在线单位转换工具',
    contact: '联系我们',
    email: 'contact@unitconverter.com',
    legal: '法律声明'
  },
  converter: {
    title: '单位转换器',
    description: '在线单位转换工具，支持多种单位的精确转换',
    from: '从',
    to: '到',
    instructions: {
      title: '使用说明',
      steps: [
        '在"从"输入框中输入需要转换的数值',
        '从列表中选择输入值的单位',
        '系统会自动计算并显示所有可用单位的对应值',
        '点击复制按钮可以将结果复制到剪贴板'
      ]
    },
    limitations: {
      title: '使用限制',
      items: [
        '保证10位有效数字的精确度',
        '超大或超小的数值会使用科学计数法显示',
        '所有转换都基于国际单位制（SI）进行'
      ]
    },
    knowledge: {
      title: '你知道吗？',
      items: [
        '光年不是时间单位，而是距离单位，表示光在一年内传播的距离。',
        '天文单位（AU）是基于地球到太阳的平均距离。',
        '米的最初定义是地球子午线四分之一长度的千万分之一。',
        '现在，米是根据真空中光速来定义的。'
      ]
    }
  }
}

export default zh 
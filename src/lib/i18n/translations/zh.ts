import type { Translation } from '../types'

const zh: Translation = {
  common: {
    title: 'Metric Converter',
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
    enterValue: '输入数值',
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
    length: '长度',
    conversionHistory: '转换历史',
    clearHistory: '清空历史',
    confirmClear: '确定要清空所有历史记录吗？',
    delete: '删除'
  },
  units: {
    length: {
      title: '长度',
      description: '长度单位转换',
      units: {
        metric_meter: '米',
        metric_kilometer: '千米',
        metric_decimeter: '分米',
        metric_centimeter: '厘米',
        metric_millimeter: '毫米',
        metric_micrometer: '微米',
        metric_nanometer: '纳米',
        metric_picometer: '皮米',
        imperial_mile: '英里',
        imperial_yard: '码',
        imperial_foot: '英尺',
        imperial_inch: '英寸',
        astronomical_light_year: '光年',
        astronomical_unit: '天文单位',
        astronomical_parsec: '秒差距',
        astronomical_light_second: '光秒',
        nautical_mile: '海里',
        nautical_fathom: '英寻'
      }
    },
    area: {
      title: '面积',
      description: '面积单位转换',
      units: {
        metric_square_meter: '平方米',
        metric_square_kilometer: '平方千米',
        metric_hectare: '公顷',
        metric_are: '公亩',
        metric_square_decimeter: '平方分米',
        metric_square_centimeter: '平方厘米',
        metric_square_millimeter: '平方毫米',
        imperial_square_mile: '平方英里',
        imperial_acre: '英亩',
        imperial_square_yard: '平方码',
        imperial_square_foot: '平方英尺',
        imperial_square_inch: '平方英寸',
        traditional_mu: '亩',
        traditional_qing: '顷'
      }
    },
    volume: {
      title: '体积',
      description: '体积单位转换',
      units: {
        metric_cubic_meter: '立方米',
        metric_cubic_decimeter: '立方分米',
        metric_cubic_centimeter: '立方厘米',
        metric_cubic_millimeter: '立方毫米',
        metric_liter: '升',
        metric_milliliter: '毫升',
        imperial_cubic_yard: '立方码',
        imperial_cubic_foot: '立方英尺',
        imperial_cubic_inch: '立方英寸',
        imperial_gallon: '英制加仑',
        imperial_quart: '英制夸脱',
        imperial_pint: '英制品脱',
        imperial_fluid_ounce: '英制液量盎司',
        us_gallon: '美制加仑',
        us_quart: '美制夸脱',
        us_pint: '美制品脱',
        us_cup: '美制杯',
        us_fluid_ounce: '美制液量盎司',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙'
      }
    },
    weight: {
      title: '重量',
      description: '重量单位转换',
      units: {
        metric_kilogram: '千克',
        metric_tonne: '公吨',
        metric_gram: '克',
        metric_milligram: '毫克',
        metric_microgram: '微克',
        imperial_pound: '磅',
        imperial_ounce: '盎司',
        imperial_stone: '英石',
        imperial_long_ton: '长吨',
        us_short_ton: '短吨',
        jewelry_carat: '克拉',
        jewelry_grain: '珠宝格令',
        traditional_jin: '斤',
        traditional_liang: '两',
        traditional_qian: '钱',
        medical_grain: '药用格令',
        medical_dram: '药用打兰',
        medical_ounce: '药用盎司'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '克拉最初是基于豆荚的重量，但现在精确定义为0.2克。',
          '千克是唯一一个直到2019年还在使用实物标准的基本单位。',
          '中国传统单位：1斤 = 500克，1两 = 50克，1钱 = 5克。',
          '药用单位有特殊的换算比例，药用盎司比常用盎司略轻。',
          '英制单位系统在英语国家最为常用，1英制磅等于453.59237克。',
          '长吨和短吨的区别：1长吨 = 2240磅，1短吨 = 2000磅。'
        ]
      }
    },
    time: {
      title: '时间',
      description: '时间单位转换',
      units: {
        metric_second: '秒',
        metric_minute: '分钟',
        metric_hour: '小时',
        metric_day: '天',
        metric_week: '周',
        metric_month: '月',
        metric_year: '年',
        scientific_millisecond: '毫秒',
        scientific_microsecond: '微秒',
        scientific_nanosecond: '纳秒'
      }
    },
    temperature: {
      title: '温度',
      description: '温度单位转换',
      units: {
        scientific_kelvin: '开尔文 (科学)',
        metric_celsius: '摄氏度 (公制)',
        us_fahrenheit: '华氏度 (美制)',
        scientific_rankine: '兰氏度 (科学)',
        historical_reaumur: '列氏度 (历史)',
        meteorological_celsius: '摄氏度 (气象)',
        meteorological_fahrenheit: '华氏度 (气象)',
        industrial_celsius: '摄氏度 (工业)',
        industrial_fahrenheit: '华氏度 (工业)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '开尔文是国际单位制(SI)中的温度基本单位。',
          '气象温度单位专门用于天气预报和气候研究。',
          '工业温度单位遵循特定的安全标准和制造业规范。',
          '绝对零度是0 K、-273.15°C或-459.67°F。',
          '摄氏度最初是用水的冰点和沸点来定义的。',
          '华氏度是由丹尼尔·华氏于1724年创立的。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '室温通常在20-22°C (68-72°F)之间。',
          '正常人体温度约为37°C (98.6°F)。',
          '在海平面，水在0°C (32°F)结冰，在100°C (212°F)沸腾。',
          '工业过程通常涉及比日常测量更高的温度。',
          '气象温度报告需要特定的精度要求。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '速度单位转换',
      units: {
        metric_meter_per_second: '米/秒',
        metric_kilometer_per_hour: '千米/时',
        imperial_mile_per_hour: '英里/时',
        aviation_knot: '节',
        aviation_mach: '马赫'
      }
    },
    angle: {
      title: '角度',
      description: '角度单位转换',
      units: {
        metric_degree: '度',
        metric_radian: '弧度',
        metric_gradian: '百分度',
        metric_minute_of_arc: '角分',
        metric_second_of_arc: '角秒'
      }
    },
    pressure: {
      title: '压力',
      description: '压力单位转换 (ISO 80000-4)',
      units: {
        // 基本单位
        pascal: '帕斯卡',
        
        // 公制压力单位
        kilopascal: '千帕',
        megapascal: '兆帕',
        gigapascal: '吉帕',
        terapascal: '太帕',
        hectopascal: '百帕',
        millipascal: '毫帕',
        micropascal: '微帕',
        bar: '巴',
        millibar: '毫巴',
        
        // 大气压力单位
        standard_atmosphere: '标准大气压',
        technical_atmosphere: '工程大气压',
        torr: '托',
        millimeter_mercury: '毫米汞柱',
        
        // 水柱压力单位
        centimeter_water: '厘米水柱',
        millimeter_water: '毫米水柱',
        inch_water: '英寸水柱',
        foot_water: '英尺水柱',
        
        // 工程压力单位
        kilogram_force_per_square_centimeter: '千克力/平方厘米',
        kilogram_force_per_square_meter: '千克力/平方米',
        
        // 英制压力单位
        pound_force_per_square_inch: '磅力/平方英寸',
        kilopound_force_per_square_inch: '千磅力/平方英寸',
        pound_force_per_square_foot: '磅力/平方英尺',
        inch_mercury: '英寸汞柱'
      },
      knowledge: {
        title: '压力知识',
        items: [
          '帕斯卡（Pa）是SI基本压力单位，定义为每平方米一牛顿的压力（1 Pa = 1 N/m²）',
          '标准大气压定义为101325 Pa，约等于1个大气压（atm）',
          '巴（bar）是常用的工程压力单位，1 bar = 100000 Pa = 0.1 MPa',
          '血压通常用毫米汞柱（mmHg）表示，正常收缩压约为120 mmHg',
          '轮胎压力通常用psi或kPa表示，乘客车通常为30-35 psi（约200-240 kPa）',
          '水深每增加10米，压力增加约1个大气压（约100 kPa）',
          '工业用高压设备通常用MPa表示压力，如高压锅炉可达10-30 MPa'
        ]
      },
      conversion_tips: {
        title: '压力换算提示',
        items: [
          '日常生活压力参考：\n  - 标准大气压：101.325 kPa\n  - 汽车轮胎：200-240 kPa\n  - 自行车轮胎：300-400 kPa',
          '医疗压力参考：\n  - 正常血压：120/80 mmHg\n  - 高血压：>140/90 mmHg\n  - 低血压：<90/60 mmHg',
          '工业压力参考：\n  - 家用锅炉：0.1-0.3 MPa\n  - 工业蒸汽：1-3 MPa\n  - 高压锅炉：10-30 MPa',
          '气象压力参考：\n  - 标准海平面：1013.25 hPa\n  - 台风中心：<950 hPa\n  - 高原地区：约700 hPa',
          '深海压力参考：\n  - 100米深：约1 MPa\n  - 1000米深：约10 MPa\n  - 马里亚纳海沟：约110 MPa',
          '真空技术参考：\n  - 低真空：100-0.1 Pa\n  - 高真空：0.1-10⁻⁵ Pa\n  - 超高真空：<10⁻⁷ Pa'
        ]
      }
    },
    power: {
      title: '功率',
      description: '功率单位转换 (ISO 31-3)',
      units: {
        watt: '瓦特',
        kilowatt: '千瓦',
        megawatt: '兆瓦',
        gigawatt: '吉瓦',
        terawatt: '太瓦',
        petawatt: '拍瓦',
        exawatt: '艾瓦',
        milliwatt: '毫瓦',
        horsepower_mechanical: '机械马力',
        horsepower_metric: '公制马力',
        horsepower_electric: '电气马力',
        horsepower_boiler: '锅炉马力',
        btu_per_hour: '英热单位/小时',
        btu_per_minute: '英热单位/分钟',
        btu_per_second: '英热单位/秒',
        ton_refrigeration: '制冷吨',
        calorie_per_second: '卡路里/秒',
        kilocalorie_per_hour: '千卡/小时',
        volt_ampere: '伏安',
        kilovolt_ampere: '千伏安',
        megavolt_ampere: '兆伏安',
        reactive_power: '无功功率',
        joule_per_second: '焦耳/秒',
        erg_per_second: '尔格/秒',
        kilovar: '千乏'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '瓦特是SI功率单位，以改良蒸汽机的发明家詹姆斯·瓦特命名。',
          '1机械马力约等于746瓦特，而1公制马力约等于735.5瓦特。',
          '制冷吨是制冷能力的单位，基于24小时内融化1吨冰所需的功率。',
          '伏安（VA）是表观功率的单位，考虑了电路中的相位差。',
          '现代发电厂可以产生数吉瓦的功率。',
          '无功功率（VAR）对于维持电网电压稳定很重要。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '家用电器功率参考：\n  - LED灯泡：5-15瓦特\n  - 电冰箱：100-400瓦特\n  - 微波炉：600-1500瓦特\n  - 电热水器：1500-3000瓦特',
          '交通工具功率参考：\n  - 电动自行车：200-350瓦特\n  - 小型汽车：50-100千瓦\n  - 跑车：200-500千瓦\n  - 大型卡车：300-600千瓦',
          '发电设备功率参考：\n  - 家用太阳能板：250-400瓦特\n  - 风力发电机：2-5兆瓦\n  - 水力发电机组：100-700兆瓦\n  - 核电站机组：1-1.5吉瓦',
          '人体功率参考：\n  - 静息状态：约100瓦特\n  - 步行：150-200瓦特\n  - 骑自行车：200-400瓦特\n  - 短跑冲刺：可达2000瓦特'
        ]
      }
    },
    energy: {
      title: '能量',
      description: '能量单位转换 (ISO 31-3)',
      units: {
        joule: '焦耳',
        kilojoule: '千焦',
        megajoule: '兆焦',
        gigajoule: '吉焦',
        terajoule: '太焦',
        petajoule: '拍焦',
        calorie: '卡路里',
        kilocalorie: '千卡',
        british_thermal_unit: '英热单位',
        therm: '撒姆',
        watt_hour: '瓦时',
        kilowatt_hour: '千瓦时',
        megawatt_hour: '兆瓦时',
        gigawatt_hour: '吉瓦时',
        terawatt_hour: '太瓦时',
        electron_volt: '电子伏特',
        kilo_electron_volt: '千电子伏特',
        mega_electron_volt: '兆电子伏特',
        giga_electron_volt: '吉电子伏特',
        tera_electron_volt: '太电子伏特',
        gram_tnt: '克TNT当量',
        kilogram_tnt: '千克TNT当量',
        ton_tnt: '吨TNT当量',
        kiloton_tnt: '千吨TNT当量',
        megaton_tnt: '兆吨TNT当量',
        gigaton_tnt: '吉吨TNT当量',
        foot_pound: '英尺磅',
        newton_meter: '牛顿米',
        kilogram_meter: '千克米',
        erg: '尔格',
        horsepower_hour: '马力小时',
        barrel_oil_equivalent: '桶油当量'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '焦耳是能量的SI导出单位，等于一牛顿的力使物体移动一米所做的功。',
          '食品营养标签上的"卡路里"实际上是千卡路里，1千卡 = 4.184千焦。',
          '电子伏特是粒子物理中常用的能量单位，1电子伏特是一个电子在1伏特电压下获得的能量。',
          '一桶油当量约等于6.1吉焦的能量，用于衡量能源储量。',
          'TNT当量用于衡量爆炸威力，1克TNT爆炸释放约4.184千焦的能量。',
          '千瓦时是家庭用电计量的常用单位，1千瓦时 = 3.6兆焦。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '日常生活能量参考：\n  - 一个苹果：约400千焦（95千卡）\n  - 一度电：3600千焦（1千瓦时）\n  - 一升汽油：约34.2兆焦',
          '科学领域能量参考：\n  - 氢原子电离能：13.6电子伏特\n  - 铀235裂变：约200兆电子伏特/核子',
          '爆炸能量参考：\n  - 手榴弹：约1兆焦（0.25千克TNT）\n  - 广岛原子弹：约63太焦（15千吨TNT）',
          '自然现象能量参考：\n  - 闪电：约500兆焦\n  - 8级地震：约1拍焦'
        ]
      }
    },
    force: {
      title: '力',
      description: '力单位转换',
      units: {
        metric_newton: '牛顿',
        metric_kilogram_force: '千克力',
        imperial_pound_force: '磅力',
        scientific_dyne: '达因'
      }
    },
    density: {
      title: '密度',
      description: '密度单位转换 (ISO 80000-4)',
      units: {
        // 基本单位
        kilogram_per_cubic_meter: '千克每立方米',
        
        // 公制密度单位
        gram_per_cubic_centimeter: '克每立方厘米',
        gram_per_milliliter: '克每毫升',
        kilogram_per_liter: '千克每升',
        gram_per_cubic_decimeter: '克每立方分米',
        gram_per_cubic_meter: '克每立方米',
        milligram_per_cubic_meter: '毫克每立方米',
        microgram_per_cubic_meter: '微克每立方米',
        nanogram_per_cubic_meter: '纳克每立方米',
        milligram_per_milliliter: '毫克每毫升',
        milligram_per_liter: '毫克每升',
        
        // 英制密度单位
        pound_per_cubic_foot: '磅每立方英尺',
        pound_per_cubic_inch: '磅每立方英寸',
        ounce_per_cubic_foot: '盎司每立方英尺',
        pound_per_gallon_uk: '磅每英制加仑',
        ounce_per_gallon_uk: '盎司每英制加仑',
        grain_per_gallon_uk: '格令每英制加仑',
        
        // 美制密度单位
        pound_per_gallon_us: '磅每美制加仑',
        ounce_per_gallon_us: '盎司每美制加仑',
        grain_per_gallon_us: '格令每美制加仑',
        
        // 科学密度单位
        slug_per_cubic_foot: '斯勒格每立方英尺'
      },
      knowledge: {
        title: '密度知识',
        items: [
          '密度是单位体积的质量，SI基本单位是千克每立方米（kg/m³）',
          '水在4°C时密度最大，约为1000 kg/m³（或1 g/cm³）',
          '空气在海平面标准状态下的密度约为1.225 kg/m³',
          '汞是室温下最重的液体，密度为13.5 g/cm³',
          '密度会随温度和压力变化，一般温度升高密度降低',
          '浮力原理：物体所受浮力等于排开液体的重力',
          '相对密度是物质密度与4°C纯水密度的比值（无量纲）'
        ]
      },
      conversion_tips: {
        title: '密度换算提示',
        items: [
          '常见液体密度参考：水(1 g/cm³)、汽油(0.7 g/cm³)、牛奶(1.03 g/cm³)、汞(13.5 g/cm³)',
          '常见固体密度参考：铝(2.7 g/cm³)、铁(7.9 g/cm³)、铜(8.9 g/cm³)、金(19.3 g/cm³)',
          '常见气体密度参考：氢气(0.09 kg/m³)、氦气(0.18 kg/m³)、空气(1.225 kg/m³)',
          '水质检测参考：饮用水悬浮物≤1000 mg/L，浊度≤1 NTU',
          '空气质量参考：PM2.5≤75 μg/m³，PM10≤150 μg/m³',
          '海水密度参考：表层约1.025 g/cm³，深层可达1.028 g/cm³',
          '工业应用参考：润滑油(0.9 g/cm³)、硫酸(1.84 g/cm³)、液氮(-196°C时0.808 g/cm³)'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '流量单位转换 (ISO 31-3)',
      units: {
        // 基准单位
        metric_cubic_meter_per_second: '立方米每秒',
        
        // 体积流量单位 - 公制
        metric_liter_per_second: '升每秒',
        metric_cubic_meter_per_hour: '立方米每小时',
        metric_liter_per_minute: '升每分钟',
        metric_cubic_centimeter_per_second: '立方厘米每秒',
        metric_milliliter_per_minute: '毫升每分钟',
        
        // 体积流量单位 - 英制
        imperial_cubic_foot_per_second: '立方英尺每秒',
        imperial_cubic_foot_per_minute: '立方英尺每分钟',
        imperial_cubic_foot_per_hour: '立方英尺每小时',
        
        // 体积流量单位 - 美制
        us_gallon_per_minute: '美制加仑每分钟',
        us_gallon_per_hour: '美制加仑每小时',
        
        // 质量流量单位
        metric_kilogram_per_second: '千克每秒',
        metric_gram_per_minute: '克每分钟',
        imperial_pound_per_hour: '磅每小时',
        
        // 工业流量单位
        industrial_standard_cubic_meter_per_hour: '标准立方米每小时'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '流量分为体积流量和质量流量两种类型，分别用于不同场合。',
          '工业过程中，液体通常用体积流量表示，气体则常用质量流量。',
          '标准立方米（Nm³）是在标准状态下（0°C，1个大气压）测量的气体体积。',
          '在管道设计中，流量和压力损失是重要的设计参数。',
          '美制加仑和英制加仑的容积不同，因此它们的流量单位也不同。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '家用水管：约0.2-0.3升每秒',
          '工业管道：可达数百立方米每小时',
          '人体呼吸：约6-8升每分钟',
          '加油站加油枪：约30-40升每分钟',
          '大型泵站：可达数千立方米每小时'
        ]
      }
    },
    torque: {
      title: '扭矩',
      description: '扭矩单位转换 (ISO 31-3)',
      units: {
        // 公制单位
        metric_newton_meter: '牛顿米',
        metric_kilonewton_meter: '千牛顿米',
        metric_meganewton_meter: '兆牛顿米',
        metric_newton_centimeter: '牛顿厘米',
        metric_newton_millimeter: '牛顿毫米',

        // 英制单位
        imperial_pound_foot: '磅英尺',
        imperial_pound_inch: '磅英寸',
        imperial_ounce_inch: '盎司英寸',

        // 工程单位
        engineering_kilogram_force_meter: '千克力米',
        engineering_gram_force_centimeter: '克力厘米',

        // 科学单位
        scientific_dyne_centimeter: '达因厘米',

        // 汽车工业单位
        automotive_kilogram_force_meter: '千克力米（汽车）',
        automotive_newton_meter: '牛顿米（汽车）'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '扭矩是力和力臂的乘积，表示物体的旋转趋势。',
          '汽车发动机的输出通常用扭矩和转速来表示。',
          '螺栓的紧固需要特定的扭矩值以确保安全。',
          '扭力扳手是用来精确控制扭矩的工具。',
          '1牛顿米等于约0.738磅英尺。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '汽车发动机：100-500牛顿米',
          '自行车螺栓：5-40牛顿米',
          '轮胎螺栓：100-150牛顿米',
          '手动螺丝刀：1-5牛顿米',
          '工业设备：可达数千牛顿米'
        ]
      }
    },
    data: {
      title: '数据',
      description: '数据单位转换',
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
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1字节等于8比特，用于存储一个字符。',
          '千字节（KB）是1000字节，而二进制千字节（KiB）是1024字节。',
          '硬盘制造商使用十进制前缀（KB、MB、GB），而操作系统通常使用二进制前缀（KiB、MiB、GiB）。',
          'IEC标准建议使用二进制前缀（Ki、Mi、Gi、Ti、Pi）来避免混淆。'
        ]
      }
    },
    data_rate: {
      title: '数据速率',
      description: '数据速率单位转换',
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
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1字节等于8比特。',
          '二进制前缀（Ki、Mi、Gi、Ti）和十进制前缀（K、M、G、T）的区别：1KiB = 1024B，而1KB = 1000B。',
          '网络速度通常用比特/秒（bps）表示，而存储传输速度通常用字节/秒（B/s）表示。',
          '现代家用网络可以达到千兆比特/秒（Gbps）的速度。'
        ]
      }
    },
    currency: {
      title: '货币',
      description: '货币单位转换',
      units: {
        currency_cny: '人民币',
        currency_usd: '美元',
        currency_eur: '欧元',
        currency_gbp: '英镑',
        currency_jpy: '日元'
      }
    },
    cooking: {
      title: '烹饪',
      description: '烹饪单位转换',
      units: {
        us_fluid_ounce: '美制液量盎司',
        us_tablespoon: '美制汤匙',
        us_teaspoon: '美制茶匙',
        imperial_fluid_ounce: '英制液量盎司',
        imperial_tablespoon: '英制汤匙',
        imperial_teaspoon: '英制茶匙',
        chinese_bowl: '中式碗',
        chinese_cup: '中式杯',
        chinese_tablespoon: '中式汤匙',
        chinese_teaspoon: '中式茶匙',
        japanese_cup: '日式杯',
        japanese_tablespoon: '日式汤匙',
        japanese_teaspoon: '日式茶匙'
      }
    },
    numeral: {
      title: '进制转换',
      description: '在不同进制之间转换数字（二进制、八进制、十进制、十六进制）',
      units: {
        decimal: '十进制',
        binary: '二进制',
        octal: '八进制',
        hexadecimal: '十六进制'
      },
      knowledge: {
        title: '进制转换知识',
        items: [
          '十进制：使用0-9十个数字表示',
          '二进制：使用0-1两个数字表示，常用于计算机底层',
          '八进制：使用0-7八个数字表示',
          '十六进制：使用0-9和A-F表示，常用于编程'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '二进制前缀：0b 或 0B',
          '八进制前缀：0o 或 0O',
          '十六进制前缀：0x 或 0X',
          '常见应用：\n  - 二进制：计算机底层数据\n  - 八进制：Unix文件权限\n  - 十六进制：颜色代码、内存地址'
        ]
      }
    },
    frequency: {
      title: '频率',
      description: '频率单位转换 (ISO 80000-3)',
      units: {
        hertz: '赫兹',
        kilohertz: '千赫兹',
        megahertz: '兆赫兹',
        gigahertz: '吉赫兹',
        terahertz: '太赫兹',
        petahertz: '拍赫兹',
        exahertz: '艾赫兹',
        millihertz: '毫赫兹',
        microhertz: '微赫兹',
        nanohertz: '纳赫兹',
        period_per_second: '每秒周期',
        period_per_minute: '每分钟周期',
        period_per_hour: '每小时周期',
        angular_radian_per_second: '弧度每秒',
        angular_degree_per_second: '度每秒',
        angular_revolution_per_minute: '转每分钟',
        angular_revolution_per_second: '转每秒',
        audio_beat_per_minute: '拍每分钟',
        optical_wavenumber: '波数',
        electronic_frame_per_second: '帧每秒',
        electronic_refresh_rate: '刷新率',
        rpm_metric: '公制转每分钟',
        rpm_mechanical: '机械转每分钟',
        cps_audio: '音频周期每秒',
        bpm_musical: '音乐拍每分钟'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '赫兹是频率的SI单位，以德国物理学家海因里希·赫兹命名。',
          '人类可听见的声音频率范围通常在20赫兹到20千赫兹之间。',
          '现代计算机处理器的工作频率可达数吉赫兹。',
          '中国的电网频率是50赫兹，而北美是60赫兹。',
          '音乐中的速度（节拍）通常用BPM表示，120 BPM被认为是中等速度。',
          '现代显示器的刷新率可达360赫兹，但60赫兹是最常见的标准。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '日常生活频率参考：\n  - 心跳：60-100 BPM\n  - 电影：24-30 FPS\n  - 显示器：60-240 Hz\n  - 电网：50/60 Hz',
          '技术领域频率参考：\n  - CPU：2-5 GHz\n  - WiFi：2.4/5 GHz\n  - FM广播：87.5-108 MHz\n  - 移动通信：700 MHz-3.8 GHz',
          '音乐领域频率参考：\n  - 标准音A：440 Hz\n  - 低音：20-200 Hz\n  - 中音：200-2000 Hz\n  - 高音：2-20 kHz',
          '机械领域频率参考：\n  - 风扇：1200-3000 RPM\n  - 硬盘：5400-7200 RPM\n  - 汽车发动机：600-6000 RPM\n  - 工业电机：1500-3600 RPM'
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
    copied: '已复制！',
    error: '发生错误',
    invalidNumber: '请输入有效数字',
    selectUnit: '请选择单位',
    conversionError: '转换错误',
    invalidTemperature: '无效的温度值'
  },
  errors: {
    invalidInput: '无效输入',
    invalidFormat: '格式无效',
    conversionFailed: '转换失败',
    copyFailed: '复制失败'
  },
  footer: {
    about: '关于我们',
    description: '免费在线单位转换工具',
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
        '在输入框中输入需要转换的数值',
        '选择输入值的单位',
        '系统会自动计算并显示其他单位的对应值',
        '点击结果可以快速复制带单位的数值'
      ]
    },
    limitations: {
      title: '使用限制',
      items: [
        '最多支持20位数字（含小数点）',
        '最多10位小数',
        '超大或超小的数字会使用科学计数法显示'
      ]
    }
  }
}

export default zh 
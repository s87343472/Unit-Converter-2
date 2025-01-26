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
        meter: '米 (公制)',
        kilometer: '千米 (公制)',
        decimeter: '分米 (公制)',
        centimeter: '厘米 (公制)',
        millimeter: '毫米 (公制)',
        micrometer: '微米 (公制)',
        nanometer: '纳米 (公制)',
        picometer: '皮米 (公制)',
        mile: '英里 (英制)',
        yard: '码 (英制)',
        foot: '英尺 (英制)',
        inch: '英寸 (英制)',
        light_year: '光年 (天文)',
        astronomical_unit: '天文单位 (天文)',
        parsec: '秒差距 (天文)',
        light_second: '光秒 (天文)',
        nautical_mile: '海里 (航海)',
        fathom: '英寻 (航海)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '光年是光在真空中一年时间内传播的距离，约为9.461万亿千米。',
          '天文单位（AU）是地球到太阳的平均距离，约为1.496亿千米。',
          '秒差距是天文学中最常用的距离单位，1秒差距约等于3.26光年。',
          '海里最初定义为地球子午线一分角对应的弧长，现定为1852米。',
          '英寻是航海测深的传统单位，1英寻等于6英尺（约1.8288米）。',
          '米的定义经历了多次变更，现在是基于光速和秒的定义。'
        ]
      }
    },
    area: {
      title: '面积',
      description: '面积单位转换 (ISO 31-1)',
      units: {
        // 公制单位
        square_meter: '平方米 (公制)',
        square_kilometer: '平方千米 (公制)',
        hectare: '公顷 (公制)',
        are: '公亩 (公制)',
        square_decimeter: '平方分米 (公制)',
        square_centimeter: '平方厘米 (公制)',
        square_millimeter: '平方毫米 (公制)',
        
        // 英制单位
        square_mile: '平方英里 (英制)',
        acre: '英亩 (英制)',
        square_yard: '平方码 (英制)',
        square_foot: '平方英尺 (英制)',
        square_inch: '平方英寸 (英制)',
        
        // 中国传统单位
        mu: '亩 (中国)',
        qing: '顷 (中国)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '公顷（hectare）最初是为了简化土地面积测量而创建的，1公顷等于10000平方米。',
          '英亩（acre）源自中世纪，最初定义为一对牛一天能耕种的土地面积。',
          '中国的亩制最早可追溯到商周时期，1亩约等于666.67平方米。',
          '平方英里是最大的英制面积单位，1平方英里等于640英亩。',
          '公亩（are）是公制面积单位，等于100平方米，但使用较少。',
          '顷是中国古代最大的面积单位，1顷等于100亩。'
        ]
      }
    },
    volume: {
      title: '体积',
      description: '体积单位转换（包括公制、英制、美制和传统单位）',
      units: {
        // 公制单位
        cubic_meter: '立方米 (公制)',
        cubic_kilometer: '立方千米 (公制)',
        cubic_decimeter: '立方分米 (公制)',
        cubic_centimeter: '立方厘米 (公制)',
        cubic_millimeter: '立方毫米 (公制)',
        liter: '升 (公制)',
        milliliter: '毫升 (公制)',
        
        // 英制单位
        cubic_yard: '立方码 (英制)',
        cubic_foot: '立方英尺 (英制)',
        cubic_inch: '立方英寸 (英制)',
        gallon_uk: '加仑 (英制)',
        quart_uk: '夸脱 (英制)',
        pint_uk: '品脱 (英制)',
        fluid_ounce_uk: '液量盎司 (英制)',
        
        // 美制单位
        gallon_us: '加仑 (美制)',
        quart_us: '夸脱 (美制)',
        pint_us: '品脱 (美制)',
        cup_us: '杯 (美制)',
        fluid_ounce_us: '液量盎司 (美制)',
        tablespoon_us: '汤匙 (美制)',
        teaspoon_us: '茶匙 (美制)',
        
        // 中国传统单位
        sheng: '升 (中国传统)',
        dou: '斗 (中国传统)',
        dan: '石 (中国传统)',
        gong: '合 (中国传统)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '1升精确等于1立方分米（1000立方厘米），这使得公制体积单位之间的换算非常方便。',
          '美制和英制液量单位有显著差异：1英制加仑≈4.546升，1美制加仑≈3.785升。',
          '中国传统容量单位"斗"在古代是重要的计量单位，1斗等于10升。',
          '美制烹饪计量中，1杯=16汤匙=48茶匙≈237毫升。',
          '英制品脱用于测量啤酒容量，1品脱等于568毫升。',
          '实验室常用的烧杯和量筒通常标注的是公制单位（毫升或升）。'
        ]
      }
    },
    weight: {
      title: '重量',
      description: '重量单位转换（包括公制、英制、传统、珠宝和药用单位）',
      units: {
        // 公制单位
        metric_kilogram: '千克 (公制)',
        metric_tonne: '公吨 (公制)',
        metric_gram: '克 (公制)',
        metric_milligram: '毫克 (公制)',
        metric_microgram: '微克 (公制)',
        
        // Avoirdupois 单位
        avoirdupois_pound: '磅 (Avoirdupois)',
        avoirdupois_ounce: '盎司 (Avoirdupois)',
        avoirdupois_stone: '英石 (Avoirdupois)',
        avoirdupois_long_ton: '长吨 (Avoirdupois)',
        avoirdupois_short_ton: '短吨 (Avoirdupois)',
        
        // 珠宝单位
        jewelry_carat: '克拉 (珠宝)',
        jewelry_grain: '格令 (珠宝)',
        
        // 中国传统单位
        traditional_jin: '斤 (中国传统)',
        traditional_liang: '两 (中国传统)',
        traditional_qian: '钱 (中国传统)',
        
        // 药用单位
        pharmacy_grain: '格令 (药用)',
        pharmacy_ounce: '盎司 (药用)',
        pharmacy_pound: '磅 (药用)',
        pharmacy_scruple: '司氏重 (药用)',
        pharmacy_dram: '打兰 (药用)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '克拉最初源自豆荚的重量，现在精确定义为0.2克，主要用于宝石计重。',
          '千克是唯一以实物标准定义的基本单位，直到2019年改用普朗克常数定义。',
          '中国传统的一斤等于500克，一两等于50克，一钱等于5克。',
          '药用单位有其特殊的换算关系，药用盎司比普通盎司略轻。',
          'Avoirdupois 是最常用的英制重量单位系统，1 Avoirdupois 磅等于 453.59237 克。',
          '长吨和短吨的区别：1长吨=2240磅，1短吨=2000磅。'
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
      description: '温度单位转换（包括科学、工程和生活常用单位）',
      units: {
        // 科学单位
        kelvin: '开尔文 (科学)',
        rankine: '兰金 (科学)',
        
        // 工程单位
        celsius: '摄氏度 (工程)',
        fahrenheit: '华氏度 (工程)',
        
        // 历史单位
        reaumur: '列氏度 (历史)',
        newton: '牛顿温标 (历史)',
        romer: '罗氏度 (历史)',
        delisle: '德利尔度 (历史)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '开尔文是国际单位制中的温度基本单位，0K是理论上可能达到的最低温度。',
          '摄氏度定义基于水的冰点（0°C）和沸点（100°C），是最常用的温度单位。',
          '华氏度在美国仍广泛使用，人体正常体温约为98.6°F（37°C）。',
          '温度单位之间的转换不是简单的比例关系，需要使用特定的公式：\n  °F = °C × 9/5 + 32\n  K = °C + 273.15',
          '列氏度曾在欧洲广泛使用，0°Ré是水的冰点，80°Ré是水的沸点。',
          '兰金温标是华氏温标的绝对温度版本，0°R相当于绝对零度。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '日常生活中，室温通常在20-25°C（68-77°F）之间。',
          '烹饪温度通常用摄氏度或华氏度表示：\n  - 烤箱预热：180°C ≈ 350°F\n  - 水煮沸点：100°C = 212°F',
          '工业流程中常用摄氏度，科学研究中常用开尔文。',
          '医疗领域使用摄氏度（大部分国家）或华氏度（美国）测量体温。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '速度单位转换（包括公制、英制、航海和航空单位）',
      units: {
        // 公制单位
        meter_per_second: '米/秒 (公制)',
        kilometer_per_hour: '千米/时 (公制)',
        
        // 英制单位
        mile_per_hour: '英里/时 (英制)',
        foot_per_second: '英尺/秒 (英制)',
        
        // 航海单位
        knot: '节 (航海)',
        knot_uk: '英制节 (航海)',
        
        // 航空单位
        mach: '马赫 (航空)',
        light_speed: '光速 (科学)',
        
        // 其他单位
        furlong_per_fortnight: '弗隆/双周 (趣味)',
        league_per_day: '里格/天 (历史)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '节最初是用绳子上的结数来测量船速，一节等于每小时一海里（1.852千米/时）。',
          '马赫数是飞行速度与音速的比值，以奥地利物理学家恩斯特·马赫命名。',
          '音速在海平面标准大气压下约为340米/秒（1224千米/时）。',
          '光速在真空中约为299,792,458米/秒，是宇宙中已知的最快速度。',
          '弗隆/双周是一个趣味单位，约等于0.00018288米/秒。',
          '里格是古代航海单位，一里格约等于5.556千米。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '常见速度参考：\n  - 步行：5-6千米/时\n  - 跑步：10-15千米/时\n  - 自行车：20-30千米/时\n  - 城市限速：50千米/时',
          '航空速度参考：\n  - 亚音速：<马赫0.8\n  - 跨音速：马赫0.8-1.2\n  - 超音速：>马赫1.2\n  - 高超音速：>马赫5',
          '航海速度通常用节表示：\n  - 游艇：20-30节\n  - 货轮：20-25节\n  - 邮轮：22-27节',
          '公路速度限制通常用千米/时（大部分国家）或英里/时（美国、英国）表示。'
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
      description: '压力单位转换（包括科学、工程、医疗和气象单位）',
      units: {
        // 科学单位
        pascal: '帕斯卡 (科学)',
        kilopascal: '千帕 (科学)',
        megapascal: '兆帕 (科学)',
        
        // 工程单位
        bar: '巴 (工程)',
        millibar: '毫巴 (工程)',
        psi: '磅/平方英寸 (工程)',
        ksi: '千磅/平方英寸 (工程)',
        
        // 气象单位
        atmosphere: '标准大气压 (气象)',
        mmhg: '毫米汞柱 (气象)',
        inhg: '英寸汞柱 (气象)',
        hectopascal: '百帕 (气象)',
        
        // 医疗单位
        cmh2o: '厘米水柱 (医疗)',
        mmh2o: '毫米水柱 (医疗)',
        torr: '托 (医疗)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '帕斯卡是压强的国际单位，1帕斯卡等于1牛顿/平方米。',
          '标准大气压定义为101325帕斯卡，是地球表面的平均大气压力。',
          '托是以意大利物理学家托里拆利命名的压强单位，1托等于1毫米汞柱。',
          '水银气压计的发明启发了多个压力单位的定义，如毫米汞柱和英寸汞柱。',
          '巴最初是为了简化工程计算而创造的，1巴等于100000帕斯卡。',
          '磅/平方英寸（PSI）在工程领域广泛使用，特别是在美国。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '常见压力参考：\n  - 标准大气压：101.325千帕\n  - 汽车轮胎：200-350千帕\n  - 自行车轮胎：400-800千帕',
          '医疗压力参考：\n  - 正常血压：80-120毫米汞柱\n  - 眼压：10-21毫米汞柱\n  - 脑脊液压：7-15厘米水柱',
          '气象压力参考：\n  - 高气压：>1013.25百帕\n  - 低气压：<1013.25百帕\n  - 台风中心：<900百帕',
          '工业压力参考：\n  - 高压锅：100-200千帕\n  - 蒸汽锅炉：1-3兆帕\n  - 液压系统：20-35兆帕'
        ]
      }
    },
    power: {
      title: '功率',
      description: '功率单位转换（包括科学、工程、机械和热力单位）',
      units: {
        // 科学单位
        watt: '瓦特 (科学)',
        kilowatt: '千瓦 (科学)',
        megawatt: '兆瓦 (科学)',
        gigawatt: '吉瓦 (科学)',
        
        // 机械单位
        horsepower_mechanical: '机械马力 (机械)',
        horsepower_metric: '公制马力 (机械)',
        horsepower_electric: '电马力 (机械)',
        horsepower_water: '水马力 (机械)',
        
        // 热力单位
        horsepower_boiler: '锅炉马力 (热力)',
        btu_per_hour: '英热单位/小时 (热力)',
        ton_refrigeration: '制冷吨 (热力)',
        calorie_per_second: '卡/秒 (热力)',
        
        // 工程单位
        volt_ampere: '伏安 (工程)',
        kilovolt_ampere: '千伏安 (工程)',
        megavolt_ampere: '兆伏安 (工程)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '瓦特是以蒸汽机发明者詹姆斯·瓦特命名的，1瓦特等于1焦耳/秒。',
          '马力最初是由詹姆斯·瓦特定义的，用来比较蒸汽机与马的功率。',
          '一匹机械马力约等于746瓦特，而一匹公制马力约等于735.5瓦特。',
          '制冷吨源自工业革命时期，定义为24小时内融化一吨冰所需的制冷量。',
          '伏安是表观功率的单位，与有功功率（瓦特）的区别在于考虑了相位角。',
          '锅炉马力是一个历史单位，定义为每小时产生34.5磅蒸汽所需的功率。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '家用电器功率参考：\n  - 电饭煲：400-2000瓦\n  - 微波炉：600-1200瓦\n  - 空调：1000-2500瓦\n  - 电热水器：1500-4500瓦',
          '交通工具功率参考：\n  - 小型汽车：60-100千瓦\n  - 摩托车：15-75千瓦\n  - 电动自行车：200-500瓦\n  - 大型卡车：300-500千瓦',
          '工业设备功率参考：\n  - 小型电机：0.75-7.5千瓦\n  - 工业冷水机：50-500千瓦\n  - 中型变压器：100-1000千伏安',
          '发电设备功率参考：\n  - 家用太阳能：2-10千瓦\n  - 风力发电机：2-5兆瓦\n  - 核电机组：1000-1600兆瓦'
        ]
      }
    },
    energy: {
      title: '能量',
      description: '能量单位转换（包括科学、热量、电力和核能单位）',
      units: {
        // 科学单位
        joule: '焦耳 (科学)',
        kilojoule: '千焦 (科学)',
        megajoule: '兆焦 (科学)',
        gigajoule: '吉焦 (科学)',
        erg: '尔格 (科学)',
        
        // 热量单位
        calorie: '卡路里 (热量)',
        kilocalorie: '千卡 (热量)',
        british_thermal_unit: '英热单位 (热量)',
        therm: '热量单位 (热量)',
        
        // 电力单位
        watt_hour: '瓦时 (电力)',
        kilowatt_hour: '千瓦时 (电力)',
        megawatt_hour: '兆瓦时 (电力)',
        gigawatt_hour: '吉瓦时 (电力)',
        
        // 核能单位
        electron_volt: '电子伏特 (核能)',
        kilo_electron_volt: '千电子伏特 (核能)',
        mega_electron_volt: '兆电子伏特 (核能)',
        giga_electron_volt: '吉电子伏特 (核能)',
        
        // 其他单位
        ton_tnt: 'TNT当量 (爆炸)',
        kiloton_tnt: '千吨TNT当量 (爆炸)',
        megaton_tnt: '兆吨TNT当量 (爆炸)',
        foot_pound: '英尺磅 (机械)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '焦耳是能量的国际单位，以英国物理学家詹姆斯·焦耳命名。',
          '卡路里最初定义为将1克水的温度升高1°C所需的热量，现在精确定义为4.184焦耳。',
          '电子伏特是原子和亚原子粒子能量的常用单位，1eV约等于1.602×10^-19焦耳。',
          'TNT当量用于衡量爆炸威力，1吨TNT当量约等于4.184×10^9焦耳。',
          '千瓦时是电力行业常用的计量单位，1千瓦时等于3.6×10^6焦耳。',
          '英热单位定义为将1磅水的温度升高1°F所需的热量。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '食品能量参考：\n  - 一个苹果：约50千卡\n  - 一碗米饭：约200千卡\n  - 一块巧克力：约150千卡\n  - 成人每日需求：2000-2500千卡',
          '电力消耗参考：\n  - 每月家庭用电：200-400千瓦时\n  - 电动汽车充满：50-100千瓦时\n  - 大型工厂日耗电：数万千瓦时',
          '核能参考：\n  - 核裂变每原子：约200兆电子伏特\n  - 伽马射线：0.1-10兆电子伏特\n  - 质子治疗：100-250兆电子伏特',
          '工业能耗参考：\n  - 工业锅炉每小时：5-20吉焦\n  - 大型冶炼炉每天：数百吉焦\n  - 炼油厂年耗能：数万太焦'
        ]
      }
    },
    force: {
      title: '力',
      description: '力单位转换（包括公制、重力、英制和科学单位）',
      units: {
        // 公制力单位
        metric_newton: '牛顿 (公制)',
        metric_kilonewton: '千牛顿 (公制)',
        metric_meganewton: '兆牛顿 (公制)',
        metric_giganewton: '吉牛顿 (公制)',
        
        // 重力单位
        gravity_kilogram_force: '千克力 (重力)',
        gravity_gram_force: '克力 (重力)',
        gravity_ton_force: '吨力 (重力)',
        
        // 英制力单位
        imperial_pound_force: '磅力 (英制)',
        imperial_ounce_force: '盎司力 (英制)',
        imperial_ton_force: '英吨力 (英制)',
        
        // 科学单位
        scientific_dyne: '达因 (科学)',
        scientific_kilodyne: '千达因 (科学)',
        scientific_megadyne: '兆达因 (科学)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '牛顿是国际单位制中的力单位，定义为使1千克质量的物体获得1米/秒²加速度所需的力。',
          '重力单位基于标准重力加速度（9.80665米/秒²）定义，例如1千克力是1千克质量物体受到的标准重力。',
          '达因是CGS单位制中的力单位，1牛顿等于100000达因。',
          '磅力定义为1磅质量的物体在标准重力加速度下受到的力。',
          '航空航天领域常用千牛顿（kN）表示发动机推力。',
          '工程领域常用兆牛顿（MN）表示大型结构的承重能力。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '日常生活力的参考：\n  - 苹果的重力：约1牛顿\n  - 成人握力：300-500牛顿\n  - 自行车刹车力：100-200牛顿',
          '工程领域力的参考：\n  - 小型起重机：10-50千牛顿\n  - 大型起重机：100-1000千牛顿\n  - 桥梁承重：数兆牛顿',
          '航空领域力的参考：\n  - 小型飞机发动机推力：10-20千牛顿\n  - 大型客机发动机推力：200-400千牛顿\n  - 火箭发动机推力：数兆牛顿',
          '实验室力的参考：\n  - 精密仪器测量：达因级\n  - 材料测试：牛顿到千牛顿级\n  - 结构测试：千牛顿到兆牛顿级'
        ]
      }
    },
    density: {
      title: '密度',
      description: '密度单位转换（包括公制、英制和常用单位）',
      units: {
        // 公制单位
        kilogram_per_cubic_meter: '千克/立方米 (公制)',
        gram_per_cubic_centimeter: '克/立方厘米 (公制)',
        gram_per_milliliter: '克/毫升 (公制)',
        kilogram_per_liter: '千克/升 (公制)',
        
        // 英制单位
        pound_per_cubic_foot: '磅/立方英尺 (英制)',
        pound_per_cubic_inch: '磅/立方英寸 (英制)',
        pound_per_gallon_us: '磅/加仑 (美制)',
        pound_per_gallon_uk: '磅/加仑 (英制)',
        
        // 其他单位
        ounce_per_cubic_foot: '盎司/立方英尺 (英制)',
        ounce_per_gallon_us: '盎司/加仑 (美制)',
        ounce_per_gallon_uk: '盎司/加仑 (英制)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '密度是单位体积内的质量，是物质的基本特性之一。',
          '水在4°C时密度最大，约为1克/立方厘米或1000千克/立方米。',
          '空气在标准状况下的密度约为1.293千克/立方米。',
          '汞是常温下密度最大的液态金属，密度为13.534克/立方厘米。',
          '密度随温度变化，一般物质加热会导致密度降低。',
          '浮力原理：物体所受浮力等于排开液体的重力，这与液体的密度直接相关。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '常见液体密度参考：\n  - 水：1000千克/立方米\n  - 汽油：700-750千克/立方米\n  - 牛奶：1030千克/立方米\n  - 海水：1025千克/立方米',
          '常见固体密度参考：\n  - 铝：2700千克/立方米\n  - 铁：7870千克/立方米\n  - 金：19320千克/立方米\n  - 冰：917千克/立方米',
          '工业应用密度参考：\n  - 润滑油：920-960千克/立方米\n  - 混凝土：2400千克/立方米\n  - 塑料：850-1400千克/立方米',
          '生活应用密度参考：\n  - 蜂蜜：1400千克/立方米\n  - 食用油：920千克/立方米\n  - 酒精：789千克/立方米'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '流量单位转换（包括公制、英制和工业单位）',
      units: {
        // 公制流量单位
        cubic_meter_per_second: '立方米/秒 (公制)',
        cubic_meter_per_hour: '立方米/小时 (公制)',
        liter_per_second: '升/秒 (公制)',
        liter_per_minute: '升/分钟 (公制)',
        liter_per_hour: '升/小时 (公制)',
        
        // 英制流量单位
        gallon_per_minute: '加仑/分钟 (英制)',
        gallon_per_hour: '加仑/小时 (英制)',
        cubic_foot_per_second: '立方英尺/秒 (英制)',
        cubic_foot_per_minute: '立方英尺/分钟 (英制)',
        
        // 工业流量单位
        barrel_per_day: '桶/天 (石油)',
        barrel_per_hour: '桶/小时 (石油)',
        standard_cubic_foot_per_minute: '标准立方英尺/分钟 (工业)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '流量是单位时间内通过某个截面的流体体积，是工业和生活中的重要参数。',
          '石油工业中的桶是特殊计量单位，1桶等于42美制加仑或158.987升。',
          '标准立方英尺（SCFM）是在标准温度和压力下测量的气体流量。',
          '水力发电站的流量直接影响发电量，通常用立方米/秒表示。',
          '管道设计中需要考虑最大流量和经济流量，以确保系统效率。',
          '流量计的选择需要考虑流体类型、压力、温度等多个因素。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '生活用水流量参考：\n  - 家用水龙头：0.1-0.3升/秒\n  - 花洒：0.15-0.3升/秒\n  - 马桶水箱：6-9升/次\n  - 洗衣机：40-60升/次',
          '工业流量参考：\n  - 小型泵：1-10立方米/小时\n  - 中型泵：10-100立方米/小时\n  - 大型泵：100-1000立方米/小时',
          '石油工业流量参考：\n  - 小型油井：10-50桶/天\n  - 中型油井：100-500桶/天\n  - 大型油井：1000+桶/天',
          '空调制冷流量参考：\n  - 家用空调：300-600立方英尺/分钟\n  - 商用空调：1000-5000立方英尺/分钟\n  - 工业空调：5000+立方英尺/分钟'
        ]
      }
    },
    torque: {
      title: '扭矩',
      description: '扭矩单位转换（包括公制、英制和工程单位）',
      units: {
        // 公制单位
        newton_meter: '牛顿米 (公制)',
        newton_centimeter: '牛顿厘米 (公制)',
        kilogram_force_meter: '千克力米 (公制)',
        kilogram_force_centimeter: '千克力厘米 (公制)',
        
        // 英制单位
        pound_force_foot: '磅力英尺 (英制)',
        pound_force_inch: '磅力英寸 (英制)',
        ounce_force_inch: '盎司力英寸 (英制)',
        
        // 工程单位
        dyne_centimeter: '达因厘米 (工程)',
        gram_force_centimeter: '克力厘米 (工程)',
        gram_force_meter: '克力米 (工程)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '扭矩是使物体发生转动的力矩，等于力与力臂的乘积。',
          '牛顿米（N⋅m）是国际单位制中的扭矩单位，与功的单位焦耳相同。',
          '汽车发动机的扭矩通常用牛顿米或磅力英尺表示。',
          '扭矩扳手是精确控制紧固件扭矩的重要工具。',
          '电动机的输出扭矩与转速成反比，这是电机的基本特性。',
          '过大的扭矩可能导致机械零件失效，因此需要合理控制。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '汽车发动机扭矩参考：\n  - 小型轿车：150-300牛顿米\n  - 中型轿车：300-500牛顿米\n  - 大型卡车：1000-3000牛顿米',
          '工具扭矩参考：\n  - 螺丝刀：0.5-5牛顿米\n  - 扭矩扳手：20-200牛顿米\n  - 气动扳手：100-1000牛顿米',
          '机械设备扭矩参考：\n  - 小型电机：1-10牛顿米\n  - 工业电机：50-500牛顿米\n  - 大型机械：1000+牛顿米',
          '日常应用扭矩参考：\n  - 开瓶盖：1-2牛顿米\n  - 自行车踏板：20-40牛顿米\n  - 汽车轮胎：100-150牛顿米'
        ]
      }
    },
    data: {
      title: '数据',
      description: '数据单位转换（包括二进制和十进制单位）',
      units: {
        // 基本单位
        bit: '比特 (基本)',
        byte: '字节 (基本)',
        
        // 二进制单位（IEC标准）
        kibibyte: '千字节 (二进制)',
        mebibyte: '兆字节 (二进制)',
        gibibyte: '吉字节 (二进制)',
        tebibyte: '太字节 (二进制)',
        pebibyte: '拍字节 (二进制)',
        exbibyte: '艾字节 (二进制)',
        
        // 十进制单位（SI标准）
        kilobyte: '千字节 (十进制)',
        megabyte: '兆字节 (十进制)',
        gigabyte: '吉字节 (十进制)',
        terabyte: '太字节 (十进制)',
        petabyte: '拍字节 (十进制)',
        exabyte: '艾字节 (十进制)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '比特（bit）是计算机中最小的数据单位，只能表示0或1两种状态。',
          '字节（byte）通常由8个比特组成，可以表示256种不同的状态。',
          '二进制单位和十进制单位的差异：\n  - 二进制：1024进制（2¹⁰）\n  - 十进制：1000进制（10³）',
          'IEC标准引入了二进制前缀（Ki、Mi、Gi等）以区分十进制前缀（k、M、G等）。',
          '现代计算机存储容量已达到PB级别，数据中心甚至使用EB级存储。',
          '不同操作系统显示存储容量可能不同，因为有些使用二进制单位，有些使用十进制单位。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '存储设备容量参考：\n  - U盘：8-256GB\n  - 固态硬盘：256GB-4TB\n  - 机械硬盘：1-20TB\n  - 企业级存储：数百TB到PB级',
          '内存容量参考：\n  - 智能手机：4-12GB\n  - 个人电脑：8-64GB\n  - 服务器：64GB-2TB\n  - 超级计算机：数TB到PB级',
          '文件大小参考：\n  - 文本文档：几KB到几MB\n  - 图片：几百KB到几十MB\n  - 音乐：3-10MB\n  - 高清视频：几GB到几十GB',
          '数据中心规模参考：\n  - 小型：数十TB\n  - 中型：数百TB到PB级\n  - 大型：数PB到EB级\n  - 超大型：数十EB级'
        ]
      }
    },
    data_rate: {
      title: '数据速率',
      description: '数据速率单位转换（包括二进制和十进制单位）',
      units: {
        // 基本单位
        bit_per_second: '比特/秒 (基本)',
        byte_per_second: '字节/秒 (基本)',
        
        // 二进制单位（IEC标准）
        kibibit_per_second: '千比特/秒 (二进制)',
        mebibit_per_second: '兆比特/秒 (二进制)',
        gibibit_per_second: '吉比特/秒 (二进制)',
        tebibit_per_second: '太比特/秒 (二进制)',
        pebibit_per_second: '拍比特/秒 (二进制)',
        kibibyte_per_second: '千字节/秒 (二进制)',
        mebibyte_per_second: '兆字节/秒 (二进制)',
        gibibyte_per_second: '吉字节/秒 (二进制)',
        tebibyte_per_second: '太字节/秒 (二进制)',
        pebibyte_per_second: '拍字节/秒 (二进制)',
        
        // 十进制单位（SI标准）
        kilobit_per_second: '千比特/秒 (十进制)',
        megabit_per_second: '兆比特/秒 (十进制)',
        gigabit_per_second: '吉比特/秒 (十进制)',
        terabit_per_second: '太比特/秒 (十进制)',
        petabit_per_second: '拍比特/秒 (十进制)',
        kilobyte_per_second: '千字节/秒 (十进制)',
        megabyte_per_second: '兆字节/秒 (十进制)',
        gigabyte_per_second: '吉字节/秒 (十进制)',
        terabyte_per_second: '太字节/秒 (十进制)',
        petabyte_per_second: '拍字节/秒 (十进制)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '数据传输速率通常用比特/秒（bps）表示，而存储传输速率常用字节/秒（B/s）表示。',
          '1字节/秒等于8比特/秒，这是因为1字节=8比特。',
          '网络设备的速率标称值通常使用十进制单位（如1Gbps=1,000,000,000bps）。',
          '存储设备的传输速率通常使用二进制单位（如1GiB/s=1,073,741,824B/s）。',
          '现代光纤通信系统的单波长传输速率可达400Gbps以上。',
          '5G网络理论峰值下载速度可达20Gbps，上传速度可达10Gbps。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '网络连接速率参考：\n  - 家用宽带：100Mbps-1Gbps\n  - 企业专线：1-10Gbps\n  - 数据中心：40-400Gbps\n  - 骨干网：100Gbps-1Tbps',
          '存储设备速率参考：\n  - USB 2.0：60MB/s\n  - USB 3.0：640MB/s\n  - SSD：500MB/s-7GB/s\n  - NVMe：3-7GB/s',
          '无线网络速率参考：\n  - WiFi 4（802.11n）：150-600Mbps\n  - WiFi 5（802.11ac）：433Mbps-6.9Gbps\n  - WiFi 6（802.11ax）：600Mbps-9.6Gbps',
          '实际应用速率参考：\n  - 4K视频流：15-25Mbps\n  - 在线游戏：3-6Mbps\n  - 视频会议：1.5-3Mbps\n  - 网页浏览：1-2Mbps'
        ]
      }
    },
    currency: {
      title: '货币',
      description: '货币单位转换（包括主要国际货币和区域货币）',
      units: {
        // 主要国际货币
        usd: '美元 (国际主要)',
        eur: '欧元 (国际主要)',
        gbp: '英镑 (国际主要)',
        jpy: '日元 (国际主要)',
        chf: '瑞士法郎 (国际主要)',
        
        // 亚洲货币
        cny: '人民币 (亚洲)',
        hkd: '港元 (亚洲)',
        twd: '新台币 (亚洲)',
        krw: '韩元 (亚洲)',
        sgd: '新加坡元 (亚洲)',
        
        // 大洋洲货币
        aud: '澳元 (大洋洲)',
        nzd: '新西兰元 (大洋洲)',
        
        // 美洲货币
        cad: '加拿大元 (美洲)',
        mxn: '墨西哥比索 (美洲)',
        brl: '巴西雷亚尔 (美洲)',
        
        // 其他重要货币
        inr: '印度卢比 (其他)',
        rub: '俄罗斯卢布 (其他)',
        zar: '南非兰特 (其他)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '美元是全球最主要的储备货币，约占全球外汇储备的60%。',
          '欧元是欧盟19个成员国的官方货币，是世界第二大储备货币。',
          '人民币于2016年正式加入国际货币基金组织(IMF)的特别提款权(SDR)货币篮子。',
          '瑞士法郎被视为避险货币，在全球金融市场动荡时往往表现稳定。',
          '日元是亚洲最重要的国际货币之一，也是主要的储备货币。',
          '英镑是世界上最古老的仍在使用的货币之一，具有重要的国际地位。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '主要货币对参考：\n  - EUR/USD：欧元兑美元\n  - GBP/USD：英镑兑美元\n  - USD/JPY：美元兑日元\n  - USD/CHF：美元兑瑞士法郎',
          '亚洲货币参考：\n  - USD/CNY：美元兑人民币\n  - USD/HKD：美元兑港元\n  - USD/SGD：美元兑新加坡元',
          '货币波动参考：\n  - 主要货币：日波动一般在0.1%-1%\n  - 新兴市场货币：日波动可能达到1%-3%\n  - 小币种：波动可能更大',
          '交易成本参考：\n  - 银行柜台：汇率点差较大\n  - 电子银行：点差适中\n  - 专业外汇：点差最小'
        ]
      }
    },
    cooking: {
      title: '烹饪',
      description: '烹饪单位转换（包括体积、重量和温度单位）',
      units: {
        // 美制体积单位
        us_teaspoon: '茶匙 (美制)',
        us_tablespoon: '汤匙 (美制)',
        us_fluid_ounce: '液盎司 (美制)',
        us_cup: '杯 (美制)',
        us_pint: '品脱 (美制)',
        us_quart: '夸脱 (美制)',
        us_gallon: '加仑 (美制)',
        
        // 英制体积单位
        uk_teaspoon: '茶匙 (英制)',
        uk_tablespoon: '汤匙 (英制)',
        uk_fluid_ounce: '液盎司 (英制)',
        uk_cup: '杯 (英制)',
        uk_pint: '品脱 (英制)',
        uk_quart: '夸脱 (英制)',
        uk_gallon: '加仑 (英制)',
        
        // 公制体积单位
        metric_teaspoon: '茶匙 (公制)',
        metric_tablespoon: '汤匙 (公制)',
        metric_cup: '杯 (公制)',
        milliliter: '毫升 (公制)',
        liter: '升 (公制)',
        
        // 中式计量单位
        chinese_bowl: '碗 (中式)',
        chinese_cup: '杯 (中式)',
        chinese_spoon: '勺 (中式)',
        
        // 日式计量单位
        japanese_cup: '合 (日式)',
        japanese_tablespoon: '大さじ (日式)',
        japanese_teaspoon: '小さじ (日式)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '美制和英制烹饪单位虽然名称相同，但实际容量不同：\n  - 1美制杯 = 237毫升\n  - 1英制杯 = 284毫升\n  - 1公制杯 = 250毫升',
          '标准计量勺具的比例关系：\n  - 1汤匙 = 3茶匙\n  - 1杯 = 16汤匙\n  - 1品脱 = 2杯',
          '不同国家和地区的烹饪单位差异很大，使用食谱时要注意单位的来源。',
          '专业厨师更倾向于使用重量单位（克）而不是体积单位，因为更精确。',
          '温度单位的选择也很重要：\n  - 欧洲使用摄氏度\n  - 美国使用华氏度\n  - 专业烘焙常用摄氏度',
          '中式烹饪传统上使用"适量"、"少许"等描述性单位，现代食谱开始采用标准计量单位。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '常见食材体积重量参考：\n  - 面粉：1杯≈130克\n  - 白糖：1杯≈200克\n  - 牛奶：1杯≈240毫升\n  - 食用油：1汤匙≈15毫升',
          '烘焙常用量参考：\n  - 蛋糕配方：2杯面粉、1.5杯糖、3个鸡蛋\n  - 饼干配方：2.5杯面粉、1杯黄油、0.5杯糖\n  - 面包配方：3杯面粉、1茶匙酵母、1茶匙盐',
          '调味料用量参考：\n  - 盐：1茶匙≈5克\n  - 酱油：1汤匙≈15毫升\n  - 料酒：1汤匙≈15毫升\n  - 淀粉：1汤匙≈8克',
          '烹饪温度参考：\n  - 文火：120-130°C\n  - 中火：160-180°C\n  - 大火：200-220°C\n  - 烤箱预热：180°C/350°F'
        ]
      }
    },
    numeral: {
      title: '进制',
      description: '数字进制转换（包括二进制、八进制、十进制和十六进制）',
      binary: {
        title: '二进制',
        description: '二进制数字系统 (0-1)，计算机的基础数字表示方式'
      },
      octal: {
        title: '八进制',
        description: '八进制数字系统 (0-7)，常用于文件权限和特殊场景'
      },
      decimal: {
        title: '十进制',
        description: '十进制数字系统 (0-9)，人类最常用的数字表示方式'
      },
      hexadecimal: {
        title: '十六进制',
        description: '十六进制数字系统 (0-9, A-F)，常用于计算机编程'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '二进制是计算机的基础语言，因为电子元件只能表示开（1）和关（0）两种状态。',
          '一个字节由8位二进制数组成，可以表示0-255的数值范围。',
          '八进制在早期计算机中广泛使用，现在主要用于Unix/Linux系统的文件权限表示。',
          '十六进制常用于：\n  - 颜色代码（如#FF0000表示红色）\n  - 内存地址表示\n  - 机器代码表示',
          '不同进制的表示方法：\n  - 二进制：前缀0b或后缀B\n  - 八进制：前缀0或0o\n  - 十六进制：前缀0x或#',
          'ASCII码使用7位二进制表示128个基本字符，扩展ASCII使用8位表示256个字符。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '二进制转换参考：\n  - 十进制转二进制：除2取余，逆序排列\n  - 二进制转十进制：按权展开求和\n  - 示例：9(十进制) = 1001(二进制)',
          '十六进制颜色参考：\n  - 红色：#FF0000\n  - 绿色：#00FF00\n  - 蓝色：#0000FF\n  - 白色：#FFFFFF\n  - 黑色：#000000',
          'Unix文件权限参考：\n  - 777(八进制) = rwxrwxrwx\n  - 644(八进制) = rw-r--r--\n  - 755(八进制) = rwxr-xr-x',
          '常用数值范围参考：\n  - 8位：0-255（二进制：00000000-11111111）\n  - 16位：0-65535（十六进制：0000-FFFF）\n  - 32位：0-4294967295（十六进制：00000000-FFFFFFFF）'
        ]
      }
    },
    frequency: {
      title: '频率',
      description: '频率单位转换（包括电子、声学、机械和通信单位）',
      units: {
        // 基本单位
        hertz: '赫兹 (基本)',
        
        // 电子和通信单位
        kilohertz: '千赫兹 (电子)',
        megahertz: '兆赫兹 (电子)',
        gigahertz: '吉赫兹 (电子)',
        terahertz: '太赫兹 (电子)',
        
        // 机械单位
        rpm: '转/分钟 (机械)',
        rps: '转/秒 (机械)',
        
        // 周期单位
        cycle_per_second: '周/秒 (周期)',
        cycle_per_minute: '周/分钟 (周期)',
        beat_per_minute: '拍/分钟 (音乐)'
      },
      knowledge: {
        title: '你知道吗？',
        items: [
          '赫兹是国际单位制中的频率单位，以德国物理学家海因里希·赫兹命名。',
          '人耳可听频率范围约为20Hz至20kHz，超声波频率大于20kHz。',
          '无线电波频段划分：\n  - 长波：30-300kHz\n  - 中波：300-3000kHz\n  - 短波：3-30MHz\n  - 超短波：30-300MHz',
          '处理器主频是衡量计算机性能的重要指标，现代CPU主频可达5GHz以上。',
          '5G通信使用的频段包括：\n  - 低频段：700MHz-2.6GHz\n  - 中频段：2.6-4.2GHz\n  - 高频段：24-47GHz',
          '机械设备的转速通常用RPM（转/分钟）表示，需要注意与Hz的换算关系：1Hz = 60RPM。'
        ]
      },
      conversion_tips: {
        title: '转换提示',
        items: [
          '电子设备频率参考：\n  - CPU主频：2-5GHz\n  - RAM时钟：2-4GHz\n  - GPU核心：1-2GHz\n  - 石英晶振：32.768kHz',
          '音频频率参考：\n  - 低音：20-250Hz\n  - 中音：250-2000Hz\n  - 高音：2-20kHz\n  - 采样率：44.1kHz/48kHz',
          '机械转速参考：\n  - 硬盘：5400-7200RPM\n  - 汽车发动机：800-6000RPM\n  - 电风扇：1000-3000RPM\n  - 工业电机：1500-3000RPM',
          '通信频率参考：\n  - AM广播：520-1610kHz\n  - FM广播：88-108MHz\n  - WiFi：2.4GHz/5GHz\n  - 蓝牙：2.4GHz'
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
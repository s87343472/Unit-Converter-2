import type { Translation } from '../types'

const zhTW: Translation = {
  common: {
    title: '單位轉換器',
    description: '強大的在線單位轉換工具',
    loading: '載入中...',
    error: '錯誤',
    copy: '複製',
    copied: '已複製',
    settings: '設定',
    language: '語言',
    theme: '主題',
    about: '關於',
    contact: '聯絡我們',
    home: '首頁',
    selectType: '選擇轉換類型',
    selectLanguage: '選擇語言',
    pageNotFound: '找不到頁面',
    pageNotFoundDesc: '抱歉，您訪問的頁面不存在。',
    backToHome: '返回首頁',
    copyright: '版權',
    enterValue: '輸入數值',
    from: '從',
    to: '到',
    categories: {
      basic: '基本單位',
      area_volume: '面積和體積',
      time_related: '時間相關',
      physics: '物理單位',
      data: '數據單位',
      others: '其他單位'
    },
    instructions: {
      title: '使用說明',
      steps: {
        input: '輸入要轉換的數值',
        select: '選擇輸入數值的單位',
        auto: '系統會自動計算並顯示其他單位的對應值',
        copy: '點擊任何結果可快速複製數值和單位'
      },
      features: {
        title: '功能特點',
        range: {
          title: '支援的數值範圍',
          description: '支援最多20位數（包括小數點）和最多10位小數。對於非常大或非常小的數值，會自動使用科學記數法。'
        },
        copy: {
          title: '複製功能',
          description: '點擊任何轉換結果可複製數值和單位，方便貼上。'
        },
        paste: {
          title: '貼上功能',
          description: '支援貼上帶單位的數值，系統會自動提取數字部分。'
        }
      }
    },
    customOrder: '自定義順序',
    byName: '按名稱',
    byCreatedTime: '按創建時間',
    byLastUsed: '按最後使用',
    clearAll: '清除全部',
    noFavorites: '沒有收藏',
    remove: '移除',
    clearConfirmTitle: '確認',
    clearConfirmMessage: '確定要清除全部嗎？',
    cancel: '取消',
    confirm: '確認',
    addFavorite: '加入收藏',
    removeFavorite: '移除收藏',
    enterFavoriteName: '輸入收藏名稱',
    favoriteNamePlaceholder: '收藏名稱',
    showFavorites: '顯示收藏',
    hideFavorites: '隱藏收藏',
    selectUnit: '選擇單位',
    inputValue: '輸入數值',
    convertResult: '轉換結果',
    searchUnit: '搜尋單位',
    length: '長度',
    conversionHistory: '轉換歷史',
    clearHistory: '清除歷史',
    confirmClear: '確定要清除歷史嗎？',
    delete: '刪除'
  },
  units: {
    length: {
      title: '長度',
      description: '在不同長度單位之間轉換',
      units: {
        metric_meter: '公尺（m）',
        metric_kilometer: '公里（km）',
        metric_centimeter: '公分（cm）',
        metric_millimeter: '公釐（mm）',
        imperial_inch: '英吋（in）',
        imperial_foot: '英尺（ft）',
        imperial_yard: '碼（yd）',
        imperial_mile: '英里（mi）',
        astronomical_light_year: '光年（ly）',
        astronomical_unit: '天文單位（AU）',
        metric_decimeter: '公寸（dm）',
        metric_micrometer: '微米（μm）',
        metric_nanometer: '奈米（nm）',
        metric_picometer: '皮米（pm）',
        nautical_mile: '海里（nmi）',
        nautical_fathom: '英尋（ftm）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '光年不是時間單位，而是光在一年內傳播的距離單位。',
          '天文單位（AU）是基於地球到太陽的平均距離。',
          '公尺最初被定義為從北極到赤道距離的千萬分之一。',
          '現在的公尺是根據真空中的光速來定義的。'
        ]
      }
    },
    area: {
      title: '面積',
      description: '在不同面積單位之間轉換',
      units: {
        metric_square_meter: '平方公尺（m²）',
        metric_square_kilometer: '平方公里（km²）',
        metric_square_centimeter: '平方公分（cm²）',
        metric_square_millimeter: '平方公釐（mm²）',
        imperial_square_inch: '平方英吋（in²）',
        imperial_square_foot: '平方英尺（ft²）',
        imperial_square_yard: '平方碼（yd²）',
        imperial_square_mile: '平方英里（mi²）',
        metric_hectare: '公頃（ha）',
        imperial_acre: '英畝（ac）',
        metric_square_decimeter: '平方公寸（dm²）',
        metric_are: '公畝（a）',
        traditional_mu: '畝（畝）',
        traditional_qing: '頃（頃）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '公頃是為了簡化土地面積測量而創建的，1公頃等於10,000平方公尺。',
          '英畝起源於中世紀，定義為一對牛一天可以耕種的面積。',
          '中國的畝可追溯到商周時期，1畝約等於666.67平方公尺。',
          '平方英里是最大的英制面積單位，等於640英畝。',
          '公畝是等於100平方公尺的公制面積單位，但很少使用。',
          '頃是最大的傳統中國面積單位，等於100畝。'
        ]
      }
    },
    volume: {
      title: '體積',
      description: '在不同體積單位之間轉換',
      units: {
        metric_cubic_meter: '立方公尺（m³）',
        metric_cubic_kilometer: '立方公里（km³）',
        metric_cubic_centimeter: '立方公分（cm³）',
        metric_cubic_millimeter: '立方公釐（mm³）',
        metric_cubic_decimeter: '立方公寸（dm³）',
        metric_liter: '公升（L）',
        metric_milliliter: '毫升（mL）',
        imperial_gallon: '英制加侖（gal）',
        imperial_quart: '英制夸脫（qt）',
        imperial_pint: '英制品脫（pt）',
        us_cup: '美制杯（cup）',
        imperial_fluid_ounce: '英制液量盎司（fl oz）',
        us_tablespoon: '美制湯匙（tbsp）',
        us_teaspoon: '美制茶匙（tsp）',
        imperial_cubic_yard: '立方碼（yd³）',
        imperial_cubic_foot: '立方英尺（ft³）',
        imperial_cubic_inch: '立方英吋（in³）',
        chinese_dan: '石（石）',
        chinese_dou: '斗（斗）',
        chinese_sheng: '升（升）',
        japanese_koku: '石（日）',
        japanese_to: '斗（日）',
        japanese_sho: '升（日）',
        japanese_go: '合（日）',
        industrial_oil_barrel: '石油桶（bbl）',
        industrial_beer_barrel: '啤酒桶（beer bbl）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '1公升恰好等於1立方公寸（1000立方公分），使公制體積轉換非常方便。',
          '美制和英制液體單位有顯著差異：1英制加侖≈4.546公升，1美制加侖≈3.785公升。',
          '中國的斗是古代重要的計量單位，1斗等於10升。',
          '在美制烹飪測量中，1杯 = 16湯匙 = 48茶匙 ≈ 237毫升。',
          '英制品脫用於測量啤酒體積，等於568毫升。',
          '實驗室燒杯和量筒通常使用公制單位（毫升或公升）。'
        ]
      }
    },
    weight: {
      title: '重量',
      description: '在不同重量單位之間轉換',
      units: {
        metric_kilogram: '公斤（kg）',
        metric_tonne: '公噸（t）',
        metric_gram: '公克（g）',
        metric_milligram: '毫克（mg）',
        metric_microgram: '微克（μg）',
        imperial_pound: '磅（lb）',
        imperial_ounce: '盎司（oz）',
        imperial_stone: '英石（st）',
        imperial_long_ton: '英噸（long ton）',
        us_short_ton: '美噸（short ton）',
        jewelry_carat: '克拉（ct）',
        jewelry_grain: '格令（gr）',
        traditional_jin: '斤（斤）',
        traditional_liang: '兩（兩）',
        traditional_qian: '錢（錢）',
        medical_grain: '格令（醫）（gr）',
        medical_dram: '打蘭（醫）（dr）',
        medical_ounce: '盎司（醫）（oz）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '克拉最初是基於豆莢的重量，但現在精確定義為0.2公克。',
          '公斤直到2019年都是唯一由實物定義的SI基本單位，之後改用普朗克常數重新定義。',
          '中國傳統單位：1斤 = 500克，1兩 = 50克，1錢 = 5克。',
          '藥局單位有特殊的換算比例，藥局盎司比常用盎司略輕。',
          '常衡制是英語國家最常用的重量系統，1常衡磅等於453.59237克。',
          '英噸和美噸的差異：1英噸 = 2240磅，1美噸 = 2000磅。'
        ]
      }
    },
    time: {
      title: '時間',
      description: '在不同時間單位之間轉換',
      units: {
        metric_second: '秒（s）',
        metric_minute: '分（min）',
        metric_hour: '小時（h）',
        metric_day: '天（d）',
        metric_week: '週（wk）',
        metric_month: '月（mo）',
        metric_year: '年（yr）',
        metric_decade: '十年（dec）',
        metric_century: '世紀（c）',
        scientific_millisecond: '毫秒（ms）',
        scientific_microsecond: '微秒（μs）',
        scientific_nanosecond: '奈秒（ns）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '1世紀是100年。',
          '1年約為365.25天，這是地球繞太陽一圈所需的時間。',
          '閏年每四年一次，會加入2月29日。',
          '1天是地球自轉一圈的時間，為24小時或86,400秒。'
        ]
      }
    },
    temperature: {
      title: '溫度',
      description: '在不同溫度單位之間轉換',
      units: {
        scientific_kelvin: '開爾文（K）',
        metric_celsius: '攝氏度（°C）',
        us_fahrenheit: '華氏度（°F）',
        scientific_rankine: '蘭金度（°R）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '攝氏度是最常用的溫度單位，水的冰點為0°C，沸點為100°C。',
          '開爾文是國際單位制中的溫度單位，0K是絕對零度，約為-273.15°C。',
          '華氏度在美國仍被廣泛使用，水的冰點為32°F，沸點為212°F。',
          '蘭金度是華氏度的絕對溫度刻度，0°R等於絕對零度。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '在不同速度單位之間轉換',
      units: {
        metric_meter_per_second: '公尺/秒',
        metric_kilometer_per_hour: '公里/時',
        imperial_mile_per_hour: '英里/時',
        imperial_foot_per_second: '英尺/秒',
        nautical_knot: '節',
        aeronautical_mach: '馬赫',
        scientific_light_speed: '光速'
      },
      knowledge: {
        title: '小知識',
        items: [
          '馬赫是音速的倍數，在海平面標準大氣壓下約為340公尺/秒。',
          '節是航海和航空中常用的速度單位，1節等於1海里/小時。',
          '公里/時是陸地交通最常用的速度單位。',
          '音速會隨著溫度、濕度和海拔高度而變化。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '在不同角度單位之間轉換',
      units: {
        angle_degree: '度（°）',
        angle_radian: '弧度（rad）',
        angle_gradian: '百分度（gon）',
        angle_arcminute: '角分（′）',
        angle_arcsecond: '角秒（″）',
        angle_revolution: '圈（rev）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '一個完整的圓是360度或2π弧度。',
          '弧度是角度的自然單位，在數學計算中更常用。',
          '百分度將圓分為400等份，主要在測量中使用。',
          '角分和角秒常用於天文學測量。'
        ]
      }
    },
    pressure: {
      title: '壓力',
      description: '在不同壓力單位之間轉換',
      units: {
        metric_pascal: '帕斯卡（Pa）',
        metric_kilopascal: '千帕（kPa）',
        metric_megapascal: '兆帕（MPa）',
        industrial_bar: '巴（bar）',
        scientific_atmosphere: '標準大氣壓（atm）',
        scientific_torr: '托（Torr）',
        imperial_pound_per_square_inch: '磅/平方英吋（psi）',
        medical_millimeter_mercury: '毫米汞柱（mmHg）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '標準大氣壓等於101325帕斯卡。',
          '毫米汞柱常用於醫療領域測量血壓。',
          '帕斯卡是國際單位制中的壓力單位。',
          '1巴等於100000帕斯卡，接近1個標準大氣壓。'
        ]
      }
    },
    power: {
      title: '功率',
      description: '在不同功率單位之間轉換',
      units: {
        metric_watt: '瓦特（W）',
        metric_kilowatt: '千瓦（kW）',
        metric_megawatt: '兆瓦（MW）',
        imperial_horsepower: '馬力（hp）',
        thermal_btu_per_hour: '英熱單位/小時（BTU/h）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '瓦特是功率的國際單位制單位。',
          '1馬力約等於746瓦特。',
          '家用電器通常以瓦特或千瓦標示功率。',
          '大型發電廠的發電量通常以兆瓦計算。'
        ]
      }
    },
    energy: {
      title: '能量',
      description: '在不同能量單位之間轉換',
      units: {
        metric_joule: '焦耳（J）',
        metric_kilojoule: '千焦（kJ）',
        scientific_calorie: '卡路里（cal）',
        scientific_kilocalorie: '千卡（kcal）',
        scientific_watt_hour: '瓦時（Wh）',
        scientific_kilowatt_hour: '千瓦時（kWh）',
        scientific_electron_volt: '電子伏特（eV）',
        imperial_british_thermal_unit: '英熱單位（BTU）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '焦耳是能量的國際單位制單位。',
          '食品能量通常以千卡（大卡）標示。',
          '電費計算通常使用千瓦時。',
          '電子伏特常用於原子物理學中。'
        ]
      }
    },
    force: {
      title: '力',
      description: '在不同力單位之間轉換',
      units: {
        metric_newton: '牛頓（N）',
        metric_kilonewton: '千牛頓（kN）',
        scientific_dyne: '達因（dyn）',
        imperial_pound_force: '磅力（lbf）',
        scientific_kilogram_force: '公斤力（kgf）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '牛頓是力的國際單位制單位。',
          '1公斤力是1公斤質量在標準重力加速度下的重力。',
          '達因是CGS單位制中的力單位。',
          '磅力是英制中常用的力單位。'
        ]
      }
    },
    density: {
      title: '密度',
      description: '在不同密度單位之間轉換',
      units: {
        metric_kilogram_per_cubic_meter: '公斤/立方公尺（kg/m³）',
        metric_gram_per_cubic_centimeter: '公克/立方公分（g/cm³）',
        imperial_pound_per_cubic_foot: '磅/立方英尺（lb/ft³）',
        imperial_pound_per_cubic_inch: '磅/立方英吋（lb/in³）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '水的密度約為1公克/立方公分。',
          '密度會隨溫度變化而改變。',
          '浮力與物體排開液體的密度有關。',
          '空氣的密度約為1.225公斤/立方公尺。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '在不同流量單位之間轉換',
      units: {
        metric_cubic_meter_per_second: '立方公尺/秒（m³/s）',
        imperial_cubic_foot_per_second: '立方英尺/秒（ft³/s）',
        metric_liter_per_minute: '公升/分鐘（L/min）',
        imperial_gallon_per_minute: '加侖/分鐘（gal/min）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '流量是單位時間內通過某個截面的體積。',
          '水管流量常用公升/分鐘表示。',
          '河流流量常用立方公尺/秒表示。',
          '工業用泵的流量常用加侖/分鐘表示。'
        ]
      }
    },
    torque: {
      title: '扭矩',
      description: '在不同扭矩單位之間轉換',
      units: {
        metric_newton_meter: '牛頓·公尺',
        metric_newton_centimeter: '牛頓·公分',
        imperial_pound_foot: '磅·英尺',
        imperial_pound_inch: '磅·英吋',
        scientific_kilogram_force_meter: '公斤力·公尺',
        scientific_kilogram_force_centimeter: '公斤力·公分'
      },
      knowledge: {
        title: '小知識',
        items: [
          '扭矩是力與力臂的乘積。',
          '汽車引擎的扭矩常用牛頓·公尺表示。',
          '扭矩對機械設計很重要。',
          '螺絲的緊固扭矩常用磅·英吋表示。'
        ]
      }
    },
    data: {
      title: '數據',
      description: '在不同數據單位之間轉換',
      units: {
        digital_bit: '位元（bit）',
        digital_byte: '位元組（B）',
        digital_kilobyte: '千位元組（KB）',
        digital_megabyte: '百萬位元組（MB）',
        digital_gigabyte: '十億位元組（GB）',
        digital_terabyte: '兆位元組（TB）',
        digital_petabyte: '拍位元組（PB）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '1位元組等於8位元。',
          '電腦存儲容量通常以位元組為單位。',
          '數據傳輸速率常用位元/秒。',
          '現代硬碟容量通常以兆位元組或十億位元組計算。'
        ]
      }
    },
    data_rate: {
      title: '數據傳輸率',
      description: '在不同數據傳輸率單位之間轉換',
      units: {
        digital_bit_per_second: '位元/秒（bps）',
        digital_kilobit_per_second: '千位元/秒（kbps）',
        digital_megabit_per_second: '兆位元/秒（Mbps）',
        digital_gigabit_per_second: '吉位元/秒（Gbps）',
        digital_byte_per_second: '位元組/秒（B/s）',
        digital_kilobyte_per_second: '千位元組/秒（KB/s）',
        digital_megabyte_per_second: '百萬位元組/秒（MB/s）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '網路速度通常以位元/秒為單位。',
          '硬碟傳輸速率常用位元組/秒。',
          '5G網路可達到吉位元/秒級別的速度。',
          'USB傳輸速率通常以位元組/秒表示。'
        ]
      }
    },
    cooking: {
      title: '烹飪',
      description: '在不同烹飪單位之間轉換',
      units: {
        metric_cup: '公制杯（metric cup）',
        us_cup: '美制杯（US cup）',
        us_tablespoon: '湯匙（tbsp）',
        us_teaspoon: '茶匙（tsp）',
        imperial_fluid_ounce: '液量盎司（fl oz）',
        metric_milliliter: '毫升（mL）',
        metric_liter: '公升（L）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '不同國家的烹飪單位可能有差異。',
          '1美制杯約等於237毫升。',
          '1湯匙約等於15毫升。',
          '精確的烹飪測量對烘焙特別重要。'
        ]
      }
    },
    numeral: {
      title: '進位制',
      description: '在不同進位制之間轉換',
      units: {
        numeral_decimal: '十進制（dec）',
        numeral_binary: '二進制（bin）',
        numeral_octal: '八進制（oct）',
        numeral_hexadecimal: '十六進制（hex）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '電腦內部使用二進制運算。',
          '十六進制常用於程式設計。',
          '八進制在某些系統中仍有使用。',
          '不同進位制可以表示相同的數值。'
        ]
      }
    },
    frequency: {
      title: '頻率',
      description: '在不同頻率單位之間轉換',
      units: {
        metric_hertz: '赫茲（Hz）',
        metric_kilohertz: '千赫茲（kHz）',
        metric_megahertz: '兆赫茲（MHz）',
        metric_gigahertz: '吉赫茲（GHz）',
        mechanical_revolution_per_minute: '轉/分鐘（rpm）',
        mechanical_revolution_per_second: '轉/秒（rps）'
      },
      knowledge: {
        title: '小知識',
        items: [
          '赫茲是頻率的國際單位制單位。',
          'CPU速度通常以吉赫茲表示。',
          '聲音頻率範圍約為20赫茲到20千赫茲。',
          '馬達轉速常用轉/分鐘表示。'
        ]
      }
    }
  },
  buttons: {
    convert: '轉換',
    clear: '清除',
    swap: '交換',
    copy: '複製'
  },
  messages: {
    copied: '已複製',
    error: '發生錯誤',
    invalidNumber: '無效的數值',
    selectUnit: '請選擇單位',
    conversionError: '轉換錯誤',
    invalidTemperature: '無效的溫度值'
  },
  errors: {
    invalidInput: '無效的輸入',
    invalidFormat: '無效的格式',
    conversionFailed: '轉換失敗',
    copyFailed: '複製失敗'
  },
  footer: {
    about: '關於',
    description: '在線單位轉換工具',
    contact: '聯絡我們',
    email: '電子郵件',
    legal: '法律資訊',
    changelog: '更新日誌'
  },
  converter: {
    title: '單位轉換',
    description: '輕鬆轉換各種單位',
    from: '從',
    to: '到',
    value: '數值',
    result: '結果',
    instructions: {
      title: '使用說明',
      steps: [
        '輸入要轉換的數值',
        '選擇原始單位',
        '選擇目標單位',
        '複製結果'
      ]
    },
    limitations: {
      title: '限制事項',
      items: [
        '某些單位轉換可能有特定限制',
        '非常大或非常小的數值會使用科學記數法顯示'
      ]
    },
    knowledge: {
      title: '小知識',
      items: [
        '1公尺等於100公分',
        '1公斤等於1000公克',
        '1公升等於1000毫升'
      ]
    }
  }
}

export default zhTW 
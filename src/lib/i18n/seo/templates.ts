import { ValidLocale } from '../config'
import { UnitType } from '../units'
import { GenerateDescriptionParams, SEOTemplates } from './types'

const templates: Record<ValidLocale, SEOTemplates> = {
  'zh-CN': {
    title: {
      length: '{type}单位换算器 - {units}在线转换工具',
      area: '{type}单位换算器 - {units}在线转换',
      volume: '{type}单位换算器 - {units}快速换算',
      data: '{type}单位换算器 - {units}数据转换',
      time: '{type}单位换算器 - {units}时间转换',
      weight: '{type}单位换算器 - {units}重量转换',
      temperature: '{type}单位换算器 - {units}温度转换',
      speed: '{type}单位换算器 - {units}速度转换',
      angle: '{type}单位换算器 - {units}角度转换',
      pressure: '{type}单位换算器 - {units}压力转换',
      power: '{type}单位换算器 - {units}功率转换',
      energy: '{type}单位换算器 - {units}能量转换',
      force: '{type}单位换算器 - {units}力转换',
      density: '{type}单位换算器 - {units}密度转换',
      flow: '{type}单位换算器 - {units}流量转换',
      torque: '{type}单位换算器 - {units}扭矩转换',
      data_rate: '{type}单位换算器 - {units}数据速率转换',
      cooking: '{type}单位换算器 - {units}烹饪转换',
      numeral: '{type}单位换算器 - {units}数字转换',
      frequency: '{type}单位换算器 - {units}频率转换'
    },
    description: {
      length: '在线{type}单位换算工具。支持{units}等单位互换，适用于{useCases}。提供精确的换算结果！',
      area: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的面积计算！',
      volume: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的体积容量转换！',
      data: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的数据转换！',
      time: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的时间转换！',
      weight: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的重量转换！',
      temperature: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的温度转换！',
      speed: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的速度转换！',
      angle: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的角度转换！',
      pressure: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的压力转换！',
      power: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的功率转换！',
      energy: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的能量转换！',
      force: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的力转换！',
      density: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的密度转换！',
      flow: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的流量转换！',
      torque: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的扭矩转换！',
      data_rate: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的数据速率转换！',
      cooking: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的烹饪转换！',
      numeral: '专业{type}单位换算工具。支持{units}等单位转换，适用于{useCases}。快速准确的数字转换！',
      frequency: '在线{type}单位换算。支持{units}等单位互换，适用于{useCases}。精确的频率转换！'
    },
    keywords: {
      length: ['长度换算', '单位转换', '在线工具', '米', '厘米', '英寸'],
      area: ['面积换算', '单位转换', '在线工具', '平方米', '平方英尺'],
      volume: ['体积换算', '容量转换', '在线工具', '立方米', '升', '加仑'],
      data: ['数据换算', '单位转换', '在线工具', '字节', '千字节', '兆字节'],
      time: ['时间换算', '单位转换', '在线工具', '秒', '分钟', '小时'],
      weight: ['重量换算', '单位转换', '在线工具', '千克', '克', '磅'],
      temperature: ['温度换算', '单位转换', '在线工具', '摄氏度', '华氏度', '开尔文'],
      speed: ['速度换算', '单位转换', '在线工具', '米/秒', '千米/小时', '英里/小时'],
      angle: ['角度换算', '单位转换', '在线工具', '度', '弧度', '百分度'],
      pressure: ['压力换算', '单位转换', '在线工具', '帕斯卡', '巴', '磅/平方英寸'],
      power: ['功率换算', '单位转换', '在线工具', '瓦特', '千瓦', '马力'],
      energy: ['能量换算', '单位转换', '在线工具', '焦耳', '卡路里', '千瓦时'],
      force: ['力换算', '单位转换', '在线工具', '牛顿', '千克力', '磅力'],
      density: ['密度换算', '单位转换', '在线工具', '千克/立方米', '克/立方厘米'],
      flow: ['流量换算', '单位转换', '在线工具', '立方米/秒', '升/分钟'],
      torque: ['扭矩换算', '单位转换', '在线工具', '牛·米', '千克·米'],
      data_rate: ['数据速率换算', '单位转换', '在线工具', '比特/秒', '字节/秒'],
      cooking: ['烹饪换算', '单位转换', '在线工具', '杯', '勺', '毫升'],
      numeral: ['数字换算', '单位转换', '在线工具', '十进制', '二进制', '十六进制'],
      frequency: ['频率换算', '单位转换', '在线工具', '赫兹', '千赫', '兆赫']
    }
  },
  'en': {
    title: {
      length: '{type} Converter - Convert Between {units} Online',
      area: '{type} Unit Converter - Convert {units} Online',
      volume: '{type} Converter - Convert {units} Units Online',
      data: '{type} Unit Converter - Convert {units} Online',
      time: '{type} Converter - Convert {units} Units Online',
      weight: '{type} Unit Converter - Convert {units} Online',
      temperature: '{type} Converter - Convert {units} Units Online',
      speed: '{type} Unit Converter - Convert {units} Online',
      angle: '{type} Converter - Convert {units} Units Online',
      pressure: '{type} Unit Converter - Convert {units} Online',
      power: '{type} Converter - Convert {units} Units Online',
      energy: '{type} Unit Converter - Convert {units} Online',
      force: '{type} Converter - Convert {units} Units Online',
      density: '{type} Unit Converter - Convert {units} Online',
      flow: '{type} Converter - Convert {units} Units Online',
      torque: '{type} Unit Converter - Convert {units} Online',
      data_rate: '{type} Converter - Convert {units} Units Online',
      cooking: '{type} Converter - Convert {units} Units Online',
      numeral: '{type} Unit Converter - Convert {units} Online',
      frequency: '{type} Converter - Convert {units} Units Online'
    },
    description: {
      length: 'Free online {type} converter. Convert between {units}. Perfect for {useCases}. Fast and accurate conversion results!',
      area: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise calculations!',
      volume: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate volume conversions!',
      data: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise data conversions!',
      time: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate time conversions!',
      weight: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise weight conversions!',
      temperature: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate temperature conversions!',
      speed: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise speed conversions!',
      angle: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate angle conversions!',
      pressure: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise pressure conversions!',
      power: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate power conversions!',
      energy: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise energy conversions!',
      force: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate force conversions!',
      density: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise density conversions!',
      flow: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate flow conversions!',
      torque: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise torque conversions!',
      data_rate: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate data rate conversions!',
      cooking: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate cooking conversions!',
      numeral: 'Professional {type} converter. Transform between {units}. Ideal for {useCases}. Quick and precise numeral conversions!',
      frequency: 'Online {type} converter. Convert between {units}. Perfect for {useCases}. Accurate frequency conversions!'
    },
    keywords: {
      length: ['length converter', 'unit conversion', 'online tool', 'meters', 'feet', 'inches'],
      area: ['area converter', 'unit conversion', 'online tool', 'square meters', 'square feet'],
      volume: ['volume converter', 'capacity converter', 'online tool', 'cubic meters', 'liters', 'gallons'],
      data: ['data converter', 'unit conversion', 'online tool', 'bytes', 'kilobytes', 'megabytes'],
      time: ['time converter', 'unit conversion', 'online tool', 'seconds', 'minutes', 'hours'],
      weight: ['weight converter', 'unit conversion', 'online tool', 'kilograms', 'grams', 'pounds'],
      temperature: ['temperature converter', 'unit conversion', 'online tool', 'celsius', 'fahrenheit', 'kelvin'],
      speed: ['speed converter', 'unit conversion', 'online tool', 'm/s', 'km/h', 'mph'],
      angle: ['angle converter', 'unit conversion', 'online tool', 'degrees', 'radians', 'grads'],
      pressure: ['pressure converter', 'unit conversion', 'online tool', 'pascal', 'bar', 'psi'],
      power: ['power converter', 'unit conversion', 'online tool', 'watts', 'kilowatts', 'horsepower'],
      energy: ['energy converter', 'unit conversion', 'online tool', 'joules', 'calories', 'kilowatt hours'],
      force: ['force converter', 'unit conversion', 'online tool', 'newtons', 'kilogram-force', 'pound-force'],
      density: ['density converter', 'unit conversion', 'online tool', 'kg/m³', 'g/cm³'],
      flow: ['flow converter', 'unit conversion', 'online tool', 'm³/s', 'l/min'],
      torque: ['torque converter', 'unit conversion', 'online tool', 'newton meters', 'kilogram meters'],
      data_rate: ['data rate converter', 'unit conversion', 'online tool', 'bits/s', 'bytes/s'],
      cooking: ['cooking converter', 'unit conversion', 'online tool', 'cups', 'spoons', 'milliliters'],
      numeral: ['numeral converter', 'unit conversion', 'online tool', 'decimal', 'binary', 'hexadecimal'],
      frequency: ['frequency converter', 'unit conversion', 'online tool', 'hertz', 'kilohertz', 'megahertz']
    }
  },
  'ja': {
    title: {
      length: '{type}変換ツール - {units}のオンライン単位変換',
      area: '{type}変換ツール - {units}の面積単位換算',
      volume: '{type}変換ツール - {units}の体積単位換算',
      data: '{type}変換ツール - {units}のデータ単位換算',
      time: '{type}変換ツール - {units}の時間単位換算',
      weight: '{type}変換ツール - {units}の重量単位換算',
      temperature: '{type}変換ツール - {units}の温度単位換算',
      speed: '{type}変換ツール - {units}の速度単位換算',
      angle: '{type}変換ツール - {units}の角度単位換算',
      pressure: '{type}変換ツール - {units}の圧力単位換算',
      power: '{type}変換ツール - {units}の電力単位換算',
      energy: '{type}変換ツール - {units}のエネルギー単位換算',
      force: '{type}変換ツール - {units}の力単位換算',
      density: '{type}変換ツール - {units}の密度単位換算',
      flow: '{type}変換ツール - {units}の流量単位換算',
      torque: '{type}変換ツール - {units}のトルク単位換算',
      data_rate: '{type}変換ツール - {units}のデータ転送速度換算',
      cooking: '{type}変換ツール - {units}の調理単位換算',
      numeral: '{type}変換ツール - {units}の進数変換',
      frequency: '{type}変換ツール - {units}の周波数単位換算'
    },
    description: {
      length: '無料オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      area: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      volume: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      data: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      time: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      weight: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      temperature: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      speed: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      angle: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      pressure: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      power: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      energy: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      force: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      density: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      flow: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      torque: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      data_rate: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      cooking: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！',
      numeral: 'プロフェッショナルな{type}変換ツール。{units}などの単位に対応。{useCases}向けの正確な計算を実現！',
      frequency: 'オンライン{type}変換ツール。{units}などの単位を瞬時に変換。{useCases}に最適！'
    },
    keywords: {
      length: ['長さ変換', '単位変換', 'オンラインツール', 'メートル', 'フィート', 'インチ'],
      area: ['面積変換', '単位変換', 'オンラインツール', '平方メートル', '平方フィート'],
      volume: ['体積変換', '容量変換', 'オンラインツール', '立方メートル', 'リットル', 'ガロン'],
      data: ['データ変換', '単位変換', 'オンラインツール', 'バイト', 'キロバイト', 'メガバイト'],
      time: ['時間変換', '単位変換', 'オンラインツール', '秒', '分', '時間'],
      weight: ['重量変換', '単位変換', 'オンラインツール', 'キログラム', 'グラム', 'ポンド'],
      temperature: ['温度変換', '単位変換', 'オンラインツール', '摂氏', '華氏', 'ケルビン'],
      speed: ['速度変換', '単位変換', 'オンラインツール', 'm/s', 'km/h', 'mph'],
      angle: ['角度変換', '単位変換', 'オンラインツール', '度', 'ラジアン', 'グラド'],
      pressure: ['圧力変換', '単位変換', 'オンラインツール', 'パスカル', 'バール', 'PSI'],
      power: ['電力変換', '単位変換', 'オンラインツール', 'ワット', 'キロワット', '馬力'],
      energy: ['エネルギー変換', '単位変換', 'オンラインツール', 'ジュール', 'カロリー', 'キロワット時'],
      force: ['力変換', '単位変換', 'オンラインツール', 'ニュートン', 'キログラム重', 'ポンド重'],
      density: ['密度変換', '単位変換', 'オンラインツール', 'kg/m³', 'g/cm³'],
      flow: ['流量変換', '単位変換', 'オンラインツール', 'm³/s', 'L/min'],
      torque: ['トルク変換', '単位変換', 'オンラインツール', 'ニュートンメートル', 'キログラムメートル'],
      data_rate: ['データ転送速度変換', '単位変換', 'オンラインツール', 'ビット/秒', 'バイト/秒'],
      cooking: ['調理単位変換', '単位変換', 'オンラインツール', 'カップ', 'スプーン', 'ミリリットル'],
      numeral: ['進数変換', '単位変換', 'オンラインツール', '10進数', '2進数', '16進数'],
      frequency: ['周波数変換', '単位変換', 'オンラインツール', 'ヘルツ', 'キロヘルツ', 'メガヘルツ']
    }
  },
  'zh-TW': {
    title: {
      length: '{type}換算器 - {units}線上轉換工具',
      area: '{type}換算器 - {units}面積單位換算',
      volume: '{type}換算器 - {units}體積單位換算',
      data: '{type}換算器 - {units}數據單位換算',
      time: '{type}換算器 - {units}時間單位換算',
      weight: '{type}換算器 - {units}重量單位換算',
      temperature: '{type}換算器 - {units}溫度單位換算',
      speed: '{type}換算器 - {units}速度單位換算',
      angle: '{type}換算器 - {units}角度單位換算',
      pressure: '{type}換算器 - {units}壓力單位換算',
      power: '{type}換算器 - {units}功率單位換算',
      energy: '{type}換算器 - {units}能量單位換算',
      force: '{type}換算器 - {units}力單位換算',
      density: '{type}換算器 - {units}密度單位換算',
      flow: '{type}換算器 - {units}流量單位換算',
      torque: '{type}換算器 - {units}扭矩單位換算',
      data_rate: '{type}換算器 - {units}數據傳輸率換算',
      cooking: '{type}換算器 - {units}烹飪單位換算',
      numeral: '{type}換算器 - {units}進位制轉換',
      frequency: '{type}換算器 - {units}頻率單位換算'
    },
    description: {
      length: '免費線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      area: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      volume: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      data: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      time: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      weight: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      temperature: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      speed: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      angle: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      pressure: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      power: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      energy: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      force: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      density: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      flow: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      torque: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      data_rate: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      cooking: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      numeral: '專業{type}換算工具。支援{units}等單位轉換。適合{useCases}！',
      frequency: '線上{type}換算工具。支援{units}等單位轉換。適合{useCases}！'
    },
    keywords: {
      length: ['長度換算', '單位轉換', '線上工具', '公尺', '英尺', '英吋'],
      area: ['面積換算', '單位轉換', '線上工具', '平方公尺', '平方英尺'],
      volume: ['體積換算', '容量轉換', '線上工具', '立方公尺', '公升', '加侖'],
      data: ['數據換算', '單位轉換', '線上工具', '位元組', '千位元組', '百萬位元組'],
      time: ['時間換算', '單位轉換', '線上工具', '秒', '分鐘', '小時'],
      weight: ['重量換算', '單位轉換', '線上工具', '公斤', '公克', '磅'],
      temperature: ['溫度換算', '單位轉換', '線上工具', '攝氏', '華氏', '開爾文'],
      speed: ['速度換算', '單位轉換', '線上工具', '公尺/秒', '公里/小時', '英里/小時'],
      angle: ['角度換算', '單位轉換', '線上工具', '度', '弧度', '百分度'],
      pressure: ['壓力換算', '單位轉換', '線上工具', '帕斯卡', '巴', '磅/平方英吋'],
      power: ['功率換算', '單位轉換', '線上工具', '瓦特', '千瓦', '馬力'],
      energy: ['能量換算', '單位轉換', '線上工具', '焦耳', '卡路里', '千瓦時'],
      force: ['力換算', '單位轉換', '線上工具', '牛頓', '公斤力', '磅力'],
      density: ['密度換算', '單位轉換', '線上工具', '公斤/立方公尺', '公克/立方公分'],
      flow: ['流量換算', '單位轉換', '線上工具', '立方公尺/秒', '公升/分鐘'],
      torque: ['扭矩換算', '單位轉換', '線上工具', '牛頓·公尺', '公斤·公尺'],
      data_rate: ['數據傳輸率換算', '單位轉換', '線上工具', '位元/秒', '位元組/秒'],
      cooking: ['烹飪換算', '單位轉換', '線上工具', '杯', '匙', '毫升'],
      numeral: ['進位制換算', '單位轉換', '線上工具', '十進制', '二進制', '十六進制'],
      frequency: ['頻率換算', '單位轉換', '線上工具', '赫茲', '千赫茲', '兆赫茲']
    }
  }
};

export const generateDescription = ({
  locale,
  type,
  unitExamples,
  usageCases
}: GenerateDescriptionParams): string => {
  const template = templates[locale]?.description?.[type] || templates['en'].description[type];
  return template
    .replace('{type}', type)
    .replace('{units}', unitExamples.join(', '))
    .replace('{useCases}', usageCases.join(', '));
};

export const getKeywords = (locale: ValidLocale, type: UnitType): string[] => {
  return templates[locale]?.keywords?.[type] || templates['en'].keywords[type];
};

export const generateTitle = (locale: ValidLocale, type: UnitType, units: string[]): string => {
  const template = templates[locale]?.title?.[type] || templates['en'].title[type];
  return template
    .replace('{type}', type)
    .replace('{units}', units.join(', '));
};

export default templates 
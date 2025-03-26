import { ValidLocale } from '../../config'
import { UnitType } from '../../units'

type UnitExamples = Record<ValidLocale, Record<UnitType, string[]>>
type UsageCases = Record<ValidLocale, Record<UnitType, string[]>>

const unitExamplesMap: UnitExamples = {
  'zh-CN': {
    length: ['1米等于100厘米', '1公里等于1000米', '1英寸等于2.54厘米'],
    area: ['平方米', '平方厘米', '平方千米', '公顷', '亩', '平方英尺'],
    volume: ['立方米', '升', '毫升', '加仑', '品脱', '液盎司'],
    data: ['字节', '千字节', '兆字节', '吉字节', '太字节'],
    time: ['秒', '分钟', '小时', '天', '周', '月', '年'],
    weight: ['千克', '克', '毫克', '吨', '磅', '盎司'],
    temperature: ['摄氏度', '华氏度', '开尔文'],
    speed: ['米/秒', '千米/小时', '英里/小时', '节'],
    angle: ['度', '弧度', '百分度'],
    pressure: ['帕斯卡', '巴', '标准大气压', '毫米汞柱'],
    power: ['瓦特', '千瓦', '马力', '焦耳/秒'],
    energy: ['焦耳', '卡路里', '千瓦时', '电子伏特'],
    force: ['牛顿', '达因', '千克力', '磅力'],
    density: ['千克/立方米', '克/立方厘米', '磅/立方英尺'],
    flow: ['立方米/秒', '升/秒', '加仑/分钟'],
    torque: ['牛顿米', '磅英尺', '千克力米'],
    data_rate: ['比特/秒', '字节/秒', '千比特/秒', '兆比特/秒'],
    cooking: ['杯', '汤匙', '茶匙', '毫升', '克'],
    numeral: ['二进制', '八进制', '十进制', '十六进制'],
    frequency: ['赫兹', '千赫兹', '兆赫兹', '吉赫兹']
  },
  'en': {
    length: ['1 meter equals 100 centimeters', '1 kilometer equals 1000 meters', '1 inch equals 2.54 centimeters'],
    area: ['square meters', 'square centimeters', 'square kilometers', 'hectares', 'acres', 'square feet'],
    volume: ['cubic meters', 'liters', 'milliliters', 'gallons', 'pints', 'fluid ounces'],
    data: ['bytes', 'kilobytes', 'megabytes', 'gigabytes', 'terabytes'],
    time: ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'],
    weight: ['kilograms', 'grams', 'milligrams', 'tons', 'pounds', 'ounces'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
    speed: ['meters per second', 'kilometers per hour', 'miles per hour', 'knots'],
    angle: ['degrees', 'radians', 'gradians'],
    pressure: ['pascals', 'bars', 'atmospheres', 'millimeters of mercury'],
    power: ['watts', 'kilowatts', 'horsepower', 'joules per second'],
    energy: ['joules', 'calories', 'kilowatt-hours', 'electron volts'],
    force: ['newtons', 'dynes', 'kilogram-force', 'pound-force'],
    density: ['kilograms per cubic meter', 'grams per cubic centimeter', 'pounds per cubic foot'],
    flow: ['cubic meters per second', 'liters per second', 'gallons per minute'],
    torque: ['newton-meters', 'pound-feet', 'kilogram-force meters'],
    data_rate: ['bits per second', 'bytes per second', 'kilobits per second', 'megabits per second'],
    cooking: ['cups', 'tablespoons', 'teaspoons', 'milliliters', 'grams'],
    numeral: ['binary', 'octal', 'decimal', 'hexadecimal'],
    frequency: ['hertz', 'kilohertz', 'megahertz', 'gigahertz']
  },
  'ja': {
    length: ['1メートルは100センチメートル', '1キロメートルは1000メートル', '1インチは2.54センチメートル'],
    area: ['平方メートル', '平方センチメートル', '平方キロメートル', 'ヘクタール', 'エーカー', '平方フィート'],
    volume: ['立方メートル', 'リットル', 'ミリリットル', 'ガロン', 'パイント', '液量オンス'],
    data: ['バイト', 'キロバイト', 'メガバイト', 'ギガバイト', 'テラバイト'],
    time: ['秒', '分', '時間', '日', '週', '月', '年'],
    weight: ['キログラム', 'グラム', 'ミリグラム', 'トン', 'ポンド', 'オンス'],
    temperature: ['摂氏', '華氏', 'ケルビン'],
    speed: ['メートル/秒', 'キロメートル/時', 'マイル/時', 'ノット'],
    angle: ['度', 'ラジアン', 'グラジアン'],
    pressure: ['パスカル', 'バール', '気圧', '水銀柱ミリメートル'],
    power: ['ワット', 'キロワット', '馬力', 'ジュール/秒'],
    energy: ['ジュール', 'カロリー', 'キロワット時', '電子ボルト'],
    force: ['ニュートン', 'ダイン', 'キログラム重', 'ポンド重'],
    density: ['キログラム/立方メートル', 'グラム/立方センチメートル', 'ポンド/立方フィート'],
    flow: ['立方メートル/秒', 'リットル/秒', 'ガロン/分'],
    torque: ['ニュートンメートル', 'ポンドフィート', 'キログラム力メートル'],
    data_rate: ['ビット/秒', 'バイト/秒', 'キロビット/秒', 'メガビット/秒'],
    cooking: ['カップ', '大さじ', '小さじ', 'ミリリットル', 'グラム'],
    numeral: ['二進数', '八進数', '十進数', '十六進数'],
    frequency: ['ヘルツ', 'キロヘルツ', 'メガヘルツ', 'ギガヘルツ']
  },
  'zh-TW': {
    length: ['1公尺等於100公分', '1公里等於1000公尺', '1英吋等於2.54公分'],
    area: ['平方公尺', '平方公分', '平方公里', '公頃', '英畝', '平方英尺'],
    volume: ['立方公尺', '公升', '毫升', '加侖', '品脫', '液盎司'],
    data: ['位元組', '千位元組', '百萬位元組', '十億位元組', '兆位元組'],
    time: ['秒', '分鐘', '小時', '天', '週', '月', '年'],
    weight: ['公斤', '公克', '毫克', '公噸', '磅', '盎司'],
    temperature: ['攝氏度', '華氏度', '開爾文'],
    speed: ['公尺/秒', '公里/小時', '英里/小時', '節'],
    angle: ['度', '弧度', '百分度'],
    pressure: ['帕斯卡', '巴', '標準大氣壓', '毫米汞柱'],
    power: ['瓦特', '千瓦', '馬力', '焦耳/秒'],
    energy: ['焦耳', '卡路里', '千瓦時', '電子伏特'],
    force: ['牛頓', '達因', '公斤力', '磅力'],
    density: ['公斤/立方公尺', '公克/立方公分', '磅/立方英尺'],
    flow: ['立方公尺/秒', '公升/秒', '加侖/分鐘'],
    torque: ['牛頓米', '磅英尺', '公斤力米'],
    data_rate: ['位元/秒', '位元組/秒', '千位元/秒', '百萬位元/秒'],
    cooking: ['杯', '湯匙', '茶匙', '毫升', '公克'],
    numeral: ['二進位', '八進位', '十進位', '十六進位'],
    frequency: ['赫茲', '千赫茲', '百萬赫茲', '十億赫茲']
  }
} as const

const usageCasesMap: UsageCases = {
  'zh-CN': {
    length: ['测量房间尺寸', '计算行驶距离', '制作家具'],
    area: ['房地产', '土地测量', '室内设计', '农业规划', '城市规划'],
    volume: ['液体测量', '容器容量', '建筑工程', '化学实验', '食品加工'],
    data: ['文件大小', '存储容量', '网络传输', '数据备份', '系统配置'],
    time: ['日程安排', '项目规划', '运动计时', '科学实验', '交通时刻'],
    weight: ['商品称重', '食材计量', '物流运输', '科学实验', '健康管理'],
    temperature: ['天气预报', '室内温度', '科学实验', '食品储存', '工业控制'],
    speed: ['交通速度', '运动速度', '风速测量', '工业控制', '科学实验'],
    angle: ['建筑设计', '工程测量', '天文观测', '机械制造', '导航定位'],
    pressure: ['气象测量', '工业控制', '科学实验', '潜水测量', '航空控制'],
    power: ['电器功率', '工业设备', '能源管理', '科学实验', '运动训练'],
    energy: ['能源消耗', '运动消耗', '食品热量', '工业控制', '科学实验'],
    force: ['工程计算', '机械设计', '运动训练', '科学实验', '工业控制'],
    density: ['材料科学', '化学实验', '工业控制', '环境监测', '食品加工'],
    flow: ['水利工程', '工业控制', '环境监测', '科学实验', '医疗设备'],
    torque: ['机械设计', '工程计算', '工业控制', '运动训练', '科学实验'],
    data_rate: ['网络传输', '数据通信', '系统性能', '视频流', '科学计算'],
    cooking: ['食谱制作', '食材计量', '烘焙制作', '餐饮服务', '家庭烹饪'],
    numeral: ['计算机编程', '电子工程', '数学计算', '科学实验', '数据编码'],
    frequency: ['无线电', '音频处理', '电子设备', '科学实验', '通信系统']
  },
  'en': {
    length: ['Measuring room dimensions', 'Calculating travel distance', 'Furniture making'],
    area: ['real estate', 'land surveying', 'interior design', 'agriculture', 'urban planning'],
    volume: ['liquid measurement', 'container capacity', 'construction', 'chemistry', 'food processing'],
    data: ['file size', 'storage capacity', 'network transfer', 'data backup', 'system configuration'],
    time: ['scheduling', 'project planning', 'sports timing', 'scientific research', 'transportation'],
    weight: ['product weighing', 'ingredient measurement', 'logistics', 'scientific research', 'health management'],
    temperature: ['weather forecast', 'room temperature', 'scientific research', 'food storage', 'industrial control'],
    speed: ['traffic speed', 'sports speed', 'wind speed', 'industrial control', 'scientific research'],
    angle: ['architecture', 'engineering', 'astronomy', 'manufacturing', 'navigation'],
    pressure: ['weather measurement', 'industrial control', 'scientific research', 'diving', 'aviation'],
    power: ['appliance power', 'industrial equipment', 'energy management', 'scientific research', 'sports training'],
    energy: ['energy consumption', 'sports energy', 'food calories', 'industrial control', 'scientific research'],
    force: ['engineering', 'mechanical design', 'sports training', 'scientific research', 'industrial control'],
    density: ['materials science', 'chemistry', 'industrial control', 'environmental monitoring', 'food processing'],
    flow: ['hydraulic engineering', 'industrial control', 'environmental monitoring', 'scientific research', 'medical equipment'],
    torque: ['mechanical design', 'engineering', 'industrial control', 'sports training', 'scientific research'],
    data_rate: ['network transfer', 'data communication', 'system performance', 'video streaming', 'scientific computing'],
    cooking: ['recipe making', 'ingredient measurement', 'baking', 'catering', 'home cooking'],
    numeral: ['computer programming', 'electronics', 'mathematics', 'scientific research', 'data encoding'],
    frequency: ['radio', 'audio processing', 'electronics', 'scientific research', 'communication systems']
  },
  'ja': {
    length: ['部屋の寸法測定', '走行距離の計算', '家具の製作'],
    area: ['不動産', '測量', 'インテリアデザイン', '農業', '都市計画'],
    volume: ['液体測定', '容器容量', '建設', '化学実験', '食品加工'],
    data: ['ファイルサイズ', 'ストレージ容量', 'ネットワーク転送', 'データバックアップ', 'システム設定'],
    time: ['スケジュール管理', 'プロジェクト計画', 'スポーツタイミング', '科学研究', '交通'],
    weight: ['商品重量', '材料計量', '物流', '科学研究', '健康管理'],
    temperature: ['天気予報', '室温', '科学研究', '食品保存', '工業制御'],
    speed: ['交通速度', 'スポーツ速度', '風速', '工業制御', '科学研究'],
    angle: ['建築', '工学', '天文学', '製造', 'ナビゲーション'],
    pressure: ['気象測定', '工業制御', '科学研究', 'ダイビング', '航空'],
    power: ['家電電力', '工業機器', 'エネルギー管理', '科学研究', 'スポーツトレーニング'],
    energy: ['エネルギー消費', 'スポーツエネルギー', '食品カロリー', '工業制御', '科学研究'],
    force: ['工学', '機械設計', 'スポーツトレーニング', '科学研究', '工業制御'],
    density: ['材料科学', '化学', '工業制御', '環境モニタリング', '食品加工'],
    flow: ['水力工学', '工業制御', '環境モニタリング', '科学研究', '医療機器'],
    torque: ['機械設計', '工学', '工業制御', 'スポーツトレーニング', '科学研究'],
    data_rate: ['ネットワーク転送', 'データ通信', 'システム性能', '動画ストリーミング', '科学計算'],
    cooking: ['レシピ作成', '材料計量', '製菓', 'ケータリング', '家庭料理'],
    numeral: ['コンピュータプログラミング', '電子工学', '数学', '科学研究', 'データエンコーディング'],
    frequency: ['ラジオ', '音声処理', '電子機器', '科学研究', '通信システム']
  },
  'zh-TW': {
    length: ['測量房間尺寸', '計算行駛距離', '製作家具'],
    area: ['房地產', '土地測量', '室內設計', '農業規劃', '城市規劃'],
    volume: ['液體測量', '容器容量', '建築工程', '化學實驗', '食品加工'],
    data: ['檔案大小', '儲存容量', '網路傳輸', '資料備份', '系統配置'],
    time: ['日程安排', '專案規劃', '運動計時', '科學實驗', '交通時刻'],
    weight: ['商品稱重', '食材計量', '物流運輸', '科學實驗', '健康管理'],
    temperature: ['天氣預報', '室內溫度', '科學實驗', '食品儲存', '工業控制'],
    speed: ['交通速度', '運動速度', '風速測量', '工業控制', '科學實驗'],
    angle: ['建築設計', '工程測量', '天文觀測', '機械製造', '導航定位'],
    pressure: ['氣象測量', '工業控制', '科學實驗', '潛水測量', '航空控制'],
    power: ['電器功率', '工業設備', '能源管理', '科學實驗', '運動訓練'],
    energy: ['能源消耗', '運動消耗', '食品熱量', '工業控制', '科學實驗'],
    force: ['工程計算', '機械設計', '運動訓練', '科學實驗', '工業控制'],
    density: ['材料科學', '化學實驗', '工業控制', '環境監測', '食品加工'],
    flow: ['水利工程', '工業控制', '環境監測', '科學實驗', '醫療設備'],
    torque: ['機械設計', '工程計算', '工業控制', '運動訓練', '科學實驗'],
    data_rate: ['網路傳輸', '資料通訊', '系統效能', '視訊串流', '科學計算'],
    cooking: ['食譜製作', '食材計量', '烘焙製作', '餐飲服務', '家庭烹飪'],
    numeral: ['電腦程式設計', '電子工程', '數學計算', '科學實驗', '資料編碼'],
    frequency: ['無線電', '音訊處理', '電子設備', '科學實驗', '通訊系統']
  }
} as const

export const getUnitExamples = (locale: ValidLocale, type: UnitType): string[] => {
  return unitExamplesMap[locale][type]
}

export const getUsageCases = (locale: ValidLocale, type: UnitType): string[] => {
  return usageCasesMap[locale][type]
}

export default {
  unitExamplesMap,
  usageCasesMap
} 
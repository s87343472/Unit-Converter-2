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
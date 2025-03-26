import { UnitType } from './units'
import { ValidLocale } from './config'

type PageSEOConfig = {
    title: string
    description: string
}

// 创建一个基本配置，用于各语言版本
const baseConfig: Record<UnitType, PageSEOConfig> = {
    length: { title: '', description: '' },
    area: { title: '', description: '' },
    volume: { title: '', description: '' },
    weight: { title: '', description: '' },
    time: { title: '', description: '' },
    temperature: { title: '', description: '' },
    speed: { title: '', description: '' },
    angle: { title: '', description: '' },
    pressure: { title: '', description: '' },
    power: { title: '', description: '' },
    energy: { title: '', description: '' },
    force: { title: '', description: '' },
    density: { title: '', description: '' },
    flow: { title: '', description: '' },
    torque: { title: '', description: '' },
    data: { title: '', description: '' },
    data_rate: { title: '', description: '' },
    cooking: { title: '', description: '' },
    numeral: { title: '', description: '' },
    frequency: { title: '', description: '' }
}

export const pageSeoConfig: Record<ValidLocale, Record<UnitType, PageSEOConfig>> = {
    'zh-CN': {
        ...baseConfig,
        length: {
            title: '长度单位换算器 - 米、厘米、英寸、英尺在线转换',
            description: '在线长度单位换算：米、厘米、英寸、英尺等多种单位快速转换。支持公制、英制单位互换，精准的长度换算工具！'
        },
        area: {
            title: '面积单位换算器 - 平方米、平方英尺、亩、公顷转换',
            description: '专业面积单位换算工具，支持平方米、平方英尺、亩、公顷等单位互转。农田、房产面积快速计算！'
        },
        volume: {
            title: '体积单位换算器 - 立方米、升、加仑在线转换',
            description: '在线体积和容量单位转换工具。支持立方米、升、加仑等单位互换，适用于工程计算和日常使用。'
        },
        weight: {
            title: '重量单位换算器 - 千克、磅、克、盎司在线转换',
            description: '精确的重量单位换算工具，支持公斤、磅、克、盎司等单位转换。快速获取准确的重量换算结果！'
        },
        temperature: {
            title: '温度单位换算器 - 摄氏度、华氏度、开尔文转换',
            description: '在线温度单位换算：摄氏度(℃)、华氏度(℉)、开尔文(K)温度尺度互转。科学精准的温度转换！'
        },
        speed: {
            title: '速度单位换算器 - 公里/小时、英里/小时、米/秒转换',
            description: '速度单位在线换算工具。支持公里每小时、英里每小时、米每秒等速度单位互换，交通和物理计算必备！'
        },
        time: {
            title: '时间单位换算器 - 年、月、周、天、小时、分钟、秒转换',
            description: '时间单位快速换算工具。支持年、月、周、天、小时、分钟、秒等时间单位互转，简单实用！'
        },
        pressure: {
            title: '压力单位换算器 - 帕斯卡、巴、标准大气压转换',
            description: '专业压力单位换算：帕斯卡、巴、标准大气压等压力单位互换。工程技术人员的得力助手！'
        },
        energy: {
            title: '能量单位换算器 - 焦耳、卡路里、千瓦时转换',
            description: '在线能量单位换算工具。支持焦耳、卡路里、千瓦时等能量单位转换，适用于物理计算和营养分析。'
        },
        data: {
            title: '数据存储单位换算器 - 比特、字节、KB、MB、GB转换',
            description: '数据存储容量单位换算工具。支持比特、字节、KB、MB、GB等单位转换，IT从业者必备工具！'
        },
        angle: {
            title: '角度单位换算器 - 度、弧度、分、秒在线转换',
            description: '在线角度单位换算工具。支持度、弧度、分、秒等角度单位互转，适用于数学计算和工程测量。'
        },
        power: {
            title: '功率单位换算器 - 瓦特、千瓦、马力在线转换',
            description: '在线功率单位换算：瓦特、千瓦、马力等单位快速转换。适用于电力计算和机械工程！'
        },
        force: {
            title: '力单位换算器 - 牛顿、千牛、公斤力在线转换',
            description: '专业力单位换算工具。支持牛顿、千牛、公斤力等单位互转，物理和工程计算的理想工具！'
        },
        density: {
            title: '密度单位换算器 - 千克/立方米、克/立方厘米转换',
            description: '密度单位在线换算工具。支持千克每立方米、克每立方厘米等密度单位转换，化学和物理计算必备！'
        },
        flow: {
            title: '流量单位换算器 - 立方米/秒、升/分钟在线转换',
            description: '流量单位换算工具。支持立方米每秒、升每分钟等流量单位互换，适用于流体力学和工程计算。'
        },
        torque: {
            title: '扭矩单位换算器 - 牛顿米、公斤力米在线转换',
            description: '在线扭矩单位换算：牛顿米、公斤力米等单位快速转换。机械工程和汽车维修必备工具！'
        },
        data_rate: {
            title: '数据传输速率单位换算器 - bps、Kbps、Mbps转换',
            description: '数据传输速率单位换算工具。支持bps、Kbps、Mbps、Gbps等单位转换，网络和通信技术必备！'
        },
        cooking: {
            title: '烹饪单位换算器 - 克、盎司、杯、勺在线转换',
            description: '厨房烹饪单位换算工具。支持克、盎司、杯、勺等计量单位互换，让烹饪更加精确简便！'
        },
        numeral: {
            title: '进制转换器 - 二进制、八进制、十进制、十六进制转换',
            description: '在线进制转换工具。支持二进制、八进制、十进制、十六进制数字互换，程序开发必备工具！'
        },
        frequency: {
            title: '频率单位换算器 - 赫兹、千赫、兆赫在线转换',
            description: '频率单位在线换算工具。支持赫兹、千赫、兆赫等频率单位互转，电子和通信工程必备！'
        }
    },
    'en': {
        ...baseConfig,
        length: {
            title: 'Length Converter - Convert Meters, Feet, Inches Online',
            description: 'Free online length converter. Convert between meters, feet, inches, and more. Fast and accurate length unit conversion tool!'
        },
        area: {
            title: 'Area Converter - Square Meters, Square Feet, Acres',
            description: 'Convert area units online: square meters, square feet, acres, hectares. Perfect for real estate and land measurements!'
        },
        volume: {
            title: 'Volume Converter - Cubic Meters, Liters, Gallons',
            description: 'Online volume converter for cubic meters, liters, gallons and more. Perfect for engineering and everyday calculations!'
        },
        weight: {
            title: 'Weight Converter - Convert Kilograms, Pounds, Ounces',
            description: 'Free online weight converter. Convert between kilograms, pounds, ounces, and more. Fast and accurate mass conversion!'
        },
        temperature: {
            title: 'Temperature Converter - Celsius, Fahrenheit, Kelvin',
            description: 'Convert temperature units online: Celsius (°C), Fahrenheit (°F), Kelvin (K). Quick and accurate temperature conversion!'
        },
        speed: {
            title: 'Speed Converter - km/h, mph, m/s Online Conversion',
            description: 'Convert speed units online. Transform between kilometers per hour, miles per hour, meters per second. Perfect for physics and travel!'
        },
        time: {
            title: 'Time Unit Converter - Years, Days, Hours, Minutes, Seconds',
            description: 'Convert time units online. Transform between years, months, weeks, days, hours, minutes, and seconds. Simple and practical!'
        },
        pressure: {
            title: 'Pressure Converter - Pascal, Bar, Atmosphere Units',
            description: 'Professional pressure unit converter. Convert between pascal, bar, atmosphere, and more. Essential for engineering calculations!'
        },
        energy: {
            title: 'Energy Converter - Joules, Calories, Kilowatt Hours',
            description: 'Convert energy units online. Transform between joules, calories, kilowatt hours. Perfect for physics and nutrition calculations!'
        },
        data: {
            title: 'Data Storage Converter - Bits, Bytes, KB, MB, GB',
            description: 'Convert data storage units online. Transform between bits, bytes, KB, MB, GB, and more. Essential tool for IT professionals!'
        },
        angle: {
            title: 'Angle Converter - Degrees, Radians, Minutes, Seconds',
            description: 'Convert angle measurements online. Transform between degrees, radians, minutes, seconds. Perfect for mathematics and engineering!'
        },
        power: {
            title: 'Power Converter - Watts, Kilowatts, Horsepower',
            description: 'Convert power units online. Transform between watts, kilowatts, horsepower. Essential for electrical and mechanical engineering!'
        },
        force: {
            title: 'Force Converter - Newtons, Kilonewtons, Pound-force',
            description: 'Professional force unit converter. Transform between newtons, kilonewtons, pound-force. Perfect for physics and engineering!'
        },
        density: {
            title: 'Density Converter - kg/m³, g/cm³ Online Conversion',
            description: 'Convert density units online. Transform between kg/m³, g/cm³, and more. Essential for chemistry and physics calculations!'
        },
        flow: {
            title: 'Flow Rate Converter - m³/s, L/min Online Conversion',
            description: 'Convert flow rate units online. Transform between cubic meters per second, liters per minute. Perfect for fluid dynamics and engineering!'
        },
        torque: {
            title: 'Torque Converter - Newton Meters, Kilogram Meters',
            description: 'Convert torque units online. Transform between newton meters, kilogram meters. Essential for mechanical engineering and automotive!'
        },
        data_rate: {
            title: 'Data Rate Converter - bps, Kbps, Mbps, Gbps',
            description: 'Convert data transfer rate units online. Transform between bps, Kbps, Mbps, Gbps. Essential for networking and communications!'
        },
        cooking: {
            title: 'Cooking Unit Converter - Grams, Ounces, Cups, Spoons',
            description: 'Convert cooking measurement units online. Transform between grams, ounces, cups, tablespoons. Perfect for precise cooking and baking!'
        },
        numeral: {
            title: 'Number Base Converter - Binary, Octal, Decimal, Hex',
            description: 'Convert between number systems online. Transform binary, octal, decimal, and hexadecimal. Essential tool for programmers!'
        },
        frequency: {
            title: 'Frequency Converter - Hertz, Kilohertz, Megahertz',
            description: 'Convert frequency units online. Transform between hertz, kilohertz, megahertz. Perfect for electronics and communications!'
        }
    },
    'ja': {
        ...baseConfig,
        length: {
            title: '長さ単位変換ツール - メートル、フィート、インチの変換',
            description: 'オンラインで長さの単位を変換。メートル、フィート、インチなどの単位を簡単に変換できます。正確で使いやすい長さの単位変換ツール！'
        },
        area: {
            title: '面積単位変換ツール - 平方メートル、平方フィート、エーカー',
            description: '面積の単位をオンラインで変換。平方メートル、平方フィート、エーカー、ヘクタールなどの単位を変換できます。不動産や土地測量に最適！'
        },
        volume: {
            title: '体積単位変換ツール - 立方メートル、リットル、ガロン',
            description: 'オンラインで体積の単位を変換。立方メートル、リットル、ガロンなどの単位を変換できます。工学計算や日常使用に便利！'
        },
        weight: {
            title: '重さ単位変換ツール - キログラム、ポンド、オンス',
            description: '重さの単位をオンラインで変換。キログラム、ポンド、オンスなどの単位を正確に変換できます。素早く簡単な重さの換算！'
        },
        temperature: {
            title: '温度単位変換ツール - 摂氏、華氏、ケルビン',
            description: 'オンラインで温度の単位を変換。摂氏（℃）、華氏（℉）、ケルビン（K）の温度を変換できます。科学的で正確な温度換算！'
        },
        speed: {
            title: '速度単位変換ツール - km/h、mph、m/s',
            description: '速度の単位をオンラインで変換。キロメートル毎時、マイル毎時、メートル毎秒などの速度単位を変換できます。物理計算や旅行に最適！'
        },
        time: {
            title: '時間単位変換ツール - 年、日、時間、分、秒',
            description: '時間の単位をオンラインで変換。年、月、週、日、時間、分、秒などの時間単位を変換できます。シンプルで実用的！'
        },
        pressure: {
            title: '圧力単位変換ツール - パスカル、バール、気圧',
            description: 'プロフェッショナルな圧力単位変換ツール。パスカル、バール、気圧などの圧力単位を変換できます。工学計算に必須！'
        },
        energy: {
            title: 'エネルギー単位変換ツール - ジュール、カロリー、キロワット時',
            description: 'エネルギーの単位をオンラインで変換。ジュール、カロリー、キロワット時などのエネルギー単位を変換できます。物理計算や栄養分析に最適！'
        },
        data: {
            title: 'データ容量変換ツール - ビット、バイト、KB、MB、GB',
            description: 'データストレージの単位をオンラインで変換。ビット、バイト、KB、MB、GBなどの単位を変換できます。IT専門家必携のツール！'
        },
        angle: {
            title: '角度単位変換ツール - 度、ラジアン、分、秒',
            description: '角度の単位をオンラインで変換。度、ラジアン、分、秒などの角度単位を変換できます。数学計算や工学測定に最適！'
        },
        power: {
            title: '電力単位変換ツール - ワット、キロワット、馬力',
            description: '電力の単位をオンラインで変換。ワット、キロワット、馬力などの単位を変換できます。電気工学や機械工学に必須！'
        },
        force: {
            title: '力の単位変換ツール - ニュートン、キロニュートン、重量キログラム',
            description: 'プロフェッショナルな力の単位変換ツール。ニュートン、キロニュートン、重量キログラムなどの単位を変換できます。物理学や工学に最適！'
        },
        density: {
            title: '密度単位変換ツール - kg/m³、g/cm³',
            description: '密度の単位をオンラインで変換。kg/m³、g/cm³などの単位を変換できます。化学や物理計算に必須！'
        },
        flow: {
            title: '流量単位変換ツール - m³/s、L/min',
            description: '流量の単位をオンラインで変換。立方メートル毎秒、リットル毎分などの単位を変換できます。流体力学や工学計算に最適！'
        },
        torque: {
            title: 'トルク単位変換ツール - ニュートンメートル、キログラムメートル',
            description: 'トルクの単位をオンラインで変換。ニュートンメートル、キログラムメートルなどの単位を変換できます。機械工学や自動車整備に必須！'
        },
        data_rate: {
            title: 'データ転送速度変換ツール - bps、Kbps、Mbps、Gbps',
            description: 'データ転送速度の単位をオンラインで変換。bps、Kbps、Mbps、Gbpsなどの単位を変換できます。ネットワークや通信技術に必須！'
        },
        cooking: {
            title: '調理単位変換ツール - グラム、オンス、カップ、スプーン',
            description: '調理の計量単位をオンラインで変換。グラム、オンス、カップ、スプーンなどの単位を変換できます。正確な料理とベーキングに最適！'
        },
        numeral: {
            title: '進数変換ツール - 2進数、8進数、10進数、16進数',
            description: '数値の基数をオンラインで変換。2進数、8進数、10進数、16進数を変換できます。プログラマー必携のツール！'
        },
        frequency: {
            title: '周波数単位変換ツール - ヘルツ、キロヘルツ、メガヘルツ',
            description: '周波数の単位をオンラインで変換。ヘルツ、キロヘルツ、メガヘルツなどの単位を変換できます。電子工学や通信技術に最適！'
        }
    },
    'zh-TW': {
        ...baseConfig,
        length: {
            title: '長度單位換算器 - 公尺、公分、英吋、英尺線上轉換',
            description: '線上長度單位換算：公尺、公分、英吋、英尺等多種單位快速轉換。支援公制、英制單位互換，精準的長度換算工具！'
        },
        area: {
            title: '面積單位換算器 - 平方公尺、平方英尺、畝、公頃轉換',
            description: '專業面積單位換算工具，支援平方公尺、平方英尺、畝、公頃等單位互轉。農田、房產面積快速計算！'
        },
        volume: {
            title: '體積單位換算器 - 立方公尺、公升、加侖線上轉換',
            description: '線上體積和容量單位轉換工具。支援立方公尺、公升、加侖等單位互換，適用於工程計算和日常使用。'
        },
        weight: {
            title: '重量單位換算器 - 公斤、磅、公克、盎司線上轉換',
            description: '精確的重量單位換算工具，支援公斤、磅、公克、盎司等單位轉換。快速獲取準確的重量換算結果！'
        },
        temperature: {
            title: '溫度單位換算器 - 攝氏度、華氏度、開爾文轉換',
            description: '線上溫度單位換算：攝氏度(℃)、華氏度(℉)、開爾文(K)溫度尺度互轉。科學精準的溫度轉換！'
        },
        speed: {
            title: '速度單位換算器 - 公里/小時、英里/小時、公尺/秒轉換',
            description: '速度單位線上換算工具。支援公里每小時、英里每小時、公尺每秒等速度單位互換，交通和物理計算必備！'
        },
        time: {
            title: '時間單位換算器 - 年、月、週、天、小時、分鐘、秒轉換',
            description: '時間單位快速換算工具。支援年、月、週、天、小時、分鐘、秒等時間單位互轉，簡單實用！'
        },
        pressure: {
            title: '壓力單位換算器 - 帕斯卡、巴、標準大氣壓轉換',
            description: '專業壓力單位換算：帕斯卡、巴、標準大氣壓等壓力單位互換。工程技術人員的得力助手！'
        },
        energy: {
            title: '能量單位換算器 - 焦耳、卡路里、千瓦時轉換',
            description: '線上能量單位換算工具。支援焦耳、卡路里、千瓦時等能量單位轉換，適用於物理計算和營養分析。'
        },
        data: {
            title: '資料儲存單位換算器 - 位元、位元組、KB、MB、GB轉換',
            description: '資料儲存容量單位換算工具。支援位元、位元組、KB、MB、GB等單位轉換，IT從業者必備工具！'
        },
        angle: {
            title: '角度單位換算器 - 度、弧度、分、秒線上轉換',
            description: '線上角度單位換算工具。支援度、弧度、分、秒等角度單位互轉，適用於數學計算和工程測量。'
        },
        power: {
            title: '功率單位換算器 - 瓦特、千瓦、馬力線上轉換',
            description: '線上功率單位換算：瓦特、千瓦、馬力等單位快速轉換。適用於電力計算和機械工程！'
        },
        force: {
            title: '力單位換算器 - 牛頓、千牛、公斤力線上轉換',
            description: '專業力單位換算工具。支援牛頓、千牛、公斤力等單位互轉，物理和工程計算的理想工具！'
        },
        density: {
            title: '密度單位換算器 - 公斤/立方公尺、公克/立方公分轉換',
            description: '密度單位線上換算工具。支援公斤每立方公尺、公克每立方公分等密度單位轉換，化學和物理計算必備！'
        },
        flow: {
            title: '流量單位換算器 - 立方公尺/秒、公升/分鐘線上轉換',
            description: '流量單位換算工具。支援立方公尺每秒、公升每分鐘等流量單位互換，適用於流體力學和工程計算。'
        },
        torque: {
            title: '扭力單位換算器 - 牛頓米、公斤力米線上轉換',
            description: '線上扭力單位換算：牛頓米、公斤力米等單位快速轉換。機械工程和汽車維修必備工具！'
        },
        data_rate: {
            title: '資料傳輸速率單位換算器 - bps、Kbps、Mbps轉換',
            description: '資料傳輸速率單位換算工具。支援bps、Kbps、Mbps、Gbps等單位轉換，網路和通訊技術必備！'
        },
        cooking: {
            title: '烹飪單位換算器 - 公克、盎司、杯、匙線上轉換',
            description: '廚房烹飪單位換算工具。支援公克、盎司、杯、匙等計量單位互換，讓烹飪更加精確簡便！'
        },
        numeral: {
            title: '進位制轉換器 - 二進位、八進位、十進位、十六進位轉換',
            description: '線上進位制轉換工具。支援二進位、八進位、十進位、十六進位數字互換，程式開發必備工具！'
        },
        frequency: {
            title: '頻率單位換算器 - 赫茲、千赫、兆赫線上轉換',
            description: '頻率單位線上換算工具。支援赫茲、千赫、兆赫等頻率單位互轉，電子和通訊工程必備！'
        }
    }
} as const; 
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
        length: {
            title: '長さ単位変換ツール - メートル、フィート、インチなどの変換',
            description: '無料オンライン長さ単位変換ツール。メートル、フィート、インチなどの単位を瞬時に変換。正確で使いやすい長さの単位変換を実現！'
        },
        area: {
            title: '面積単位変換ツール - 平方メートル、平方フィート、エーカーの変換',
            description: '面積単位のオンライン変換：平方メートル、平方フィート、エーカー、ヘクタールなど。不動産や土地測量に最適！'
        },
        volume: {
            title: '体積単位変換ツール - 立方メートル、リットル、ガロンの変換',
            description: 'オンライン体積変換ツール。立方メートル、リットル、ガロンなどの単位に対応。工学計算や日常計算に最適！'
        },
        weight: {
            title: '重さ単位変換ツール - キログラム、ポンド、オンスの変換',
            description: '無料オンライン重量変換ツール。キログラム、ポンド、オンスなどの単位を瞬時に変換。正確な質量変換を実現！'
        },
        temperature: {
            title: '温度単位変換ツール - 摂氏、華氏、ケルビンの変換',
            description: 'オンライン温度変換：摂氏（℃）、華氏（℉）、ケルビン（K）。素早く正確な温度変換！'
        },
        speed: {
            title: '速度単位変換ツール - km/h、mph、m/sのオンライン変換',
            description: 'オンライン速度単位変換。時速、秒速、マイル毎時の変換に対応。物理学や旅行計画に最適！'
        },
        time: {
            title: '時間単位変換ツール - 年、日、時間、分、秒の変換',
            description: 'オンライン時間単位変換。年、月、週、日、時間、分、秒の変換に対応。シンプルで実用的！'
        },
        pressure: {
            title: '圧力単位変換ツール - パスカル、バール、気圧の変換',
            description: 'プロフェッショナルな圧力単位変換。パスカル、バール、気圧などの単位に対応。工学計算に不可欠！'
        },
        energy: {
            title: 'エネルギー単位変換ツール - ジュール、カロリー、キロワット時の変換',
            description: 'オンラインエネルギー単位変換。ジュール、カロリー、キロワット時の変換に対応。物理計算や栄養計算に最適！'
        },
        data: {
            title: 'データ容量変換ツール - ビット、バイト、KB、MB、GBの変換',
            description: 'オンラインデータ容量変換。ビット、バイト、KB、MB、GBなどの単位に対応。IT専門家必携のツール！'
        },
        angle: {
            title: '角度単位変換ツール - 度、ラジアン、分、秒の変換',
            description: 'オンライン角度単位変換。度、ラジアン、分、秒などの角度単位に対応。数学や工学測定に最適！'
        },
        power: {
            title: '電力単位変換ツール - ワット、キロワット、馬力の変換',
            description: 'オンライン電力単位変換。ワット、キロワット、馬力の変換に対応。電気・機械工学に不可欠！'
        },
        force: {
            title: '力の単位変換ツール - ニュートン、キロニュートン、重量ポンドの変換',
            description: 'プロフェッショナルな力の単位変換。ニュートン、キロニュートン、重量ポンドの変換に対応。物理学と工学に最適！'
        },
        density: {
            title: '密度単位変換ツール - kg/m³、g/cm³のオンライン変換',
            description: 'オンライン密度単位変換。kg/m³、g/cm³などの単位に対応。化学と物理計算に不可欠！'
        },
        flow: {
            title: '流量単位変換ツール - m³/s、L/minのオンライン変換',
            description: 'オンライン流量単位変換。立方メートル毎秒、リットル毎分の変換に対応。流体力学と工学計算に最適！'
        },
        torque: {
            title: 'トルク単位変換ツール - ニュートンメートル、キログラムメートルの変換',
            description: 'オンライントルク単位変換。ニュートンメートル、キログラムメートルの変換に対応。機械工学と自動車整備に不可欠！'
        },
        data_rate: {
            title: 'データ転送速度変換ツール - bps、Kbps、Mbps、Gbpsの変換',
            description: 'データ転送速度単位の変換。bps、Kbps、Mbps、Gbpsの変換に対応。ネットワークと通信技術に不可欠！'
        },
        cooking: {
            title: '調理単位変換ツール - グラム、オンス、カップ、スプーンの変換',
            description: 'オンライン調理単位変換。グラム、オンス、カップ、スプーンの変換に対応。正確な料理とベーキングに最適！'
        },
        numeral: {
            title: '進数変換ツール - 2進数、8進数、10進数、16進数の変換',
            description: 'オンライン進数変換。2進数、8進数、10進数、16進数の変換に対応。プログラマー必携のツール！'
        },
        frequency: {
            title: '周波数単位変換ツール - ヘルツ、千赫茲、兆赫茲の変換',
            description: 'オンライン周波数単位変換。ヘルツ、キロヘルツ、メガヘルツの変換に対応。電子工学と通信に最適！'
        }
    },
    'zh-TW': {
        length: {
            title: '長度單位換算器 - 公尺、英尺、英吋線上轉換',
            description: '免費線上長度單位換算工具。在公尺、英尺、英吋等單位之間轉換。快速且準確的長度單位換算！'
        },
        area: {
            title: '面積單位換算器 - 平方公尺、平方英尺、英畝轉換',
            description: '線上面積單位換算：平方公尺、平方英尺、英畝、公頃等。適合房地產和土地測量！'
        },
        volume: {
            title: '體積單位換算器 - 立方公尺、公升、加侖轉換',
            description: '線上體積單位換算工具。支援立方公尺、公升、加侖等單位轉換。適合工程和日常計算！'
        },
        weight: {
            title: '重量單位換算器 - 公斤、磅、盎司線上轉換',
            description: '免費線上重量單位換算工具。在公斤、磅、盎司等單位之間轉換。快速且準確的質量換算！'
        },
        temperature: {
            title: '溫度單位換算器 - 攝氏、華氏、開爾文轉換',
            description: '線上溫度單位換算：攝氏（°C）、華氏（°F）、開爾文（K）。快速且準確的溫度轉換！'
        },
        speed: {
            title: '速度單位換算器 - 公里/時、英里/時、公尺/秒轉換',
            description: '線上速度單位換算。支援時速、秒速、英里每小時轉換。適合物理計算和旅行規劃！'
        },
        time: {
            title: '時間單位換算器 - 年、日、時、分、秒轉換',
            description: '線上時間單位換算。支援年、月、週、日、時、分、秒轉換。簡單實用！'
        },
        pressure: {
            title: '壓力單位換算器 - 帕斯卡、巴、標準大氣壓轉換',
            description: '專業壓力單位換算工具。支援帕斯卡、巴、標準大氣壓等單位轉換。工程技術人員必備！'
        },
        energy: {
            title: '能量單位換算器 - 焦耳、卡路里、千瓦時轉換',
            description: '線上能量單位換算工具。支援焦耳、卡路里、千瓦時等單位轉換。適合物理計算和營養分析！'
        },
        data: {
            title: '數據儲存單位換算器 - 位元、位元組、KB、MB、GB轉換',
            description: '線上數據儲存容量換算工具。支援位元、位元組、KB、MB、GB等單位轉換。IT從業人員必備！'
        },
        angle: {
            title: '角度單位換算器 - 度、弧度、角分、角秒轉換',
            description: '線上角度單位換算工具。支援度、弧度、角分、角秒等角度單位轉換。適合數學計算和工程測量！'
        },
        power: {
            title: '功率單位換算器 - 瓦特、千瓦、馬力線上轉換',
            description: '線上功率單位換算工具。支援瓦特、千瓦、馬力等單位轉換。適合電機和機械工程！'
        },
        force: {
            title: '力單位換算器 - 牛頓、千牛頓、公斤力轉換',
            description: '專業力單位換算工具。支援牛頓、千牛頓、公斤力等單位轉換。適合物理和工程計算！'
        },
        density: {
            title: '密度單位換算器 - 公斤/立方公尺、公克/立方公分轉換',
            description: '線上密度單位換算工具。支援公斤/立方公尺、公克/立方公分等單位轉換。適合化學和物理計算！'
        },
        flow: {
            title: '流量單位換算器 - 立方公尺/秒、公升/分鐘轉換',
            description: '線上流量單位換算工具。支援立方公尺/秒、公升/分鐘等單位轉換。適合流體力學和工程計算！'
        },
        torque: {
            title: '扭矩單位換算器 - 牛頓·公尺、公斤·公尺轉換',
            description: '線上扭矩單位換算工具。支援牛頓·公尺、公斤·公尺等單位轉換。適合機械工程和汽車維修！'
        },
        data_rate: {
            title: '數據傳輸率換算器 - bps、Kbps、Mbps、Gbps轉換',
            description: '線上數據傳輸率單位換算工具。支援bps、Kbps、Mbps、Gbps等單位轉換。網路和通訊技術必備！'
        },
        cooking: {
            title: '烹飪單位換算器 - 公克、盎司、杯、匙線上轉換',
            description: '線上烹飪單位換算工具。支援公克、盎司、杯、匙等單位轉換。讓烹飪更加精確簡便！'
        },
        numeral: {
            title: '進位制轉換器 - 二進制、八進制、十進制、十六進制轉換',
            description: '線上進位制轉換工具。支援二進制、八進制、十進制、十六進制數字轉換。程式開發必備工具！'
        },
        frequency: {
            title: '頻率單位換算器 - 赫茲、千赫茲、兆赫茲轉換',
            description: '線上頻率單位換算工具。支援赫茲、千赫茲、兆赫茲等頻率單位轉換。電子和通訊工程必備！'
        }
    }
}; 
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
    }
}; 
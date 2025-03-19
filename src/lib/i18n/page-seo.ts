import { UnitType } from './units'
import { ValidLocale } from './config'

type PageSEOConfig = {
    title: string
    description: string
}

// 创建基础配置模板
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
    currency: { title: '', description: '' },
    cooking: { title: '', description: '' },
    numeral: { title: '', description: '' },
    frequency: { title: '', description: '' }
}

export const pageSeoConfig: Record<ValidLocale, Record<UnitType, PageSEOConfig>> = {
    'zh-CN': {
        ...baseConfig,
        length: {
            title: '长度单位换算器 - 米/厘米/英寸/英尺在线转换工具',
            description: '在线长度单位换算：米、厘米、英寸、英尺等多种单位快速转换。支持公制、英制单位互换，精准的长度换算工具！'
        },
        area: {
            title: '面积单位换算器 - 平方米/平方英尺/亩/公顷转换',
            description: '专业面积单位换算工具，支持平方米、平方英尺、亩、公顷等单位互转。农田、房产面积快速计算！'
        },
        volume: {
            title: '体积容量换算器 - 立方米/升/加仑单位转换',
            description: '在线体积和容量单位转换工具。支持立方米、升、加仑等单位互换，适用于工程计算和日常使用。'
        },
        weight: {
            title: '重量质量换算器 - 公斤/磅/克/盎司单位转换',
            description: '精确的重量单位换算工具，支持公斤、磅、克、盎司等单位转换。快速获取准确的重量换算结果！'
        },
        temperature: {
            title: '温度换算器 - 摄氏度/华氏度/开尔文转换工具',
            description: '在线温度单位换算：摄氏度(℃)、华氏度(℉)、开尔文(K)温度尺度互转。科学精准的温度转换！'
        },
        speed: {
            title: '速度换算器 - 公里每小时/英里每小时/米每秒转换',
            description: '速度单位在线换算工具。支持公里每小时、英里每小时、米每秒等速度单位互换，交通和物理计算必备！'
        },
        time: {
            title: '时间换算器 - 年/月/周/天/小时/分钟/秒转换',
            description: '时间单位快速换算工具。支持年、月、周、天、小时、分钟、秒等时间单位互转，简单实用！'
        },
        pressure: {
            title: '压力单位换算器 - 帕斯卡/巴/大气压转换工具',
            description: '专业压力单位换算：帕斯卡、巴、标准大气压等压力单位互换。工程技术人员的得力助手！'
        },
        energy: {
            title: '能量单位换算器 - 焦耳/卡路里/千瓦时转换',
            description: '在线能量单位换算工具。支持焦耳、卡路里、千瓦时等能量单位转换，适用于物理计算和营养分析。'
        },
        data: {
            title: '数据存储单位换算器 - 比特/字节/KB/MB/GB转换',
            description: '数据存储容量单位换算工具。支持比特、字节、KB、MB、GB等单位转换，IT从业者必备工具！'
        },
        angle: {
            title: '角度单位换算器 - 度/弧度/分/秒转换工具',
            description: '在线角度单位换算工具。支持度、弧度、分、秒等角度单位互转，适用于数学计算和工程测量。'
        },
        power: {
            title: '功率单位换算器 - 瓦特/千瓦/马力转换工具',
            description: '在线功率单位换算：瓦特、千瓦、马力等单位快速转换。适用于电力计算和机械工程！'
        },
        force: {
            title: '力单位换算器 - 牛顿/千牛/公斤力转换',
            description: '专业力单位换算工具。支持牛顿、千牛、公斤力等单位互转，物理和工程计算的理想工具！'
        },
        density: {
            title: '密度单位换算器 - 千克每立方米/克每立方厘米转换',
            description: '密度单位在线换算工具。支持千克每立方米、克每立方厘米等密度单位转换，化学和物理计算必备！'
        },
        flow: {
            title: '流量单位换算器 - 立方米每秒/升每分钟转换',
            description: '流量单位换算工具。支持立方米每秒、升每分钟等流量单位互换，适用于流体力学和工程计算。'
        },
        torque: {
            title: '扭矩单位换算器 - 牛顿米/公斤力米转换工具',
            description: '在线扭矩单位换算：牛顿米、公斤力米等单位快速转换。机械工程和汽车维修必备工具！'
        },
        data_rate: {
            title: '数据传输速率换算器 - bps/Kbps/Mbps/Gbps转换',
            description: '数据传输速率单位换算工具。支持bps、Kbps、Mbps、Gbps等单位转换，网络和通信技术必备！'
        },
        currency: {
            title: '货币汇率换算器 - 实时汇率转换计算工具',
            description: '在线货币汇率换算工具。支持世界各国主要货币实时汇率转换，提供准确的汇率计算结果！'
        },
        cooking: {
            title: '烹饪单位换算器 - 克/盎司/杯/勺计量转换',
            description: '厨房烹饪单位换算工具。支持克、盎司、杯、勺等计量单位互换，让烹饪更加精确简便！'
        },
        numeral: {
            title: '进制转换器 - 二进制/八进制/十进制/十六进制转换',
            description: '在线进制转换工具。支持二进制、八进制、十进制、十六进制数字互换，程序开发必备工具！'
        },
        frequency: {
            title: '频率单位换算器 - 赫兹/千赫/兆赫转换工具',
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
            title: 'Area Converter - Square Meters, Square Feet Conversion',
            description: 'Convert area units online: square meters, square feet, acres, hectares. Perfect for real estate and land measurements!'
        },
        volume: {
            title: 'Volume Converter - Convert Cubic Meters, Liters, Gallons',
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
            title: 'Speed Converter - KPH, MPH, Meters per Second',
            description: 'Convert speed units online. Transform between kilometers per hour, miles per hour, meters per second. Perfect for physics and travel!'
        },
        time: {
            title: 'Time Converter - Years, Months, Weeks, Days, Hours',
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
            title: 'Force Converter - Newtons, Kilonewtons, Pound-Force',
            description: 'Professional force unit converter. Transform between newtons, kilonewtons, pound-force. Perfect for physics and engineering!'
        },
        density: {
            title: 'Density Converter - kg/m³, g/cm³, lb/ft³',
            description: 'Convert density units online. Transform between kg/m³, g/cm³, lb/ft³. Essential for chemistry and physics calculations!'
        },
        flow: {
            title: 'Flow Rate Converter - m³/s, L/min, GPM',
            description: 'Convert flow rate units online. Transform between cubic meters per second, liters per minute, gallons per minute. Perfect for fluid dynamics!'
        },
        torque: {
            title: 'Torque Converter - Newton Meters, Pound-Feet',
            description: 'Convert torque units online. Transform between newton meters, pound-feet. Essential for mechanical engineering and automotive!'
        },
        data_rate: {
            title: 'Data Rate Converter - bps, Kbps, Mbps, Gbps',
            description: 'Convert data transfer rates online. Transform between bps, Kbps, Mbps, Gbps. Essential for network and communication technology!'
        },
        currency: {
            title: 'Currency Converter - Real-Time Exchange Rates',
            description: 'Convert currencies with real-time exchange rates. Accurate and up-to-date currency conversion for all major world currencies!'
        },
        cooking: {
            title: 'Cooking Unit Converter - Grams, Ounces, Cups',
            description: 'Convert cooking measurements online. Transform between grams, ounces, cups, tablespoons. Perfect for cooking and baking!'
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
    'fr': {
        ...baseConfig,
        length: {
            title: 'Convertisseur de Longueur - Mètres, Pieds, Pouces en Ligne',
            description: 'Convertisseur de longueur en ligne gratuit. Convertissez entre mètres, pieds, pouces et plus. Outil de conversion rapide et précis !'
        },
        area: {
            title: 'Convertisseur de Surface - Mètres Carrés, Pieds Carrés',
            description: 'Convertissez les unités de surface en ligne : mètres carrés, pieds carrés, acres, hectares. Parfait pour l\'immobilier et l\'arpentage !'
        },
        volume: {
            title: 'Convertisseur de Volume - Mètres Cubes, Litres, Gallons',
            description: 'Convertisseur de volume en ligne pour mètres cubes, litres, gallons et plus. Parfait pour l\'ingénierie et les calculs quotidiens !'
        },
        weight: {
            title: 'Convertisseur de Poids - Kilogrammes, Livres, Onces',
            description: 'Convertisseur de poids en ligne gratuit. Convertissez entre kilogrammes, livres, onces et plus. Conversion de masse rapide et précise !'
        },
        temperature: {
            title: 'Convertisseur de Température - Celsius, Fahrenheit, Kelvin',
            description: 'Convertissez les unités de température en ligne : Celsius (°C), Fahrenheit (°F), Kelvin (K). Conversion rapide et précise !'
        },
        speed: {
            title: 'Convertisseur de Vitesse - KM/H, MPH, Mètres par Seconde',
            description: 'Convertissez les unités de vitesse en ligne. Transformez entre kilomètres par heure, miles par heure, mètres par seconde. Idéal pour la physique !'
        },
        time: {
            title: 'Convertisseur de Temps - Années, Mois, Semaines, Jours',
            description: 'Convertissez les unités de temps en ligne. Transformez entre années, mois, semaines, jours, heures. Simple et pratique !'
        },
        pressure: {
            title: 'Convertisseur de Pression - Pascal, Bar, Atmosphère',
            description: 'Convertisseur professionnel d\'unités de pression. Convertissez entre pascal, bar, atmosphère. Essentiel pour les calculs d\'ingénierie !'
        },
        energy: {
            title: 'Convertisseur d\'Énergie - Joules, Calories, Kilowattheures',
            description: 'Convertissez les unités d\'énergie en ligne. Transformez entre joules, calories, kilowattheures. Parfait pour la physique et la nutrition !'
        },
        data: {
            title: 'Convertisseur de Stockage - Bits, Octets, Ko, Mo, Go',
            description: 'Convertissez les unités de stockage en ligne. Transformez entre bits, octets, Ko, Mo, Go. Outil essentiel pour les professionnels de l\'IT !'
        },
        angle: {
            title: 'Convertisseur d\'Angles - Degrés, Radians, Minutes',
            description: 'Convertissez les mesures d\'angles en ligne. Transformez entre degrés, radians, minutes. Parfait pour les mathématiques et l\'ingénierie !'
        },
        power: {
            title: 'Convertisseur de Puissance - Watts, Kilowatts, Chevaux',
            description: 'Convertissez les unités de puissance en ligne. Transformez entre watts, kilowatts, chevaux. Essentiel pour l\'ingénierie électrique !'
        },
        force: {
            title: 'Convertisseur de Force - Newtons, Kilonewtons',
            description: 'Convertisseur professionnel d\'unités de force. Transformez entre newtons, kilonewtons. Parfait pour la physique et l\'ingénierie !'
        },
        density: {
            title: 'Convertisseur de Densité - kg/m³, g/cm³',
            description: 'Convertissez les unités de densité en ligne. Transformez entre kg/m³, g/cm³. Essentiel pour la chimie et la physique !'
        },
        flow: {
            title: 'Convertisseur de Débit - m³/s, L/min',
            description: 'Convertissez les unités de débit en ligne. Transformez entre mètres cubes par seconde, litres par minute. Parfait pour la dynamique des fluides !'
        },
        torque: {
            title: 'Convertisseur de Couple - Newton mètres, Livre-pied',
            description: 'Convertissez les unités de couple en ligne. Transformez entre newton mètres, livre-pied. Essentiel pour la mécanique et l\'automobile !'
        },
        data_rate: {
            title: 'Convertisseur de Débit de Données - bps, Kbps, Mbps',
            description: 'Convertissez les débits de données en ligne. Transformez entre bps, Kbps, Mbps. Essentiel pour les réseaux et les communications !'
        },
        currency: {
            title: 'Convertisseur de Devises - Taux de Change en Temps Réel',
            description: 'Convertissez les devises avec des taux de change en temps réel. Conversion précise pour toutes les principales devises mondiales !'
        },
        cooking: {
            title: 'Convertisseur de Cuisine - Grammes, Onces, Tasses',
            description: 'Convertissez les mesures de cuisine en ligne. Transformez entre grammes, onces, tasses. Parfait pour la cuisine et la pâtisserie !'
        },
        numeral: {
            title: 'Convertisseur de Base - Binaire, Octal, Décimal, Hexa',
            description: 'Convertissez entre les systèmes numériques en ligne. Transformez binaire, octal, décimal et hexadécimal. Outil essentiel pour les programmeurs !'
        },
        frequency: {
            title: 'Convertisseur de Fréquence - Hertz, Kilohertz, Mégahertz',
            description: 'Convertissez les unités de fréquence en ligne. Transformez entre hertz, kilohertz, mégahertz. Parfait pour l\'électronique !'
        }
    },
    'de': {
        ...baseConfig,
        length: {
            title: 'Längenumrechner - Meter, Fuß, Zoll Online Umrechnen',
            description: 'Kostenloser Online-Längenumrechner. Rechnen Sie zwischen Metern, Fuß, Zoll und mehr um. Schnelles und genaues Umrechnungstool!'
        },
        area: {
            title: 'Flächenrechner - Quadratmeter, Quadratfuß Umrechnung',
            description: 'Rechnen Sie Flächeneinheiten online um: Quadratmeter, Quadratfuß, Ar, Hektar. Perfekt für Immobilien und Landvermessung!'
        },
        volume: {
            title: 'Volumenrechner - Kubikmeter, Liter, Gallonen Umrechnen',
            description: 'Online-Volumenrechner für Kubikmeter, Liter, Gallonen und mehr. Perfekt für technische und alltägliche Berechnungen!'
        },
        weight: {
            title: 'Gewichtsrechner - Kilogramm, Pfund, Unzen Umrechnen',
            description: 'Kostenloser Online-Gewichtsrechner. Rechnen Sie zwischen Kilogramm, Pfund, Unzen und mehr um. Schnelle und präzise Massenumrechnung!'
        },
        temperature: {
            title: 'Temperaturumrechner - Celsius, Fahrenheit, Kelvin',
            description: 'Rechnen Sie Temperatureinheiten online um: Celsius (°C), Fahrenheit (°F), Kelvin (K). Schnelle und genaue Temperaturumrechnung!'
        },
        speed: {
            title: 'Geschwindigkeitsumrechner - km/h, mph, m/s',
            description: 'Rechnen Sie Geschwindigkeiten online um. Wandeln Sie zwischen Kilometern pro Stunde, Meilen pro Stunde und Metern pro Sekunde um. Ideal für Physik und Reisen!'
        },
        time: {
            title: 'Zeitrechner - Jahre, Monate, Wochen, Tage, Stunden',
            description: 'Rechnen Sie Zeiteinheiten online um. Konvertieren Sie zwischen Jahren, Monaten, Wochen, Tagen, Stunden. Einfach und praktisch!'
        },
        pressure: {
            title: 'Druckumrechner - Pascal, Bar, Atmosphären',
            description: 'Professioneller Druckeinheitenumrechner. Wandeln Sie zwischen Pascal, Bar, Atmosphären und mehr um. Unverzichtbar für technische Berechnungen!'
        },
        energy: {
            title: 'Energierechner - Joule, Kalorien, Kilowattstunden',
            description: 'Rechnen Sie Energieeinheiten online um. Konvertieren Sie zwischen Joule, Kalorien, Kilowattstunden. Perfekt für Physik und Ernährungsberechnungen!'
        },
        data: {
            title: 'Datenspeicherrechner - Bits, Bytes, KB, MB, GB',
            description: 'Rechnen Sie Datenspeichereinheiten online um. Konvertieren Sie zwischen Bits, Bytes, KB, MB, GB. Essentielles Tool für IT-Profis!'
        },
        angle: {
            title: 'Winkelrechner - Grad, Bogenmaß, Minuten, Sekunden',
            description: 'Rechnen Sie Winkelmaße online um. Konvertieren Sie zwischen Grad, Bogenmaß, Minuten, Sekunden. Perfekt für Mathematik und Technik!'
        },
        power: {
            title: 'Leistungsrechner - Watt, Kilowatt, PS',
            description: 'Rechnen Sie Leistungseinheiten online um. Konvertieren Sie zwischen Watt, Kilowatt, PS. Wichtig für Elektro- und Maschinenbau!'
        },
        force: {
            title: 'Kraftrechner - Newton, Kilonewton, Kilopond',
            description: 'Professioneller Krafteinheitenrechner. Konvertieren Sie zwischen Newton, Kilonewton, Kilopond. Perfekt für Physik und Technik!'
        },
        density: {
            title: 'Dichterechner - kg/m³, g/cm³, lb/ft³',
            description: 'Rechnen Sie Dichteeinheiten online um. Konvertieren Sie zwischen kg/m³, g/cm³, lb/ft³. Wichtig für Chemie und Physik!'
        },
        flow: {
            title: 'Durchflussrechner - m³/s, L/min, GPM',
            description: 'Rechnen Sie Durchflussraten online um. Konvertieren Sie zwischen Kubikmeter pro Sekunde, Liter pro Minute. Ideal für Strömungsmechanik!'
        },
        torque: {
            title: 'Drehmomentrechner - Newtonmeter, Pfund-Fuß',
            description: 'Rechnen Sie Drehmomente online um. Konvertieren Sie zwischen Newtonmeter, Pfund-Fuß. Wichtig für Maschinenbau und Automotive!'
        },
        data_rate: {
            title: 'Datenratenrechner - bps, Kbps, Mbps, Gbps',
            description: 'Rechnen Sie Datenübertragungsraten online um. Konvertieren Sie zwischen bps, Kbps, Mbps, Gbps. Wichtig für Netzwerk- und Kommunikationstechnik!'
        },
        currency: {
            title: 'Währungsrechner - Echtzeitkurse',
            description: 'Rechnen Sie Währungen mit Echtzeit-Wechselkursen um. Genaue und aktuelle Währungsumrechnung für alle wichtigen Weltwährungen!'
        },
        cooking: {
            title: 'Küchenrechner - Gramm, Unzen, Tassen',
            description: 'Rechnen Sie Küchenmaße online um. Konvertieren Sie zwischen Gramm, Unzen, Tassen. Perfekt für Kochen und Backen!'
        },
        numeral: {
            title: 'Zahlensystemrechner - Binär, Oktal, Dezimal, Hex',
            description: 'Rechnen Sie zwischen Zahlensystemen online um. Konvertieren Sie Binär, Oktal, Dezimal und Hexadezimal. Unverzichtbar für Programmierer!'
        },
        frequency: {
            title: 'Frequenzrechner - Hertz, Kilohertz, Megahertz',
            description: 'Rechnen Sie Frequenzeinheiten online um. Konvertieren Sie zwischen Hertz, Kilohertz, Megahertz. Perfekt für Elektronik und Kommunikation!'
        }
    },
    'es': {
        ...baseConfig,
        length: {
            title: 'Convertidor de Longitud - Metros, Pies, Pulgadas en Línea',
            description: 'Convierte longitudes en línea gratis. Transforma entre metros, pies, pulgadas y más. ¡Herramienta de conversión rápida y precisa!'
        },
        area: {
            title: 'Convertidor de Área - Metros Cuadrados, Pies Cuadrados',
            description: 'Convierta unidades de área en línea: metros cuadrados, pies cuadrados, acres, hectáreas. ¡Perfecto para bienes raíces y mediciones de terrenos!'
        },
        volume: {
            title: 'Convertidor de Volumen - Metros Cúbicos, Litros, Galones',
            description: 'Convertidor de volumen en línea para metros cúbicos, litros, galones y más. ¡Perfecto para ingeniería y cálculos cotidianos!'
        },
        weight: {
            title: 'Convertidor de Peso - Kilogramos, Libras, Onzas',
            description: 'Convertidor de peso en línea gratuito. Convierta entre kilogramos, libras, onzas y más. ¡Conversión de masa rápida y precisa!'
        },
        temperature: {
            title: 'Convertidor de Temperatura - Celsius, Fahrenheit, Kelvin',
            description: 'Convierte temperaturas en línea: Celsius (°C), Fahrenheit (°F), Kelvin (K). ¡Conversión rápida y precisa de temperatura!'
        },
        speed: {
            title: 'Convertidor de Velocidad - KM/H, MPH, Metros por Segundo',
            description: 'Convierte velocidades en línea. Transforma entre kilómetros por hora, millas por hora y metros por segundo. ¡Ideal para física y viajes!'
        },
        time: {
            title: 'Convertidor de Tiempo - Años, Meses, Semanas, Días',
            description: 'Convierta unidades de tiempo en línea. Transforme entre años, meses, semanas, días, horas. ¡Simple y práctico!'
        },
        pressure: {
            title: 'Convertidor de Presión - Pascal, Bar, Atmósfera',
            description: 'Convierte unidades de presión profesionalmente. Transforma entre pascal, bar y atmósfera. ¡Esencial para cálculos de ingeniería!'
        },
        energy: {
            title: 'Convertidor de Energía - Julios, Calorías, Kilovatios Hora',
            description: 'Convierta unidades de energía en línea. Transforme entre julios, calorías, kilovatios hora. ¡Perfecto para física y nutrición!'
        },
        data: {
            title: 'Convertidor de Almacenamiento - Bits, Bytes, KB, MB, GB',
            description: 'Convierta unidades de almacenamiento en línea. Transforme entre bits, bytes, KB, MB, GB. ¡Herramienta esencial para profesionales de TI!'
        },
        angle: {
            title: 'Convertidor de Ángulos - Grados, Radianes, Minutos',
            description: 'Convierta medidas de ángulos en línea. Transforme entre grados, radianes, minutos. ¡Perfecto para matemáticas e ingeniería!'
        },
        power: {
            title: 'Convertidor de Potencia - Vatios, Kilovatios, Caballos',
            description: 'Convierta unidades de potencia en línea. Transforme entre vatios, kilovatios, caballos de fuerza. ¡Esencial para ingeniería eléctrica!'
        },
        force: {
            title: 'Convertidor de Fuerza - Newtons, Kilonewtons',
            description: 'Convertidor profesional de unidades de fuerza. Transforme entre newtons, kilonewtons. ¡Perfecto para física e ingeniería!'
        },
        density: {
            title: 'Convertidor de Densidad - kg/m³, g/cm³',
            description: 'Convierta unidades de densidad en línea. Transforme entre kg/m³, g/cm³. ¡Esencial para química y física!'
        },
        flow: {
            title: 'Convertidor de Caudal - m³/s, L/min',
            description: 'Convierta unidades de caudal en línea. Transforme entre metros cúbicos por segundo, litros por minuto. ¡Perfecto para dinámica de fluidos!'
        },
        torque: {
            title: 'Convertidor de Torque - Newton metros, Libra-pie',
            description: 'Convierta unidades de torque en línea. Transforme entre newton metros, libra-pie. ¡Esencial para mecánica y automoción!'
        },
        data_rate: {
            title: 'Convertidor de Tasa de Datos - bps, Kbps, Mbps',
            description: 'Convierta tasas de transferencia de datos en línea. Transforme entre bps, Kbps, Mbps. ¡Esencial para redes y comunicaciones!'
        },
        currency: {
            title: 'Convertidor de Divisas - Tipos de Cambio en Tiempo Real',
            description: 'Convierta divisas con tipos de cambio en tiempo real. ¡Conversión precisa para todas las principales monedas mundiales!'
        },
        cooking: {
            title: 'Convertidor de Cocina - Gramos, Onzas, Tazas',
            description: 'Convierta medidas de cocina en línea. Transforme entre gramos, onzas, tazas. ¡Perfecto para cocinar y hornear!'
        },
        numeral: {
            title: 'Convertidor de Base Numérica - Binario, Octal, Decimal, Hex',
            description: 'Convierta entre sistemas numéricos en línea. Transforme binario, octal, decimal y hexadecimal. ¡Herramienta esencial para programadores!'
        },
        frequency: {
            title: 'Convertidor de Frecuencia - Hertz, Kilohertz, Megahertz',
            description: 'Convierta unidades de frecuencia en línea. Transforme entre hertz, kilohertz, megahertz. ¡Perfecto para electrónica y comunicaciones!'
        }
    },
    'ru': {
        ...baseConfig,
        length: {
            title: 'Конвертер Длины - Метры, Футы, Дюймы Онлайн',
            description: 'Бесплатный онлайн конвертер длины. Перевод между метрами, футами, дюймами и другими единицами. Быстрый и точный инструмент конвертации!'
        },
        area: {
            title: 'Конвертер Площади - Квадратные Метры, Квадратные Футы',
            description: 'Конвертируйте единицы площади онлайн: квадратные метры, квадратные футы, акры, гектары. Идеально для недвижимости и земельных измерений!'
        },
        volume: {
            title: 'Конвертер Объема - Кубические Метры, Литры, Галлоны',
            description: 'Онлайн конвертер объема для кубических метров, литров, галлонов и других единиц. Идеально для инженерных и повседневных расчетов!'
        },
        weight: {
            title: 'Конвертер Веса - Килограммы, Фунты, Унции',
            description: 'Бесплатный онлайн конвертер веса. Перевод между килограммами, фунтами, унциями и другими единицами. Быстрая и точная конвертация массы!'
        },
        temperature: {
            title: 'Конвертер Температуры - Цельсий, Фаренгейт, Кельвин',
            description: 'Конвертируйте температуру онлайн: Цельсий (°C), Фаренгейт (°F), Кельвин (K). Быстрое и точное преобразование температуры!'
        },
        speed: {
            title: 'Конвертер Скорости - КМ/Ч, МПЧ, Метры в Секунду',
            description: 'Конвертируйте единицы скорости онлайн. Перевод между километрами в час, милями в час, метрами в секунду. Идеально для физики и путешествий!'
        },
        time: {
            title: 'Конвертер Времени - Годы, Месяцы, Недели, Дни',
            description: 'Конвертируйте единицы времени онлайн. Перевод между годами, месяцами, неделями, днями, часами. Просто и практично!'
        },
        pressure: {
            title: 'Конвертер Давления - Паскаль, Бар, Атмосфера',
            description: 'Профессиональный конвертер единиц давления. Перевод между паскалями, барами, атмосферами. Необходим для инженерных расчетов!'
        },
        energy: {
            title: 'Конвертер Энергии - Джоули, Калории, Киловатт-часы',
            description: 'Конвертируйте единицы энергии онлайн. Перевод между джоулями, калориями, киловатт-часами. Идеально для физики и диетологии!'
        },
        data: {
            title: 'Конвертер Данных - Биты, Байты, КБ, МБ, ГБ',
            description: 'Конвертируйте единицы хранения данных онлайн. Перевод между битами, байтами, КБ, МБ, ГБ. Необходимый инструмент для IT-специалистов!'
        },
        angle: {
            title: 'Конвертер Углов - Градусы, Радианы, Минуты',
            description: 'Конвертируйте угловые меры онлайн. Перевод между градусами, радианами, минутами. Идеально для математики и инженерии!'
        },
        power: {
            title: 'Конвертер Мощности - Ватты, Киловатты, Лошадиные Силы',
            description: 'Конвертируйте единицы мощности онлайн. Перевод между ваттами, киловаттами, лошадиными силами. Необходим для электротехники!'
        },
        force: {
            title: 'Конвертер Силы - Ньютоны, Килоньютоны',
            description: 'Профессиональный конвертер единиц силы. Перевод между ньютонами, килоньютонами. Идеально для физики и инженерии!'
        },
        density: {
            title: 'Конвертер Плотности - кг/м³, г/см³',
            description: 'Конвертируйте единицы плотности онлайн. Перевод между кг/m³, g/cm³. Необходим для химии и физики!'
        },
        flow: {
            title: 'Конвертер Расхода - м³/s, л/мин',
            description: 'Конвертируйте единицы расхода онлайн. Перевод между кубическими метрами в секунду, литрами в минуту. Идеально для гидродинамики!'
        },
        torque: {
            title: 'Конвертер Крутящего Момента - Ньютон-метры, Фунт-футы',
            description: 'Конвертируйте единицы крутящего момента онлайн. Перевод между ньютон-метрами, фунт-футами. Необходим для механики и автомобилестроения!'
        },
        data_rate: {
            title: 'Конвертер Скорости Передачи Данных - бит/с, Кбит/с, Мбит/с',
            description: 'Конвертируйте скорости передачи данных онлайн. Перевод между бит/с, Кбит/с, Мбит/с. Необходим для сетей и коммуникаций!'
        },
        currency: {
            title: 'Конвертер Валют - Курсы Валют в Реальном Времени',
            description: 'Конвертируйте валюты по актуальным курсам. Точная конвертация для всех основных мировых валют!'
        },
        cooking: {
            title: 'Конвертер Кулинарных Мер - Граммы, Унции, Чашки',
            description: 'Конвертируйте кулинарные меры онлайн. Перевод между граммами, унциями, чашками. Идеально для кулинарии и выпечки!'
        },
        numeral: {
            title: 'Конвертер Систем Счисления - Двоичная, Восьмеричная, Десятичная, Hex',
            description: 'Конвертируйте между системами счисления онлайн. Перевод двоичных, восьмеричных, десятичных и шестнадцатеричных чисел. Необходимый инструмент для программистов!'
        },
        frequency: {
            title: 'Конвертер Частоты - Герц, Килогерц, Мегагерц',
            description: 'Конвертируйте единицы частоты онлайн. Перевод между герцами, килогерцами, мегагерцами. Идеально для электроники и связи!'
        }
    },
    'ja': {
        ...baseConfig,
        length: {
            title: '長さ単位換算 - メートル/フィート/インチのオンライン変換',
            description: '無料オンライン長さ単位換算ツール。メートル、フィート、インチなどの単位を即座に変換。高速で正確な換算を実現！'
        },
        area: {
            title: '面積単位換算 - 平方メートル/平方フィート変換',
            description: 'オンラインで面積単位を換算：平方メートル、平方フィート、エーカー、ヘクタール。不動産や土地測量に最適！'
        },
        volume: {
            title: '体積単位換算 - 立方メートル/リットル/ガロン変換',
            description: 'オンライン体積換算ツール。立方メートル、リットル、ガロンなどの単位を変換。工学計算や日常使用に最適！'
        },
        weight: {
            title: '重量単位換算 - キログラム/ポンド/オンス変換',
            description: '無料オンライン重量換算ツール。キログラム、ポンド、オンスなどの単位を変換。迅速で正確な質量換算！'
        },
        temperature: {
            title: '温度単位換算 - 摂氏/華氏/ケルビン変換',
            description: 'オンライン温度換算：摂氏(°C)、華氏(°F)、ケルビン(K)。迅速で正確な温度変換を実現！'
        },
        speed: {
            title: '速度単位換算 - km/h/mph/m/s変換',
            description: 'オンライン速度換算ツール。キロメートル毎時、マイル毎時、メートル毎秒の変換。物理学や旅行に最適！'
        },
        time: {
            title: '時間単位換算 - 年/月/週/日/時間変換',
            description: 'オンライン時間単位換算。年、月、週、日、時間の変換。シンプルで実用的！'
        },
        pressure: {
            title: '圧力単位換算 - パスカル/バール/気圧変換',
            description: 'プロフェッショナル向け圧力単位換算。パスカル、バール、気圧などの単位を変換。工学計算に不可欠！'
        },
        energy: {
            title: 'エネルギー単位換算 - ジュール/カロリー/キロワット時',
            description: 'オンラインエネルギー単位換算。ジュール、カロリー、キロワット時の変換。物理学や栄養計算に最適！'
        },
        data: {
            title: 'データ容量換算 - ビット/バイト/KB/MB/GB',
            description: 'オンラインデータ容量換算。ビット、バイト、KB、MB、GBの変換。IT専門家必携のツール！'
        },
        angle: {
            title: '角度単位換算 - 度/ラジアン/分/秒',
            description: 'オンライン角度単位換算。度、ラジアン、分、秒の変換。数学や工学計算に最適！'
        },
        power: {
            title: '電力単位換算 - ワット/キロワット/馬力',
            description: 'オンライン電力単位換算。ワット、キロワット、馬力の変換。電気工学に不可欠！'
        },
        force: {
            title: '力単位換算 - ニュートン/キロニュートン変換',
            description: 'プロフェッショナル向け力単位換算。ニュートン、キロニュートンの変換。物理学や工学に最適！'
        },
        density: {
            title: '密度単位換算 - kg/m³/g/cm³変換',
            description: 'オンライン密度単位換算。kg/m³、g/cm³の変換。化学や物理学に不可欠！'
        },
        flow: {
            title: '流量単位換算 - m³/s/L/min変換',
            description: 'オンライン流量単位換算。立方メートル毎秒、リットル毎分の変換。流体力学に最適！'
        },
        torque: {
            title: 'トルク単位換算 - ニュートンメートル/ポンドフィート',
            description: 'オンライントルク単位換算。ニュートンメートル、ポンドフィートの変換。機械工学や自動車整備に不可欠！'
        },
        data_rate: {
            title: 'データ転送速度換算 - bps/Kbps/Mbps/Gbps',
            description: 'オンラインデータ転送速度換算。bps、Kbps、Mbps、Gbpsの変換。ネットワークと通信技術に不可欠！'
        },
        currency: {
            title: '通貨換算 - リアルタイム為替レート計算',
            description: 'リアルタイム為替レートによる通貨換算。世界の主要通貨に対応した正確な換算を提供！'
        },
        cooking: {
            title: '調理単位換算 - グラム/オンス/カップ/スプーン',
            description: 'オンライン調理単位換算。グラム、オンス、カップ、スプーンの変換。料理とベーキングに最適！'
        },
        numeral: {
            title: '進数変換 - 2進数/8進数/10進数/16進数',
            description: 'オンライン進数変換ツール。2進数、8進数、10進数、16進数の相互変換。プログラマー必携のツール！'
        },
        frequency: {
            title: '周波数単位換算 - ヘルツ/キロヘルツ/メガヘルツ',
            description: 'オンライン周波数単位換算。ヘルツ、キロヘルツ、メガヘルツの変換。電子工学と通信に最適！'
        }
    }
} 
import { ValidLocale } from './config'

type SEOConfig = {
  title: string
  description: string
  keywords: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterCard: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

export const seoConfig: Record<ValidLocale, SEOConfig> = {
  'en': {
    title: 'Unit Converter - Online Metric & Imperial Conversion - Metric-Converter.com',
    description: 'Free online unit converter with 20+ types. Instantly convert metric, imperial & other units for length, weight, temperature, area, volume & more. Fast & accurate!',
    keywords: 'unit converter, metric converter, imperial converter, online unit converter, length converter, weight converter, temperature converter',
    canonical: 'https://www.metric-converter.com',
    ogTitle: 'metric-converter - Professional Metric Conversion Tool',
    ogDescription: 'Convert between metric, imperial and other measurement units instantly. Support for length, area, volume, weight, temperature, pressure and more.',
    ogImage: 'https://www.metric-converter.com/og-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Metric Conversion Made Easy',
    twitterDescription: 'Professional metric conversion tool supporting 20+ measurement types. Convert between metric, imperial and other units instantly.',
    twitterImage: 'https://www.metric-converter.com/twitter-card.png'
  },
  'zh-CN': {
    title: '单位换算器 - 在线免费单位转换工具 - Metric-Converter.com',
    description: '免费在线单位换算器，支持20+种单位类型，瞬间完成长度、重量、温度、面积、体积等单位转换。快速、准确、易用！',
    keywords: '单位换算器, 单位转换, 在线单位换算, 公制单位转换, 英制单位转换, 长度单位换算, 重量单位换算',
    canonical: 'https://www.metric-converter.com/zh-CN',
    ogTitle: 'metric-converter - 专业公制单位换算工具',
    ogDescription: '在线公制单位转换工具，支持公制、英制等多种单位系统，提供20多种计量单位的即时转换。',
    ogImage: 'https://www.metric-converter.com/og-image-zh.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - 轻松进行公制单位换算',
    twitterDescription: '专业公制单位转换工具，支持20多种计量单位类型，实现公制、英制等单位系统的即时转换。',
    twitterImage: 'https://www.metric-converter.com/twitter-card-zh.png'
  },
  'fr': {
    title: 'Convertisseur d\'Unités - En Ligne Gratuit - Metric-Converter.com',
    description: 'Convertisseur d\'unités en ligne gratuit avec plus de 20 types. Conversion instantanée métrique, impériale et autres pour longueur, poids, température, surface, volume, etc. Rapide et précis !',
    keywords: 'convertisseur d\'unités, convertisseur métrique, convertisseur impérial, convertisseur en ligne, conversion unités, longueur, poids, température',
    canonical: 'https://www.metric-converter.com/fr',
    ogTitle: 'metric-converter - Outil de conversion métrique professionnel',
    ogDescription: 'Convertissez instantanément entre les unités métriques, impériales et autres. Prise en charge de la longueur, de la superficie, du volume, du poids, de la température et de la pression.',
    ogImage: 'https://www.metric-converter.com/og-image-fr.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Conversion métrique facilitée',
    twitterDescription: 'Outil professionnel de conversion d\'unités, supportant plus de 20 types de mesures.',
    twitterImage: 'https://www.metric-converter.com/twitter-card-fr.png'
  },
  'de': {
    title: 'Einheitenumrechner - Online & Kostenlos - Metric-Converter.com',
    description: 'Kostenloser Online-Einheitenumrechner mit über 20 Einheitentypen. Sofortige Umrechnung von metrischen, imperialen und anderen Einheiten für Länge, Gewicht, Temperatur, Fläche, Volumen uvm. Schnell & präzise!',
    keywords: 'Einheitenumrechner, metrischer Umrechner, imperialer Umrechner, Online Umrechner, Einheiten Umrechnung, Längenrechner, Gewichtsrechner, Temperaturrechner',
    canonical: 'https://www.metric-converter.com/de',
    ogTitle: 'metric-converter - Professionelles metrisches Umrechnungstool',
    ogDescription: 'Sofortige Umrechnung zwischen metrischen, imperialen und anderen Einheiten. Unterstützt Länge, Fläche, Volumen, Gewicht, Temperatur und Druck.',
    ogImage: 'https://www.metric-converter.com/og-image-de.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Einfache metrische Umrechnung',
    twitterDescription: 'Professionelles Umrechnungstool für über 20 Messarten.',
    twitterImage: 'https://www.metric-converter.com/twitter-card-de.png'
  },
  'es': {
    title: 'Convertidor de Unidades - Online y Gratis - Metric-Converter.com',
    description: 'Convertidor de unidades online gratuito con más de 20 tipos. Convierte instantáneamente unidades métricas, imperiales y otras para longitud, peso, temperatura, área, volumen y más. ¡Rápido y preciso!',
    keywords: 'convertidor de unidades, convertidor métrico, convertidor imperial, convertidor online, conversión de unidades, longitud, peso, temperatura',
    canonical: 'https://www.metric-converter.com/es',
    ogTitle: 'metric-converter - Herramienta profesional de conversión métrica',
    ogDescription: 'Convierte instantáneamente entre unidades métricas, imperiales y otras. Soporte para longitud, área, volumen, peso, temperatura y presión.',
    ogImage: 'https://www.metric-converter.com/og-image-es.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Conversión métrica fácil',
    twitterDescription: 'Herramienta profesional de conversión de unidades que admite más de 20 tipos de medidas.',
    twitterImage: 'https://www.metric-converter.com/twitter-card-es.png'
  },
  'ru': {
    title: 'Конвертер Величин - Онлайн и Бесплатно - Metric-Converter.com',
    description: 'Бесплатный онлайн конвертер величин с более чем 20 типами. Мгновенное преобразование метрических, имперских и других единиц измерения: длина, вес, температура, площадь, объем и многое другое. Быстро и точно!',
    keywords: 'конвертер величин, метрический конвертер, онлайн конвертер, преобразование единиц, конвертер длины, конвертер веса, конвертер температуры',
    canonical: 'https://www.metric-converter.com/ru',
    ogTitle: 'metric-converter - Профессиональный метрический конвертер',
    ogDescription: 'Мгновенная конверсия между метрическими, имперскими и другими единицами измерения.',
    ogImage: 'https://www.metric-converter.com/og-image-ru.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Простая метрическая конверсия',
    twitterDescription: 'Профессиональный инструмент конверсии, поддерживающий более 20 типов измерений.',
    twitterImage: 'https://www.metric-converter.com/twitter-card-ru.png'
  },
  'ja': {
    title: '単位換算 - オンライン無料換算ツール - Metric-Converter.com',
    description: '20種類以上の単位に対応した無料オンライン単位換算ツール。長さ、重さ、温度、面積、体積など、メートル法、ヤード・ポンド法などを瞬時に換算。 быстро & 正確！',
    keywords: '単位換算, 単位変換, オンライン単位換算, メートル法換算, ヤードポンド法換算, 長さ 換算, 重さ 換算, 温度 換算',
    canonical: 'https://www.metric-converter.com/ja',
    ogTitle: 'metric-converter - プロフェッショナルな単位変換ツール',
    ogDescription: 'メートル法、ヤード・ポンド法などの単位を即座に変換可能。長さ、面積、体積、重量、温度、圧力に対応。',
    ogImage: 'https://www.metric-converter.com/og-image-ja.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - 簡単な単位変換',
    twitterDescription: '20種類以上の測定タイプをサポートするプロフェッショナル単位変換ツール。',
    twitterImage: 'https://www.metric-converter.com/twitter-card-ja.png'
  }
};
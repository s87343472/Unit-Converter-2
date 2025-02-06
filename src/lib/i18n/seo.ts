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
    title: 'metric-converter - Professional Online Unit Conversion Tool',
    description: 'Free online metric converter with 20+ measurement types. Convert between metric, imperial and other units instantly. Supports length, area, volume, weight, temperature, pressure and more.',
    keywords: 'metric converter, unit converter, measurement converter, metric to imperial converter, imperial to metric converter, length converter, weight converter, temperature converter',
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
    title: 'metric-converter - 专业在线度量衡换算工具',
    description: '免费在线公制单位转换器，支持20多种计量单位，包括长度、面积、体积、重量、温度、压力等。提供公制与英制单位互换，支持科学计数法。',
    keywords: 'metric converter,公制转换器,单位换算,度量衡换算,公制单位,英制单位,长度换算,重量换算,温度换算',
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
    title: 'metric-converter - Outil professionnel de conversion d\'unités en ligne',
    description: 'Convertisseur d\'unités métriques en ligne gratuit avec plus de 20 types de mesures. Convertissez instantanément entre le système métrique, impérial et d\'autres unités.',
    keywords: 'convertisseur métrique, convertisseur d\'unités, conversion de mesures, métrique à impérial, longueur, poids, température',
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
    title: 'metric-converter - Professionelles Online-Einheiten-Umrechnungstool',
    description: 'Kostenloser Online-Einheitenumrechner mit über 20 Messarten. Sofortige Umrechnung zwischen metrischen, imperialen und anderen Einheiten.',
    keywords: 'metrischer Umrechner, Einheitenumrechner, Maßumrechner, metrisch zu imperial, Länge, Gewicht, Temperatur',
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
    title: 'metric-converter - Herramienta profesional de conversión de unidades en línea',
    description: 'Conversor de unidades en línea gratuito con más de 20 tipos de medidas. Convierte instantáneamente entre el sistema métrico, imperial y otras unidades.',
    keywords: 'conversor métrico, conversor de unidades, conversión de medidas, métrico a imperial, longitud, peso, temperatura',
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
    title: 'metric-converter - Профессиональный онлайн-конвертер единиц измерения',
    description: 'Бесплатный онлайн-конвертер единиц измерения с более чем 20 типами измерений. Мгновенный перевод между метрической, имперской и другими системами.',
    keywords: 'метрический конвертер, конвертер единиц, конвертер измерений, длина, вес, температура',
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
    title: 'metric-converter - プロフェッショナルなオンライン単位変換ツール',
    description: '無料のオンライン単位変換ツールで、20種類以上の測定タイプに対応。メートル法、ヤード・ポンド法などの単位を即座に変換。',
    keywords: 'メートル法変換,単位変換,測定変換,長さ変換,重量変換,温度変換',
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

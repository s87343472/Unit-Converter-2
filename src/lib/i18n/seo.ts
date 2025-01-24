import { ValidLocale } from './config'

type SEOConfig = {
  title: string
  description: string
  keywords: string
}

export const seoConfig: Record<ValidLocale, SEOConfig> = {
  zh: {
    title: 'Metric Converter - 在线单位换算工具',
    description: '免费在线单位转换器，支持长度、重量、温度等多种单位换算，简单易用。提供实时转换、科学计数法支持和详细的单位说明。',
    keywords: '单位转换,单位换算,在线工具,度量衡换算,metric converter,换算器',
  },
  en: {
    title: 'Metric Converter - Online Unit Conversion Tool',
    description: 'Free online unit converter supporting various unit conversions including length, weight, temperature, and more. Simple to use with real-time conversion.',
    keywords: 'unit converter,unit conversion,online tool,metric converter,measurement converter',
  },
  de: {
    title: 'Metric Converter - Online Einheitenumrechner',
    description: 'Kostenloser Online-Einheitenumrechner für Länge, Gewicht, Temperatur und mehr. Einfach zu bedienen mit Echtzeit-Umrechnung.',
    keywords: 'Einheitenumrechner,Einheitenumrechnung,Online-Tool,Maßeinheiten,Umrechner',
  },
  fr: {
    title: 'Metric Converter - Convertisseur d\'unités en ligne',
    description: 'Convertisseur d\'unités en ligne gratuit pour longueur, poids, température et plus. Simple à utiliser avec conversion en temps réel.',
    keywords: 'convertisseur unités,conversion unités,outil en ligne,convertisseur métrique',
  },
  ja: {
    title: 'Metric Converter - オンライン単位変換ツール',
    description: '無料のオンライン単位変換ツール。長さ、重さ、温度など様々な単位の変換に対応。リアルタイム変換で簡単に使用できます。',
    keywords: '単位変換,換算,オンラインツール,メートル法変換,メトリック変換',
  },
  ru: {
    title: 'Metric Converter - Онлайн конвертер единиц измерения',
    description: 'Бесплатный онлайн конвертер единиц измерения для длины, веса, температуры и других величин. Простой в использовании с мгновенным пересчетом.',
    keywords: 'конвертер единиц,перевод единиц,онлайн инструмент,метрический конвертер',
  },
  es: {
    title: 'Metric Converter - Conversor de unidades en línea',
    description: 'Conversor de unidades en línea gratuito para longitud, peso, temperatura y más. Fácil de usar con conversión en tiempo real.',
    keywords: 'conversor de unidades,conversión de unidades,herramienta en línea,conversor métrico',
  },
  la: {
    title: 'Metric Converter - Instrumentum Conversionis Unitatum',
    description: 'Instrumentum liberum conversionis unitatum pro longitudinibus, ponderibus, temperaturis et aliis. Facile utendum cum conversione immediata.',
    keywords: 'conversio unitatum,instrumentum interretiale,conversor metricus',
  },
} 
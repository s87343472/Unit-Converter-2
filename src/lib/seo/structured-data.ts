/**
 * Schema.org 结构化数据生成器
 * 用于生成单位转换工具的结构化数据
 */

export interface GenerateUnitConverterSchemaProps {
  fromUnitLabel: string
  toUnitLabel: string
  fromUnitSymbol?: string
  toUnitSymbol?: string
  type: string
  url: string
  name: string
  description: string
  language: string
}

/**
 * 生成单位转换工具的Schema.org结构化数据
 */
export function generateUnitConverterSchema({
  fromUnitLabel,
  toUnitLabel,
  fromUnitSymbol,
  toUnitSymbol,
  type,
  url,
  name,
  description,
  language
}: GenerateUnitConverterSchemaProps): string {
  // 创建基本的工具结构
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": url,
    "description": description,
    "inLanguage": language,
    "potentialAction": {
      "@type": "ConvertAction",
      "object": {
        "@type": "QuantitativeValue",
        "unitCode": fromUnitSymbol || fromUnitLabel,
        "unitText": fromUnitLabel
      },
      "result": {
        "@type": "QuantitativeValue",
        "unitCode": toUnitSymbol || toUnitLabel,
        "unitText": toUnitLabel
      }
    }
  }

  return JSON.stringify(schema)
}

/**
 * 生成网站的BreadcrumbList结构化数据
 */
export function generateBreadcrumbSchema(
  items: { url: string; name: string }[]
): string {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  }

  return JSON.stringify(schema)
}

/**
 * 生成FAQ结构化数据
 */
export function generateFAQSchema(
  questions: { question: string; answer: string }[]
): string {
  const mainEntity = questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  }

  return JSON.stringify(schema)
} 
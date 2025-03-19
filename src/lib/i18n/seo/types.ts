import type { Metadata as NextMetadata } from 'next'
import { UnitType } from '../units'
import { ValidLocale } from '../config'

// 定义Twitter类型
export interface ExtendedTwitterMetadata {
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
  title: string
  description: string
  images: string[] | { url: string; width?: number; height?: number; alt?: string }[]
  site?: string
  siteId?: string
  creator?: string
  creatorId?: string
}

// 扩展Next.js的Robots类型
interface ExtendedRobots {
  index: boolean
  follow: boolean
  'max-snippet': number
  'max-image-preview': 'none' | 'standard' | 'large'
  'max-video-preview': number
}

// 扩展Next.js的Metadata类型
export type Metadata = {
  title: string | null
  description: string | null
  keywords?: string
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  openGraph?: {
    title: string
    description: string
    url: string
    siteName?: string
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
    locale?: string
    type?: string
  }
  twitter?: ExtendedTwitterMetadata | null
  robots?: ExtendedRobots
  verification?: {
    google?: string | null
    yandex?: string | null
  }
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterCard: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
  alternateLanguages: Record<ValidLocale, string>
}

export interface UnitPageSEO {
  title: string
  description: string
  keywords: string[]
  unitExamples: string[]
  usageCases: string[]
}

export interface SEOTemplates {
  title: Record<UnitType, string>
  description: Record<UnitType, string>
  keywords: Record<UnitType, string[]>
}

export interface SEOConfig {
  defaultTitle: string
  defaultDescription: string
  defaultKeywords: string[]
  templates: Record<ValidLocale, SEOTemplates>
  baseUrl: string
  defaultImage: string
}

export type GenerateMetadataParams = {
  locale: ValidLocale
  type: UnitType
  baseUrl: string
}

export interface GenerateDescriptionParams {
  locale: ValidLocale
  type: UnitType
  unitExamples: string[]
  usageCases: string[]
} 
import type { UnitType, UnitInfo } from '@/lib/i18n/units'

export type ValidLocale = 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ru' | 'es' | 'la'

export interface CommonTranslation {
  title: string
  description: string
  loading: string
  error: string
  copy: string
  copied: string
  settings: string
  language: string
  theme: string
  about: string
  contact: string
  home: string
  selectType: string
  selectLanguage: string
  pageNotFound: string
  pageNotFoundDesc: string
  backToHome: string
  copyright: string
  categories: {
    basic: string
    area_volume: string
    time_related: string
    physics: string
    data: string
    others: string
  }
  instructions: {
    title: string
    steps: {
      input: string
      select: string
      auto: string
      copy: string
    }
    features: {
      title: string
      range: {
        title: string
        description: string
      }
      copy: {
        title: string
        description: string
      }
      paste: {
        title: string
        description: string
      }
    }
  }
  customOrder: string
  byName: string
  byCreatedTime: string
  byLastUsed: string
  clearAll: string
  noFavorites: string
  remove: string
  clearConfirmTitle: string
  clearConfirmMessage: string
  cancel: string
  confirm: string
  addFavorite: string
  removeFavorite: string
  enterFavoriteName: string
  favoriteNamePlaceholder: string
  showFavorites: string
  hideFavorites: string
  from: string
  to: string
  selectUnit: string
  inputValue: string
  convertResult: string
  searchUnit: string
  length: string
  conversionHistory: string
  clearHistory: string
  confirmClear: string
  delete: string
}

export interface UnitTranslation {
  [key: string]: UnitInfo
}

export interface Translation {
  common: CommonTranslation
  units: Record<UnitType, UnitInfo>
  buttons: {
    convert: string
    clear: string
    swap: string
    copy: string
  }
  messages: {
    copied: string
    error: string
    invalidNumber: string
    selectUnit: string
    conversionError: string
    invalidTemperature: string
  }
  footer?: {
    about: string
    description: string
    contact: string
    email: string
    legal: string
  }
  converter?: {
    title: string
    description: string
    from: string
    to: string
    instructions: {
      title: string
      steps: string[]
    }
    limitations: {
      title: string
      items: string[]
    }
    knowledge: {
      title: string
      items: string[]
    }
  }
}

export interface TranslationMap {
  [locale: string]: Translation
} 
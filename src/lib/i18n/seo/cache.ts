import { Metadata } from 'next'
import { ValidLocale } from '../config'
import { UnitType } from '../units'

export interface CacheKey {
  locale: ValidLocale
  type: UnitType
  baseUrl: string
}

export class MetadataCache {
  private static instance: MetadataCache
  private cache = new Map<string, Metadata>()
  private maxAge = 1000 * 60 * 60 // 1小时缓存
  private cacheTimestamps = new Map<string, number>()

  private constructor() {}

  static getInstance(): MetadataCache {
    if (!MetadataCache.instance) {
      MetadataCache.instance = new MetadataCache()
    }
    return MetadataCache.instance
  }

  private generateCacheKey(key: CacheKey): string {
    return `${key.locale}:${key.type}:${key.baseUrl}`
  }

  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > this.maxAge
  }

  get(key: CacheKey): Metadata | undefined {
    const cacheKey = this.generateCacheKey(key)
    const timestamp = this.cacheTimestamps.get(cacheKey)
    
    if (timestamp && this.isExpired(timestamp)) {
      this.cache.delete(cacheKey)
      this.cacheTimestamps.delete(cacheKey)
      return undefined
    }
    
    return this.cache.get(cacheKey)
  }

  set(key: CacheKey, value: Metadata): void {
    const cacheKey = this.generateCacheKey(key)
    this.cache.set(cacheKey, value)
    this.cacheTimestamps.set(cacheKey, Date.now())
  }

  clear(): void {
    this.cache.clear()
    this.cacheTimestamps.clear()
  }

  setMaxAge(milliseconds: number): void {
    this.maxAge = milliseconds
  }

  getSize(): number {
    return this.cache.size
  }

  removeExpired(): void {
    for (const [key, timestamp] of this.cacheTimestamps.entries()) {
      if (this.isExpired(timestamp)) {
        this.cache.delete(key)
        this.cacheTimestamps.delete(key)
      }
    }
  }
} 
import { ValidLocale } from '../config'
import { UnitType } from '../units'

export interface MetadataGenerationMetrics {
  duration: number
  locale: ValidLocale
  type: UnitType
  timestamp: number
  success: boolean
  error?: string
}

export class MetadataMonitoring {
  private static instance: MetadataMonitoring
  private metrics: MetadataGenerationMetrics[] = []
  private maxMetrics = 1000 // 最多保存1000条记录

  private constructor() {}

  static getInstance(): MetadataMonitoring {
    if (!MetadataMonitoring.instance) {
      MetadataMonitoring.instance = new MetadataMonitoring()
    }
    return MetadataMonitoring.instance
  }

  recordMetric(metric: MetadataGenerationMetrics): void {
    this.metrics.push(metric)
    if (this.metrics.length > this.maxMetrics) {
      this.metrics.shift() // 移除最旧的记录
    }
  }

  getAverageGenerationTime(): number {
    if (this.metrics.length === 0) return 0
    const total = this.metrics.reduce((sum, m) => sum + m.duration, 0)
    return total / this.metrics.length
  }

  getSuccessRate(): number {
    if (this.metrics.length === 0) return 0
    const successCount = this.metrics.filter(m => m.success).length
    return (successCount / this.metrics.length) * 100
  }

  getErrorRate(): number {
    return 100 - this.getSuccessRate()
  }

  getMetricsByLocale(locale: ValidLocale): MetadataGenerationMetrics[] {
    return this.metrics.filter(m => m.locale === locale)
  }

  getMetricsByType(type: UnitType): MetadataGenerationMetrics[] {
    return this.metrics.filter(m => m.type === type)
  }

  getRecentMetrics(count: number = 10): MetadataGenerationMetrics[] {
    return this.metrics.slice(-count)
  }

  getErrorMetrics(): MetadataGenerationMetrics[] {
    return this.metrics.filter(m => !m.success)
  }

  clearMetrics(): void {
    this.metrics = []
  }

  setMaxMetrics(count: number): void {
    this.maxMetrics = count
    if (this.metrics.length > count) {
      this.metrics = this.metrics.slice(-count)
    }
  }

  generateReport(): {
    totalRequests: number
    averageTime: number
    successRate: number
    errorRate: number
    recentErrors: MetadataGenerationMetrics[]
  } {
    return {
      totalRequests: this.metrics.length,
      averageTime: this.getAverageGenerationTime(),
      successRate: this.getSuccessRate(),
      errorRate: this.getErrorRate(),
      recentErrors: this.getErrorMetrics().slice(-5)
    }
  }
} 
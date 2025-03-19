import { ValidLocale } from '../config'
import { UnitType } from '../units'

export class MetadataGenerationError extends Error {
  constructor(
    message: string,
    public readonly locale: ValidLocale,
    public readonly type: UnitType,
    public readonly cause?: Error
  ) {
    super(message)
    this.name = 'MetadataGenerationError'
  }
}

export class ContentGenerationError extends Error {
  constructor(
    message: string,
    public readonly locale: ValidLocale,
    public readonly type: UnitType,
    public readonly cause?: Error
  ) {
    super(message)
    this.name = 'ContentGenerationError'
  }
}

export class TemplateError extends Error {
  constructor(
    message: string,
    public readonly locale: ValidLocale,
    public readonly type: UnitType,
    public readonly templateType: 'title' | 'description' | 'keywords',
    public readonly cause?: Error
  ) {
    super(message)
    this.name = 'TemplateError'
  }
} 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales, defaultLocale, ValidLocale } from '@/lib/i18n/config'

const PREFERRED_LANGUAGE_KEY = 'preferred_language'
const LAST_PROMPT_TIME_KEY = 'last_lang_prompt_time'

// 获取请求的语言
function getLanguage(request: NextRequest): ValidLocale | null {
  const pathname = request.nextUrl.pathname
  const pathnameElements = pathname.split('/')
  const firstSegment = pathnameElements[1]
  
  return locales.includes(firstSegment as ValidLocale) ? firstSegment as ValidLocale : null
}

// 获取浏览器首选语言
function getBrowserLanguage(request: NextRequest): ValidLocale {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // 获取Accept-Language头
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  
  try {
    // 尝试匹配语言
    const match = matchLocale(languages, locales, defaultLocale)
    return match as ValidLocale
  } catch (e) {
    return defaultLocale
  }
}

// 检查是否需要显示语言切换提示
function shouldShowLanguagePrompt(request: NextRequest): boolean {
  // 获取上次显示提示的时间
  const lastPromptTime = request.cookies.get(LAST_PROMPT_TIME_KEY)?.value
  if (!lastPromptTime) return true

  // 检查是否已经过了24小时
  const lastTime = new Date(lastPromptTime).getTime()
  const now = new Date().getTime()
  return (now - lastTime) > 24 * 60 * 60 * 1000
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 如果路径已经包含语言代码，直接返回
  if (getLanguage(request)) {
    return NextResponse.next()
  }

  // 获取首选语言
  const preferredLanguage = request.cookies.get(PREFERRED_LANGUAGE_KEY)?.value as ValidLocale | undefined
  
  // 如果没有首选语言，使用浏览器语言
  const locale = preferredLanguage || getBrowserLanguage(request)
  
  // 重定向到带有语言代码的路径
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 
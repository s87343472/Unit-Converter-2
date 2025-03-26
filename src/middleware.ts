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
  
  // 排除不需要处理的路径
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // 静态文件
  ) {
    return NextResponse.next()
  }

  // 获取当前路径中的语言代码
  const language = getLanguage(request)
  
  // 如果是根路径
  if (pathname === '/') {
    // 获取用户的语言偏好
    const savedLanguage = request.cookies.get(PREFERRED_LANGUAGE_KEY)?.value
    if (savedLanguage && locales.includes(savedLanguage as ValidLocale)) {
      // 如果有保存的语言偏好且不是英语，重定向到对应语言版本
      if (savedLanguage !== 'en') {
        const response = NextResponse.redirect(new URL(`/${savedLanguage}`, request.url))
        response.cookies.set(PREFERRED_LANGUAGE_KEY, savedLanguage, {
          path: '/',
          maxAge: 30 * 24 * 60 * 60 // 30天
        })
        return response
      }
      // 如果是英语，直接返回
      const response = NextResponse.next()
      response.headers.set('Content-Language', 'en')
      response.cookies.set(PREFERRED_LANGUAGE_KEY, 'en', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60 // 30天
      })
      return response
    }

    // 获取浏览器语言
    const browserLanguage = getBrowserLanguage(request)
    
    // 如果是英语，直接返回
    if (browserLanguage === 'en') {
      const response = NextResponse.next()
      response.headers.set('Content-Language', 'en')
      return response
    }
    
    // 如果不是英语且需要显示提示，设置提示标记
    if (shouldShowLanguagePrompt(request)) {
      const response = NextResponse.next()
      response.headers.set('Content-Language', 'en')
      response.headers.set('X-Show-Language-Prompt', 'true')
      response.headers.set('X-Detected-Language', browserLanguage)
      
      // 设置cookie以记录语言提示显示时间
      response.cookies.set(LAST_PROMPT_TIME_KEY, new Date().toISOString(), {
        path: '/',
        maxAge: 24 * 60 * 60 // 24小时
      })
      
      return response
    }
    
    // 如果不需要显示提示，直接返回英语版本
    const response = NextResponse.next()
    response.headers.set('Content-Language', 'en')
    return response
  }

  // 如果路径中没有语言代码（且不是根路径），保持原样
  if (!language) {
    const response = NextResponse.next()
    response.headers.set('Content-Language', 'en')
    return response
  }

  // 正常请求，添加语言相关的响应头
  const response = NextResponse.next()
  
  // 设置内容语言头
  response.headers.set('Content-Language', language)
  
  // 添加 Link 头，用于 hreflang
  const alternateLinks = []
  const pathWithoutLanguage = pathname.replace(`/${language}`, '')
  
  // 添加x-default（指向根路径，即英文版本）
  alternateLinks.push(`<${request.nextUrl.origin}${pathWithoutLanguage}>;rel="alternate";hreflang="x-default"`)
  
  // 添加其他语言版本（除了英语）
  for (const locale of locales) {
    if (locale !== 'en') {
      alternateLinks.push(`<${request.nextUrl.origin}/${locale}${pathWithoutLanguage}>;rel="alternate";hreflang="${locale}"`)
    }
  }
  
  response.headers.set('Link', alternateLinks.join(', '))
  
  return response
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件、robots.txt 和 sitemap.xml
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)'
  ]
} 
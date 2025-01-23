import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales, defaultLocale } from '@/lib/i18n/config'

type Locale = typeof locales[number]

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const localeList = [...locales]

  try {
    return matchLocale(languages, localeList, defaultLocale)
  } catch (e) {
    return defaultLocale
  }
}

// 获取请求的语言
function getLanguage(request: NextRequest): Locale | null {
  const pathname = request.nextUrl.pathname
  const pathnameElements = pathname.split('/')
  const firstSegment = pathnameElements[1]
  return locales.includes(firstSegment as Locale) ? firstSegment as Locale : null
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const language = getLanguage(request)
  
  // 如果路径中没有有效的语言代码，重定向到默认语言
  if (!language) {
    const url = new URL(`/en${pathname}`, request.url)
    return NextResponse.redirect(url)
  }
  
  // 创建响应
  const response = NextResponse.next()
  
  // 添加语言相关的标头
  response.headers.set('Content-Language', language)
  response.headers.set('Vary', 'Accept-Language')
  
  // 添加当前路径标头用于生成 hreflang 标签
  response.headers.set('x-pathname', pathname)
  
  return response
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件等
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 
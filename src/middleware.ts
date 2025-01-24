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
  
  // 如果路径中没有有效的语言代码，使用用户之前选择的语言或浏览器语言
  if (!language) {
    // 从 cookie 获取用户之前选择的语言
    const preferredLanguage = request.cookies.get('preferred_language')?.value
    // 如果没有之前选择的语言，则使用浏览器语言
    const detectedLanguage = getLocale(request)
    const targetLanguage = preferredLanguage || detectedLanguage
    
    const url = new URL(`/${targetLanguage}${pathname}`, request.url)
    const response = NextResponse.redirect(url)
    
    // 设置语言偏好 cookie
    response.cookies.set('preferred_language', targetLanguage, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1年
      sameSite: 'lax'
    })
    
    return response
  }
  
  // 创建响应
  const response = NextResponse.next()
  
  // 更新语言偏好 cookie
  response.cookies.set('preferred_language', language, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1年
    sameSite: 'lax'
  })
  
  // 添加语言相关的标头
  response.headers.set('Content-Language', language)
  response.headers.set('Vary', 'Accept-Language')
  
  // 添加当前路径标头用于生成 hreflang 标签
  response.headers.set('x-pathname', pathname)
  
  return response
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件、robots.txt 和 sitemap.xml
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
} 
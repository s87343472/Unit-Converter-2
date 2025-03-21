import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales, defaultLocale, ValidLocale } from '@/lib/i18n/config'

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

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const localeList = [...locales]

  try {
    return matchLocale(languages, localeList, defaultLocale) as ValidLocale
  } catch (e) {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 排除不需要处理的路径
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // 静态文件
  ) {
    return NextResponse.next()
  }

  // 获取当前路径中的语言代码
  const language = getLanguage(request)
  
  // 如果是根路径，使用默认语言（英语）但不重定向
  if (pathname === '/') {
    const response = NextResponse.next()
    response.headers.set('Content-Language', defaultLocale)
    
    // 添加 Link 头，用于 hreflang
    const alternateLinks = []
    // 添加默认语言版本（根路径）
    alternateLinks.push(`<${request.nextUrl.origin}/>;rel="alternate";hreflang="${defaultLocale}"`)
    // 添加其他语言版本
    for (const locale of locales) {
      if (locale !== defaultLocale) {
        alternateLinks.push(`<${request.nextUrl.origin}/${locale}>;rel="alternate";hreflang="${locale}"`)
      }
    }
    response.headers.set('Link', alternateLinks.join(', '))
    
    return response
  }

  // 如果路径中没有语言代码（且不是根路径），重定向到浏览器首选语言
  if (!language && pathname !== '/') {
    const browserLanguage = getBrowserLanguage(request)
    const redirectUrl = new URL(`/${browserLanguage}${pathname}`, request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // 正常请求，添加语言相关的响应头
  const response = NextResponse.next()
  
  // 设置内容语言头
  response.headers.set('Content-Language', language || defaultLocale)
  
  // 添加 Link 头，用于 hreflang
  const alternateLinks = []
  // 添加默认语言版本
  const pathWithoutLanguage = language ? pathname.replace(`/${language}`, '') : pathname
  alternateLinks.push(`<${request.nextUrl.origin}/${defaultLocale}${pathWithoutLanguage}>;rel="alternate";hreflang="${defaultLocale}"`)
  // 添加其他语言版本
  for (const locale of locales) {
    if (locale !== defaultLocale) {
      alternateLinks.push(`<${request.nextUrl.origin}/${locale}${pathWithoutLanguage}>;rel="alternate";hreflang="${locale}"`)
    }
  }
  response.headers.set('Link', alternateLinks.join(', '))
  
  return response
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件、robots.txt 和 sitemap.xml
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
} 
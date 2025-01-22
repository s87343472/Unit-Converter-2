import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales, defaultLocale } from '@/lib/i18n/config'

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查路径是否已经包含有效的语言代码
  const hasValidLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果已经有有效的语言代码，不进行重定向
  if (hasValidLocale) {
    return NextResponse.next()
  }

  // 如果是根路径或没有语言代码，进行重定向
  const locale = getLocale(request)
  
  // 如果是根路径，重定向到默认语言
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // 将当前路径添加到语言前缀后面
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件等
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 
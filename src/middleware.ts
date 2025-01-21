import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, locales } from './lib/i18n/config'

export function middleware(request: NextRequest) {
  // 获取请求的路径名
  const pathname = request.nextUrl.pathname

  // 如果路径已经包含语言代码，则不需要重定向
  if (locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) {
    return NextResponse.next()
  }

  // 从 Accept-Language 头部获取用户首选语言
  const acceptLanguage = request.headers.get('accept-language')
  let locale = defaultLocale

  if (acceptLanguage) {
    // 简单的语言匹配逻辑
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()

    if (locales.includes(preferredLocale as any)) {
      locale = preferredLocale as typeof defaultLocale
    }
  }

  // 构建重定向 URL
  const url = new URL(pathname, request.url)
  url.pathname = `/${locale}${pathname}`

  // 返回重定向响应
  return NextResponse.redirect(url)
}

export const config = {
  // 匹配所有路径，除了 api 路由、静态文件等
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 
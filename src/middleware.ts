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
  
  const isValidLocale = locales.includes(firstSegment as ValidLocale)
  console.log(`[Middleware] 路径 ${pathname} 的首段 ${firstSegment} 是有效语言: ${isValidLocale}`)
  
  return isValidLocale ? firstSegment as ValidLocale : null
}

// 获取浏览器首选语言
function getBrowserLanguage(request: NextRequest): ValidLocale {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // 获取Accept-Language头
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  console.log(`[Middleware] 浏览器语言偏好: ${languages.join(', ')}`)
  
  try {
    // 尝试匹配语言
    const match = matchLocale(languages, locales, defaultLocale)
    console.log(`[Middleware] 匹配到的语言: ${match}`)
    return match as ValidLocale
  } catch (e) {
    console.log(`[Middleware] 匹配语言出错，使用默认语言: ${defaultLocale}`)
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
  console.log(`[Middleware] 处理请求: ${pathname}`)
  
  // 如果是静态资源或API路由，直接返回
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.') || 
    pathname === '/favicon.ico'
  ) {
    console.log(`[Middleware] 跳过静态资源: ${pathname}`)
    return NextResponse.next()
  }
  
  // 如果路径已经包含语言代码，检查URL格式
  const currentLocale = getLanguage(request)
  if (currentLocale) {
    console.log(`[Middleware] 路径已包含语言代码: ${pathname}, 语言: ${currentLocale}`)
    
    // 检查是否使用旧的路由格式 (meter/to/kilometer)，重定向到SEO友好格式 (meter-to-kilometer)
    const pathnameElements = pathname.split('/')
    if (pathnameElements.length >= 5) {
      const locale = pathnameElements[1]
      const type = pathnameElements[2]
      const fromUnit = pathnameElements[3]
      const toKeyword = pathnameElements[4]
      const toUnit = pathnameElements[5]
      
      // 检查是否为 "/to/" 格式
      if (toKeyword === 'to' && fromUnit && toUnit) {
        console.log(`[Middleware] 发现旧格式URL: ${pathname}，包含 "/to/" 路径`)
        
        const newPath = `/${locale}/${type}/${fromUnit}-to-${toUnit}`
        console.log(`[Middleware] 重定向到SEO友好格式URL: ${newPath}`)
        return NextResponse.redirect(new URL(newPath, request.url))
      }
    }
    
    // 检查是否为其他不符合规范的URL格式（如有必要可以添加其他重定向规则）
    
    // 保存当前URL的原始path到请求头中，供布局组件使用
    const response = NextResponse.next()
    response.headers.set('x-pathname', pathname)
    return response
  }

  // 获取首选语言
  const preferredLanguage = request.cookies.get(PREFERRED_LANGUAGE_KEY)?.value as ValidLocale | undefined
  console.log(`[Middleware] 用户首选语言: ${preferredLanguage || '未设置'}`)
  
  // 如果没有首选语言，使用浏览器语言
  const locale = preferredLanguage || defaultLocale // 使用默认语言而不是检测的浏览器语言
  console.log(`[Middleware] 使用语言: ${locale}`)
  
  // 重定向到带有语言代码的路径
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
  console.log(`[Middleware] 重定向到: ${redirectUrl.toString()}`)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 
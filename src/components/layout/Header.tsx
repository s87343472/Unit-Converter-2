'use client'

import { useLanguage } from '@/components/shared/LanguageProvider'
import LanguageSwitcher from '@/components/shared/LanguageSwitcher'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { conversionTypes } from '@/lib/conversion-types'
import { useRef, useState, useEffect } from 'react'

export default function Header() {
  const { t, language } = useLanguage()
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(false)

  // 检查是否需要显示滚动按钮
  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth)
    }
  }

  // 监听滚动事件
  useEffect(() => {
    const nav = navRef.current
    if (nav) {
      nav.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      checkScroll()
      return () => {
        nav.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  // 滚动函数
  const scroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = 200
      const newScrollLeft = navRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      navRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  // 自动滚动到当前选中的项目
  useEffect(() => {
    if (navRef.current) {
      const currentType = pathname.split('/')[2]
      const activeButton = navRef.current.querySelector(`[data-type="${currentType}"]`)
      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton as HTMLElement
        const { scrollLeft, clientWidth } = navRef.current
        const targetScroll = offsetLeft - (clientWidth - offsetWidth) / 2
        navRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        })
      }
    }
  }, [pathname])

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <Link 
            href={`/${language}`} 
            className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            {t.common.title}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="relative">
          {/* 左滚动按钮 */}
          {showLeftScroll && (
            <div className="absolute left-0 top-0 bottom-0 flex items-center">
              <button
                onClick={() => scroll('left')}
                className="z-10 p-2 rounded-full shadow-md hover:bg-gray-100 bg-white ml-2"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="w-8 h-full scroll-fade-left" />
            </div>
          )}
          
          {/* 导航栏 */}
          <div className="nav-scroll-container">
            <nav 
              ref={navRef}
              className="flex -mb-px overflow-x-auto hide-scrollbar relative" 
              aria-label="Unit types"
            >
              {conversionTypes.map(({ id, icon: Icon }) => (
                <Link
                  key={id}
                  href={`/${language}/${id}`}
                  data-type={id}
                  className={`whitespace-nowrap px-4 py-2 border-b-2 text-sm font-medium flex items-center ${
                    pathname.split('/')[2] === id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {t.units[id]?.title || id}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* 右滚动按钮 */}
          {showRightScroll && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center">
              <div className="w-8 h-full scroll-fade-right" />
              <button
                onClick={() => scroll('right')}
                className="z-10 p-2 rounded-full shadow-md hover:bg-gray-100 bg-white mr-2"
              >
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 
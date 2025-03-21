'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { localeNames, ValidLocale, locales } from '@/lib/i18n/config';

interface LanguageSwitchPromptProps {
  currentLocale: ValidLocale;
}

const PROMPT_STORAGE_KEY = 'language-switch-prompt-timestamp';

function detectBrowserLocale(): ValidLocale {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language;
  // 检查完整的语言代码（例如 zh-CN）
  if (locales.includes(browserLang as ValidLocale)) {
    return browserLang as ValidLocale;
  }
  // 检查基础语言代码（例如 zh）
  const baseLanguage = browserLang.split('-')[0];
  if (locales.includes(baseLanguage as ValidLocale)) {
    return baseLanguage as ValidLocale;
  }
  return 'en';
}

export function LanguageSwitchPrompt({ currentLocale }: LanguageSwitchPromptProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const router = useRouter();
  const detectedLocale = detectBrowserLocale();

  useEffect(() => {
    // 如果当前语言和检测到的语言相同，不显示提示
    if (currentLocale === detectedLocale) {
      return;
    }

    // 检查上次提示时间
    const lastPromptTime = localStorage.getItem(PROMPT_STORAGE_KEY);
    const now = Date.now();
    
    if (!lastPromptTime || now - parseInt(lastPromptTime) > 24 * 60 * 60 * 1000) {
      setShowPrompt(true);
      // 更新提示时间
      localStorage.setItem(PROMPT_STORAGE_KEY, now.toString());
    }
  }, [currentLocale, detectedLocale]);

  if (!showPrompt) {
    return null;
  }

  const handleSwitch = () => {
    // 构建新的URL路径
    const newPath = window.location.pathname.replace(`/${currentLocale}`, `/${detectedLocale}`);
    router.push(newPath);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm z-50">
      <p className="text-sm mb-3">
        {`看起来您的浏览器语言是 ${localeNames[detectedLocale]}，是否切换到该语言？`}
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleDismiss}
          className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          取消
        </button>
        <button
          onClick={handleSwitch}
          className="px-3 py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded"
        >
          切换语言
        </button>
      </div>
    </div>
  );
} 
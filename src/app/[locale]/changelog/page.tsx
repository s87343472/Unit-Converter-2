'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { marked } from 'marked'

export default function ChangelogPage() {
  const { t } = useLanguage()
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/CHANGELOG.md')
      .then(response => response.text())
      .then(text => {
        const htmlContent = marked(text)
        setContent(typeof htmlContent === 'string' ? htmlContent : '')
      })
      .catch(error => {
        console.error('Error loading changelog:', error)
        setContent('Error loading changelog')
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t?.footer?.changelog || 'Changelog'}</h1>
      <div 
        className="prose prose-indigo max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
} 
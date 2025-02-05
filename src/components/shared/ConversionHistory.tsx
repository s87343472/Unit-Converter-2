'use client'

import { useConversionHistory } from '@/lib/hooks/useConversionHistory'
import { useAppLanguage } from '@/lib/hooks/useLanguage'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ConversionHistory as ConversionHistoryType } from '@/lib/types/history'

interface ConversionHistoryProps {
  onReuse?: (record: ConversionHistoryType) => void;
  className?: string;
}

export function ConversionHistory({ onReuse, className = '' }: ConversionHistoryProps) {
  const { history, removeHistory, clearHistory } = useConversionHistory()
  const { t } = useAppLanguage()
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <div className="mt-8 p-4 bg-white rounded-lg shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-gray-100 rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  if (history.length === 0) {
    return null
  }

  const handleReuse = async (record: ConversionHistoryType) => {
    if (onReuse) {
      setIsLoading(true)
      try {
        await onReuse(record)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={`mt-8 p-4 bg-white rounded-lg shadow-sm ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {t.common.conversionHistory}
        </h2>
        <button
          onClick={() => setShowConfirm(true)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {t.common.clearHistory}
        </button>
      </div>

      {/* 确认清除对话框 */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-4">
              {t.common.confirmClear}
            </h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                {t.common.cancel}
              </button>
              <button
                onClick={() => {
                  clearHistory()
                  setShowConfirm(false)
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                {t.common.confirm}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 历史记录列表 */}
      <div className="space-y-2">
        <AnimatePresence>
          {history.map(record => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => handleReuse(record)}
              role="button"
              tabIndex={0}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {record.type}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-600 truncate">
                    {record.inputValue} {record.fromUnit} = {record.result} {record.toUnit}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(record.timestamp).toLocaleString()}
                </div>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  removeHistory(record.id)
                }}
                className="ml-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                aria-label={t.common.delete}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFavorite } from '@/lib/hooks/useFavorite'
import { useLanguage } from '@/lib/hooks/useLanguage'
import type { CreateFavoriteParams } from '@/lib/types/favorite'

interface FavoriteButtonProps {
  type: string
  fromUnit: string
  toUnit: string
  className?: string
  onAdd?: () => void
  onRemove?: () => void
}

export function FavoriteButton({
  type,
  fromUnit,
  toUnit,
  className = '',
  onAdd,
  onRemove
}: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorited } = useFavorite()
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [showNameInput, setShowNameInput] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  const isFavorite = isFavorited(type, fromUnit, toUnit)

  const handleToggle = async () => {
    if (isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      if (isFavorite) {
        // 移除收藏
        removeFavorite(type)
        onRemove?.()
      } else {
        // 添加收藏
        setShowNameInput(true)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '操作失败')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAdd = async () => {
    if (!name.trim()) {
      setError('请输入名称')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const params: CreateFavoriteParams = {
        type,
        fromUnit,
        toUnit,
        name: name.trim()
      }
      await addFavorite(params)
      onAdd?.()
      setShowNameInput(false)
      setName('')
    } catch (err) {
      setError(err instanceof Error ? err.message : '添加失败')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        disabled={isLoading}
        className={`relative flex items-center justify-center p-2 rounded-full 
          ${isFavorite 
            ? 'text-yellow-500 hover:text-yellow-600' 
            : 'text-gray-400 hover:text-gray-600'} 
          transition-colors ${className}`}
        aria-label={isFavorite ? t.common.removeFavorite : t.common.addFavorite}
      >
        <svg 
          className="w-6 h-6" 
          fill={isFavorite ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          </div>
        )}
      </motion.button>

      {/* 名称输入对话框 */}
      <AnimatePresence>
        {showNameInput && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute right-0 top-full mt-2 p-4 bg-white rounded-lg shadow-lg z-50 min-w-[240px]"
          >
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              {t.common.enterFavoriteName}
            </h3>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t.common.favoriteNamePlaceholder}
              className="w-full px-3 py-2 border rounded-md text-sm mb-2"
              maxLength={50}
              autoFocus
            />
            {error && (
              <p className="text-xs text-red-500 mb-2">{error}</p>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowNameInput(false)
                  setError(null)
                  setName('')
                }}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
              >
                {t.common.cancel}
              </button>
              <button
                onClick={handleAdd}
                disabled={isLoading}
                className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {t.common.confirm}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
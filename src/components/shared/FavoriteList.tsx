'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { useFavorite } from '@/lib/hooks/useFavorite'
import { useLanguage } from '@/lib/hooks/useLanguage'
import type { Favorite, FavoriteSortBy } from '@/lib/types/favorite'

interface FavoriteListProps {
  className?: string
  onSelect?: (favorite: Favorite) => void
}

export function FavoriteList({ className = '', onSelect }: FavoriteListProps) {
  const { favorites, sortBy, setSortBy, removeFavorite, reorderFavorites, clearFavorites } = useFavorite()
  const { t } = useLanguage()
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // 处理排序方式变更
  const handleSortChange = (newSort: FavoriteSortBy) => {
    setSortBy(newSort)
  }

  // 处理重新排序
  const handleReorder = (reorderedList: Favorite[]) => {
    const updates = reorderedList.map((item, index) => ({
      id: item.id,
      order: index
    }))
    reorderFavorites(updates)
  }

  // 处理删除收藏
  const handleRemove = (id: string) => {
    removeFavorite(id)
  }

  // 处理清空收藏
  const handleClear = () => {
    clearFavorites()
    setShowClearConfirm(false)
  }

  // 处理选择收藏
  const handleSelect = (favorite: Favorite) => {
    setSelectedId(favorite.id)
    onSelect?.(favorite)
    setTimeout(() => setSelectedId(null), 500) // 重置选中状态
  }

  return (
    <div className={`relative ${className}`}>
      {/* 排序控制 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as FavoriteSortBy)}
            className="text-sm border rounded px-2 py-1"
          >
            <option value="order">{t.common.customOrder}</option>
            <option value="name">{t.common.byName}</option>
            <option value="createdAt">{t.common.byCreatedTime}</option>
            <option value="lastUsed">{t.common.byLastUsed}</option>
          </select>
        </div>
        <button
          onClick={() => setShowClearConfirm(true)}
          className="text-sm text-gray-500 hover:text-gray-700"
          disabled={favorites.length === 0}
        >
          {t.common.clearAll}
        </button>
      </div>

      {/* 收藏列表 */}
      {favorites.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {t.common.noFavorites}
        </div>
      ) : (
        <Reorder.Group
          axis="y"
          values={favorites}
          onReorder={handleReorder}
          className="space-y-2"
        >
          {favorites.map((favorite) => (
            <Reorder.Item
              key={favorite.id}
              value={favorite}
              className="list-none"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: selectedId === favorite.id ? 0.98 : 1,
                  backgroundColor: selectedId === favorite.id ? '#f3f4f6' : '#ffffff'
                }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm cursor-pointer"
                onClick={() => handleSelect(favorite)}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {favorite.name}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    {t.units[favorite.type].title}: {favorite.fromUnit} → {favorite.toUnit}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(favorite.id)
                  }}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                  aria-label={t.common.remove}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}

      {/* 清空确认对话框 */}
      <AnimatePresence>
        {showClearConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
            onClick={() => setShowClearConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t.common.clearConfirmTitle}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {t.common.clearConfirmMessage}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  {t.common.cancel}
                </button>
                <button
                  onClick={handleClear}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  {t.common.confirm}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
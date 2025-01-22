'use client'

import { useReducer, useEffect, useCallback, useState } from 'react'
import type { Favorite, FavoriteAction, CreateFavoriteParams, UpdateFavoriteParams, FavoriteSortBy } from '../types/favorite'

const STORAGE_KEY = 'unit_converter_favorites'
const MAX_FAVORITES = 100

// 收藏夹 reducer
function favoriteReducer(state: Favorite[], action: FavoriteAction): Favorite[] {
  switch (action.type) {
    case 'ADD': {
      const maxOrder = Math.max(0, ...state.map(item => item.order))
      const newFavorite: Favorite = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        lastUsedAt: Date.now(),
        order: maxOrder + 1
      }
      return [...state, newFavorite]
    }

    case 'REMOVE':
      return state.filter(item => item.id !== action.payload)

    case 'UPDATE': {
      const { id, data } = action.payload
      return state.map(item =>
        item.id === id
          ? { ...item, ...data, lastUsedAt: Date.now() }
          : item
      )
    }

    case 'REORDER': {
      const updates = new Map(action.payload.map(({ id, order }) => [id, order]))
      return state.map(item => ({
        ...item,
        order: updates.get(item.id) ?? item.order
      }))
    }

    case 'CLEAR':
      return []

    default:
      return state
  }
}

export function useFavorite() {
  const [favorites, dispatch] = useReducer(favoriteReducer, [])
  const [sortBy, setSortBy] = useState<FavoriteSortBy>('order')

  // 初始化时从 localStorage 加载数据
  useEffect(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY)
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites)
        // 通过 dispatch 加载每条记录，确保类型安全
        parsedFavorites.forEach((item: Favorite) => {
          dispatch({ type: 'ADD', payload: item })
        })
      } catch (error) {
        console.error('Failed to load favorites:', error)
      }
    }
  }, [])

  // 当收藏夹改变时，保存到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error('Failed to save favorites:', error)
    }
  }, [favorites])

  // 获取排序后的收藏列表
  const getSortedFavorites = useCallback(() => {
    return [...favorites].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'createdAt':
          return b.createdAt - a.createdAt
        case 'lastUsed':
          return b.lastUsedAt - a.lastUsedAt
        case 'order':
          return a.order - b.order
        default:
          return 0
      }
    })
  }, [favorites, sortBy])

  // 添加收藏
  const addFavorite = useCallback((params: CreateFavoriteParams) => {
    if (favorites.length >= MAX_FAVORITES) {
      throw new Error('Maximum favorites limit reached')
    }
    dispatch({ type: 'ADD', payload: params })
  }, [favorites.length])

  // 删除收藏
  const removeFavorite = useCallback((id: string) => {
    dispatch({ type: 'REMOVE', payload: id })
  }, [])

  // 更新收藏
  const updateFavorite = useCallback((id: string, data: UpdateFavoriteParams) => {
    dispatch({ type: 'UPDATE', payload: { id, data } })
  }, [])

  // 重新排序
  const reorderFavorites = useCallback((updates: { id: string; order: number }[]) => {
    dispatch({ type: 'REORDER', payload: updates })
  }, [])

  // 清空收藏夹
  const clearFavorites = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  // 检查是否已收藏
  const isFavorited = useCallback((type: string, fromUnit: string, toUnit: string) => {
    return favorites.some(
      item => item.type === type && 
              item.fromUnit === fromUnit && 
              item.toUnit === toUnit
    )
  }, [favorites])

  return {
    favorites: getSortedFavorites(),
    sortBy,
    setSortBy,
    addFavorite,
    removeFavorite,
    updateFavorite,
    reorderFavorites,
    clearFavorites,
    isFavorited,
  } as const
} 
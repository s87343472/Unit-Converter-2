import { useReducer, useEffect } from 'react';
import type { ConversionHistory, HistoryAction, CreateHistoryParams } from '../types/history';

const STORAGE_KEY = 'unit_converter_history';
const MAX_HISTORY_ITEMS = 50;

// 历史记录 reducer
function historyReducer(state: ConversionHistory[], action: HistoryAction): ConversionHistory[] {
  switch (action.type) {
    case 'ADD':
      const newHistory = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      };
      return [newHistory, ...state].slice(0, MAX_HISTORY_ITEMS);
      
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload);
      
    case 'CLEAR':
      return [];
      
    default:
      return state;
  }
}

export function useConversionHistory() {
  const [history, dispatch] = useReducer(historyReducer, []);

  // 初始化时从 localStorage 加载数据
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      // 通过 dispatch 加载每条记录，确保类型安全
      parsedHistory.forEach((item: ConversionHistory) => {
        dispatch({ type: 'ADD', payload: item });
      });
    }
  }, []);

  // 当历史记录改变时，保存到 localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  // 添加新记录
  const addHistory = (params: CreateHistoryParams) => {
    dispatch({ type: 'ADD', payload: params });
  };

  // 删除记录
  const removeHistory = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  // 清空历史
  const clearHistory = () => {
    dispatch({ type: 'CLEAR' });
  };

  return {
    history,
    addHistory,
    removeHistory,
    clearHistory,
  } as const;
} 
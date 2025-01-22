/**
 * 收藏项的类型定义
 */
export interface Favorite {
  /** 唯一标识符 */
  id: string;

  /** 转换类型（例如：length, weight 等） */
  type: string;

  /** 源单位 */
  fromUnit: string;

  /** 目标单位 */
  toUnit: string;

  /** 显示名称 */
  name: string;

  /** 创建时间 */
  createdAt: number;

  /** 排序位置 */
  order: number;

  /** 最后使用时间 */
  lastUsedAt: number;
}

/**
 * 创建新收藏项时的参数类型
 */
export type CreateFavoriteParams = Omit<Favorite, 'id' | 'createdAt' | 'order' | 'lastUsedAt'>;

/**
 * 更新收藏项时的参数类型
 */
export type UpdateFavoriteParams = Partial<Omit<Favorite, 'id' | 'createdAt'>>;

/**
 * 收藏操作的类型
 */
export type FavoriteAction =
  | { type: 'ADD'; payload: CreateFavoriteParams }
  | { type: 'REMOVE'; payload: string }
  | { type: 'UPDATE'; payload: { id: string; data: UpdateFavoriteParams } }
  | { type: 'REORDER'; payload: { id: string; order: number }[] }
  | { type: 'CLEAR' };

/**
 * 收藏列表的排序方式
 */
export type FavoriteSortBy = 
  | 'name'      // 按名称排序
  | 'createdAt' // 按创建时间排序
  | 'lastUsed'  // 按最后使用时间排序
  | 'order';    // 按自定义顺序排序 
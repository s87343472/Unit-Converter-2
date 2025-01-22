/**
 * 转换历史记录的类型定义
 */
export interface ConversionHistory {
  /** 唯一标识符 */
  id: string;
  
  /** 转换类型（例如：length, weight, temperature 等） */
  type: string;
  
  /** 源单位 */
  fromUnit: string;
  
  /** 目标单位 */
  toUnit: string;
  
  /** 输入值 */
  inputValue: number;
  
  /** 转换结果 */
  result: number;
  
  /** 转换时间戳 */
  timestamp: number;
  
  /** 所使用的语言 */
  language: string;
}

/**
 * 创建新历史记录时的参数类型
 * 省略了会自动生成的字段（id 和 timestamp）
 */
export type CreateHistoryParams = Omit<ConversionHistory, 'id' | 'timestamp'>;

/**
 * 历史记录的操作类型
 */
export type HistoryAction = 
  | { type: 'ADD'; payload: CreateHistoryParams }
  | { type: 'REMOVE'; payload: string }
  | { type: 'CLEAR' }; 
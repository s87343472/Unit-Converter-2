export interface Unit {
  id: string
  symbol: string
  ratio: number
  category: 'metric' | 'imperial' | 'us' | 'chinese' | 'japanese' | 'korean' | 'scientific' | 'astronomical' | 'nautical' | 'medical' | 'industrial' | 'fiat' | 'crypto' | 'decimal' | 'binary'
} 
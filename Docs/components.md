# 组件文档

## 1. 核心组件

### 1.1 转换组件
```typescript
interface ConversionProps {
  type: string;
  from: string;
  to: string;
  value: number;
}

const Conversion: React.FC<ConversionProps> = ({
  type,
  from,
  to,
  value
}) => {
  // 组件实现
};
```

### 1.2 输入组件
```typescript
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  error
}) => {
  // 组件实现
};
```

### 1.3 选择器组件
```typescript
interface SelectorProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({
  options,
  value,
  onChange
}) => {
  // 组件实现
};
```

## 2. 布局组件

### 2.1 页面布局
```typescript
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  // 组件实现
};
```

### 2.2 卡片组件
```typescript
interface CardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  onClick
}) => {
  // 组件实现
};
```

## 3. 共享组件

### 3.1 语言切换器
```typescript
const LanguageSwitcher: React.FC = () => {
  // 组件实现
};
```

### 3.2 错误提示
```typescript
interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({
  message
}) => {
  // 组件实现
};
```

## 4. 组件规范

### 4.1 命名规范
- 使用 PascalCase 命名组件
- 使用 camelCase 命名属性
- 使用语义化的名称

### 4.2 类型规范
- 使用 TypeScript 接口定义 props
- 明确指定组件类型
- 避免使用 any

### 4.3 样式规范
- 使用 Tailwind CSS
- 保持样式一致性
- 支持响应式设计

## 5. 最佳实践

### 5.1 组件设计
- 单一职责
- 可复用性
- 可测试性

### 5.2 性能考虑
- 适当使用 memo
- 避免不必要的渲染
- 优化大型列表

### 5.3 错误处理
- 优雅降级
- 清晰的错误提示
- 用户友好的反馈

# 图标系统

## 设计规范

### 1. 基础规范

- 尺寸：统一使用 24x24 像素
- 风格：线性图标（stroke-based）
- 线条：2px 粗细
- 圆角：2px 圆角
- 颜色：使用 currentColor 实现颜色继承

### 2. 组件接口

```typescript
interface IconProps {
  className?: string  // 支持自定义样式
}
```

### 3. 使用示例

```tsx
import { IconLength } from '@/components/icons'

function MyComponent() {
  return (
    <IconLength className="w-8 h-8 text-blue-500" />
  )
}
```

### 4. 可用图标

#### 基础单位
- IconLength：长度单位
- IconArea：面积单位
- IconVolume：体积单位
- IconWeight：质量单位

#### 时间相关
- IconTime：时间单位
- IconSpeed：速度单位
- IconAngle：角度单位

#### 物理单位
- IconPressure：压力单位
- IconPower：功率单位
- IconEnergy：能量单位
- IconForce：力单位
- IconDensity：密度单位
- IconFlow：流量单位
- IconTorque：扭矩单位

#### 数据单位
- IconData：数据存储
- IconDataRate：数据传输速率

#### 其他单位
- IconCurrency：货币单位
- IconCooking：烹饪单位
- IconNumeral：进制转换

### 5. 设计原则

1. **一致性**
   - 保持统一的视觉风格
   - 统一的线条粗细
   - 一致的间距和留白

2. **简洁性**
   - 使用最少的路径
   - 避免复杂的形状
   - 保持图标清晰可识别

3. **可扩展性**
   - 支持自定义颜色
   - 支持自定义尺寸
   - 支持动画和交互

4. **可访问性**
   - 足够的对比度
   - 清晰的视觉层次
   - 适当的点击区域

### 6. 最佳实践

1. **使用建议**
   ```tsx
   // 推荐：使用 className 控制大小和颜色
   <IconLength className="w-6 h-6 text-blue-500" />

   // 不推荐：直接写入样式
   <IconLength style={{ width: '24px', color: 'blue' }} />
   ```

2. **响应式设计**
   ```tsx
   // 在不同屏幕尺寸使用不同大小
   <IconLength className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
   ```

3. **交互状态**
   ```tsx
   // 使用 group 实现悬停效果
   <div className="group">
     <IconLength className="text-gray-500 group-hover:text-blue-500" />
   </div>
   ```

### 7. 性能优化

1. **加载优化**
   - 使用 SVG 而不是位图
   - 最小化路径数据
   - 移除不必要的属性

2. **渲染优化**
   - 避免不必要的重渲染
   - 使用 memo 包装图标组件
   - 优化动画性能

### 8. 维护指南

1. **添加新图标**
   - 遵循现有的设计规范
   - 保持文件结构一致
   - 更新文档和类型定义

2. **更新现有图标**
   - 保持向后兼容
   - 记录重大更改
   - 更新相关文档

3. **测试要求**
   - 添加单元测试
   - 验证响应式行为
   - 测试可访问性

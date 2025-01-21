3. components.md

# 组件开发文档

## 1. 组件概述

本项目采用组件化开发方式，将 UI 和功能划分为独立、可重用的组件。组件开发遵循以下原则：

*   单一职责：每个组件只负责一项具体的功能。
*   可重用性：组件可以在不同的页面或项目中复用。
*   可测试性：每个组件都有完善的单元测试。
*   TypeScript 类型支持：所有组件都使用 TypeScript 开发，并提供类型定义。
*   响应式设计：组件能够适配不同的屏幕尺寸。

## 2. 组件分类

### 2.1 布局组件

#### RootLayout

*   **状态:** 已完成
*   **描述:** 根布局组件，处理全局布局和设置
*   **职责:**
    *   处理语言设置, 使用 `LanguageProvider` 包裹整个应用
    *   加载全局样式
    *   提供主题支持
    *   管理全局状态 (例如：当前语言、主题、用户收藏和历史记录等)
*   **文件路径:** `app/[lang]/layout.tsx`

#### CategoryLayout

*   **状态:** 已完成
*   **描述:** 类别页面布局组件
*   **职责:**
    *   处理类别级别的元数据
    *   提供类别级别的导航
    *   管理类别相关状态
*   **文件路径:** `app/[lang]/[category]/layout.tsx`

### 2.2 导航组件

#### Breadcrumb

*   **状态:** 已完成
*   **描述:** 面包屑导航组件
*   **职责:**
    *   显示当前页面位置
    *   支持多语言路径
    *   提供导航功能
*   **文件路径:** `components/navigation/Breadcrumb.tsx`
*   **Props:**
    *   `params`:  `{ lang: string; category?: string; conversion?: string }` - 用于生成面包屑导航的路径参数
*   **示例:**

    ```tsx
    <Breadcrumb params={{ lang: 'en', category: 'length', conversion: 'm-to-cm' }} />
    ```

#### LanguageSwitcher

*   **状态:** 开发中
*   **描述:** 语言切换器组件
*   **职责:**
    *   切换界面语言 (例如：中文、英文)
    *   保持当前页面路径
    *   提供切换动画效果 (可选)
*   **文件路径:** `components/navigation/LanguageSwitcher.tsx`
*   **Props:** 无
*   **示例:**

    ```tsx
    <LanguageSwitcher />
    ```
*   **实现思路:**
    *   使用 `useTranslation` Hook 获取当前语言和 `setLanguage` 函数。
    *   使用 `useRouter` 和 `usePathname` Hook 获取当前路由信息，并在切换语言时更新 URL。

#### CategoryNav

*   **状态:** 开发中
*   **描述:** 类别导航菜单
*   **职责:**
    *   显示所有转换类别 (例如：长度、重量、温度等)
    *   支持子类别展示 (例如：长度 -> 米、厘米、英寸等)
    *   响应式设计适配 (例如：在小屏幕上隐藏，通过菜单按钮触发)
*   **文件路径:** `components/navigation/CategoryNav.tsx`
*   **Props:**
    *   `categories`: `string[]` - 类别列表
*   **示例:**

    ```tsx
    <CategoryNav categories={['length', 'weight', 'temperature']} />
    ```

### 2.3 转换组件

#### UnitInput

*   **状态:** 已完成
*   **描述:** 单位输入框组件
*   **职责:**
    *   数值输入和验证 (例如：只允许输入数字和小数点)
    *   单位显示和选择 (例如：在输入框后面显示单位)
    *   格式化显示结果 (例如：保留指定位数的小数)
*   **文件路径:** `components/shared/UnitInput.tsx`
*   **Props:**
    *   `value`: `number` - 输入的数值
    *   `unit`: `string` - 单位
    *   `onChange`: `(value: number) => void` - 数值变化时的回调函数
    *   `onUnitChange`: `(unit: string) => void` - 单位变化时的回调函数
    *   `type`: `string` - 转换类型，例如：`length`, `weight` 等，用于决定可选的单位列表。
*   **示例:**

    ```tsx
    <UnitInput value={10} unit="kg" onChange={(v) => console.log(v)} onUnitChange={(u) => console.log(u)} type="weight" />
    ```

#### ConversionInfo

*   **状态:** 已完成
*   **描述:** 转换信息展示组件
*   **职责:**
    *   显示转换公式 (例如：`1 kg = 2.20462 lb`)
    *   提供使用说明 (可选)
    *   展示应用场景 (可选)
*   **文件路径:** `components/conversion/ConversionInfo.tsx`
*   **Props:**
    *   `fromUnit`: `string` - 转换前的单位
    *   `toUnit`: `string` - 转换后的单位
    *   `formula`: `string` - 转换公式
    *   `info`: `string` - 转换说明 (可选)
    *   `examples`: `string[]` - 应用场景示例 (可选)
*   **示例:**

    ```tsx
    <ConversionInfo fromUnit="kg" toUnit="lb" formula="1 kg = 2.20462 lb" info="公斤到磅的转换" examples={['商品称重', '健身']} />
    ```

#### UnitSelector

*   **状态:** 开发中
*   **描述:** 单位选择器组件
*   **职责:**
    *   单位列表展示 (例如：以列表或下拉菜单的形式展示所有支持的单位)
    *   搜索和筛选功能 (例如：允许用户输入关键词搜索单位)
    *   分组显示单位 (例如：将单位按照类型分组，例如长度、重量、温度等)
*   **文件路径:** `components/shared/UnitSelector.tsx`
*   **Props:**
    *   `type`: `string` - 转换类型，例如：`length`, `weight` 等，用于决定可选的单位列表。
    *   `onSelect`: `(unit: string) => void` - 单位选择时的回调函数
    *   `selectedUnit`: `string` - 当前选中的单位
*   **示例:**

    ```tsx
    <UnitSelector type="length" onSelect={(u) => console.log(u)} selectedUnit="m" />
    ```

#### ConversionHistory

*   **状态:** 待开发
*   **描述:** 转换历史记录组件
*   **职责:**
    *   记录用户的转换历史
    *   本地存储支持 (例如：使用 localStorage 存储用户的转换历史)
    *   快速重用历史记录 (例如：允许用户点击历史记录，快速进行相同的转换)
*   **文件路径:** `components/conversion/ConversionHistory

OK，继续完善 `components.md` 文档。

---

#### ConversionHistory (续)

*   **文件路径:** `components/conversion/ConversionHistory.tsx`
*   **Props:**
    *   `history`: `{ type: string; from: string; to: string, value: number, result: number }[]` - 历史记录数组
    *   `onSelect`: `(item: { type: string; from: string; to: string, value: number, result: number }) => void` - 选择历史记录时的回调函数
*   **示例:**

    ```tsx
    <ConversionHistory history={[{ type: 'length', from: 'm', to: 'cm', value: 1, result: 100 }]} onSelect={(item) => console.log(item)} />
    ```

#### QuickConvert

*   **状态:** 开发中
*   **描述:** 快速转换工具组件
*   **职责:**
    *   常用单位组合 (例如：将常用的单位组合预设在组件中，方便用户快速选择)
    *   收藏功能 (例如：允许用户收藏常用的单位组合)
    *   快捷跳转功能
*   **文件路径:** `components/shared/QuickConvert.tsx`
*   **Props:**
    *   `favorites`: `string[]` - 用户收藏的转换类型列表
    *   `onSelect`: `(conversion: string) => void` - 选择转换类型时的回调函数
*   **示例:**

    ```tsx
    <QuickConvert favorites={['m-to-cm', 'kg-to-lb']} onSelect={(c) => console.log(c)} />
    ```

#### UnitConverter

*   **状态:** 开发中
*   **描述:** 通用单位转换组件
*   **职责:**
    *   支持所有单位类型的转换
    *   响应式设计
    *   错误处理机制
*   **文件路径:** `components/shared/UnitConverter.tsx`
*   **Props:**
    *   `type`: `string` - 转换类型，例如：`length`, `weight` 等。
*   **示例:**

    ```tsx
    <UnitConverter type="length" />
    ```

### 2.4 功能组件

#### NumberKeypad

*   **状态:** 待开发
*   **描述:** 数字键盘组件
*   **职责:**
    *   数字输入界面 (例如：提供一个虚拟键盘，方便用户在移动设备上输入数字)
    *   移动端支持
    *   特殊字符输入 (例如：小数点、负号等)
*   **文件路径:** `components/shared/NumberKeypad.tsx`
*   **Props:**
    *   `onInput`: `(value: string) => void` - 输入数值时的回调函数
*   **示例:**

    ```tsx
    <NumberKeypad onInput={(v) => console.log(v)} />
    ```

#### CopyButton

*   **状态:** 待开发
*   **描述:** 复制结果按钮组件
*   **职责:**
    *   复制转换结果 (例如：将转换结果复制到剪贴板)
    *   显示复制成功提示 (例如：显示一个提示信息，告诉用户复制成功)
    *   支持格式化复制 (例如：可以选择复制带单位的结果或纯数字)
*   **文件路径:** `components/shared/CopyButton.tsx`
*   **Props:**
    *   `text`: `string` - 要复制的文本内容
*   **示例:**

    ```tsx
    <CopyButton text="100 cm" />
    ```

#### ShareButton

*   **状态:** 待开发
*   **描述:** 分享功能组件
*   **职责:**
    *   分享转换结果 (例如：将转换结果分享到社交媒体)
    *   社交媒体集成 (例如：支持分享到微信、微博、Twitter 等)
    *   生成分享链接 (例如：生成一个包含转换结果的链接，方便用户分享)
*   **文件路径:** `components/shared/ShareButton.tsx`
*   **Props:**
    *   `url`: `string` - 要分享的 URL
    *   `text`: `string` - 要分享的文本内容
*   **示例:**

    ```tsx
    <ShareButton url="https://www.metricconverter.com/zh/length/m-to-cm?value=100" text="100 米 = 10000 厘米" />
    ```

### 2.5 展示组件

#### CategoryCard

*   **状态:** 待开发
*   **描述:** 类别展示卡片组件
*   **职责:**
    *   展示类别信息 (例如：类别的名称、图标、描述等)
    *   提供图标和描述
    *   添加动画效果 (可选)
*   **文件路径:** `components/display/CategoryCard.tsx`
*   **Props:**
    *   `category`: `string` - 类别名称
    *   `icon`: `string` - 类别图标 (可选)
    *   `description`: `string` - 类别描述 (可选)
*   **示例:**

    ```tsx
    <CategoryCard category="length" icon="/icons/length.svg" description="长度单位转换" />
    ```

#### ConversionCard

*   **状态:** 待开发
*   **描述:** 转换选项卡片组件
*   **职责:**
    *   显示转换选项 (例如：米 到 厘米、千克 到 磅等)
    *   提供预览功能 (例如：鼠标悬停时，显示转换结果的预览)
    *   展示使用频率 (例如：根据用户的使用历史，显示每个转换选项的使用频率)
*   **文件路径:** `components/display/ConversionCard.tsx`
*   **Props:**
    *   `fromUnit`: `string` - 转换前的单位
    *   `toUnit`: `string` - 转换后的单位
    *   `frequency`: `number` - 使用频率 (可选)
*   **示例:**

    ```tsx
    <ConversionCard fromUnit="m" toUnit="cm" frequency={10} />
    ```

#### FormulaDisplay

*   **状态:** 待开发
*   **描述:** 公式展示组件
*   **职责:**
    *   展示数学公式 (例如：使用 LaTeX 或 MathML 格式展示数学公式)
    *   支持 LaTeX 格式
    *   提供动态演示 (可选)
*   **文件路径:** `components/display/FormulaDisplay.tsx`
*   **Props:**
    *   `formula`: `string` - LaTeX 格式的公式
*   **示例:**

    ```tsx
    <FormulaDisplay formula="\frac{{1}}{{n}} \sum_{i=1}^{n} x_i" />
    ```

### 2.6 反馈组件

#### ErrorBoundary

*   **状态:** 待开发
*   **描述:** 错误边界处理组件
*   **职责:**
    *   捕获渲染错误 (例如：捕获子组件渲染过程中发生的错误)
    *   显示友好提示 (例如：显示一个错误提示信息，告诉用户发生了错误)
    *   提供错误恢复 (可选) (例如：提供一个按钮，允许用户尝试重新渲染)
*   **文件路径:** `components/feedback/ErrorBoundary.tsx`
*   **Props:**
    *   `fallback`: `ReactNode` - 发生错误时显示的备用 UI
*   **示例:**

    ```tsx
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <MyComponent />
    </ErrorBoundary>
    ```

#### LoadingSpinner

*   **状态:** 待开发
*   **描述:** 加载动画组件
*   **职责:**
    *   显示加载状态 (例如：在数据加载过程中，显示一个加载动画)
    *   提供进度指示 (可选) (例如：显示一个进度条，指示当前的加载进度)
    *   支持骨架屏 (可选) (例如：在数据加载过程中，显示一个骨架屏，模拟页面的结构)
*   **文件路径:** `components/feedback/LoadingSpinner.tsx`
*   **Props:**
    *   `isLoading`: `boolean` - 是否正在加载
    *   `progress`: `number` - 加载进度 (可选)
*   **示例:**

    ```tsx
    <LoadingSpinner isLoading={true} />
    ```

#### Notification

*   **状态:** 待开发
*   **描述:** 通知提示组件
*   **职责:**
    *   显示操作反馈 (例如：操作成功或失败的提示信息)
    *   支持多种类型 (例如：成功、错误、警告、信息等)
    *   自动消失功能 (例如：提示信息在显示一段时间后自动消失)
*   **文件路径:** `components/feedback/Notification.tsx`
*   **Props:**
    *   `type`: `'success' | 'error' | 'warning' | 'info'` - 通知类型
    *   `message`: `string` - 通知内容
    *   `duration`: `number` - 持续时间 (毫秒，可选)
*   **示例:**

    ```tsx
    <Notification type="success" message="操作成功！" duration={3000} />
    ```

### 2.7 共享组件

#### LanguageProvider

*   **状态:** 开发中
*   **描述:** 语言环境提供组件
*   **职责:**
    *   提供当前语言环境
    *   加载语言文件
    *   提供翻译函数 (`t`)
*   **文件路径:** `components/shared/LanguageProvider.tsx`
*   **Props:**
    *   `children`: `ReactNode`
    *   `initialLanguage`: `string`
*   **示例:**

    ```tsx
    <LanguageProvider initialLanguage="en">
      <App />
    </LanguageProvider>
    ```

## 3. 开发优先级

### 3.1 第一阶段（核心功能）

*   [x] Breadcrumb
*   [x] UnitInput
*   [x] ConversionInfo
*   [ ] LanguageSwitcher
*   [ ] UnitSelector
*   [ ] CategoryNav
*   [ ] UnitConverter
*   [ ] QuickAccess
*   [ ] LanguageProvider

### 3.2 第二阶段（功能增强）

*   [ ] NumberKeypad
*   [ ] CopyButton
*   [ ] ConversionHistory
*   [ ] CategoryCard
*   [ ] ConversionCard
*   [ ] ErrorBoundary

### 3.3 第三阶段（体验优化）

*   [ ] ShareButton
*   [ ] FormulaDisplay
*   [ ] LoadingSpinner
*   [ ] Notification

## 4. 开发规范

### 4.1 命名规范

*   组件名：PascalCase (例如：`MyComponent`)
*   文件名：与组件名一致 (例如：`MyComponent.tsx`)
*   样式文件：组件名.module.css (例如：`MyComponent.module.css`)
*   Props 接口：组件名 Props (例如：`MyComponentProps`)
*   测试文件：组件名.test.tsx (例如：`MyComponent.test.tsx`)

### 4.2 目录结构

```
components/
  ├── layout/           # 布局组件
  │   ├── RootLayout/
  │   │   ├── index.tsx
  │   │   ├── RootLayout.module.css
  │   │   └── README.md
  │   └── CategoryLayout/
  │       ├── index.tsx
  │       ├── CategoryLayout.module.css
  │       └── README.md
  ├── navigation/       # 导航组件
  │   ├── Breadcrumb/
  │   │   ├── index.tsx
  │   │   ├── Breadcrumb.module.css
  │   │   └── README.md
  │   └── ...
  ├── conversion/       # 转换相关组件
  │   ├── UnitInput/
  │   │   ├── index.tsx
  │   │   ├── UnitInput.module.css
  │   │   └── README.md
  │   └── ...
  ├── display/         # 展示组件
  │   └── ...
  ├── feedback/        # 反馈组件
  │   └── ...
  └── shared/          # 共享组件
      ├── LanguageProvider/
      │   ├── index.tsx
      │   └── README.md
      ├── UnitConverter/
      │   ├── index.tsx
      │   ├── UnitConverter.module.css
      │   └── README.md
      └── ...
```

### 4.3 组件文档规范

每个组件都需要包含：

*   README.md 文件，包含以下内容：
    *   组件描述
    *   Props 类型定义
    *   使用示例
    *   注意事项 (可选)
*   组件的 Props 需要有详细的注释说明。
*   复杂的组件需要提供 Demo 示例。

### 4.4 测试规范

*   单元测试覆盖率 > 80%
*   包含快照测试
*   包含交互测试
*   测试边界条件

## 5. 状态管理

### 5.1 局部状态

*   使用 `useState` 和 `useReducer` 管理组件内部的状态。
*   遵循状态提升原则，将需要共享的状态提升到父组件中。
*   避免状态重复，例如，不要在父组件和子组件中同时维护同一个状态。

### 5.2 全局状态

*   使用 Context API 管理全局状态，例如：当前语言、主题、用户收藏和历史记录等。
*   按功能模块划分 Context，例如：`LanguageContext`、`ThemeContext`、`FavoritesContext` 等。
*   提供 TypeScript 类型支持，例如：定义 `AppState` 接口和 `AppAction` 类型。

## 6. 性能优化

### 6.1 渲染优化

*   使用 `React.memo` 避免不必要的组件重新渲染。
*   使用 `useMemo` 和 `useCallback` 缓存计算结果和回调函数。
*   实现虚拟列表 (例如：使用 `react-virtualized` 或 `react-window`)，优化长列表的渲染性能。
*   优化重渲染：使用 React Profiler 分析性能瓶颈，并进行针对性的优化。

### 6.2 加载优化

*   组件懒加载：使用 `React.lazy` 和 `Suspense` 实现组件的懒加载。
*   代码分割：使用 `React.lazy` 和 `Suspense`，以及 Webpack 的代码分割功能，将代码分割成多个 chunk，按需加载。
*   预加载关键组件：使用 `<link rel="preload">` 预加载关键的组件或资源。

---

OK，`components.md` 文档已更新完毕。接下来，我将更新 `optimization_plan.md`，`test-guidelines.md` 和 `seo.md`，将多语言相关的部分补充进去。

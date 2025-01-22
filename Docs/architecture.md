# 系统架构文档

## 1. 目录结构

```
Unit-Converter/
├── app/                    # Next.js 应用主目录
│   ├── [lang]/            # 多语言支持 (en, zh)
│   │   ├── page.tsx       # 首页
│   │   └── layout.tsx     # 根布局
├── components/            # 组件目录
│   ├── layout/           # 布局组件
│   ├── conversion/       # 转换组件
│   └── shared/          # 共享组件
├── lib/                # 工具函数
│   └── conversion/       # 单位转换逻辑
├── types/              # TypeScript 类型
└── docs/               # 文档目录
```

## 2. 核心功能

### 2.1 单位转换
- 使用基准单位作为中间转换
- 保持高精度计算
- 处理边界情况

### 2.2 多语言支持
- 使用简单的语言切换机制
- 支持中英文
- 基于 URL 的语言路由

### 2.3 用户界面
- 响应式设计
- 清晰的转换流程
- 直观的结果展示

## 3. 技术选型

### 3.1 框架
- Next.js
- React
- TypeScript
- Tailwind CSS

### 3.2 开发工具
- ESLint
- Prettier
- Jest

## 4. 性能考虑

### 4.1 基本优化
- 组件代码分割
- 图片优化
- 缓存策略

### 4.2 加载性能
- 首屏加载优化
- 资源懒加载
- 预加载关键资源

## 5. 部署策略

### 5.1 构建过程
- 静态页面生成
- 资源压缩
- 环境配置

### 5.2 监控
- 错误监控
- 性能监控
- 用户行为分析

## 6. 路由结构

### 6.1 多语言路由

*   `/[lang]` - 语言选择（如：/en, /zh）
*   `/[lang]/[category]` - 转换类别（如：/zh/length, /en/length）
*   `/[lang]/[category]/[conversion]` - 具体转换页面（如：/zh/length/m-to-cm）

### 6.2 API 路由

*   `/api/convert` - 转换计算 API
    *   功能：执行单位转换计算
    *   请求方法：POST
    *   请求参数：
        ```
        fromUnit: string (例如: "kg")
        toUnit: string (例如: "lb")
        value: number (例如: 10)
        type: string (例如: "weight", "length", "temperature"等，用于标识转换类型)
        ```
    *   响应数据：
        ```json
        {
            "result": 22.0462,
            "unit": "lb"
        }
        ```
    *   错误码：
        *   400 Bad Request: 参数错误，例如：

            ```json
            {
                "error": "Invalid unit type",
                "message": "Unit type must be one of: weight, length, temperature, area, volume, speed, pressure, energy"
            }
            ```

            ```json
            {
                "error": "Invalid input value",
                "message": "Input value must be a number"
            }
            ```

            ```json
            {
                "error": "Invalid unit",
                "message": "Invalid 'fromUnit' or 'toUnit' provided"
            }
            ```
        *   500 Internal Server Error: 服务器内部错误

## 7. 布局系统

### 7.1 根布局 (RootLayout)

```tsx
// app/[lang]/layout.tsx
import LanguageProvider from '../../components/shared/LanguageProvider';

export default function RootLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={lang}>
            <body>
                <LanguageProvider initialLanguage={lang}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
```

### 7.2 类别布局 (CategoryLayout)

```tsx
// app/[lang]/[category]/layout.tsx
export default function CategoryLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { lang: string; category: string }
}) {
    return (
        <div className="container mx-auto px-4">
            <CategoryNav category={params.category} />
            {children}
        </div>
    )
}
```

### 7.3 转换页面布局

```tsx
// app/[lang]/[category]/[conversion]/layout.tsx
export default function ConversionLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { lang: string; category: string; conversion: string }
}) {
    return (
        <div className="conversion-layout">
            <Breadcrumb params={params} />
            {children}
            <RelatedConversions category={params.category} />
        </div>
    )
}
```

## 8. 状态管理

### 8.1 客户端状态

*   使用 React 状态钩子管理局部状态
*   使用 Context API 管理全局状态, 使用 localStorage 持久化用户偏好
*   定义全局状态接口

```typescript
interface AppState {
    language: string; // 当前语言
    theme: string;    // 当前主题
    favorites: string[]; // 用户收藏的转换类型
    history: { type: string; from: string; to: string, value: number, result: number }[]; // 用户转换历史记录
    // ... 其他全局状态
}

// 定义更新全局状态的 Action
type AppAction =
    | { type: 'SET_LANGUAGE'; payload: string }
    | { type: 'SET_THEME'; payload: string }
    | { type: 'ADD_FAVORITE'; payload: string }
    | { type: 'REMOVE_FAVORITE'; payload: string }
    | { type: 'ADD_HISTORY', payload: { type: string; from: string; to: string, value: number, result: number } }
    | { type: 'CLEAR_HISTORY' }
// ... 其他 Action

// 使用 useReducer 管理全局状态
const initialState: AppState = {
    language: 'en',
    theme: 'light',
    favorites: [],
    history: []
}

function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'SET_LANGUAGE':
            // 同时更新 localStorage
            localStorage.setItem('language', action.payload);
            return { ...state, language: action.payload };
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(f => f !== action.payload) };
        case 'ADD_HISTORY':
            return { ...state, history: [...state.history, action.payload] };
        case 'CLEAR_HISTORY':
            return { ...state, history: [] };
        default:
            return state;
    }
}
```

### 8.2 服务器状态

*   使用 Next.js 服务器组件
*   实现数据预取和缓存
*   处理服务器端渲染

## 9. 性能优化

### 9.1 静态生成

*   使用 `generateStaticParams` 预生成路由
*   实现增量静态再生成 (ISR)
*   优化元数据生成

### 9.2 动态导入

*   组件懒加载
*   路由分组
*   选择性预渲染

### 9.3 缓存策略

*   使用 SWR 进行数据缓存
*   实现 HTTP 缓存
*   优化静态资源缓存

## 10. 安全措施

### 10.1 输入验证

*   客户端输入验证: 使用正则表达式验证输入格式，例如数字、单位等。
*   服务器端数据验证: 在 API 路由中，对传入的参数进行类型和格式校验。
*   XSS 防护: 对用户输入进行转义，防止 XSS 攻击。

### 10.2 API 安全

*   请求限流: 使用 `apiRequestLimiter` 中间件限制 API 请求频率。
*   CORS 配置: 允许特定的域名 (例如 `*.vercel.app`) 访问 API。

    ```js
    // 在 `next.config.js` 中配置 CORS
    module.exports = {
        async headers() {
            return [
                {
                    source: '/api/:path*',
                    headers: [
                        { key: 'Access-Control-Allow-Credentials', value: 'true' },
                        { key: 'Access-Control-Allow-Origin', value: '*.vercel.app' },
                        { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                        { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
                    ],
                },
            ]
        },
    }
    ```
*   错误处理: 捕获异常并返回友好的错误信息，避免暴露敏感信息。

## 11. 监控和日志

### 11.1 性能监控

*   页面加载性能
*   API 响应时间
*   资源使用情况

### 11.2 错误跟踪

*   客户端错误捕获: 使用 `ErrorBoundary` 组件捕获渲染错误。
*   服务器端日志: 记录 API 请求日志和错误日志。
*   用户行为分析: 使用 Google Analytics 等工具分析用户行为。

## 12. 部署流程

### 12.1 构建过程

*   代码检查: 使用 ESLint 检查代码风格。
*   类型检查: 使用 TypeScript 检查类型错误。
*   单元测试: 使用 Jest 进行单元测试。
*   构建优化: 使用 Next.js 优化构建产物。

### 12.2 部署环境

*   开发环境: 本地开发环境。
*   测试环境: Vercel 预览部署 (Preview Deployments)。
*   生产环境: Vercel 生产部署 (Production Deployments)。

### 12.3 CI/CD

*   自动化测试: 每次提交代码到 GitHub 仓库时，自动运行单元测试。
*   自动化部署:
    *   测试环境: 每次提交代码到 `dev` 分支时，自动部署到 Vercel 测试环境。
    *   生产环境: 每次将代码合并到 `main` 分支并打上 `tag` 时，自动部署到 Vercel 生产环境。
*   版本控制: 使用 Git 进行版本控制，`dev` 分支用于开发，`main` 分支用于发布，使用 `tag` 标记版本。

## 13. 多语言支持

### 13.1 架构设计

*   使用 Next.js 的国际化 (i18n) 路由功能实现多语言支持。
*   采用 **subpath routing** 策略，即在 URL 路径中添加语言代码来区分不同语言版本的页面 (例如：`example.com/en/about`, `example.com/zh/about`)。
*   支持的语言：英语 (en)、中文 (zh)。
*   默认语言：英语 (en)。

### 13.2 目录结构

```
app/
    [lang]/            # 动态路由，例如：/en, /zh
        page.tsx       # 首页 (例如：/en, /zh)
        layout.tsx     # 根布局 (例如：/en, /zh)
        [category]/    # 类别页面 (例如：/en/length, /zh/length)
            page.tsx
            layout.tsx
            [conversion]/ # 具体转换页面 (例如：/en/length/m-to-cm, /zh/length/m-to-cm)
                page.tsx
                layout.tsx
public/
    locales/           # 语言文件
        en/            # 英文
            common.json # 通用文本，例如：网站标题、导航栏等
            home.json   # 首页文本
            length.json # 长度转换页面文本
            ...         # 其他页面的文本
        zh/            # 中文
            common.json
            home.json
            length.json
            ...
```

### 13.3 `LanguageProvider` 组件

```typescript
// components/shared/LanguageProvider.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, namespace?: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage: string;
}

export default function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const common = await import(`../../public/locales/${language}/common.json`);
        setTranslations((prev) => ({
          ...prev,
          common: common.default
        }));
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string, namespace: string = 'common') => {
    return translations[namespace]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### 13.4 `useTranslation` Hook

```typescript
// components/shared/useTranslation.ts
// (已在 LanguageProvider.tsx 中实现)
```

### 13.5 使用示例

```tsx
// components/navigation/LanguageSwitcher.tsx
'use client'
import { useTranslation } from '../../components/shared/LanguageProvider';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // 更新 URL 中的语言代码
    const newPath = pathname.replace(/^\/(en|zh)/, `/${newLanguage}`);
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('zh')}>中文</button>
    </div>
  );
}
```

```tsx
// components/layout/Header.tsx
import { useTranslation } from '../shared/LanguageProvider';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1>{t('header.title')}</h1> {/* 使用 t 函数获取翻译后的文本 */}
    </header>
  );
}
```

```tsx
// app/[lang]/layout.tsx
import LanguageProvider from '../../components/shared/LanguageProvider';
import { usePathname } from 'next/navigation';

export default function RootLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={lang}>
            <body>
                <LanguageProvider initialLanguage={lang}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
```

### 13.6 多语言 SEO

*   在 `generateMetadata`
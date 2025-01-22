# SEO 优化指南

## 1. 基础优化

### 1.1 元标签优化
- 标题标签（title）
- 描述标签（description）
- 关键词标签（keywords）

### 1.2 URL 结构
- 简洁的 URL 路径
- 语义化的 URL
- 多语言 URL 处理

### 1.3 内容结构
- 合理的标题层级
- 语义化的 HTML
- 清晰的内容组织

## 2. 技术优化

### 2.1 性能优化
- 页面加载速度
- 移动端适配
- Core Web Vitals

### 2.2 多语言支持
- 语言标签（lang）
- 备用语言链接
- 语言切换处理

### 2.3 图像优化
- 图像压缩
- 响应式图片
- 图像 alt 文本

## 3. 内容优化

### 3.1 关键词优化
- 标题关键词
- 内容关键词
- 长尾关键词

### 3.2 内容质量
- 原创内容
- 内容更新
- 用户价值

### 3.3 用户体验
- 清晰的导航
- 响应式设计
- 易用性优化

## 4. 监控分析

### 4.1 性能监控
- 加载时间
- 渲染时间
- 用户交互时间

### 4.2 用户行为
- 访问量
- 停留时间
- 跳出率

### 4.3 搜索表现
- 排名变化
- 点击率
- 展现量

## 5. 实施计划

### 5.1 基础设施
- [ ] 配置元标签
- [ ] 优化 URL 结构
- [ ] 实现多语言支持

### 5.2 性能改进
- [ ] 优化加载速度
- [ ] 提升移动体验
- [ ] 改进核心指标

### 5.3 内容优化
- [ ] 优化页面内容
- [ ] 完善关键词
- [ ] 提升用户体验

## 6. 最佳实践

### 6.1 页面优化
```html
<!-- 元标签示例 -->
<head>
  <title>单位转换器 - 在线单位换算工具</title>
  <meta name="description" content="免费在线单位转换器，支持长度、重量、温度等多种单位换算，简单易用。" />
  <meta name="keywords" content="单位转换,单位换算,在线工具" />
  <link rel="alternate" hreflang="en" href="https://example.com/en" />
  <link rel="alternate" hreflang="zh" href="https://example.com/zh" />
</head>

<!-- 语义化结构示例 -->
<main>
  <h1>单位转换器</h1>
  <section>
    <h2>长度转换</h2>
    <article>
      <h3>米到厘米转换</h3>
      <!-- 转换内容 -->
    </article>
  </section>
</main>
```

### 6.2 性能优化
```typescript
// 图片优化示例
const Image = ({ src, alt, sizes }) => (
  <picture>
    <source
      media="(min-width: 768px)"
      srcSet={`${src}-large.webp`}
      type="image/webp"
    />
    <source
      media="(min-width: 768px)"
      srcSet={`${src}-large.jpg`}
      type="image/jpeg"
    />
    <img
      src={`${src}-small.jpg`}
      alt={alt}
      loading="lazy"
      sizes={sizes}
    />
  </picture>
)
```

### 6.3 多语言支持
```typescript
// 语言切换示例
const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage()
  const { pathname } = useRouter()

  return (
    <nav>
      <Link
        href={`/en${pathname}`}
        hrefLang="en"
        lang="en"
      >
        English
      </Link>
      <Link
        href={`/zh${pathname}`}
        hrefLang="zh"
        lang="zh"
      >
        中文
      </Link>
    </nav>
  )
}
```

## 7. 单位转换页面 SEO 优化

### 7.1 页面元数据

#### 7.1.1 基础元标签
```html
<!-- 基本元标签 -->
<head>
  <!-- 动态标题 -->
  <title>{unitType} 单位转换 - 在线{unitType}换算工具 | Unit Converter</title>
  
  <!-- 描述标签 -->
  <meta name="description" content="免费在线{unitType}单位转换器，支持{fromUnit}到{toUnit}等多种单位换算，精确计算，简单易用。提供实时转换、科学计数法支持和详细的单位说明。" />
  
  <!-- 关键词标签 -->
  <meta name="keywords" content="{unitType}转换,{fromUnit},{toUnit},单位换算,在线工具" />
  
  <!-- 规范链接 -->
  <link rel="canonical" href="https://example.com/{lang}/{unitType}/{fromUnit}-to-{toUnit}" />
</head>
```

#### 7.1.2 多语言支持
```html
<!-- 多语言支持 -->
<head>
  <!-- 语言标签 -->
  <meta property="og:locale" content="{lang}" />
  
  <!-- 备用语言链接 -->
  <link rel="alternate" hreflang="en" href="https://example.com/en/{unitType}/{fromUnit}-to-{toUnit}" />
  <link rel="alternate" hreflang="zh" href="https://example.com/zh/{unitType}/{fromUnit}-to-{toUnit}" />
  <link rel="alternate" hreflang="x-default" href="https://example.com/en/{unitType}/{fromUnit}-to-{toUnit}" />
</head>
```

### 7.2 内容结构优化

#### 7.2.1 语义化标记
```html
<main>
  <!-- 主标题 -->
  <h1>{fromUnit}到{toUnit}转换器</h1>
  
  <!-- 转换说明 -->
  <section aria-label="转换说明">
    <h2>如何使用{unitType}转换器</h2>
    <p>输入需要转换的{fromUnit}值，系统会自动将其转换为{toUnit}。支持科学计数法和高精度计算。</p>
  </section>
  
  <!-- 转换工具 -->
  <section aria-label="转换工具">
    <h2>在线转换工具</h2>
    <div role="form" aria-label="单位转换表单">
      <!-- 转换表单内容 -->
    </div>
  </section>
  
  <!-- 单位说明 -->
  <section aria-label="单位说明">
    <h2>{unitType}单位说明</h2>
    <article>
      <h3>{fromUnit}说明</h3>
      <p>{fromUnitDescription}</p>
    </article>
    <article>
      <h3>{toUnit}说明</h3>
      <p>{toUnitDescription}</p>
    </article>
  </section>
  
  <!-- 常见问题 -->
  <section aria-label="常见问题">
    <h2>常见问题</h2>
    <details>
      <summary>如何进行{fromUnit}到{toUnit}的转换？</summary>
      <p>详细的转换步骤说明...</p>
    </details>
  </section>
</main>
```

### 7.3 URL 结构优化

#### 7.3.1 URL 模式
```typescript
// URL 结构示例
const urlPatterns = {
  // 类别页面
  category: '/{lang}/{unitType}',              // 例如：/zh/length
  
  // 具体转换页面
  conversion: '/{lang}/{unitType}/{fromUnit}-to-{toUnit}', // 例如：/zh/length/m-to-cm
  
  // 搜索页面
  search: '/{lang}/search',                    // 例如：/zh/search?q=米转厘米
};
```

#### 7.3.2 动态路由处理
```typescript
// pages/[lang]/[unitType]/[conversion].tsx
export async function generateMetadata({
  params: { lang, unitType, conversion }
}: Props): Promise<Metadata> {
  const [fromUnit, toUnit] = conversion.split('-to-');
  
  return {
    title: `${fromUnit}到${toUnit}转换器 - 在线${unitType}换算工具`,
    description: `免费在线${unitType}单位转换器，支持${fromUnit}到${toUnit}等多种单位换算，精确计算，简单易用。`,
    alternates: {
      canonical: `https://example.com/${lang}/${unitType}/${conversion}`,
      languages: {
        'en': `https://example.com/en/${unitType}/${conversion}`,
        'zh': `https://example.com/zh/${unitType}/${conversion}`,
      },
    },
  };
}
```

### 7.4 性能优化

#### 7.4.1 加载优化
```typescript
// 组件懒加载
const UnitConverter = dynamic(() => import('@/components/UnitConverter'), {
  loading: () => <UnitConverterSkeleton />,
  ssr: true,
});

// 预加载数据
export async function generateStaticParams() {
  return commonConversions.map(({ unitType, fromUnit, toUnit }) => ({
    lang: ['en', 'zh'],
    unitType,
    conversion: `${fromUnit}-to-${toUnit}`,
  }));
}
```

#### 7.4.2 Core Web Vitals 优化
```typescript
// 优化 LCP
const UnitConverterPage = () => {
  return (
    <>
      {/* 预加载关键资源 */}
      <link
        rel="preload"
        href="/fonts/inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* 使用 priority 属性优化图片加载 */}
      <Image
        src="/images/converter-hero.webp"
        alt="Unit Converter"
        priority
        {...imageProps}
      />
      
      {/* 主要内容 */}
      <UnitConverter />
    </>
  );
};
```

### 7.5 内容优化

#### 7.5.1 结构化数据
```typescript
// 添加结构化数据
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: `${unitType}单位转换器`,
  description: `在线${unitType}单位转换工具，支持${fromUnit}到${toUnit}的转换`,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

// 在页面中使用
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

#### 7.5.2 内容丰富度
```typescript
// 单位说明组件
const UnitDescription = ({ unit, description, examples, history }) => (
  <article className="unit-description">
    <h3>{unit}详细说明</h3>
    <p>{description}</p>
    
    <h4>使用示例</h4>
    <ul>
      {examples.map((example, index) => (
        <li key={index}>{example}</li>
      ))}
    </ul>
    
    <h4>历史由来</h4>
    <p>{history}</p>
  </article>
);
```

### 7.6 监控与分析

#### 7.6.1 性能监控
```typescript
// 性能监控实现
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  
  // 发送到分析服务
  if (metric.name === 'LCP') {
    analytics.sendTiming('LCP', metric.value);
  }
}
```

#### 7.6.2 用户行为分析
```typescript
// 用户行为跟踪
const trackConversion = (fromUnit: string, toUnit: string, value: number) => {
  analytics.track('UnitConversion', {
    category: unitType,
    fromUnit,
    toUnit,
    value,
    timestamp: new Date().toISOString(),
  });
};
```
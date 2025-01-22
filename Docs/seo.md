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
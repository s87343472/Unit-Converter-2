# 单位转换工具

## 功能概述

一个功能丰富的在线单位转换工具，支持多种单位类型的转换，包括：
- 长度
- 重量
- 温度
- 面积
- 体积
- 时间
- 速度
- 角度
- 数据单位
- ...等多种单位类型

## 新功能：SEO优化与页面生成系统

我们新增了SEO优化与页面生成系统，为每个单位转换组合创建独立的专用页面，大幅提升搜索引擎曝光率。

### 主要特点

1. **专用转换页面**
   - 为每个单位转换组合（如米到千米、厘米到英寸）创建专用页面
   - 使用清晰一致的URL结构：`/[language]/[type]/[fromUnit]-to-[toUnit]`
   - 提供丰富的内容，包括转换公式、常用值表格、历史背景和应用场景

2. **SEO优化**
   - 为每个页面生成优化的元数据（标题、描述）
   - 实现多语言支持与hreflang标签
   - 添加Schema.org结构化数据
   - 生成站点地图(sitemap.xml)

3. **多语言支持**
   - 英文 (en)
   - 简体中文 (zh-CN)
   - 繁体中文 (zh-TW)
   - 日文 (ja)

4. **静态生成**
   - 使用增量静态生成(ISR)预渲染热门转换页面
   - 设置合理的重新验证时间间隔
   - 支持按需生成不常用的转换组合

## 技术栈

- **框架**: Next.js
- **部署**: Vercel
- **样式**: Tailwind CSS
- **国际化**: 自定义i18n解决方案

## 开发指南

### 环境设置

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建项目
npm run build

# 运行构建后的项目
npm run start
```

### 项目结构

- `src/app/[locale]/[type]/[fromUnit]-to-[toUnit]` - 单位转换专用页面
- `src/components/conversion` - 转换相关组件
- `src/lib/conversion` - 转换逻辑和单位定义
- `src/lib/i18n` - 国际化支持
- `src/lib/seo` - SEO相关功能

## 如何贡献

欢迎贡献！如需贡献代码，请遵循以下步骤：
1. Fork本仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个Pull Request

## 许可证

[MIT](LICENSE)

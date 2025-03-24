# Unit Converter 2.0

一个功能强大的在线单位转换工具，支持多种单位类型和中英双语界面。

## 最新更新

- **2024-05-26 v0.3.93**: 移除货币单位转换功能，优化首页单位展示
- **2024-03-22 v0.3.92**: 简化语言支持，仅保留英文和中文

## 开发环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## 技术栈

- Next.js 14.1.0
- React 18.2.0
- TypeScript
- Tailwind CSS
- Vitest (测试框架)
- Marked (Markdown 渲染)

## 安装和运行

1. 克隆项目
```bash
git clone [repository-url]
cd Unit-Converter-2
```

2. 安装依赖
```bash
npm install
```

3. 开发环境运行
```bash
npm run dev
```

4. 构建和生产环境运行
```bash
npm run build
npm start
```

5. 运行测试
```bash
npm test           # 运行所有测试
npm run test:watch # 监视模式运行测试
```

## 项目结构

```
Unit-Converter-2/
├── src/
│   ├── app/                 # Next.js 应用路由
│   ├── components/          # React 组件
│   │   ├── layout/         # 布局组件
│   │   ├── shared/         # 共享组件
│   │   └── unit-converter/ # 单位转换相关组件
│   ├── lib/
│   │   ├── conversion/     # 单位转换逻辑
│   │   ├── i18n/          # 国际化配置
│   │   └── types/         # TypeScript 类型定义
│   └── styles/            # 样式文件
├── public/               # 静态资源
├── scripts/             # 构建和工具脚本
├── docs/               # 文档
└── tests/             # 测试文件
```

## 开发指南

### 添加新的单位类型

1. 在 `src/lib/conversion/types.ts` 中添加新的单位类型
2. 在 `src/lib/conversion/` 目录下创建对应的单位转换文件
3. 在 `src/lib/i18n/translations/` 中添加相应的翻译
4. 添加单元测试

### 国际化

- 翻译文件位于 `src/lib/i18n/translations/`
- 支持的语言：英文(en)、简体中文(zh-CN)
- 项目已优化为仅支持中英两种语言，已移除其他语言支持
- 语言配置在 `src/lib/i18n/config.ts` 中定义

### 测试

- 单元测试文件位于 `src/lib/conversion/__tests__/`
- 使用 Vitest 作为测试框架
- 运行 `npm test` 执行所有测试
- 运行 `npm run test:coverage` 查看测试覆盖率

### 构建和部署

- 使用 `npm run build` 构建项目
- 构建前会自动复制 CHANGELOG.md 到 public 目录
- 生产环境使用 `npm start` 启动服务

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 提交前运行 `npm run lint` 检查代码

### 文档

- API 文档位于 `docs/` 目录
- 单位命名规范见 `docs/unit-naming-convention.md`
- 更新日志见 `CHANGELOG.md`

## 注意事项

1. 所有单位转换必须通过单元测试
2. 保持向后兼容性
3. 遵循单位命名规范
4. 及时更新 CHANGELOG.md

## 常见问题

1. 如何添加新的单位类型？
   - 参考"开发指南"中的"添加新的单位类型"部分

2. 如何修改单位转换逻辑？
   - 修改 `src/lib/conversion/` 下对应的文件
   - 确保更新相关测试

3. 为什么只保留中英两种语言？
   - 为了减少维护成本，提高代码效率和应用性能
   - 专注于支持主要用户群体使用的语言

4. 为什么移除了货币单位转换功能？
   - 货币汇率波动频繁，难以保证转换结果的准确性
   - 避免提供过时或不准确的货币转换信息给用户
   - 专注于提供稳定且精确的物理单位转换

## 联系方式

- 技术支持：support@metric-converter.com
- 项目文档：[documentation-url]

## 许可证

MIT License

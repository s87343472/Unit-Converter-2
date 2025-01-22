# 测试指南

## 1. 测试范围

### 1.1 单元测试
- 组件渲染测试
- 工具函数测试
- 状态管理测试

### 1.2 集成测试
- 组件交互测试
- 路由测试
- API 调用测试

### 1.3 端到端测试
- 用户流程测试
- 多语言测试
- 响应式测试

## 2. 测试工具

### 2.1 测试框架
- Jest
- React Testing Library
- Cypress

### 2.2 测试工具
- MSW（Mock Service Worker）
- Testing Library User Event
- Jest DOM

### 2.3 测试辅助
- Storybook
- Chromatic
- Testing Playground

## 3. 测试规范

### 3.1 命名规范
- 文件名：`*.test.tsx`
- 测试套件：描述被测试的功能
- 测试用例：描述具体的测试场景

### 3.2 组织规范
- 相关测试放在同一文件
- 使用 describe 分组
- 使用 beforeEach/afterEach 处理重复代码

### 3.3 编写规范
- 一个测试只测试一个功能点
- 使用有意义的测试数据
- 避免测试实现细节

## 4. 测试示例

### 4.1 组件测试
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UnitInput } from './UnitInput'

describe('UnitInput', () => {
  it('should render input field', () => {
    render(<UnitInput value="" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should call onChange when user types', async () => {
    const onChange = jest.fn()
    render(<UnitInput value="" onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), '123')
    expect(onChange).toHaveBeenCalledWith('123')
  })
})
```

### 4.2 多语言测试
```typescript
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from './LanguageProvider'

describe('LanguageProvider', () => {
  it('should provide translations', () => {
    render(
      <LanguageProvider defaultLanguage="en">
        <div>{t => t.common.title}</div>
      </LanguageProvider>
    )
    expect(screen.getByText('Unit Converter')).toBeInTheDocument()
  })

  it('should switch language', async () => {
    const { rerender } = render(
      <LanguageProvider defaultLanguage="en">
        <div>{t => t.common.title}</div>
      </LanguageProvider>
    )
    
    rerender(
      <LanguageProvider defaultLanguage="zh">
        <div>{t => t.common.title}</div>
      </LanguageProvider>
    )
    
    expect(screen.getByText('单位转换')).toBeInTheDocument()
  })
})
```

## 5. 测试流程

### 5.1 开发流程
1. 编写测试用例
2. 实现功能代码
3. 运行测试
4. 优化代码和测试

### 5.2 CI/CD 流程
1. 提交代码时运行测试
2. 合并请求时运行完整测试
3. 部署前运行端到端测试
4. 定期运行性能测试

### 5.3 维护流程
1. 定期更新测试用例
2. 删除过时的测试
3. 优化测试性能
4. 监控测试覆盖率

## 6. 测试覆盖率

### 6.1 覆盖率目标
- 单元测试：>80%
- 集成测试：>60%
- 端到端测试：关键流程 100%

### 6.2 覆盖率报告
- 使用 Jest 生成覆盖率报告
- 在 CI/CD 中展示覆盖率
- 设置覆盖率阈值

### 6.3 改进计划
- 识别测试盲点
- 补充缺失测试
- 优化测试质量

# 单元测试规范与计划

## 目的

本规范旨在指导开发人员编写高质量的单元测试，以确保代码的质量和可靠性。

## 测试框架与工具

*   Jest：测试运行器 (Test Runner)
*   React Testing Library：组件测试工具
*   jest-dom：提供针对 DOM 的断言方法 (例如：`toBeInTheDocument`、`toHaveStyle` 等)
*   @testing-library/user-event：模拟用户交互 (例如：`userEvent.click(element)`)
*   jest-axe：用于测试可访问性 (a11y)

## 目录结构

```
Unit-Converter/
  __tests__/
    components/
      navigation/
        CategoryNav/
          CategoryNav.test.tsx      # 功能测试
          CategoryNav.style.test.tsx    # 样式测试
          CategoryNav.interaction.test.tsx   # 交互测试
      shared/
        LanguageProvider/
          LanguageProvider.test.tsx # 语言切换测试
        UnitSelector/
          UnitSelector.test.tsx
          UnitSelector.style.test.tsx
          UnitSelector.interaction.test.tsx
        UnitConverter/
          UnitConverter.test.tsx
          UnitConverter.style.test.tsx
          UnitConverter.interaction.test.tsx
    utils/
      conversion/
        length.test.ts
        weight.test.ts
        temperature.test.ts
        area.test.ts
        volume.test.ts
        speed.test.ts
        pressure.test.ts
        energy.test.ts
    hooks/
      useConversion.test.ts  # 如果有自定义 Hook 的话
      useLanguage.test.ts    # 如果有自定义 Hook 的话
```

## 测试类型

### 1. 功能测试 (`*.test.tsx`)

*   **组件渲染:** 测试组件是否正确渲染，包括不同的 props 和状态。
*   **Props 验证:** 测试组件是否正确处理传入的 props。
*   **回调函数:** 测试组件是否正确调用回调函数。
*   **状态管理:** 测试组件内部的状态是否正确更新。
*   **错误处理:** 测试组件是否能够正确处理错误情况 (例如：无效的输入、API 请求失败等)。
*   **多语言测试:** 测试组件是否能够正确处理多语言环境，包括：
    *   测试 `LanguageProvider` 是否能够正确提供当前语言环境和加载语言文件。
    *   测试 `useTranslation` Hook 是否能够正确获取当前语言和翻译文本。
    *   测试组件是否能够根据当前语言正确渲染文本内容。
    *   测试 `LanguageSwitcher` 组件是否能够正确切换语言，并更新 URL 中的语言代码。

```typescript
// __tests__/components/shared/LanguageProvider/LanguageProvider.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageProvider, { useTranslation } from '../../../../components/shared/LanguageProvider';

describe('LanguageProvider', () => {
  it('should provide the default language', () => {
    render(
      <LanguageProvider initialLanguage="en">
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId('language')).toHaveTextContent('en');
  });

  it('should switch language correctly', async () => {
      const user = userEvent.setup();
      render(
        <LanguageProvider initialLanguage="en">
          <TestComponent />
          <LanguageSwitcher />
        </LanguageProvider>
      );

      expect(screen.getByTestId('language')).toHaveTextContent('en');
      await user.click(screen.getByRole('button', { name: /中文/i }));

      await waitFor(() => {
          expect(screen.getByTestId('language')).toHaveTextContent('zh');
      });
  });

  it('should translate text correctly', async () => {
    render(
      <LanguageProvider initialLanguage="en">
        <TestComponent />
      </LanguageProvider>
    );

    await waitFor(() => {
        expect(screen.getByTestId('translation')).toHaveTextContent('Metric Converter');
    });

    render(
      <LanguageProvider initialLanguage="zh">
        <TestComponent />
      </LanguageProvider>
    );

    await waitFor(() => {
        expect(screen.getByTestId('translation')).toHaveTextContent('单位转换器');
    });
  });
});

const LanguageSwitcher = () => {
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

const TestComponent = () => {
  const { language, t } = useTranslation();

  return (
    <div>
      <span data-testid="language">{language}</span>
      <span data-testid="translation">{t('header.title')}</span>
    </div>
  );
};
```

### 2. 样式测试 (`*.style.test.tsx`)

*   **响应式布局:** 测试组件在不同屏幕尺寸下的样式是否正确。
*   **主题切换:** 测试组件在不同主题下的样式是否正确 (例如：明亮模式、暗黑模式)。
*   **CSS 变量:** 测试组件是否正确使用了 CSS 变量。
*   **动画效果:** 测试组件的动画效果是否正常。

```typescript
// __tests__/components/navigation/CategoryNav/CategoryNav.style.test.tsx
import { render, screen } from '@testing-library/react';
import CategoryNav from '../../../../components/navigation/CategoryNav';
import { toHaveStyle } from '@testing-library/jest-dom';

describe('CategoryNav Styles', () => {
  it('should apply mobile styles under 768px', () => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
      const categories = ['length', 'weight', 'temperature'];
      render(<CategoryNav categories={categories}/>);
      const navElement = screen.getByRole('navigation');
      expect(navElement).toHaveStyle(`
        display: none; // 假设在小屏幕上隐藏导航菜单
      `);
  });

  it('should apply dark theme styles', () => {
    // 模拟切换到暗黑模式
    // ...
    const categories = ['length', 'weight', 'temperature'];
    render(<div data-theme="dark"><CategoryNav categories={categories} /></div>);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveStyle(`
      background-color: #333; // 假设暗黑模式下导航菜单的背景颜色为 #333
      color: #fff; // 假设暗黑模式下导航菜单的文字颜色为 #fff
    `);
  });
});
```

### 3. 交互测试 (`*.interaction.test.tsx`)

*   **点击事件:** 测试组件是否正确响应点击事件。
*   **悬停效果:** 测试组件是否正确响应鼠标悬停事件。
*   **键盘操作:** 测试组件是否正确响应键盘操作 (例如：Tab 键、方向键、回车键等)。
*   **移动端手势:** 测试组件是否正确响应移动端手势 (例如：滑动、缩放等)。

```typescript
// __tests__/components/navigation/CategoryNav/CategoryNav.interaction.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryNav from '../../../../components/navigation/CategoryNav';

describe('CategoryNav Interaction', () => {
  it('should show subcategories on hover', async () => {
    const categories = ['length'];
    const subcategories = { length: ['m', 'cm', 'mm'] };
    render(<CategoryNav categories={categories} subcategories={subcategories} />);
    
    await userEvent.hover(screen.getByText('length'));
    expect(screen.getByText('m')).toBeInTheDocument();
    expect(screen.getByText('cm')).toBeInTheDocument();
    expect(screen.getByText('mm')).toBeInTheDocument();
  });

  it('should handle keyboard navigation', async () => {
    const categories = ['length', 'weight'];
    render(<CategoryNav categories={categories} />);

    await userEvent.tab(); // 切换到第一个可聚焦元素
    expect(screen.getByText('length')).toHaveFocus();

    await userEvent.keyboard('{enter}'); // 模拟按下回车键
    // ... 验证是否触发了相应的事件
  });
});
```

## 测试覆盖率要求

*   功能测试：> 90%
*   样式测试：> 80%
*   交互测试：> 85%
*   总体覆盖率：> 85%

## 测试原则

1. **单一职责:** 每个测试用例只测试一个功能点。
2. **可读性:** 使用清晰的测试描述 (例如：`describe`、`it` 的描述)，遵循 AAA (Arrange-Act-Assert) 模式。
3. **可维护性:** 使用测试工具函数 (例如：`beforeEach`、`afterEach`、`beforeAll`、`afterAll`)，避免重复代码，合理使用 setup 和 teardown。
4. **真实性:** 模拟真实用户行为，避免测试实现细节，关注组件对外接口。

## 常用测试模式

### 1. 组件渲染测试

```typescript
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByRole('button')).toBeInTheDocument(); // 使用 screen.getByRole 获取元素，并进行断言
});
```

### 2. 用户交互测试

```typescript
import userEvent from '@testing-library/user-event';

test('handles click', async () => {
  const user = userEvent.setup()
  const onClick = jest.fn(); // 使用 jest.fn() 创建一个 mock 函数

  render(<Button onClick={onClick} />);
  await user.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled(); // 断言 onClick 函数被调用
});
```

### 3. 样式测试

```typescript
import { toHaveStyle } from '@testing-library/jest-dom';

test('applies styles', () => {
  render(<Component />);
  const element = screen.getByTestId('test-id'); // 使用 screen.getByTestId 获取元素

  expect(element).toHaveStyle({
    backgroundColor: 'red',
    display: 'flex'
  });
});
```

### 4. Mocking

```typescript
// 模拟模块
jest.mock('./api', () => ({
  getConversions: jest.fn(() => Promise.resolve(['m-to-cm', 'kg-to-lb'])),
}));

// 模拟函数
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
mockFn.mockImplementation((a, b) => a + b);
```

## CI/CD 集成

1. **提交前测试**

    ```bash
    npm test
    npm run test:coverage
    ```
2. **Git Hooks**

    ```json
    {
      "husky": {
        "hooks": {
          "pre-commit": "npm test",
          "pre-push": "npm run test:coverage"
        }
      }
    }
    ```
3. **GitHub Actions**

    *   每次 PR 自动运行测试
    *   生成覆盖率报告
    *   阻止覆盖率下降的 PR 合并

## 测试报告

1. **覆盖率报告**

    *   使用 Jest 内置的覆盖率报告
    *   在 CI/CD 中保存报告
    *   设置覆盖率阈值 (例如：85%)
2. **测试结果报告**

    *   使用 Jest 的 JSON 报告器
    *   集成到 PR 评论中
    *   可视化测试结果 (例如：使用 GitHub Actions 的 Check Runs API)

## 最佳实践

1. **命名规范**

    *   文件名：`ComponentName.test.tsx`
    *   测试套件：`describe('ComponentName', () => {})`
    *   测试用例：`it('should do something', () => {})`
2. **测试数据**

    *   使用工厂函数创建测试数据
    *   避免在测试中硬编码数据
    *   使用有意义的测试数据 (例如：边界值、典型值、异常值)
3. **异步测试**

    *   正确使用 `async/await`
    *   处理异步错误
    *   设置合理的超时时间 (例如：`jest.setTimeout(10000)`)
4. **模拟 (Mocking)**

    *   只模拟必要的依赖
    *   使用 `jest.mock()` 模拟模块
    *   使用 `msw` 模拟 API 请求 (可选)
5. **使用`expect.extend`来自定义matchers**
6. **使用`screen`对象来查询元素，而不是直接使用`render`返回的对象**

## 测试计划

### 第一阶段：单元测试基础设置
1. **环境配置**
   ```bash
   # 安装基础依赖
   npm install --save-dev jest @types/jest ts-jest
   # 安装 React 测试相关依赖
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   # 安装环境依赖
   npm install --save-dev jest-environment-jsdom
   ```

2. **配置文件设置**
   - 创建 `jest.config.js`
   - 配置 `tsconfig.json` 的测试相关设置
   - 在 `package.json` 中添加测试脚本

### 第二阶段：核心功能单元测试
1. **转换函数测试** (`converter.test.ts`)
   - 基本转换功能
   - 错误处理
   - 边界条件

2. **各单位类型测试**
   - `length.test.ts`
   - `weight.test.ts`
   - `temperature.test.ts`
   - 其他单位类型...

### 第三阶段：集成测试
1. **转换流程测试** (`integration.test.ts`)
   - 完整转换流程
   - 多步骤转换
   - 精度保持测试

2. **输入验证测试**
   - 无效输入处理
   - 极值处理
   - 类型验证

### 第四阶段：UI 组件测试
1. **基础组件测试** (`UnitConverter.test.tsx`)
   - 渲染测试
   - 状态管理
   - 事件处理

2. **交互测试**
   - 输入验证
   - 单位选择
   - 结果显示

### 第五阶段：性能和安全测试
1. **性能测试**
   - 批量转换
   - 并发处理
   - 响应时间

2. **安全测试**
   - 输入净化
   - 类型检查
   - 溢出保护

### 第六阶段：端到端测试
1. **用户流程测试**
   - 完整转换流程
   - 导航测试
   - 响应式设计

2. **移动端测试**
   - 触摸事件
   - 布局适配
   - 性能表现

### 第七阶段：无障碍性测试
1. **可访问性测试**
   - 键盘导航
   - ARIA 标签
   - 屏幕阅读器支持

### 执行计划
1. 每个阶段按顺序执行
2. 每完成一个测试文件，运行并修复错误
3. 确保测试覆盖率达到预期目标
4. 记录所有发现的问题和改进建议

# 图标系统测试指南

## 1. 单元测试

### 1.1 组件渲染测试
```typescript
import { render } from '@testing-library/react'
import { IconLength } from '@/components/icons'

describe('Icon Components', () => {
  it('should render with default props', () => {
    const { container } = render(<IconLength />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<IconLength className="test-class" />)
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })
})
```

### 1.2 属性测试
```typescript
describe('Icon Properties', () => {
  it('should have correct viewBox', () => {
    const { container } = render(<IconLength />)
    expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('should use currentColor', () => {
    const { container } = render(<IconLength />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'currentColor')
  })
})
```

### 1.3 可访问性测试
```typescript
describe('Icon Accessibility', () => {
  it('should have role="img"', () => {
    const { container } = render(<IconLength />)
    expect(container.querySelector('svg')).toHaveAttribute('role', 'img')
  })

  it('should have aria-hidden when decorative', () => {
    const { container } = render(<IconLength aria-hidden="true" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
```

## 2. 集成测试

### 2.1 交互测试
```typescript
import { fireEvent } from '@testing-library/react'

describe('Icon Interactions', () => {
  it('should handle click events', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <IconLength onClick={handleClick} />
    )
    fireEvent.click(container.querySelector('svg')!)
    expect(handleClick).toHaveBeenCalled()
  })

  it('should handle hover states', () => {
    const { container } = render(
      <div className="group">
        <IconLength className="group-hover:text-blue-500" />
      </div>
    )
    fireEvent.mouseEnter(container.querySelector('div')!)
    expect(container.querySelector('svg')).toHaveClass('text-blue-500')
  })
})
```

### 2.2 响应式测试
```typescript
describe('Icon Responsive Behavior', () => {
  it('should apply responsive classes', () => {
    const { container } = render(
      <IconLength className="w-6 h-6 md:w-8 md:h-8" />
    )
    expect(container.querySelector('svg')).toHaveClass('w-6', 'h-6', 'md:w-8', 'md:h-8')
  })
})
```

## 3. 视觉回归测试

### 3.1 快照测试
```typescript
describe('Icon Visual Regression', () => {
  it('should match snapshot', () => {
    const { container } = render(<IconLength />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with custom class', () => {
    const { container } = render(<IconLength className="text-blue-500" />)
    expect(container).toMatchSnapshot()
  })
})
```

### 3.2 Storybook 测试
```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { IconLength } from '@/components/icons'

const meta: Meta<typeof IconLength> = {
  component: IconLength,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof IconLength>

export const Default: Story = {}

export const CustomColor: Story = {
  args: {
    className: 'text-blue-500',
  },
}

export const CustomSize: Story = {
  args: {
    className: 'w-12 h-12',
  },
}
```

## 4. 性能测试

### 4.1 渲染性能
```typescript
describe('Icon Performance', () => {
  it('should render efficiently', () => {
    const startTime = performance.now()
    render(<IconLength />)
    const endTime = performance.now()
    expect(endTime - startTime).toBeLessThan(100)
  })

  it('should handle multiple renders', () => {
    const { rerender } = render(<IconLength />)
    const startTime = performance.now()
    for (let i = 0; i < 100; i++) {
      rerender(<IconLength className={`test-${i}`} />)
    }
    const endTime = performance.now()
    expect(endTime - startTime).toBeLessThan(1000)
  })
})
```

### 4.2 内存使用
```typescript
describe('Icon Memory Usage', () => {
  it('should not leak memory', () => {
    const initialMemory = process.memoryUsage().heapUsed
    const { unmount } = render(<IconLength />)
    unmount()
    const finalMemory = process.memoryUsage().heapUsed
    expect(finalMemory - initialMemory).toBeLessThan(1024 * 100) // 100KB
  })
})
```

## 5. 测试检查清单

### 5.1 基础检查
- [ ] 所有图标组件都有基本的渲染测试
- [ ] 验证默认属性和自定义属性
- [ ] 检查 SVG 属性的正确性
- [ ] 验证可访问性属性

### 5.2 交互检查
- [ ] 测试点击事件处理
- [ ] 验证悬停状态
- [ ] 检查焦点状态
- [ ] 测试键盘交互

### 5.3 响应式检查
- [ ] 验证不同屏幕尺寸的样式
- [ ] 测试触摸设备交互
- [ ] 检查布局适配

### 5.4 性能检查
- [ ] 测量渲染时间
- [ ] 检查内存使用
- [ ] 验证重渲染性能
- [ ] 测试动画性能

## 6. 持续集成

### 6.1 CI 配置
```yaml
name: Icon Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Run visual regression tests
        run: npm run test:visual
      - name: Run performance tests
        run: npm run test:perf
```

### 6.2 测试报告
- 生成测试覆盖率报告
- 保存视觉回归测试结果
- 记录性能测试指标
- 生成可访问性报告

---


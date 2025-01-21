好的，继续前进！

# 单元测试规范

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

---


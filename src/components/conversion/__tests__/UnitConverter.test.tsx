import { render, fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import UnitConverter from '../UnitConverter'
import LanguageProvider from '@/components/shared/LanguageProvider'

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}

describe('UnitConverter Component', () => {
  const defaultProps = {
    type: 'length' as const,
    fromUnit: 'meter',
    toUnit: 'centimeter',
    onFromUnitChange: vi.fn(),
    onToUnitChange: vi.fn()
  }

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(ui, { wrapper: TestWrapper })
  }

  describe('Input Handling', () => {
    test('should update value on valid input', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: '100' } })
      expect(input).toHaveValue('100')
    })

    test('should prevent invalid characters', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: 'abc' } })
      expect(input).toHaveValue('')
    })

    test('should handle paste events', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.paste(input, {
        clipboardData: {
          getData: () => '100 meters'
        }
      })
      expect(input).toHaveValue('100')
    })
  })

  describe('Unit Selection', () => {
    test('should change selected unit', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const select = screen.getByRole('combobox')
      
      fireEvent.change(select, { target: { value: 'centimeter' } })
      expect(defaultProps.onFromUnitChange).toHaveBeenCalledWith('centimeter')
    })

    test('should update conversion results on unit change', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      const select = screen.getByRole('combobox')
      
      fireEvent.change(input, { target: { value: '100' } })
      fireEvent.change(select, { target: { value: 'centimeter' } })
      
      const results = screen.getAllByTestId('conversion-result')
      expect(results.length).toBeGreaterThan(0)
    })
  })

  describe('Copy Functionality', () => {
    test('should copy result value', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const copyButton = screen.getByRole('button', { name: /copy/i })
      
      fireEvent.click(copyButton)
      // 验证复制功能被调用
      expect(navigator.clipboard.writeText).toHaveBeenCalled()
    })
  })

  describe('Mobile Interaction', () => {
    beforeEach(() => {
      // 模拟移动设备视口
      window.innerWidth = 375
      window.innerHeight = 667
    })

    test('should render mobile layout', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const container = screen.getByTestId('converter-container')
      expect(container).toHaveClass('mobile')
    })

    test('should handle touch events', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.touchStart(input)
      fireEvent.touchEnd(input)
      expect(input).toHaveFocus()
    })
  })

  describe('Accessibility', () => {
    test('should handle keyboard navigation', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      const select = screen.getByRole('combobox')
      
      fireEvent.keyDown(input, { key: 'Tab' })
      expect(select).toHaveFocus()
    })

    test('should have proper ARIA labels', () => {
      renderWithProvider(<UnitConverter {...defaultProps} />)
      const input = screen.getByRole('textbox')
      const select = screen.getByRole('combobox')
      
      expect(input).toHaveAttribute('aria-label')
      expect(select).toHaveAttribute('aria-label')
    })
  })
}) 
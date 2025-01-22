import { render, fireEvent, screen } from '@testing-library/react'
import { UnitConverter } from '../UnitConverter'

describe('UnitConverter Component', () => {
  describe('Input Handling', () => {
    test('should update value on valid input', () => {
      render(<UnitConverter type="length" />)
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: '100' } })
      expect(input).toHaveValue('100')
    })

    test('should prevent invalid characters', () => {
      render(<UnitConverter type="length" />)
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: 'abc' } })
      expect(input).toHaveValue('')
    })

    test('should handle paste events', () => {
      render(<UnitConverter type="length" />)
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
      render(<UnitConverter type="length" />)
      const select = screen.getByRole('combobox')
      
      fireEvent.change(select, { target: { value: 'centimeter' } })
      expect(select).toHaveValue('centimeter')
    })

    test('should update conversion results on unit change', () => {
      render(<UnitConverter type="length" />)
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
      render(<UnitConverter type="length" />)
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
      render(<UnitConverter type="length" />)
      const container = screen.getByTestId('converter-container')
      expect(container).toHaveClass('mobile')
    })

    test('should handle touch events', () => {
      render(<UnitConverter type="length" />)
      const input = screen.getByRole('textbox')
      
      fireEvent.touchStart(input)
      fireEvent.touchEnd(input)
      expect(input).toHaveFocus()
    })
  })

  describe('Accessibility', () => {
    test('should handle keyboard navigation', () => {
      render(<UnitConverter type="length" />)
      const input = screen.getByRole('textbox')
      const select = screen.getByRole('combobox')
      
      fireEvent.keyDown(input, { key: 'Tab' })
      expect(select).toHaveFocus()
    })

    test('should have proper ARIA labels', () => {
      render(<UnitConverter type="length" />)
      const input = screen.getByRole('textbox')
      const select = screen.getByRole('combobox')
      
      expect(input).toHaveAttribute('aria-label')
      expect(select).toHaveAttribute('aria-label')
    })
  })
}) 
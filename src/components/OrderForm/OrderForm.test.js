import React from 'react'
import OrderForm from './OrderForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('OrderForm', () => {
  const mockAddOrder = jest.fn()

  beforeEach(() => {
    render(
      <OrderForm addOrder={mockAddOrder} />
    )
  })

  it('should render the order form', () => {
    const orderForm = screen.getByTestId('order-form')
    expect(orderForm).toBeInTheDocument()
  })
})
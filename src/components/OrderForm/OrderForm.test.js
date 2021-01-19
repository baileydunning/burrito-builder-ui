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

  it('should render a checkbox for each ingredient', () => {
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(12)
    expect(screen.getByText('guacamole')).toBeInTheDocument()
  })

  it('should allow a user to enter their name', () => {
    const nameField = screen.getByPlaceholderText('Name')
    userEvent.type(nameField, 'Bailey')
    expect(nameField).toHaveValue('Bailey')
  })
})
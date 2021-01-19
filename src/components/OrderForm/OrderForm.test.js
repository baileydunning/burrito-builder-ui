import React from 'react'
import OrderForm from './OrderForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('OrderForm', () => {
  let guacamole
  const mockAddOrder = jest.fn()

  beforeEach(() => {
    render(
      <OrderForm addOrder={mockAddOrder} />
    )
    guacamole = screen.getByLabelText('guacamole')
  })

  it('should render the order form', () => {
    const orderForm = screen.getByTestId('order-form')
    expect(orderForm).toBeInTheDocument()
  })

  it('should render a checkbox for each ingredient', () => {
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(12)
    expect(screen.getByText('queso fresco')).toBeInTheDocument()
  })

  it('should allow a user to enter their name', () => {
    const nameField = screen.getByPlaceholderText('Name')
    userEvent.type(nameField, 'Bailey')
    expect(nameField).toHaveValue('Bailey')
  })

  it('should allow a user to add ingredients', () => {
    const sourCream = screen.getByLabelText('sour cream')
    const steak = screen.getByLabelText('steak')
    
    userEvent.click(guacamole)
    userEvent.click(sourCream)
    userEvent.click(steak)
    
    const orderSummary = screen.getByText('Order: guacamole, sour cream, steak')
    expect(orderSummary).toBeInTheDocument()
  })

  it('should allow a user to remove added ingredients', () => {
    userEvent.click(guacamole)
    expect(screen.getByText('Order: guacamole')).toBeInTheDocument()

    userEvent.click(guacamole)
    expect(screen.getByText('Order: Nothing selected')).toBeInTheDocument()
  })

  it('should not allow a user to submit until all fields are filled out', () => {
    window.alert = jest.fn()
    const submitBtn = screen.getByText('Submit Order')
    userEvent.click(submitBtn)
    expect(window.alert).toHaveBeenCalled()
  })

  it('should allow the user to submit the form', () => {
    const nameField = screen.getByPlaceholderText('Name')
    const submitBtn = screen.getByText('Submit Order')
    const mockOrder = {name: 'Bailey', ingredients: ['guacamole']}

    userEvent.type(nameField, 'Bailey')
    userEvent.click(guacamole)
    userEvent.click(submitBtn)

    expect(mockAddOrder).toHaveBeenCalledTimes(1)
    expect(mockAddOrder).toHaveBeenCalledWith(mockOrder)
  })
})
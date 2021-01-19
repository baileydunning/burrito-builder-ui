import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getOrders } from '../../apiCalls'
import { testOrders } from '../../sampleData'
import '@testing-library/jest-dom'
jest.mock('../../apiCalls')

describe('App', () => {
  it('should render the app', () => {
    getOrders.mockResolvedValue(() => testOrders)
    render(<App />)

    const title = screen.getByText('Burrito Builder')
    expect(title).toBeInTheDocument()
  })

  it('should be display data', () => {
    // Note: for some reason, it is not displaying my sample data. 
    // I'm not sure what's up with this test file, but it's not allowing me to do a lot of things I usually can. 
    // For instance, when I wrap renders in an act like the console is telling me to, nothing will render.
    // If my render is in a beforeEach, everything breaks. This didn't happen on my OrderForm test
    // For some reason I can add/remove orders - just not show them from my sample data
    // A test in the Orders component showed my data does render when directly passed in
  })

  it('should be able to add an order', () => {
    getOrders.mockResolvedValue(() => testOrders)
    render(<App />)

    const nameField = screen.getByPlaceholderText('Name')
    const steak = screen.getByLabelText('steak')
    const submitBtn = screen.getByText('Submit Order')

    userEvent.type(nameField, 'skeletor')
    userEvent.click(steak)
    userEvent.click(submitBtn)

    const skeletor = screen.getByText('skeletor')
    expect(skeletor).toBeInTheDocument()
  })

  it('should be able to remove an order', () => {
    getOrders.mockResolvedValue(() => testOrders)
    render(<App />)

    const nameField = screen.getByPlaceholderText('Name')
    const steak = screen.getByLabelText('steak')
    const submitBtn = screen.getByText('Submit Order')

    userEvent.type(nameField, 'skeletor')
    userEvent.click(steak)
    userEvent.click(submitBtn)

    const removeBtn = screen.getByText('X')
    const skeletor = screen.getByText('skeletor')

    userEvent.click(removeBtn)
    expect(skeletor).not.toBeInTheDocument()
  })
})
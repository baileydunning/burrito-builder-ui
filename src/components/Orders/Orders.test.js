import React from 'react'
import Orders from '../Orders/Orders'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { testOrders } from '../../sampleData'
import '@testing-library/jest-dom'

describe('Orders', () => {
  const mockRemoveOrder = jest.fn()
  beforeEach(() => {
    render(<Orders orders={testOrders.orders} removeOrder={mockRemoveOrder} />)
  })

  it('should render the orders container', () => {
    expect(screen.getByText('Pat')).toBeInTheDocument()
  })
})
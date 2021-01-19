import React from 'react'
import App from './App'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { getOrders, postOrder, deleteOrder } from '../../apiCalls'
import { testOrders } from '../../sampleData'
jest.mock('../../apiCalls')

describe('App', () => {
  beforeEach(async () => {
    getOrders.mockResolvedValueOnce(() => testOrders.orders)
    await act(async () => {
      render(<App />)
    })
  })

  it('should render the app', () => {
    
  })
})
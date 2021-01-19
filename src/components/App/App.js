import React, { useEffect, useState } from 'react'
import './App.css'
import { getOrders, postOrder, deleteOrder } from '../../apiCalls'
import Orders from '../../components/Orders/Orders'
import OrderForm from '../../components/OrderForm/OrderForm'

const App = () => {
  const [orders, setOrders] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => setError(err))
  }, [orders])

  const addOrder = (burrito) => {
    setOrders([...orders, burrito])
    postOrder(burrito)
  }

  const removeOrder = (orderId) => {
    const filteredOrders = orders.filter(order => {
      return order.id !== orderId
    })
    setOrders(filteredOrders)
    deleteOrder(orderId)
  }

  return (
    !error ?
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm
          addOrder={addOrder}
        />
      </header>
      <Orders 
        orders={orders} 
        removeOrder={removeOrder}
      />
    </main> :
    <h2>Error! :(</h2>
  )
}


export default App

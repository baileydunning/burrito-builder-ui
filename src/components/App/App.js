import React, { useEffect, useState } from 'react'
import './App.css'
import { getOrders } from '../../apiCalls'
import Orders from '../../components/Orders/Orders'
import OrderForm from '../../components/OrderForm/OrderForm'

  const App = () => {
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null)

    // useEffect(() => {
    //   getOrders()
    //   .then(data => setOrders(data.data))
    //   .catch(err => setError(err))
    // }, [orders])

    const addOrder = (burrito) => {
      setOrders([...orders, burrito])
    }
  
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm
            addOrder={addOrder} 
          />
        </header>
        <Orders orders={orders}/>
      </main>
    )
}


export default App;

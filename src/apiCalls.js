export const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders')
  const data = await response.json()
  return data
}
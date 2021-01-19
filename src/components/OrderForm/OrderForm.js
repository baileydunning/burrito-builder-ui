import React, { useState } from 'react'

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const makeCheckboxes = () => {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream']
    return possibleIngredients.map(ingredient => {
      return (
        <label htmlFor='checkbox' key={ingredient}>
          <input
            key={ingredient}
            name={ingredient}
            type='checkbox'
            checked={ingredients.includes(ingredient) ? true : false}
            onChange={() => handleIngredients(ingredient)}
          />
          {ingredient}
        </label>
      )
    })
  }

  const handleIngredients = (ingredient) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient])
    } else {
      const filteredIngredients = ingredients.filter(item => {
        return ingredient !== item
      })
      setIngredients(filteredIngredients)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const burritoOrder = {
      name: name,
      ingredients: ingredients
    }

    if (ingredients.length === 0) {
      alert('Add some ingredients to your order!')
    } else if (!name) {
      alert('Please enter your name!')
    } else {
      addOrder(burritoOrder)
      clearInputs()
    }
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      { makeCheckboxes() }

      <p>Order: {ingredients.join(', ') || 'Nothing selected'}</p>

      <button onClick={e => handleSubmit(e)}>
        Submit Order
        </button>
    </form>
  )

}

export default OrderForm;

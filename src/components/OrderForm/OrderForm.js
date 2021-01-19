import React, { useState } from 'react'

  const OrderForm = ({ addOrder }) => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState([])

    // const makeIngredientBtns = () => {
    //   const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    //   return possibleIngredients.map(ingredient => {
    //     return (
    //       <button 
    //         key={ingredient} 
    //         name={ingredient} 
    //         onClick={e => setIngredients([...ingredients, e.target.value])}
    //       >
    //         {ingredient}
    //       </button>
    //     )
    //   })
    // }

      const makeIngredientBtns = () => {
      const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
      return possibleIngredients.map(ingredient => {
        return (
          <label htmlFor='checkbox'>
          <input 
            key={ingredient} 
            name={ingredient}
            type='checkbox' 
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
      clearInputs()
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

        { makeIngredientBtns() }

        <p>Order: {ingredients.join(', ') || 'Nothing selected'}</p>

        <button onClick={e => handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )

  }

export default OrderForm;

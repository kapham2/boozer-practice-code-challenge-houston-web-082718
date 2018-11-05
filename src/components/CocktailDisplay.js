import React from 'react'

const CocktailDisplay = ( { cocktail }) => {
  return (
    <div id="cocktail-display">
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <p>{cocktail.instructions}</p>
      <h1>INGREDIENTS</h1>
      <ul>
      {
        cocktail.ingredients.map((ingredient) => {
          return <li key={cocktail.ingredients.indexOf(ingredient)}>{Object.values(ingredient)[0]} {Object.keys(ingredient)[0]}</li>
        })
      }
      </ul>
    </div>
  )
}

export default CocktailDisplay

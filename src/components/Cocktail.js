import React from 'react'

const Cocktail = ({ cocktail, handleClick }) => {
  return (
    <li id={cocktail.id} onClick={handleClick} >{cocktail.name}</li>
  )
}

export default Cocktail

import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
        {
          this.props.cocktails.map(cocktail => {
            return <Cocktail key={cocktail.id} cocktail={cocktail} handleClick={this.props.handleClick} />
          })
        }
      </div>
    )
  }
}

export default CocktailsList

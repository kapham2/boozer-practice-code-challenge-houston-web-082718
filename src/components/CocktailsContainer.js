import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  constructor() {
    super()
    this.state = {
      cocktails: [],
      ingredients: [],
      proportions: [],
      cocktail: null
    }
  }

  componentDidMount() {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(response => response.json())
    .then(cocktails => this.setState({cocktails}))

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(ingredients => this.setState({ingredients}))

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(response => response.json())
    .then(proportions => this.setState({proportions}))
  }

  handleClick = (e) => {    
    let cocktail = this.state.cocktails.find((cocktail) => cocktail.id === parseInt(e.target.id, 10))
    const proportions = this.state.proportions.filter((proportion) => proportion.cocktail_id === parseInt(e.target.id, 10))
    const ingredients = proportions.map(proportion => {
      let ingredient = this.state.ingredients.find(ingredient => ingredient.id === parseInt(proportion.ingredient_id, 10))
      return {[ingredient.name]: proportion.amount}
    })
    cocktail['ingredients'] = ingredients
    this.setState({cocktail})
  }

  addCocktail = (cocktail) => {
    this.setState(state => ({cocktails: state.cocktails.push(cocktail)}))
  }

  render(){
    return (
      <div className="container">
        <CocktailsList cocktails={this.state.cocktails} handleClick={this.handleClick} />
        {
          this.state.cocktail ? <CocktailDisplay cocktail={this.state.cocktail} /> : null
        }
        <Form addCocktail={this.addCocktail} />
      </div>
    )
  }
}

export default CocktailsContainer

import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      instructions: '',
      proportions: [{'':''}]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)
    console.log(this.state.description)
    console.log(this.state.instructions)

    this.state.proportions.forEach(proportion => {
      console.log(Object.values(proportion)[0], Object.keys(proportion)[0])
    })

    this.setState({
      name: '',
      description: '',
      instructions: '',
      proportions: [{'':''}]
    })
  }
  
  // newCocktail = () => {
  //   const data = {
  //     name: this.state.name,
  //     description: this.state.description,
  //     instructions: this.state.instructions
  //   }

  //   fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {"Content-Type": "application/json"}
  //   })
  //   .then(response => response.json())
  //   .then(cocktail => this.props.addCocktail(cocktail))
  // }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleProportionsChange = (e) => {
    const index = e.target.id
    let prop = this.state.proportions[index]

    if (e.target.name === "ingredient") {
      prop = {[e.target.value]: Object.values(prop)[0]}
    } else if (e.target.name === "quantity") {
      prop = {[Object.keys(prop)[0]]: e.target.value}
    }

    const proportions = [...this.state.proportions]
    proportions.splice(index, 1, prop)
    this.setState({proportions})
  }

  handleAddProportionClick = (e) => {
    e.preventDefault()
    const proportions = [...this.state.proportions]
    proportions.push({'':''})
    this.setState({proportions})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

        <p>Description</p>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>

        <p>Instructions</p>
        <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange}/>

        <h3>Proportions</h3>
        {
          this.state.proportions.map(ingredient => {
            return (
              <div className="container" key={this.state.proportions.indexOf(ingredient)}>
                <p>Ingredient Name<br/>
                <input type="text" id={this.state.proportions.indexOf(ingredient)} name="ingredient" value={Object.keys(ingredient)[0]} onChange={this.handleProportionsChange}/>
                </p>

                <p>Quantity<br/>
                <input type="text" id={this.state.proportions.indexOf(ingredient)} name="quantity" value={Object.values(ingredient)[0]} onChange={this.handleProportionsChange}/>
                </p>
              </div>
            )
          })
        }

        <p><button onClick={this.handleAddProportionClick}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form

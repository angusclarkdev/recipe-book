import React, { Component } from 'react'
import styles from './Form.scss'
class Form extends Component {
  state = {
    name: '',
    ingredients: [],
    method: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    const { form } = styles
    return (
      <form className={form}>
        <label htmlFor='recipe-name-input'> Name: </label>
        <input type='text' id='recipe-name-input' name='name' onChange={this.handleChange} value={this.state.name} />
        <label htmlFor='recipe-name-input'> Ingredients: </label>
        <input type='text' id='recipe-ingredients-input' name='ingredients' onChange={this.handleChange} value={this.state.ingredients} />
        <label htmlFor='recipe-name-input'> Method: </label>
        <textarea name='method' onChange={this.handleChange} value={this.state.method} />
      </form>
    )
  }
}

export default Form

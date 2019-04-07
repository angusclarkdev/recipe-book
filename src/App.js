import React, { Component } from 'react'
import Navigation from '@molecules/Navigation'
import RecipeList from '@organisms/RecipeList'
import Modal from '@molecules/Modal'

class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <RecipeList />
        <Modal isOpen={this.state.isModalOpen} />
      </div>
    )
  }
}

export default App

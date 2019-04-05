import React, { Component } from 'react'
import Navigation from '@molecules/Navigation'
import RecipeList from '@organisms/RecipeList'
import Modal from '@molecules/Modal'

class App extends Component {
  state = {
    isModalOpen: false
  }

  render () {
    return (
      <div>
        <Navigation />
        <RecipeList />
        { this.state.isModalOpen && <Modal /> }
      </div>
    )
  }
}

export default App

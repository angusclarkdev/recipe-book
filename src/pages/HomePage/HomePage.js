import React, { Component, Fragment } from 'react'
import Navigation from '@molecules/Navigation'
import RecipeList from '@organisms/RecipeList'
import Modal from '@molecules/Modal'

class HomePage extends Component {
  constructor () {
    super()
    this.handleToggleModal = this.handleToggleModal.bind(this)
  }

  state = {
    isModelOpen: false
  }

  handleToggleModal () {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  render () {
    return (
      <Fragment>
        <Navigation toggleModal={this.handleToggleModal} />
        <RecipeList />
        <Modal isOpen={this.state.isModalOpen} />
      </Fragment>
    )
  }
}

export default HomePage

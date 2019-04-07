import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export default class Modal extends PureComponent {
  state = {
    isOpen: this.props.isOpen
  }

  render () {
    const modal = () => {
      if (this.state.isOpen) {
        return <div className='new-recipe-modal'> modal </div>
      } else return null
    }

    return createPortal(modal(), document.getElementById('modal'))
  }
}

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export default class Modal extends PureComponent {
  render () {
    const modal = (
      <div className='new-recipe-modal'> modal </div>
    )

    return createPortal(modal, document.getElementById('modal'))
  }
}

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

export default class Modal extends PureComponent {
  render () {
    const modal = () => {
      if (this.props.isOpen) {
        return <div styleName='modal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit sed tempore voluptatum ullam, quisquam consectetur saepe minus quas nemo accusantium vero est maxime magnam deserunt sint eaque! Illum, placeat? </div>
      } else return null
    }

    return createPortal(modal(), document.getElementById('modal'))
  }
}

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

import ModalContents from '@molecules/ModalContents'
import './Modal.scss'

export default class Modal extends PureComponent {
  render () {
    const modal = () => {
      if (this.props.isOpen) {
        return <ModalContents title={this.props.title} children={this.props.children} />
      } else return null
    }

    return createPortal(modal(), document.getElementById('modal'))
  }
}

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ModalContents extends PureComponent {
  static Proptypes = {
    // title to render
    title: PropTypes.string,
    // children (can be any type)
    children: PropTypes.node
  }
  render () {
    return (
      <div>
        <h2> {this.props.title} </h2>
        {this.props.children}
      </div>
    )
  }
}

export default ModalContents

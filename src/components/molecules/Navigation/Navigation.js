import React, { PureComponent } from 'react'
import styles from './Navigation.module.css'

class Navigation extends PureComponent {
  toggleModal (event) {
    console.info(event)
  }
  render () {
    const { navBar, navListItem } = styles
    return (
      <nav>
        <ul className={navBar}>
          <li className={navListItem}> icon </li>
          <li className={navListItem}> My Cookbook </li>
          <li className={navListItem} onClick={this.toggleSearch}> search </li>
          <li className={navListItem} onClick={this.toggleModal}> Add new meal </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation

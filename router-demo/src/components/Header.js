import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
<header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  </header>    )
  }
}

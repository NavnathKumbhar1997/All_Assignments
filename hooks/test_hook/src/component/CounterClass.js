import PropTypes from 'prop-types'
import React, { Component } from 'react'

class CounterClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  increamentCounter = () =>{
      this.setState({
          count:this.state.count + 1
      })
  }

  render() {
    return (
      <div>CounterClass
        <button onClick={this.increamentCounter}>count {this.state.count}</button>
      </div>
    )
  }
}

export default CounterClass
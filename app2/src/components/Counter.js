import React, { Component } from 'react'
class Counter extends Component {


    incrementCounter = () => {
        this.setState ({
            count:this.state.count + 1
        })
    }

  render() {
    return (
      <div>Counter
        <button onClick={this.incrementCounter}>count {this.state.count}</button>
      </div>
      
    )
  }
}

export default Counter




import React, { Component } from 'react'

class lifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:"navanth"
      }
      console.log("life cycle A constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromProps");
        return null     
    } 

    componentDidMount(){
        console.log("lifecycleA ComponentDidMount");
    }

  render() {
    
        console.log("lifecycycleA rendered ")
        return <div>lifecycleA</div>
    
  }
}

export default lifecycleA
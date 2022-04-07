import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:"navanth"
      }
      console.log("life cycle A constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleBLifeCycleB getDerivedStateFromProps");
        return null     
    } 

    componentDidMount(){
        console.log("lifecycleB ComponentDidMount");
    }

    shouldComponentUpdate(){
       console.log("LifeCycle B ComponentUpdate"); 
       return true
    }

    getSnapshotBeforeUpdate(){
        console.log("lifecycleB getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log("lifecycleB componentDidUpdate");
    }

  render() {
    
        console.log("lifecycycleA rendered ")
        return <div>lifecycleB</div>
    
  }
}

export default LifeCycleB
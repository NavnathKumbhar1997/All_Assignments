import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
import Counter from './Counter'

class LifeCycleA extends Component {
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

    shouldComponentUpdate(){
      console.log("LifeCycle A ComponentUpdate"); 
      return true
   }

   getSnapshotBeforeUpdate(){
       console.log("lifecycleA getSnapshotBeforeUpdate");
       return null
   }

   componentDidUpdate(){
       console.log("lifecycle A componentDidUpdate");
   }

   ChangeStates = ()=>{
    this.setState=({
      name:"something State"
    })
  }

  render() {
    
        console.log("lifecycycleA rendered ")
        return(
          <div>
          <div>lifecycleA</div>
          <button onClick={this.ChangeStates}>changeState</button>
          <LifeCycleB></LifeCycleB>
          
         
          </div>
        ) 
    
  }
}

export default LifeCycleA
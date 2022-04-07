import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>hello class component {this.props.name}</h1>
    }
}

export default Welcome;
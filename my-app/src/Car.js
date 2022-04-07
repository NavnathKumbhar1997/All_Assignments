import React from 'react'
import ReactDOM from 'react-dom'

class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }

  function Cars(props) {
    return <h2>I am a { props.name }!</h2>;
  }
  
  function Garage() {
    const carName = "Ford";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Cars brand={ carName } />
      </>
    );
  }

// ReactDOM.render(<Car/>,document.getElementById('root'))

export default Car;
// export {
//     Car,
//     Cars,
//     Garage
// }
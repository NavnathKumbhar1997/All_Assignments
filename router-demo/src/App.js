import './App.css';
import Header from './components/Header'
import {BrowserRouter, Route,Routes,Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound'
import { Post } from './components/Post';
import { useState } from 'react';

function App() {
  const [login,setLogin] = useState(false)
  return (
    <BrowserRouter>
    
       <div className="App">
     {/* <h1>react router</h1> */}
     <Header />
     <button onClick={()=>setLogin(!login)}>{login?"log out":"login"}</button>
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/profile" component={Profile}></Route>

    <Route path="/post/:id" component={Post} />
    <Route component={NotFound}/>
    
    </BrowserRouter>
    
   
  );
}

export default App;

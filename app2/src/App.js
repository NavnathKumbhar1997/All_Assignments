// import logo from './logo.svg';
import './App.css';
import LifeCycleA from './components/LifeCycleA'
// import Counter from './components/Counter';
import About from './components/About'
import Contacts from './components/Contacts'
import {BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Router>
    <Link to=""> Home</Link><br></br>
    <Link to="/about"> About</Link><br></br>
    <Link to="contact"> Contact</Link>
    
      <Route path="/">
          <Home></Home>
      </Route>
      <Route path="/about">
          <About></About>
      </Route>
      <Route path="/contact">
          <Contacts></Contacts>
      </Route>

    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/about" component={About} /> */}
    {/* <Route path="/contact" component={Contacts} /> */}
    {/* <About />
    <Contacts />
    <LifeCycleA /> */}
    </Router>
    </div>
  );
}

export default App;

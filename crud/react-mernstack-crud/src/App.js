import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Register from './components/Register';


function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Switch>
   </>
  );
}

export default App;

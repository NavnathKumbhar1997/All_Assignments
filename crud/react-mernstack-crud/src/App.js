import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Layout/Navbar';
import Home from './Pages/Home/HomeLogic';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //react router dom 
import Detail from './Pages/Details/Detail';
import RegisterDesign from './Pages/Register/RegisterDesign';


function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={RegisterDesign} />
      <Route path="/view/:id" component={Detail} />
    </Switch>
   </>
  );
}

export default App;

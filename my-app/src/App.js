import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import lifecycleA from './components/LifecycleA'
import lifecycleA from "./components/lifecycleA";


export default function App() {
  return (
    <div className="App">
    <lifecycleA ></lifecycleA>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
import React,{ Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component{
  render(){
    return (
      <HashRouter>
    <div>
      <h1><center>Welcome to PassCare</center></h1>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
      <div className="content">
        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
      </div>
    </div>
    </HashRouter>
    );
  }
}
export default App;
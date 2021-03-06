import React from "react"
import './App.css';
import {Route, Switch} from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ToyPage from "./ToyPage";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/toys"><ToyPage/></Route>
      </Switch>
    </div>
  );
}

export default App;

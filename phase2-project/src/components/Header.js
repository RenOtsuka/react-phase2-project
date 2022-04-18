import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About"

function Header(){
    return(
        <div>
            <NavBar>
                <Switch>
                    <Route exact path="/about"><About/></Route>
                    <Route exact path="/"><Home/></Route>
                </Switch>
            </NavBar>
        </div>
    );
}

export default Header;
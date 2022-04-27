import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="Navbar">
            <img src="https://www.pngmart.com/files/12/Toy-Story-PNG-HD.png" alt="ToyStoryLogo"/> 
            <li><Link exact to="/">Home</Link></li>
            <li><Link exact to="/about">About</Link></li>
            <li><Link exact to="/toys">Toys</Link></li>
        </div>
    );
}

export default NavBar;
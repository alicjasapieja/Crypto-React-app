import React, {Component} from "react";
import { Link} from "react-router-dom";
import "./NavBarStyles.css"

function NavBar() { 
      return (  
  <nav>
     <div>
        <ul id= "navbar">

        <li><Link to="home">Home</Link></li>
        <li><Link to="bitcoin">Bitcoin</Link></li>
        <li><Link to="popular">Popular</Link></li>
      
      </ul>
    </div>
  </nav>
  )
 }

export default NavBar;
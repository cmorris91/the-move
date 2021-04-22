import React from "react";
import PlaceSearch from "../PlaceSearch";


function Navbar(props) {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
         Home
        </a>
        <a className="navbar-brand" href="/Event">
         Events
        </a>
        <a className="navbar-brand" href="/Bookmark">
         Bookmark
        </a>
        <a className="navbar-brand" href="/Login">
         Login
        </a>
        <div className="locationField">
      
            
       
        </div>
    
      </nav>
    );
  }


  


  export default Navbar;
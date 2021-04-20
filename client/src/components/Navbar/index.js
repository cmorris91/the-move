import React from "react";
import PlaceSearch from "../PlaceSearch";



function Navbar() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
         Home
        </a>
        <a className="navbar-brand" href="/Event">
         Events
        </a>
        <a className="navbar-brand" href="/Login">
         Login
        </a>
        <div className="locationField">
        <form className="form-inline" >
            {/* <input className="autocomplete" className="form-control mr-sm-2" placeholder="Search Location" type="text"/> */}
            <PlaceSearch/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    
      </nav>
    );
  }


  


  export default Navbar;
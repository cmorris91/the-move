import React from "react";
import "./style.css"


function Navbar(props) {


function refresh(){
  window.location.reload()
}
//logout is now possible
function logout(){
  localStorage.clear()
  .then(refresh)
}


return (


  <nav className="navbar ">
    <a className="navbar-brand" href="/">
      Home
    </a>
    <a className="navbar-brand" href="/Event">
      Events
    </a>
    <a className="navbar-brand" href="/Bookmark">
      Bookmark
    </a>
    {!localStorage.getItem('user') ? 
      <a className="navbar-brand" href="/">
        Login/Signup
      </a>
      : 
      <a className="navbar-brand" href="/" onClick={logout}>
        Logout
      </a>
    }
    <div className="locationField">
    </div>

    
  </nav>
    );
}


  


  export default Navbar;
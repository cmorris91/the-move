import React from "react";
import "./style.css";

function Footer () {
  return (
    <footer className="footer bg-dark">
        <div className="text">
        <h5 className="title text-white">Links</h5>
            <a href="/">Home </a>
            <a href="/Event">Events </a>
            <a href="/Login">Log-In </a>
            <a href="/Login">Sign-Up </a>
                
                  

        <h5 className="text text-white">
            © 2020 Copyright: 
            <h5 className="link" href="https://github.com/cmorris91/the-move"> The Move</h5>
        </h5>
        </div>
        
    </footer>
  );
}

export default Footer;
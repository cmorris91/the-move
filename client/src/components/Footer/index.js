import React from "react";
import "./style.css";

function Footer () {
  return (
    <footer className="footer bg-dark">
        <h5 className="title text-white">Links</h5>
            <ul>
                <li className="list">
                    <a href="/">Home</a>
                </li>
                <li className="list">
                    <a href="/Event">Events</a>
                </li>
                <li className="list">
                    <a href="/Login">Log-In</a>
                </li>
                <li className="list">
                    <a href="/Login">Sign-Up</a>
                </li>
            </ul>        

        <a className="text text-white">
            © 2020 Copyright: 
            <a className="text text-blue" href="https://github.com/cmorris91/the-move"> The Move</a>
        </a>

        
    </footer>
  );
}

export default Footer;
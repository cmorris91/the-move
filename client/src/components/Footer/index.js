import React from "react";
import "./style.css";

function Footer () {
  return (
    <footer className="footer">
    <div className="footer-box">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            <i> Whats The Move? </i> 
            Don't know what to do? Want to meet new friends? <i>The Move</i> is here for you!
            This is an easy to use site where you can search and create events in your city and 
            post live-real-time comments and photos for the event.
        </p>
        </div>
        <div className="footer-section col-xs-6 col-md-3">
          <ul className="footer-links">
          <h6>Contributors</h6>
            <li><a href="https://github.com/cmorris91">Chelsey Morris</a></li>
            <li><a href="https://github.com/ginavargas1">Gina Vargas</a></li>
            <li><a href="https://github.com/AFF321">Andres Fajardo</a></li>
            <li><a href="https://github.com/jbeans12">Jennifer Vereecken</a></li>
          </ul> 
        </div>
        <div className="footer-section col-xs-6 col-md-3">
          <ul class="footer-links">
          <h6>Quick Links</h6>
            <li><a href="/">Home</a></li>
            <li><a href="/Event">Events</a></li>
            <li><a href="/Bookmark">Bookmarked Events</a></li>
            <li><a href="/Login">Log-In</a></li>
            <li><a href="/Login">Sign-up</a></li>

          </ul>
        </div>
        <div className="row">
        <div className="col-12">
          <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
       <a href="https://github.com/cmorris91/the-move">The Move</a>.
          </p>
        </div>
      </div>
      </div>
    </div>
</footer>
)
}

export default Footer;



        
      
    
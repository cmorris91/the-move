import React from "react";
import { render } from "react-dom";



function Signup(props){



return(
        <div class="Signup-card">
          <h2 class="page-title">Signup</h2>
          <form class="form signup-form">
            <div class="form-group">
              <input class="form-input" type="text" id="username-signup" placeholder="Username"/>
            </div>
            <div class="form-group">
              <input class="form-input" type="text" id="email-signup" placeholder="Email"/>
            </div>
            <div class="form-group">
              <input class="form-input" type="password" id="password-signup" placeholder="Password"/>
            </div>
            <div class="form-group justify-content-center">
              <button class="btn btn-primary" onClick={props.submitS} type="submit">SignUp</button>
            </div>
          </form>
        </div>
)
}




export default Signup
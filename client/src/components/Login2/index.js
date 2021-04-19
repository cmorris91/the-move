import React from "react";
import Login from "../../pages/LogIn";



function Login2(props){

    return(
        <div class="login-card">
          <h2 class="page-title">Login</h2>
          <form class="form login-form">
            <div class="form-group">
              <input onChange={} class="form-input" type="text" id="email-login" placeholder="Email"/>
            </div>
            <div class="form-group">
              <input class="form-input" type="password" id="password-login" placeholder="Password"/>
            </div>
            <div class="form-group justify-content-center">
              <button class="btn btn-primary" onClick={props.submitL} type="submit">logIn</button>
            </div>
          </form>
        </div>
    )


}




export default Login2
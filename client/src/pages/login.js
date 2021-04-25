
import React, { useState } from "react";
import {Input, FormBtn} from "../components/Forms"
import { Container } from "../components/List";
import API from "../utils/API"

function LogIn(props){
  //state holds name email and password for updating the form
  const [formObject, setFormObject] = useState({
  name:"",
  email:"",
  password:""
  })
//when logged in it will now refresh your page and redirect you
  function refresh(){
    window.location.reload()
  }

    
//when changing a input it will change states to reflect new inputs
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
  console.log(formObject.password)
};
//on submit it will send state information to create a account or log in depending on what is needed
function handleFormSubmit(event) {
  event.preventDefault();
  const{name} =event.target
  if(name==="login"){
      API.login({name:formObject.name, email:formObject.email, password:formObject.password})
      .then(res =>
        localStorage.setItem("user",res.data.dbModel[0].name + "/" + res.data.dbModel[0]._id)
      )
      .then(alert("login successful"))
      .then(refresh)
      .catch(err => console.log(err));
} else if(name==="signup"){
      API.signup({name:formObject.name, email:formObject.email, password:formObject.password})
      .then(res => 
        localStorage.setItem("user",res.data.dbModel.name+ "/" + res.data.dbModel._id)
      )
      .then(alert("signup successful"))
      .then(refresh)
      .catch(err => alert("signup failed error"));
}};

//renders login page
return(
    <div>
      <Container>
        <div class="login-card">

          <h2 class="page-title">Login</h2>

            <form>

              <Input
              onChange={handleInputChange}
              name="email"
              placeholder="Email (required)"/>

              <Input
              onChange={handleInputChange}
              name="password"
              placeholder="Password (required)"/>

              <FormBtn
              name="login"
              placeholder="Login"
              disabled={!(formObject.password && formObject.email)}
              onClick={handleFormSubmit}/>

            </form>

        </div>


        <div class="Signup-card">

          <h2 class="page-title">Signup</h2>

            <form>
                <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email (required)"/>

                <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Username (required)"/>

                <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"/>

                <FormBtn
                name="signup"
                placeholder="Signup"
                disabled={!(formObject.password && formObject.email && formObject.name)}
                onClick={handleFormSubmit}/>

            </form>

        </div>
        </Container>
    </div>
)
}
export default LogIn

//andres


//Andres
import React, { Component,useState } from "react";
import {Input, FormBtn} from "../components/Forms"
import Event from "./event"
import API from "../utils/API"
function LogIn(props){
  const [formObject, setFormObject] = useState({
  name:"",
  email:"",
  password:""
  })

   
    

function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
        console.log(formObject.password)
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        const{name} =event.target
        if(name==="login"){
          console.log(formObject.password)
            API.login({name:formObject.name, email:formObject.email, password:formObject.password})
            
            .then(res =>console.log(res))
            .catch(err => console.log(err));
        }else if(name==="signup"){
          API.signup({name:formObject.name, email:formObject.email, password:formObject.password})
          .then(res =>console.log(res))
            .catch(err => console.log(err));
        }
        
        };

        return(
        <div>
            <div class="login-card">
                <h2 class="page-title">Login</h2>
                <form>
                <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
                <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                name="login"
                placeholder="Login"
                disabled={!(formObject.Password && formObject.Email)}
                onClick={handleFormSubmit}
              ></FormBtn>
                </form>
            </div>


            <div class="Signup-card">
          <h2 class="page-title">Signup</h2>
            <form>
                    <Input
                    onChange={handleInputChange}
                    name="Email"
                    placeholder="Email (required)"/>

                    <Input
                    onChange={handleInputChange}
                    name="Name"
                    placeholder="Username (required)"/>

                    <Input
                    onChange={handleInputChange}
                    name="Password"
                    placeholder="Password (required)"/>

                    <FormBtn
                    name="signup"
                    placeholder="Signup"
                    disabled={!(formObject.Password && formObject.Email && formObject.Name)}
                    onClick={handleFormSubmit}/>
                </form>  
            </div>  
        </div>
        )
    }
export default LogIn

//andres


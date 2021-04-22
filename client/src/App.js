import React,{useState} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkin from "./pages/checkin";
import Create from "./pages/create"
import Event from "./pages/event"
import Login from "./pages/login";
import SeacrhCheckIn from "../src/components/SearchCheckIn"
import EventDetail from "./pages/EventDetails"
import Bookmark from "./pages/Bookmark";
import { Form } from "semantic-ui-react";





function App() {

  

  return (
    <Router>
      <div>
        <Navbar />
       
        {/* <Wrapper> */}
        <Switch>
          <Route exact path="/">
            {localStorage.getItem('user') ? <Redirect push to="/home" /> : <Login/>}
           
          </Route>
          <Route exact path="/home">
            {!localStorage.getItem('user') ? <Redirect push to="/" /> : <Homepage/>}
           
          </Route> 
          <Route exact path="/check-in/:id" component={Checkin}/>
          <Route exact path="/searchCheck-in" component={SeacrhCheckIn}/>
          <Route exact path="/event" component={Event}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/event/:id" component={EventDetail}/>
          <Route exact path = "/Login" component = {Login}/>
          <Route exact path="/bookmark" component={Bookmark}/>

          </Switch>

        {/* </Wrapper> */}
      </div>
      <Footer />  
    </Router>
  );
}


export default App;

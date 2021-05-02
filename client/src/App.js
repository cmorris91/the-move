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
import Logo from "./components/logo";


const styles = {
  logo: {
  display: "flex",
  justifyContent: "space-evenly",
  },

  img: {
    height: "100%",
    width: "100%"
  },

}
function App() {
  return (
    <Router>
      <div>
        <Navbar />
       <Logo/>
       
        {/* <Wrapper> */}
        <Switch>
          <Route exact path="/">{localStorage.getItem('user') ? <Redirect push to="/home" /> : <Login/>}</Route>
          <Route exact path="/home">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <Homepage/>}</Route> 
          <Route exact path="/check-in/:id">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <Checkin/>}</Route>
          <Route exact path="/searchCheck-in"> {!localStorage.getItem('user') ? <Redirect push to="/" /> : <SeacrhCheckIn/>}</Route>
          <Route exact path="/event">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <Event/>}</Route>
          <Route exact path="/create">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <Create/>}</Route>
          <Route exact path="/event/:id">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <EventDetail/>}</Route>
          <Route exact path="/bookmark">{!localStorage.getItem('user') ? <Redirect push to="/" /> : <Bookmark/>}</Route>

          </Switch>

        {/* </Wrapper> */}
      </div>
      <Footer />  
    </Router>
  );
}


export default App;

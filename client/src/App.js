import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Checkin from "./pages/checkin";
import Create from "./pages/create"
import Event from "./pages/event"
import LogIn from "./pages/LogIn";
import SeacrhCheckIn from "../src/components/SearchCheckIn"
import EventDetail from "./pages/EventDetails"







function App() {
  return (
    <Router>
      <div>
        <Navbar />
       
        {/* <Wrapper> */}
        <Switch>
          <Route exact path={["/"]}>
            <LogIn />
          </Route>
          <Route exact path="/home" component={Homepage}/> 
          <Route exact path="/check-in/:id" component={Checkin}/>
          <Route exact path="/searchCheck-in" component={SeacrhCheckIn}/>
          <Route exact path="/event" component={Event}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/event/:id" component={EventDetail}/>
          <Route exact path = "/Login" component = {LogIn}/>

          </Switch>
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}

export default App;

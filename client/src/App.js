import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Checkin from "./pages/checkin";
import Create from "./pages/create"
import Login from "./pages/login";
import Event from "./pages/event"
import SeacrhCheckIn from "../src/components/SearchCheckIn"





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/"  component={Login}/>
          <Route exact path="/home" component={Homepage}/> 
          <Route exact path="/check-in/:id" component={Checkin}/>
          <Route exact path="/searchCheck-in" component={SeacrhCheckIn}/>
          <Route exact path="/event" component={Event}/>
          <Route exact path="/create" component={Create}/>
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}

export default App;

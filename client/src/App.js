import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
//import from pages and componente files
>>>>>>> 2e68f92c1f71bfd075752368549868a96f4113c8

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/home" component={Homepage}/>
          <Route exact path="/check-in" component={CheckIn}/>
          <Route exact path="/event" component={Event}/>
          <Route exact path="/create" component={Create}/>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

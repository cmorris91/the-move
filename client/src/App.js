import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import from pages and componente files

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

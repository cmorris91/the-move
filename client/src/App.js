import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Navbar from "./components/Navbar";

//import from pages and componente files

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/home" component={Homepage}/>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./Jumbotron.js"
import Nav from "./Navbar.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
       <Jumbotron/>
      </div>
    );
  }
}

export default App;

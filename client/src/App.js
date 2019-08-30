import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Lobby from "./Components/Lobby";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";

import dbConnect from "./Components/Database/connections"

class App extends Component {

  render() {
    return (
      <Container style={{ padding: "2rem 0" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lobby" component={Lobby} />
          </Switch>
        </Router>
      </Container>

      // <div className="App">
      //   <header className="App-header">
      //     <Player />
      //     {/* <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}

      //     <Search />
      //   </header>
      // </div>
    );
  }
}

export default App;

import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Item from "./components/ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Item}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

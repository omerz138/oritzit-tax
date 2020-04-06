import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import OfficeServices from "./components/OfficeServices";
import Tips from "./components/Tips";
import QA from "./components/QA";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/office-services">
          <OfficeServices />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
        <Route path="/QA">
          <QA />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

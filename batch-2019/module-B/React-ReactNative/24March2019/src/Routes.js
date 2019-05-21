import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Index from "./components/index";
import About from "./components/about";
import Contact from "./components/contact";
import AppComponent from './App'


function AppRouter() {
  return (
    <Router>
        <div>
        <Route path="/" exact component={AppComponent} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;
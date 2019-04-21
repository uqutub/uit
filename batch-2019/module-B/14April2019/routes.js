import React, { Component } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import App from "./App";
import Todo from "./todo";
export default class Routes extends Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={App} />
        <Route path="/todo" component={Todo} />
      </NativeRouter>
    );
  }
}

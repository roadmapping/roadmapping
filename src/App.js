import React from "react";
import "./App.scss";
import { hot } from "react-hot-loader/root";
import Route from "react-router-dom";
//import { BrowserRouter }

import NavComponent from "../client/components/NavComponent";
import Dashboard from "../client/components/Dashboard.jsx";
class App extends React.Component {
  render() {
    return (
      <>
        <NavComponent />
        <Dashboard />
      </>
    );
  }
}

export default hot(App);

import React from "react";
import "./App.scss";
import { hot } from "react-hot-loader/root";

import NavComponent from "../client/components/NavComponent";

class App extends React.Component {
  render() {
    return (
      <>
        <NavComponent />
      </>
    );
  }
}

export default hot(App);

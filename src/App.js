import React from "react";
import "./App.scss";
import { hot } from "react-hot-loader/root";

import { Container } from "react-bootstrap";

import NavComponent from "../client/components/NavComponent";
import SignInComponent from "../client/components/SignInComponent";

class App extends React.Component {
  render() {
    return (
      <Container>
        <NavComponent />
        <SignInComponent />
      </Container>
    );
  }
}

export default hot(App);

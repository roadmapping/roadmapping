import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Route from "react-router-dom";
//import { BrowserRouter }

import { Container } from "react-bootstrap";
// import AuthContainer from '../containers/AuthContainer';

import NavComponent from "../client/components/NavComponent";
import SignInComponent from "../client/components/SignInComponent";

class App extends React.Component {
  render() {
    return (
      <Container>
        <NavComponent />
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link> | <Link to="/goals">Goals</Link> |{" "}
          <Link to="/appdragdropdemo">AppDragDropDemo</Link>
        </nav>
        <SignInComponent />
      </Container>
    );
  }
}

export default hot(App);

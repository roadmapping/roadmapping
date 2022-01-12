import React from "react";
import "./App.scss";
// import { hot } from "react-hot-loader/root";
import Route from "react-router-dom";
//import { BrowserRouter }

import { Container } from "react-bootstrap";
import AuthContainer from "../client/containers/AuthContainer";

import NavComponent from "../client/components/NavComponent";
import SignInComponent from "../client/components/SignInComponent";

import {Provider} from 'react-redux';
import store from '../client/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Container>
        <NavComponent />
        {/* <SignInComponent /> */}
        <AuthContainer />
      </Container>
      </Provider>
    );
  }
}

export default App;

// export default hot(App);

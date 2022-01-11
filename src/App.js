import React from "react";
import { hot } from 'react-hot-loader/root';

import Nav from "../client/components/Nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
          <h1>
            Hello
          </h1>
      </div>
    );
  }
}

export default hot(App);
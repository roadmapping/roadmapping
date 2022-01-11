import React from "react";
import { hot } from "react-hot-loader/root";
import Homepage from "./client/components/Dashboard.jsx";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <Homepage />
      </div>
    );
  }
}

export default hot(App);

import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { Flip } from "./app";
class Room extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Flip />
      </Provider>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));

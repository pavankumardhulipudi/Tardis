/**
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";
import Store from "./redux/store";
import Navigator from "./navigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}

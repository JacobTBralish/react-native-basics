/** @format */
import React from "react";
import { Provider } from "react-redux";
import congifureStore from "./src/store/configureStore";

// The store is a function so it must be invoked while passing it over to the provider
const store = congifureStore();
/* This must be a function because the registerComponent expects a function that returns a function 
that returns the component*/
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => RNRedux);

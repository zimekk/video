import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { handleActions } from "redux-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { increment } from "./actions";
import App from "./containers/App";

const reducer = handleActions(
  new Map([[increment, (state) => ({ ...state, counter: state.counter + 1 })]]),
  {
    counter: 1,
  }
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement("div"))
);

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { handleActions } from "redux-actions";
// import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { increment } from "./actions";
import App from "./containers/App";

const reducer = handleActions(
  new Map([[increment, (state) => ({ ...state, counter: state.counter + 1 })]]),
  {
    counter: 1,
  },
);

const store = createStore(reducer, applyMiddleware(thunk));

const root = createRoot(
  document.body.appendChild(document.createElement("div")),
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

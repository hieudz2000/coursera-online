import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ChangeRouter from "./component/changeRouter";
import store from "./redux/store";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChangeRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

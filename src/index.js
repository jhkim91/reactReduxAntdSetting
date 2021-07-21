import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import CusAlert from "./components/Alerts/CusAlert";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CusAlert />

      <BrowserRouter>
        <Switch>
          <Route path="/main" render={(props) => <Main {...props} />} />
          <Redirect from="/" to="/main" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

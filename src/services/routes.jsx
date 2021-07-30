import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login/index.jsx";
import Main from "../pages/main/index.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/portal">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

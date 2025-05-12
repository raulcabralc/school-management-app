import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from "../pages/Login/indexLogin";
import Page404 from "../pages/Page404/index404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/closed" isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

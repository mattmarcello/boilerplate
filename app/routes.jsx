import React from "react";
import { Route } from "react-router";

import Application from "route-handlers/Application";
import Login from "route-handlers/Login";

export default function(store) {
  return (
    <Route name="app" path="/" component={ Application }>
      <Route name="login" path="login" component={ Login }/>
    </Route>
  )
}


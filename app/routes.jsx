import React from "react";
import { Route } from "react-router";

import Application from "route-handlers/Application";
import Login from "route-handlers/Login";

//TODO: research necessity of Object.assign polyfill

//TODO: switch to es6 export

module.exports = (
  <Route name="app" path="/" component={ Application }>
    <Route name="login" path="login" component={ Login }/>
  </Route>
)

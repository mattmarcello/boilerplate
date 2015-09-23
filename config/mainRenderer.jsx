
import React from "react";
import { Router } from "react-router";
import routes from "../app/routes";

import createStore from "../app/redux/store";


const store = createStore();

export function renderDevTools() {
  if (__DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    return <DebugPanel top right bottom key="debugPanel">
      <DevTools store={ store } monitor={ LogMonitor }>
      </DevTools>
    </DebugPanel>
  }
}
//TODO: will need to wrap in redux provider element

React.render((
  <Router>
    { routes }
  </Router>
), document.getElementById("content"));



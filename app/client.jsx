
import "babel/polyfill";
import React from "react";
import BrowserHistory from "react-router/lib/BrowserHistory";
import Location from "react-router/lib/Location";
import queryString from "query-string";
import createStore from "./redux/store";
import ApiClient from "./helpers/ApiClient";
import universalRouter from "./helpers/universalRouter";

const history = new BrowserHistory();
const client = new ApiClient();

const dest =  document.getElementById('content');
const store = createStore(client, window.__data);
const search = document.location.search;
const query = search && queryString.parse(search); // TODO: research the specifics of this
const location = new Location(document.location.pathname, query);

universalRouter(location, history, store)
  .then(({ component }) => {
    React.render(component, dest);
    if (__DEVTOOLS__) {
console.log("devtois");
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      React.render(<div>
        { component }
        <DebugPanel top right bottom key="debugPanel">
          <DevTools store={ store } monitor={ LogMonitor } />
        </DebugPanel>
      </div>, dest);

    }
  })


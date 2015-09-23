
import React from "react";
import { Router } from "react-router";
import routes from "../app/routes";


//TODO: will need to wrap in redux provider element
React.render((
  <Router>
    { routes }
  </Router>
), document.getElementById("content"));


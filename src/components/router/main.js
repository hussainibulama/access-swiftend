import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import FancyRoute from "./fancyroutes";

const Main = (props) => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <FancyRoute key={i} {...route} />
      ))}
    </Switch>
  </Router>
);

export default Main;

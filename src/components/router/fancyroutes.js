import React from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "./fancyroutes.scss";

class FancyRoute extends React.Component {
  componentWillMount() {
    nprogress.configure({
      easing: "ease",
      speed: 2000,
      trickleRate: 0.12,
      trickleSpeed: 800,
    });
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default FancyRoute;

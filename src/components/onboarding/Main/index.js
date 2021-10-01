import React, { Component } from "react";
import Main from "./main";
import "../login.scss";

class Index extends Component {
  render() {
    return (
      <>
        <div className="login-app">
          <Main />
        </div>
      </>
    );
  }
}
export default Index;

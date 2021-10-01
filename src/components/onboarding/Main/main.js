import React, { Component } from "react";
import Input from "../../FormData/input";
import Button from "../../FormData/button";
import logo from "../../images/access.png";
import Webcam from "react-webcam";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      imageSrc: "",
      time: 1,
      start: false,
      capture: false,
      bvn: "",
      type: "",
      amount: "",
      acc: "",
    };
    this.myRef = React.createRef();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  async capt() {
    if (this.state.time === 4) {
      let imageSrcs = this.myRef.current.getScreenshot();
      this.setState({ imageSrc: imageSrcs });
      this.setState({ capture: true });
      clearInterval(this.interval);
    } else {
      this.state.time += 1;
      this.setState({ time: this.state.time });
    }
  }
  async capture() {
    if (this.state.capture === true) {
      this.setState({ capture: false });
      this.setState({ start: false });
      this.setState({ time: 1 });
    } else {
      this.setState({ start: true });
      this.interval = setInterval(() => this.capt(), 1000);
    }
  }
  async next(data) {
    if (data === "next") {
      this.setState({ page: this.state.page + 1 });
    } else {
      this.setState({ page: this.state.page - 1 });
    }
  }
  render() {
    const videoConstraints = {
      facingMode: "user",
    };
    if (this.state.page === 1) {
      return (
        <>
          <div className="log-arranger">
            <div className="log-centralizer">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="log-container">
                <h1 className="general">Welcome Back</h1>
                <p className="general">Enter your BVN Or phone number</p>
                <form onSubmit={this.handleSubmit}>
                  <Input
                    type="text"
                    name="bvn"
                    onChange={this.handleChange}
                    value={this.state.bvn ? this.state.bvn : ""}
                    className="login-input"
                    placeholder="BVN or Phone"
                    required
                  />
                  {/* 
                   <Input
                  type="text"
                  className="login-input"
                  placeholder="Password"
                  required
                />
                <span className="span-show">Show</span>
                */}

                  <Button
                    onClick={() => this.next("next")}
                    className="login-button"
                    value="Continue"
                  />
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.page === 2) {
      return (
        <>
          <div className="log-arranger">
            <div className="log-centralizer">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="log-container">
                <div className="imagetaker">
                  <div className="imager">
                    {this.state.start === true && this.state.time !== 4 && (
                      <span className="counter">{this.state.time}</span>
                    )}

                    {this.state.capture === false && (
                      <Webcam
                        audio={false}
                        imageSmoothing={true}
                        ref={this.myRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                      />
                    )}
                    {this.state.capture === true && (
                      <img src={this.state.imageSrc} alt="image" />
                    )}
                  </div>
                  <br></br>
                  <br></br>

                  <button onClick={() => this.capture()}>
                    {this.state.capture === true ? "Retake" : "Capture"}
                  </button>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <Input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.bvn ? this.state.bvn : ""}
                    name="bvn"
                    disabled
                    className="login-input"
                    placeholder="BVN or Phone"
                    required
                  />
                  {/* 
                   <Input
                  type="text"
                  className="login-input"
                  placeholder="Password"
                  required
                />
                <span className="span-show">Show</span>
                */}
                  <div className="double-button">
                    <Button
                      onClick={() => this.next("back")}
                      className="login-button fade"
                      value="Back"
                    />
                    <Button
                      onClick={() => this.next("next")}
                      className="login-button"
                      value="Verify"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.page === 3) {
      return (
        <>
          <div className="log-arranger">
            <div className="log-centralizer">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="log-container">
                <p className="general">What do you want to do?</p>
                <form onSubmit={this.handleSubmit}>
                  <select
                    name="type"
                    onChange={this.handleChange}
                    className="login-input"
                  >
                    <option>{this.state.type ? this.state.type : ""} </option>
                    <option>Withdraw</option>
                    <option>Transfer</option>
                  </select>

                  {/* 
                   <Input
                  type="text"
                  className="login-input"
                  placeholder="Password"
                  required
                />
                <span className="span-show">Show</span>
                */}

                  <div className="double-button">
                    <Button
                      onClick={() => this.next("back")}
                      className="login-button fade"
                      value="Back"
                    />
                    <Button
                      onClick={() => this.next("next")}
                      className="login-button"
                      value="Continue"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.page === 4) {
      return (
        <>
          <div className="log-arranger">
            <div className="log-centralizer">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="log-container">
                <p className="general">
                  How much do you want to {this.state.type.toLocaleLowerCase()}
                </p>

                <form onSubmit={this.handleSubmit}>
                  {this.state.type === "Withdraw" && (
                    <>
                      <Input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.amount ? this.state.amount : ""}
                        name="amount"
                        className="login-input"
                        placeholder="Enter Amount"
                        required
                      />
                    </>
                  )}
                  {this.state.type === "Transfer" && (
                    <>
                      <Input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.acc ? this.state.acc : ""}
                        name="acc"
                        className="login-input"
                        placeholder="Enter Recipeint Account Number"
                        required
                      />
                      <Input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.amount ? this.state.amount : ""}
                        name="amount"
                        className="login-input"
                        placeholder="Enter Amount"
                        required
                      />
                    </>
                  )}

                  {/* 
                   <Input
                  type="text"
                  className="login-input"
                  placeholder="Password"
                  required
                />
                <span className="span-show">Show</span>
                */}

                  <div className="double-button">
                    <Button
                      onClick={() => this.next("back")}
                      className="login-button fade"
                      value="Back"
                    />
                    <Button
                      onClick={() => this.next("next")}
                      className="login-button"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.page === 5) {
      return (
        <>
          <div className="log-arranger">
            <div className="log-centralizer">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="log-container">
                <h1 className="general">Congratulations </h1>
                <p className="general">
                  {this.state.type}&nbsp;of&nbsp;&#8358;{this.state.amount}
                  &nbsp;successful{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Login;

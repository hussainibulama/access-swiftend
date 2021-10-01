import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <>
        <button
          type={this.props.type}
          name={this.props.name}
          onClick={this.props.onClick}
          className={this.props.className}
          style={this.props.style}
          disabled={this.props.disabled}
        >
          {this.props.value}
        </button>
      </>
    );
  }
}
export default Button;

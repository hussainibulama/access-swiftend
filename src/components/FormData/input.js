import React, { Component } from "react";
class Input extends Component {
  render() {
    return (
      <>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          disabled={this.props.disabled}
          className={this.props.className}
          maxLength={this.props.maxlength}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          style={this.props.style}
        />
      </>
    );
  }
}
export default Input;

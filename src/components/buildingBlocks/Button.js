import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        // className={`button button__button ${this.props.className}`}
        onClick={this.handleClick.bind(this)}>
        {this.props.label}
      </button>
    );
  }

  handleClick() {
    this.props.clickHandler();
  }
}

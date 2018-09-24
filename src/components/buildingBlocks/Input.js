import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  render() {
    return (
      <div className={`input__container--${this.props.label}`}>
        <label
          className={`input__label--${this.props.label}`}>
          {this.props.label}
          </label>
        <input
          className={`input__input--${this.props.label}`}
          type="text"
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }

  handleChange(event) {
    this.props.inputChanged(event.target.value);
  }
}
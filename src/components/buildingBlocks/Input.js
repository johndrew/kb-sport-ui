import React, { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  render() {
    return (
      <div className={`input__container--${this.props.label}`}>
        <label
          className="mdl-textfield__label input__label">
          {/* className={`label input__label--${this.props.label}`}> */}
          {this.props.label}
          </label>
        <input
          className={`mdl-textfield__input input__input input__input--${this.props.label}`}
          // className={`input__input--${this.props.label} input`}
          type="text"
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }

  handleChange(event) {
    this.props.inputChanged(event.target.value);
  }
}
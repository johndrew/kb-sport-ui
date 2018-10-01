import React, { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  render() {
    return (
      <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label input__container--${this.props.label}`}>
        <input
          id={this.props.label}
          className={`mdl-textfield__input input__input input__input--${this.props.label}`}
          type="text"
          onChange={this.handleChange.bind(this)} />
        <label
          className="mdl-textfield__label input__label"
          for={this.props.label}>
          {this.props.label}
        </label>
      </div>
    )
  }

  handleChange(event) {
    this.props.inputChanged(event.target.value);
  }
}
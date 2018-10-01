import React, { Component } from 'react';
import './Dropdown.scss';

export default class Dropdown extends Component {
  renderOption(value, className) {
    return <option
      key={value}
      className={`dropdown__option--${value} ${className}`}>
      {value}
    </option>;
  }

  render() {
    let options = [this.renderOption(this.props.label, 'dropdown__selectOption')];
    options = options.concat(this.props.options.map(this.renderOption));

    return (
      <div className="dropdown__container">
        <select
          className="dropdown__select"
          onChange={this.handleChange.bind(this)}>
          {options}
        </select>
        <i className="fas fa-angle-down dropdown__downIcon"></i>
      </div>
    );
  }

  handleChange(event) {
    this.props.optionChanged(event.target.value);
  }
}

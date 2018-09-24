import React, { Component, Fragment } from 'react';

export default class Dropdown extends Component {
  renderOption(value) {
    return <option
      key={value}
      className={`dropdown__option--${value}`}>
      {value}
      </option>;
  }

  render() {
    let options = [];
    options.push(this.renderOption('Select'));
    options = options.concat(this.props.options.map(this.renderOption));

    return (
      <Fragment>
        <select
          className="dropdown__dropdown"
          onChange={this.handleChange.bind(this)}>
          {options}
        </select>
      </Fragment>
    )
  }

  handleChange(event) {
    this.props.optionChanged(event.target.value);
  }
}

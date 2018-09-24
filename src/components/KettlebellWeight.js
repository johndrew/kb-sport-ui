import React, { Component } from 'react';
import Dropdown from './buildingBlocks/Dropdown';

export default class KettlebellWeight extends Component {
  get kettlebellWeightTypes() {
    return [
      8,
      12,
      16,
      20,
      24,
      28,
      32,
    ];
  }

  render() {
    return (
      <div className="kettlebellWeight__container">
        <label>{this.props.label}</label>
        <Dropdown
          options={this.kettlebellWeightTypes}
          optionChanged={this.handleChange.bind(this)} />
      </div>
    )
  }

  handleChange(value) {
    const cleanedValue = parseInt(value, 10);
    this.props.optionChanged(cleanedValue);
  }
}

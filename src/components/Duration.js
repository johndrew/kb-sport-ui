import React, { Component } from 'react';
import Dropdown from './buildingBlocks/Dropdown';

export default class Duration extends Component {
  get durationTypes() {
    return [
      '5min',
      '10min',
    ];
  }

  render() {
    return (
      <div className="duration__container">
        <label>{this.props.label}</label>
        <Dropdown options={this.durationTypes} optionChanged={this.props.optionChanged} />
      </div>
    )
  }
}

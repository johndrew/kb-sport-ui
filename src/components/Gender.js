import React, { Component } from 'react';
import Dropdown from './buildingBlocks/Dropdown';

export default class Gender extends Component {
  get genderTypes() {
    return [
      'women',
      'men',
    ];
  }

  render() {
    return (
      <div className="gender__container">
        <label>{this.props.label}</label>
        <Dropdown options={this.genderTypes} optionChanged={this.props.optionChanged} />
      </div>
    )
  }
}

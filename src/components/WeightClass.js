import React, { Component } from 'react';
import Dropdown from './buildingBlocks/Dropdown';

export default class WeightClass extends Component {
  get weightClassTypes() {
    return [
      'Strawweight',
      'Flyweight',
      'Bantamweight',
      'Featherweight',
      'Lightweight',
      'Super Lightweight',
      'Welterweight',
      'Super Welterweights',
      'Middleweight',
      'Super Middleweight',
      'Cruiserweight',
      'Heavyweight',
      'Super Heavyweight',
    ];
  }

  render() {
    return (
      <div className="weightClass__container">
        <label>{this.props.label}</label>
        <Dropdown options={this.weightClassTypes} optionChanged={this.props.optionChanged} />
      </div>
    )
  }
}

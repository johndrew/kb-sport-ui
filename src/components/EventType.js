import React, { Component } from 'react';
import Dropdown from './buildingBlocks/Dropdown';

export default class EventType extends Component {
  get eventTypeTypes() {
    return [
      'Long Cycle',
      'Jerk',
      'Snatch'
    ];
  }

  render() {
    return (
      <div className="gender__container">
        <label>{this.props.label}</label>
        <Dropdown options={this.eventTypeTypes} optionChanged={this.props.optionChanged} />
      </div>
    )
  }
}

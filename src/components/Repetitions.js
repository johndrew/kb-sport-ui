import React, { Component } from 'react';
import Input from './buildingBlocks/Input';

export default class WeightClass extends Component {
  render() {
    return (
      <div className="weightClass__container">
        <Input label={this.props.label} inputChanged={this.handleChange.bind(this)} />
      </div>
    )
  }

  handleChange(value) {
    const cleanedValue = parseInt(value, 10);
    this.props.inputChanged(cleanedValue);
  }
}

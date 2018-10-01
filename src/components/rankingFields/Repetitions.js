import React, { Component } from 'react';
import Input from '../buildingBlocks/Input';
import RankingField from '../wrappers/RankingField';

export default class WeightClass extends Component {
  render() {
    return (
      <RankingField>
        <Input label={this.props.label} inputChanged={this.handleChange.bind(this)} />
      </RankingField>
    )
  }

  handleChange(value) {
    const cleanedValue = parseInt(value, 10);
    this.props.inputChanged(cleanedValue);
  }
}

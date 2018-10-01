import React, { Component } from 'react';
import Dropdown from '../buildingBlocks/Dropdown';
import RankingField from '../wrappers/RankingField';
import '../../styles/label.scss';

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
      <RankingField>
        <Dropdown
          options={this.kettlebellWeightTypes}
          optionChanged={this.handleChange.bind(this)}
          {...this.props} />
      </RankingField>
    )
  }

  handleChange(value) {
    const cleanedValue = parseInt(value, 10);
    this.props.optionChanged(cleanedValue);
  }
}

import React, { Component } from 'react';
import Dropdown from '../buildingBlocks/Dropdown';
import RankingField from '../wrappers/RankingField';
import '../../styles/label.scss';

export default class Duration extends Component {
  get durationTypes() {
    return [
      '5min',
      '10min',
    ];
  }

  render() {
    return (
      <RankingField>
        <Dropdown
          options={this.durationTypes}
          optionChanged={this.props.optionChanged}
          {...this.props} />
      </RankingField>
    )
  }
}

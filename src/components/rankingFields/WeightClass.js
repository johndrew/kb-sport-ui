import React, { Component } from 'react';
import Dropdown from '../buildingBlocks/Dropdown';
import RankingField from '../wrappers/RankingField';
import '../../styles/label.scss';

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
      <RankingField>
        <Dropdown
          options={this.weightClassTypes}
          optionChanged={this.props.optionChanged}
          {...this.props} />
      </RankingField>
    )
  }
}

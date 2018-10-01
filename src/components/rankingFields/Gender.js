import React, { Component } from 'react';
import Dropdown from '../buildingBlocks/Dropdown';
import RankingField from '../wrappers/RankingField';
import '../../styles/label.scss';

export default class Gender extends Component {
  get genderTypes() {
    return [
      'women',
      'men',
    ];
  }

  render() {
    return (
      <RankingField>
        <Dropdown
          options={this.genderTypes}
          optionChanged={this.props.optionChanged}
          {...this.props} />
      </RankingField>
    )
  }
}

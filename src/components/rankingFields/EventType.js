import React, { Component } from 'react';
import Dropdown from '../buildingBlocks/Dropdown';
import RankingField from '../wrappers/RankingField';
import '../../styles/label.scss';

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
      <RankingField>
        <Dropdown
          options={this.eventTypeTypes}
          optionChanged={this.props.optionChanged}
          {...this.props} />
      </RankingField>
    )
  }
}

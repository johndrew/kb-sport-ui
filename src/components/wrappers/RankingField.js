import React, { Component } from 'react';
import './RankingField.scss';

export default class RankingField extends Component {
  render() {
    return (
      <div className="rankingField__container">
        {this.props.children}
      </div>
    );
  }
}
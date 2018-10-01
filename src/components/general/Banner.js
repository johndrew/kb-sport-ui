import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner__container">
        {this.props.children}
      </div>
    );
  }
}

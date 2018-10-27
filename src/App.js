import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Icon from './components/presentational/Icon/Icon';

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="app__content">
          <h1 className="app__title">Deck the Bells</h1>
          <Icon />
        </div>
        <div className="app__footer"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);

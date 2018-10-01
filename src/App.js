import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import RankingDemoScreen from './containers/RankingDemoScreen';

class App extends Component {
  render() {
    return (
      <div className="App__container">
        <RankingDemoScreen />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);

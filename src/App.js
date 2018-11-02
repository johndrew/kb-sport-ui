import React, { Component } from 'react';
import './App.scss';
// import Icon from './components/presentational/Icon/Icon';
import EventsScreen from './containers/EventsScreen/EventsScreen';

export default class App extends Component {

  render() {

    return (
      <div className="app__container">
        <div className="app__content">
          <h1 className="app__title">Deck the Bells</h1>
          {/* <Icon /> */}
          <EventsScreen />
        </div>
        <div className="app__footer"></div>
      </div>
    );
  }
}

import React, { Component, Fragment } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import EventsScreen from './containers/EventsScreen/EventsScreen';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import LiftersScreen from './containers/LiftersScreen/LiftersScreen';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {

  render() {

    return (
      <div className="app__container">
        <div className="app__content">
          <Router>
            <Fragment>
              <ToastContainer />
              <h1
                className="app__title">
                <Link to="/">Deck the Bells</Link>
              </h1>
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/events" component={EventsScreen}/>
              <Route path="/lifters" component={LiftersScreen}/>
            </Fragment>
          </Router>
        </div>
        <div className="app__footer"></div>
      </div>
    );
  }
}

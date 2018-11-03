import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventsIcon from '../../components/presentational/EventsIcon/EventsIcon';
import LiftersIcon from '../../components/presentational/LiftersIcon/LiftersIcon';
import './HomeScreen.scss';

export default class HomeScreen extends Component {
    render() {
        return (
            <div className="homeScreen__container">
                <Link to="/events"><EventsIcon /></Link>
                <Link to="/lifters"><LiftersIcon /></Link>
            </div>
        );
    }
}
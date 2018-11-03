import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import './EventsIcon.scss';

export default class EventsIcon extends Component {
    render() {
        return (
            <Icon
                className="eventsIcon__container">
                <img src="/events_icon.png" alt="events"/>
            </Icon>
        );
    }
}
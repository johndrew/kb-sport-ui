import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import './EventsIcon.scss';

export default class EventsIcon extends Component {
    render() {
        return (
            <Icon
                className={`eventsIcon__container ${this.props.className}`}>
                <img src="/events_icon.png" alt="events"/>
                <h2 className="eventsIcon__label">Events</h2>
            </Icon>
        );
    }
}
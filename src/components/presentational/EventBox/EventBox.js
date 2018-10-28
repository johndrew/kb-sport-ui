import React, { Component } from 'react';
import Box from '../Box/Box';
import './EventBox.scss';

export default class EventBox extends Component {

    get durationLabel() {
        switch (this.props.event.get('duration')) {
            case '5min':
                return '5"';
            case '10min':
                return '10"';
            default:
                return '';
        }
    }

    render() {

        return (
            <Box>
                <p className="durationLabel">{this.durationLabel}</p>
                <p className="typeLabel">{this.props.event.get('type')}</p>
            </Box>
        );
    }
}
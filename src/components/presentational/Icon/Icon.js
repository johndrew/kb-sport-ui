import React, { Component } from 'react';
import './Icon.scss';

export default class Icon extends Component {
    render() {
        return (
            <div className="icon__container">
                {this.props.children}
            </div>
        );
    }
}
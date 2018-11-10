import React, { Component } from 'react';
import './Box.scss';

export default class Box extends Component {

    render() {
        let className = 'box__container';
        if (this.props.className) className += ` ${this.props.className}`;

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
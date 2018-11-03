import React, { Component } from 'react';
import './Icon.scss';

export default class Icon extends Component {
    render() {
        const className = `icon__container ${this.props.className}`;
        
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
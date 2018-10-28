import React, { Component } from 'react';
import './Box.scss';

export default class Box extends Component {

    render() {

        return (
            <div className="box__container">
                {this.props.children}
            </div>
        );
    }
}
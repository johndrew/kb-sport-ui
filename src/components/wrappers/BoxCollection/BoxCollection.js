import React, { Component } from 'react';
import './BoxCollection.scss';

export default class BoxCollection extends Component {

    render() {

        return (
            <div className="boxCollection__container">
                {this.props.children}
            </div>
        );
    }
}
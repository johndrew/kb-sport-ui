import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import './LiftersIcon.scss';

export default class LiftersIcon extends Component {

    render() {

        return (
            <Icon
                className={`liftersIcon__container ${this.props.className}`}>
                <img src="/lifters_icon.png" alt="lifters"/>
                <h2 className="liftersIcon__label">Lifters</h2>
            </Icon>
        );
    }
}
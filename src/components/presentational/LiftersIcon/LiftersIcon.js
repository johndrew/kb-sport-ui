import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import './LiftersIcon.scss';

export default class LiftersIcon extends Component {

    render() {

        return (
            <Icon
                className="liftersIcon__container">
                <img src="/lifters_icon.png" alt="lifters"/>
            </Icon>
        );
    }
}
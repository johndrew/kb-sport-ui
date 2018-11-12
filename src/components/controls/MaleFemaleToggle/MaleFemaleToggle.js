import React, { Component } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './MaleFemaleToggle.scss';

export default class MaleFemaleToggle extends Component {

    render() {

        return (
            <div className="maleFemaleToggle__container">
                <Toggle
                    icons={{ checked: this.renderFemaleIcon, unchecked: this.renderMaleIcon }}
                    onChange={this.props.toggled}/>
            </div>
        );
    }

    get renderFemaleIcon() {
        return <p className="maleFemaleToggle__femaleIcon">F</p>;
    }

    get renderMaleIcon() {
        return <p className="maleFemaleToggle__maleIcon">M</p>;
    }
}
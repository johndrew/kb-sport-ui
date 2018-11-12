import React, { Component } from 'react';

export default class LifterDisplay extends Component {

    render() {

        return (
            <div onClick={this.props.lifterSelected}>
                <p
                    className="lifterDisplay__label--gender">
                    {this.genderLabel}
                </p>
                <div className="lifterDisplay__nameContainer">
                    <p
                        className="lifterDisplay__label--firstName">
                        {this.props.lifter.get('firstName')}
                    </p>
                    <p
                        className="lifterDisplay__label--lastName">
                        {this.props.lifter.get('lastName')}
                    </p>
                </div>
            </div>
        );
    }

    get genderLabel() {
        switch (this.props.lifter.get('gender')) {
            case 'men':
                return 'M';
            case 'women':
                return 'F';
            default:
                return '';
        }
    }
}
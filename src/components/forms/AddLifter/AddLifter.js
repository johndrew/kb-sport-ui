import React, { Component } from 'react';
import { toast } from 'react-toastify';
import liftersService from '../../../services/liftersService';
import './AddLifter.scss';

export default class AddLifter extends Component {

    constructor(args) {

        super(args);

        this.state = {
            firstName: null,
            lastName: null,
            gender: null,
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.addLifter = this.addLifter.bind(this);
    }

    render() {

        return (
            <div className="addLifter__container">
                <div className="addLifter__inputContainer">
                    <label className="addLifter__label">First Name:</label>
                    <input type="text" onChange={this.handleFirstNameChange} />
                </div>
                <div className="addLifter__inputContainer">
                    <label className="addLifter__label">Last Name:</label>
                    <input type="text" onChange={this.handleLastNameChange} />
                </div>
                <div className="addLifter__inputContainer">
                    <label className="addLifter__label">Gender:</label>
                    <select
                        className="addLifter__durationDropdown"
                        onChange={this.handleGenderChange}>
                        <option className="addLifter__typeOption" value="">Select</option>
                        <option className="addLifter__typeOption" value="women">Female</option>
                        <option className="addLifter__typeOption" value="men">Male</option>
                    </select>
                </div>
                <div className="addLifter__buttonContainer">
                    <button
                        onClick={this.addLifter}>
                        Add Lifter
                </button>
                </div>
            </div>
        );
    }

    handleFirstNameChange(event) {

        this.setState({
            firstName: event.target.value,
        });
    }
    
    handleLastNameChange(event) {

        this.setState({
            lastName: event.target.value,
        });
    }

    handleGenderChange(event) {

        this.setState({
            gender: event.target.value,
        });
    }

    addLifter() {

        liftersService.addLifter(this.state)
            .then(() => toast('Lifter added successfully'))
            .catch((err) => toast(err.message));
        this.props.addFinish();
    }
}
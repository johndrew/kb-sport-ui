import React, { Component } from 'react';
import { toast } from 'react-toastify';
import eventsService from '../../../services/eventsService';
import './AddEvent.scss';

export default class AddEvent extends Component {

    constructor(args) {

        super(args);

        this.state = {
            type: null,
            duration: null,
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.close = this.close.bind(this);
    }

    render() {

        return (
            <div className="addEvent__container">
                <div className="addEvent__dropdownContainer">
                    <label className="addEvent__label">Event Type:</label>
                    <select
                        className="addEvent__typeDropdown"
                        onChange={this.handleTypeChange}>
                        <option className="addEvent__typeOption" value="">Select</option>
                        <option className="addEvent__typeOption" value="Jerk">Jerk</option>
                        <option className="addEvent__typeOption" value="Long Cycle">Long Cycle</option>
                        <option className="addEvent__typeOption" value="Snatch">Snatch</option>
                    </select>
                </div>
                <div className="addEvent__dropdownContainer">
                    <label className="addEvent__label">Event Duration:</label>
                    <select
                        className="addEvent__durationDropdown"
                        onChange={this.handleDurationChange}>
                        <option className="addEvent__typeOption" value="">Select</option>
                        <option className="addEvent__typeOption" value="5min">5 Minutes</option>
                        <option className="addEvent__typeOption" value="10min">10 Minutes</option>
                    </select>
                </div>
                <div className="addEvent__buttonContainer">
                    <button
                        onClick={this.addEvent}>
                        Add Event
                </button>
                </div>
            </div>
        );
    }

    handleTypeChange(event) {

        this.setState({
            type: event.target.value,
        });
    }

    handleDurationChange(event) {

        this.setState({
            duration: event.target.value,
        });
    }

    close() {
        
        this.props.closeModal();
    }

    addEvent() {

        eventsService.addEvent(this.state.type, this.state.duration)
            .catch(err => toast(err.message));
        this.close();
    }
}
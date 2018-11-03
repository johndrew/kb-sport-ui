import React, { Component } from 'react';
import eventsService from '../../../services/eventsService';
import { toast } from 'react-toastify';

export default class DeleteEvent extends Component {

    constructor(args) {

        super(args);

        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {

        return (
            <div className="deleteEvent__container">
                <button
                    onClick={this.handleDelete}>
                    Delete Event
                </button>
            </div>
        );
    }

    handleDelete() {

        eventsService.deleteEvent(this.props.eventId)
            .catch(err => toast(err.message));
        this.props.closeModal();
    }
}
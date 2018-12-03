import React, { Component } from 'react';
import { toast } from 'react-toastify';
import liftersService from '../../../services/liftersService';

export default class DeleteLifter extends Component {

    constructor(args) {

        super(args);

        this.state = {
            disableDelete: this.props.isLifterRegistered,
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {

        return (
            <div className="deleteLifter__container">
                <button
                    onClick={this.handleDelete}>
                    Delete Lifter
                </button>
            </div>
        );
    }

    handleDelete() {

        if (this.state.disableDelete) {
            toast('Please unregister lifter from all events before deleting');
        } else {
            liftersService.deleteLifter(this.props.lifterId)
                .then(() => this.props.deleteFinish())
                .then(() => toast('Successfully deleted lifter'))
                .catch(err => toast(err.message));
        }
    }
}
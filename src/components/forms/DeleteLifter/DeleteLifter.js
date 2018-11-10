import React, { Component } from 'react';
import liftersService from '../../../services/liftersService';
import { toast } from 'react-toastify';

export default class DeleteLifter extends Component {

    constructor(args) {

        super(args);

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

        liftersService.deleteLifter(this.props.lifterId)
            .then(() => toast('Successfully deleted lifter'))
            .catch(err => toast(err.message));
        this.props.deleteFinish();
    }
}
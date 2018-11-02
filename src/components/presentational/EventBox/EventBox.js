import React, { Component, Fragment } from 'react';
import Box from '../Box/Box';
import './EventBox.scss';
import ModalWrapper from '../../wrappers/ModalWrapper/ModalWrapper';
import DeleteEvent from '../../forms/DeleteEvent/DeleteEvent';

export default class EventBox extends Component {

    constructor(args) {
    
        super(args);
    
        this.state = {
            modalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    get durationLabel() {
        switch (this.props.event.get('duration')) {
            case '5min':
                return '5"';
            case '10min':
                return '10"';
            default:
                return '';
        }
    }

    render() {

        return (
            <Fragment>
                <Box>
                    <p
                        className="durationLabel"
                        onClick={this.openModal}>
                        {this.durationLabel}
                    </p>
                    <p
                        className="typeLabel"
                        onClick={this.openModal}>
                        {this.props.event.get('type')}
                    </p>
                </Box>
                <ModalWrapper
                    open={this.state.modalOpen}
                    closeModal={this.closeModal}>
                    <DeleteEvent
                        eventId={this.props.event.get('eventId')}
                        closeModal={this.closeModal}/>
                </ModalWrapper>
            </Fragment>
        );
    }

    openModal() {

        this.setState({
            modalOpen: true,
        });
    }

    closeModal() {

        this.setState({
            modalOpen: false,
        });
    }
}
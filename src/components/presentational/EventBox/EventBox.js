import React, { Component, Fragment } from 'react';
import Box from '../Box/Box';
import './EventBox.scss';
import ModalWrapper from '../../wrappers/ModalWrapper/ModalWrapper';
import DeleteEvent from '../../forms/DeleteEvent/DeleteEvent';

export default class EventBox extends Component {

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
                    <ModalWrapper
                        triggerComponent={({ open }) => (
                            <Fragment>
                                <p
                                    className="durationLabel"
                                    onClick={open}>
                                    {this.durationLabel}
                                </p>
                                <p
                                    className="typeLabel"
                                    onClick={open}>
                                    {this.props.event.get('type')}
                                </p>
                            </Fragment>
                        )}>
                        {({ close }) =>
                            <DeleteEvent
                                eventId={this.props.event.get('eventId')}
                                deleteFinish={close}/>
                        }
                    </ModalWrapper>
                </Box>
            </Fragment>
        );
    }
}
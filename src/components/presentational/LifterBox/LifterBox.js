import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';
import Box from '../Box/Box';
import DeleteLifter from '../../forms/DeleteLifter/DeleteLifter';
import ModalWrapper from '../../wrappers/ModalWrapper/ModalWrapper';
import liftersService from '../../../services/liftersService';
import LifterDisplay from '../LifterDisplay/LifterDisplay';
import './LifterBox.scss';
import eventDetailsService from '../../../services/eventDetailsService';

export default class LifterBox extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            lifterUpdated: false,

            // lifterView is used to customize data about a lifter
            weight: this.props.lifterView ? this.props.lifter.get('weight') : undefined,

            // eventView is used to customize data about a lifter for a specific event
            kettlebellWeight: this.props.eventView ? this.props.eventDetails.get('kettlebellWeight') : undefined,
            totalRepetitions: this.props.eventView ? this.props.eventDetails.get('totalRepetitions') : undefined,
        };

        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleKettlebellWeightChange = this.handleKettlebellWeightChange.bind(this);
        this.handleTotalRepetitionsChange = this.handleTotalRepetitionsChange.bind(this);
        this.submitLifterChanges = this.submitLifterChanges.bind(this);
        this.handleUnregister = this.handleUnregister.bind(this);
    }

    render() {

        return (
            <Fragment>
                <Box className="lifterBox__container">
                    {this.props.enableModal &&
                        <ModalWrapper
                            triggerComponent={({ open }) => (
                                <LifterDisplay
                                        lifter={this.props.lifter}
                                        lifterSelected={open} />
                            )}>
                            {({ close }) =>
                                <Fragment>
                                    {this.props.lifterView && this.renderWeightInput()}
                                    {this.props.lifterView && <p>Weight Class: {this.props.lifter.get('weightClass')}</p>}
                                    
                                    {this.props.eventView && this.renderLifterView()}
                                    
                                    {this.state.lifterUpdated &&
                                        <button
                                            onClick={() => this.submitLifterChanges(close)}>
                                            Update Lifter
                                        </button>
                                    }
                                    {this.props.lifterView && !this.state.lifterUpdated &&
                                        <DeleteLifter
                                            lifterId={this.props.lifter.get('lifterId')}
                                            deleteFinish={close} />
                                    }
                                    {this.props.eventView && !this.state.lifterUpdated &&
                                        <button onClick={this.handleUnregister}>Unregister Lifter</button>
                                    }
                                </Fragment>
                            }
                        </ModalWrapper>
                    }
                    {!this.props.enableModal &&
                        <LifterDisplay lifter={this.props.lifter} />
                    }
                </Box>
            </Fragment>
        );
    }

    get kettlebellWeights() {

        return [
            '8',
            '12',
            '16',
            '20',
            '24',
            '28',
            '32',
        ].filter((weight) => (this.props.lifter.get('gender') === 'men' ? [ '8', '12' ] : [ '28', '32' ]).indexOf(weight) < 0);
    }

    renderWeightInput() {

        return (
            <Fragment>
                <label>Weight:</label>
                <input type="number" value={this.state.weight} onChange={this.handleWeightChange} />
            </Fragment>
        );
    }

    renderKettlebellDropdown() {

        return (
            <Fragment>
                <label>Kettlebell Weight:</label>
                <select
                    value={this.state.kettlebellWeight ? this.state.kettlebellWeight : 'Select One'}
                    onChange={this.handleKettlebellWeightChange}>
                    <option key={'Select One'}>Select One</option>
                    {_.map(this.kettlebellWeights, (weight) => <option key={weight}>{weight}</option>)}
                </select>
            </Fragment>
        );
    }

    renderTotalRepetitions() {

        return (
            <Fragment>
                <label>Total Repetitions:</label>
                <input type="number" min="0" max="200" onChange={this.handleTotalRepetitionsChange} value={this.state.totalRepetitions} />
            </Fragment>
        );
    }

    renderLifterView() {

        if (this.props.lifter.get('weight') == undefined) return <p>Please set lifter weight before adding event details!</p>

        return (
            <Fragment>
                {this.renderKettlebellDropdown()}
                {this.renderTotalRepetitions()}

                {<p>Score: {this.props.eventDetails.get('score')} </p>}

                {/* TODO: Add download link for ranking table pdf */}
                <p>Rank: {this.props.eventDetails.get('rank')} </p>
            </Fragment>
        );
    }

    handleWeightChange(event) {

        this.setState({
            weight: event.target.value,
            lifterUpdated: true,
        });
    }

    handleKettlebellWeightChange(event) {

        this.setState({
            kettlebellWeight: event.target.value,
            lifterUpdated: true,
        });
    }

    handleTotalRepetitionsChange(event) {

        this.setState({
            totalRepetitions: event.target.value,
            lifterUpdated: true,
        });
    }

    handleUnregister() {

        eventDetailsService.unregisterLifter(this.props.eventDetails.get('eventId'), this.props.eventDetails.get('lifterId'))
            .then(() => toast('Lifter unregistered successfully'))
            .catch((err) => toast(err.message));
    }

    submitLifterChanges(closeProp) {

        if (this.props.lifterView) {
            liftersService.updateLifter(this.props.lifter.get('lifterId'), {
                weight: this.state.weight,
            }, this.props.lifter.get('gender'))
            .then(() => toast('Lifter updated successfully'))
            .catch((err) => toast(err.message));
        } else if (this.props.eventView) {
            eventDetailsService.updateLifter(this.props.eventDetails.get('eventId'), this.props.eventDetails.get('lifterId'), {
                kettlebellWeight: this.state.kettlebellWeight,
                totalRepetitions: this.state.totalRepetitions,
            }, {
                weight: this.props.lifter.get('weight'),
                eventType: this.props.event.get('type'),
                eventDuration: this.props.event.get('duration'),
                gender: this.props.lifter.get('gender'),
                weightClass: this.props.lifter.get('weightClass'),
            })
            .then(() => toast('Lifter updated successfully'))
            .catch((err) => toast(err.message));
        } else {
            console.warn('WARN: no view type set for LifterBox. No submit action taken');
        }

        this.setState({
            lifterUpdated: false,
        });
        closeProp();
    }
}
import React, { Component, Fragment } from 'react';
import _ from 'lodash';
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
                                    {this.props.eventView && this.renderKettlebellDropdown()}
                                    {this.props.eventView && this.renderTotalRepetitions()}
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
            <select
                value={this.state.kettlebellWeight ? this.state.kettlebellWeight : 'Select One'}
                onChange={this.handleKettlebellWeightChange}>
                <option key={'Select One'}>Select One</option>
                {_.map(this.kettlebellWeights, (weight) => <option key={weight}>{weight}</option>)}
            </select>
        );
    }

    renderTotalRepetitions() {

        return <input type="number" min="0" max="200" onChange={this.handleTotalRepetitionsChange} value={this.state.totalRepetitions} />;
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

    submitLifterChanges(closeProp) {

        if (this.props.lifterView) {
            liftersService.updateLifter(this.props.lifter.get('lifterId'), {
                weight: this.state.weight,
            }, this.props.lifter.get('gender'));
        } else if (this.props.eventView) {
            eventDetailsService.updateLifter(this.props.eventDetails.get('eventId'), this.props.eventDetails.get('lifterId'), {
                kettlebellWeight: this.state.kettlebellWeight,
                totalRepetitions: this.state.totalRepetitions,
            }, this.props.lifter.get('gender'));
        } else {
            console.warn('WARN: no view type set for LifterBox. No submit action taken');
        }

        this.setState({
            lifterUpdated: false,
        });
        closeProp();
    }
}
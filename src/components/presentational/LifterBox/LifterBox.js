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

        // lifterView is used to customize data about a lifter
        // eventView is used to customize data about a lifter for a specific event
        this.state = {
            lifterUpdated: false,
            weightClass: this.props.lifterView ? this.props.lifter.get('weightClass') : undefined,
            kettlebellWeight: this.props.eventView ? this.props.eventDetails.get('kettlebellWeight') : undefined,
        };

        this.handleWeightClassChange = this.handleWeightClassChange.bind(this);
        this.handleKettlebellWeightChange = this.handleKettlebellWeightChange.bind(this);
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
                                    {this.props.lifterView && this.renderWeightClassDropdown()}
                                    {this.props.eventView && this.renderKettlebellDropdown()}
                                    {this.state.lifterUpdated &&
                                        <button
                                            onClick={this.submitLifterChanges}>
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

    get weightClassCategories() {
        return [
            'Strawweight',
            'Flyweight',
            'Bantamweight',
            'Featherweight',
            'Lightweight',
            'Super Lightweight',
            'Welterweight',
            'Super Welterweight',
            'Middleweight',
            'Super Middleweight',
            'Cruiserweight',
            'Heavyweight',
            'Super Heavyweight',
        ].filter((category) => {
            return (
                this.props.lifter.get('gender') === 'men' ?
                ['Strawweight', 'Flyweight', 'Super Welterweight'] :
                ['Middleweight', 'Super Middleweight', 'Cruiserweight', 'Heavyweight', 'Super Heavyweight']
            ).indexOf(category) < 0;
        });
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

    renderWeightClassDropdown() {

        return (
            <select
                value={this.state.weightClass ? this.state.weightClass : 'Select One'}
                onChange={this.handleWeightClassChange}>
                <option key={'Select One'}>Select One</option>
                {_.map(this.weightClassCategories, (category) => <option key={category}>{category}</option>)}
            </select>
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

    handleWeightClassChange(event) {

        this.setState({
            weightClass: event.target.value,
            lifterUpdated: true,
        });
    }

    handleKettlebellWeightChange(event) {

        this.setState({
            kettlebellWeight: event.target.value,
            lifterUpdated: true,
        });
    }

    submitLifterChanges() {

        if (this.props.lifterView) {
            liftersService.updateLifter(this.props.lifter.get('lifterId'), {
                weightClass: this.state.weightClass,
            });
        } else if (this.props.eventView) {
            eventDetailsService.updateLifter(this.props.eventDetails.get('eventId'), this.props.eventDetails.get('lifterId'), {
                kettlebellWeight: this.state.kettlebellWeight,
            });
        } else {
            console.warn('WARN: no view type set for LifterBox. No submit action taken');
        }

        this.setState({
            lifterUpdated: false,
        })
    }
}
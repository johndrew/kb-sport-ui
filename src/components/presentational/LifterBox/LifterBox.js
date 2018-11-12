import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import Box from '../Box/Box';
import DeleteLifter from '../../forms/DeleteLifter/DeleteLifter';
import ModalWrapper from '../../wrappers/ModalWrapper/ModalWrapper';
import liftersService from '../../../services/liftersService';
import LifterDisplay from '../LifterDisplay/LifterDisplay';
import './LifterBox.scss';

export default class LifterBox extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            lifterUpdated: false,
            weightClass: this.props.lifter.get('weightClass'),
        };

        this.handleWeightClassChange = this.handleWeightClassChange.bind(this);
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
                                    {this.renderWeightClassDropdown()}
                                    {this.state.lifterUpdated &&
                                        <button
                                            onClick={this.submitLifterChanges}>
                                            Update Lifter
                                        </button>
                                    }
                                    {!this.state.lifterUpdated &&
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

    handleWeightClassChange(event) {

        this.setState({
            weightClass: event.target.value,
            lifterUpdated: true,
        });
    }

    submitLifterChanges() {

        liftersService.updateLifter(this.props.lifter.get('lifterId'), {
            weightClass: this.state.weightClass,
        });
        this.setState({
            lifterUpdated: false,
        })
    }
}
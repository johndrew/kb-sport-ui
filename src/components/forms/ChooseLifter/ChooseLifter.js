import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as liftersSelectors from '../../../store/lifters/reducer';
import * as eventSelectors from '../../../store/events/reducer';
import BoxCollection from '../../wrappers/BoxCollection/BoxCollection';
import LifterBox from '../../presentational/LifterBox/LifterBox';
import eventsService from '../../../services/eventsService';

class ChooseLifter extends Component {

    constructor(props) {

        super(props);
    
        this.state = {
    
        };

        this.lifterSelected = this.lifterSelected.bind(this);
    }
    
    render() {

        const lifters = this.props.unregisteredLifters.map(lifter =>
            <div
                key={lifter.get('lifterId')}
                onClick={() => this.lifterSelected(lifter.get('lifterId'))}>
                <LifterBox lifter={lifter} />
            </div>
        );

        return (
            <div className="chooseLifter__container">
                <BoxCollection>
                    {lifters}
                </BoxCollection>
            </div>
        );
    }

    lifterSelected(lifterId) {

        eventsService.registerLifter(this.props.event.get('eventId'), lifterId);
        this.props.lifterChosen();
    }
}

function mapStateToProps(state, ownProps) {

    const event = eventSelectors.getEvent(state, ownProps.eventId);
    const unregisteredLifters = liftersSelectors.getLiftersBesides(state, eventSelectors.getRegisteredLifters(event));

    return {
        event,
        unregisteredLifters: liftersSelectors.filterByGender(unregisteredLifters, ownProps.gender),
    };
}

export default connect(mapStateToProps)(ChooseLifter);

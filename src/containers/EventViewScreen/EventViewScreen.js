import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as eventSelectors from '../../store/events/reducer';
import * as liftersSelectors from '../../store/lifters/reducer';
import * as eventDetailsSelectors from '../../store/eventDetails/reducer';
import * as routes from '../../routes';
import * as eventActions from '../../store/events/actions';
import * as lifterActions from '../../store/lifters/actions';
import * as eventDetailsActions from '../../store/eventDetails/actions';
import EventsIcon from '../../components/presentational/EventsIcon/EventsIcon';
import AddBox from '../../components/presentational/AddBox/AddBox';
import LifterBox from '../../components/presentational/LifterBox/LifterBox';
import BoxCollection from '../../components/wrappers/BoxCollection/BoxCollection';
import ModalWrapper from '../../components/wrappers/ModalWrapper/ModalWrapper';
import ChooseLifter from '../../components/forms/ChooseLifter/ChooseLifter';
import MaleFemaleToggle from '../../components/controls/MaleFemaleToggle/MaleFemaleToggle';
import './EventViewScreen.scss';

class EventViewScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {
            showFemaleLifters: true,
        }

        this.handleGenderToggle = this.handleGenderToggle.bind(this);
    }

    render() {

        if (!this.props.event) return <p>Loading...</p>;

        const liftersToDisplay = this.state.showFemaleLifters ? this.props.registeredFemaleLifters : this.props.registeredMaleLifters;
        const lifters = liftersToDisplay
        .sortBy(lifter => lifter.get('firstName'))
        .map(lifter =>
            <LifterBox
                key={lifter.get('lifterId')}
                lifter={lifter}
                event={this.props.event}
                eventDetails={
                    this.props.eventDetails.find(detail =>
                        detail.get('lifterId') === lifter.get('lifterId') &&
                        detail.get('eventId') === this.props.event.get('eventId')
                    )
                }
                enableModal={true}
                eventView={true} />
        );

        return (
            <div className="eventViewScreen__container">
                <aside className="eventViewScreen__aside">
                    <Link to={routes.EVENTS}>
                        <EventsIcon className="eventViewScreen__eventsIcon" />
                    </Link>
                    <h2 className="eventViewScreen__eventType">
                        {this.props.event.get('type')}
                    </h2>
                    <h2 className="eventViewScreen__eventDuration">
                        {this.props.event.get('duration')}
                    </h2>
                    <MaleFemaleToggle toggled={this.handleGenderToggle}/>
                </aside>
                <div className="eventViewScreen__liftersContainer">
                    <BoxCollection>
                        {lifters}
                        <ModalWrapper
                            triggerComponent={({ open }) => <AddBox addClicked={open}/>}>
                            {({ close }) =>
                                <ChooseLifter
                                    eventId={this.props.event.get('eventId')}
                                    gender={this.state.showFemaleLifters ? 'female' : 'male'}
                                    lifterChosen={close} />
                            }
                        </ModalWrapper>
                    </BoxCollection>
                </div>
            </div>
        );
    }

    componentDidMount() {
  
      this.props.dispatch(eventActions.fetchEvents());
      this.props.dispatch(lifterActions.fetchLifters());
      this.props.dispatch(eventDetailsActions.fetchDetails());
    }

    handleGenderToggle() {

        this.setState({
            showFemaleLifters: !this.state.showFemaleLifters,
        });
    }
}

function mapStateToProps(state, ownProps) {

    const event = eventSelectors.getEvent(state, ownProps.eventId);
    const eventDetails = eventDetailsSelectors.getDetailsForEvent(state, ownProps.eventId);
    const registeredLifters = liftersSelectors.getLifters(state, eventDetailsSelectors.getRegisteredLifters(state, ownProps.eventId));

    return {
        event,
        eventDetails,
        registeredLifters,
        registeredFemaleLifters: liftersSelectors.filterByGender(registeredLifters, 'female'),
        registeredMaleLifters: liftersSelectors.filterByGender(registeredLifters, 'male'),
    };
}

export default connect(mapStateToProps)(EventViewScreen);

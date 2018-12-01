import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as eventActions from '../../store/events/actions';
import * as eventSelectors from '../../store/events/reducer';
import * as routes from '../../routes';
import EventBox from '../../components/presentational/EventBox/EventBox';
import BoxCollection from '../../components/wrappers/BoxCollection/BoxCollection';
import AddBox from '../../components/presentational/AddBox/AddBox';
import ModalWrapper from '../../components/wrappers/ModalWrapper/ModalWrapper';
import AddEvent from '../../components/forms/AddEvent/AddEvent';
import EventsIcon from '../../components/presentational/EventsIcon/EventsIcon';
import './EventsScreen.scss';

class EventsScreen extends Component {

  render() {

    if (!this.props.events) return <p>Loading...</p>;

    const events = this.props.events.map(event =>
      <Fragment key={event.get('eventId')}>
        <Link to={routes.getEventRoute(event.get('eventId'))}>
          <EventBox key={event.get('eventId')} event={event} />
        </Link>
      </Fragment>
    );

    return (
      <Fragment>
        <EventsIcon className="eventsScreen__eventsIcon" />
        <div className="eventsScreen__boxContainer">
          <BoxCollection>
            {events}
            <ModalWrapper
              triggerComponent={({ open }) => <AddBox addClicked={open}/>}>
              {({ close }) => <AddEvent addFinish={close}/>}
            </ModalWrapper>
          </BoxCollection>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {

    this.props.dispatch(eventActions.fetchEvents());
  }
}

function mapStateToProps(state) {

  return {
    events: eventSelectors.getEvents(state),
  };
}

export default connect(mapStateToProps)(EventsScreen);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../../store/events/actions';
import * as eventSelectors from '../../store/events/reducer';
import EventBox from '../../components/presentational/EventBox/EventBox';
import BoxCollection from '../../components/wrappers/BoxCollection/BoxCollection';
import AddBox from '../../components/presentational/AddBox/AddBox';
import ModalWrapper from '../../components/wrappers/ModalWrapper/ModalWrapper';
import AddEvent from '../../components/forms/AddEvent/AddEvent';

class EventsScreen extends Component {

  render() {

    const events = this.props.events.map(event => <EventBox key={event.get('eventId')} event={event} />);

    return (
      <div className="eventsScreen__boxContainer">
        <BoxCollection>
          {events}
          <ModalWrapper
            triggerComponent={({ open }) => <AddBox addClicked={open}/>}>
            {({ close }) => <AddEvent addFinish={close}/>}
          </ModalWrapper>
        </BoxCollection>
      </div>
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

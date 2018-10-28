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

  constructor(args) {

    super(args);

    this.state = {
      modalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {

    this.props.dispatch(eventActions.fetchEvents());
  }

  render() {

    const events = this.props.events.map(event => <EventBox key={event.get('eventId')} event={event} />);

    return (
      <div className="eventsScreen__boxContainer">
        <BoxCollection>
          {events}
          <AddBox
            type="event"
            addClicked={this.openModal}/>
        </BoxCollection>
        <ModalWrapper
          open={this.state.modalOpen}>
          <AddEvent
            closeModal={this.closeModal} />
        </ModalWrapper>
      </div>
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

function mapStateToProps(state) {

  return {
    events: eventSelectors.getEvents(state),
  };
}

export default connect(mapStateToProps)(EventsScreen);

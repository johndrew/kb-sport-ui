import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as liftersSelectors from '../../store/lifters/reducer';
import * as eventDetailsSelectors from '../../store/eventDetails/reducer';
import LifterBox from '../../components/forms/LifterBox/LifterBox';
import BoxCollection from '../../components/wrappers/BoxCollection/BoxCollection';
import * as lifterActions from '../../store/lifters/actions';
import * as eventDetailsActions from '../../store/eventDetails/actions';
import AddBox from '../../components/presentational/AddBox/AddBox';
import ModalWrapper from '../../components/wrappers/ModalWrapper/ModalWrapper';
import AddLifter from '../../components/forms/AddLifter/AddLifter';
import LiftersIcon from '../../components/presentational/LiftersIcon/LiftersIcon';
import './LiftersScreen.scss';

class LiftersScreen extends Component {

    constructor(props) {

        super(props);

        this.handleLifterAdded = this.handleLifterAdded.bind(this);
        this.handleLifterUpdate = this.handleLifterUpdate.bind(this);
    }

    render() {

        const lifters = this.props.lifters
            .sortBy(lifter => lifter.get('firstName'))
            .map(lifter =>
                <LifterBox
                    key={lifter.get('lifterId')}
                    lifter={lifter}
                    enableModal={true}
                    lifterView={true}
                    lifterUpdated={this.handleLifterUpdate}
                    isLifterRegistered={eventDetailsSelectors.isLifterRegistered(this.props.details, lifter.get('lifterId'))}
                    totalOfRegisteredEvents={eventDetailsSelectors.getNumberOfRegisteredEvents(this.props.details, lifter.get('lifterId'))} />
            );

        return (
            <Fragment>
                <LiftersIcon className="liftersScreen__liftersIcon" />
                <div className="liftersScreen__container">
                    <BoxCollection>
                        {lifters}
                        <ModalWrapper
                            triggerComponent={({ open }) => <AddBox addClicked={open}/>}>
                            {({ close }) => <AddLifter addFinish={() => this.handleLifterAdded(close)}/>}
                        </ModalWrapper>
                    </BoxCollection>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {
  
      this.props.dispatch(lifterActions.fetchLifters());
      this.props.dispatch(eventDetailsActions.fetchDetails());
    }

    handleLifterAdded(close) {

        close();
        this.props.dispatch(lifterActions.cancelFetch());
        this.props.dispatch(lifterActions.fetchLifters());
    }

    handleLifterUpdate() {

        this.props.dispatch(lifterActions.cancelFetch());
        this.props.dispatch(lifterActions.fetchLifters());
    }
}

function mapStateToProps(state) {

    return {
        lifters: liftersSelectors.getAllLifters(state),
        details: eventDetailsSelectors.getAllEventDetails(state),
    };
}
  
export default connect(mapStateToProps)(LiftersScreen);

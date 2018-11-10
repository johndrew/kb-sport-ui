import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as liftersSelectors from '../../store/lifters/reducer';
import LifterBox from '../../components/presentational/LifterBox/LifterBox';
import BoxCollection from '../../components/wrappers/BoxCollection/BoxCollection';
import * as lifterActions from '../../store/lifters/actions';
import AddBox from '../../components/presentational/AddBox/AddBox';
import ModalWrapper from '../../components/wrappers/ModalWrapper/ModalWrapper';
import AddLifter from '../../components/forms/AddLifter/AddLifter';
import './LiftersScreen.scss';

class LiftersScreen extends Component {

    render() {

        const lifters = this.props.lifters.map(lifter => <LifterBox key={lifter.get('lifterId')} lifter={lifter} />);

        return (
            <div className="liftersScreen__container">
                <BoxCollection>
                    {lifters}
                    <ModalWrapper
                        triggerComponent={({ open }) => <AddBox addClicked={open}/>}>
                        {({ close }) => <AddLifter addFinish={close}/>}
                    </ModalWrapper>
                </BoxCollection>
            </div>
        );
    }

    componentDidMount() {
  
      this.props.dispatch(lifterActions.fetchLifters());
    }
}

function mapStateToProps(state) {

    return {
        lifters: liftersSelectors.getLifters(state),
    };
}
  
export default connect(mapStateToProps)(LiftersScreen);

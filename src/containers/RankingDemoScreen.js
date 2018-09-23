import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventsSelectors from '../store/events/reducer';
import * as eventsActions from '../store/events/actions';

class RankingDemoScreen extends Component {
  componentDidMount() {
    this.props.dispatch(eventsActions.getRanking());
  }

  render() {
    return (
      <div className="rankingDemoScreen__container">
        <input
          className="rankingDemoScreen__input--gender"
          type="text"
          onChange={this.handleGenderInput.bind(this)} />
        {/* {this.state.loading &&
          <p>Loading...</p>
        } */}
        <p>Ranking: {this.props.ranking ? this.props.ranking : 'Not Yet'}</p>
      </div>
    );
  }

  handleGenderInput(event) {
    const gender = event.target.value;

    this.setState({
      loading: true
    });

    if (gender === 'men' || gender === 'women') {
      this.props.dispatch(eventsActions.getRanking({ gender }));
    } else {
      console.warn('gender value not valid');
    }
  }
}

function mapStateToProps(state) {
  return {
    ranking: eventsSelectors.getRanking(state),
  };
}

export default connect(mapStateToProps)(RankingDemoScreen);

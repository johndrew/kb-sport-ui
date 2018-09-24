import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventsSelectors from '../store/events/reducer';
import * as eventsActions from '../store/events/actions';
import './RankingDemoScreen.css';
import Input from '../components/Input';

class RankingDemoScreen extends Component {
  componentDidMount() {
    this.props.dispatch(eventsActions.getRanking());
  }

  render() {
    return (
      <div className="rankingDemoScreen__container">
        <div className="rankingDemoScreen__detailsContainer">
          <div className="rankingDemoScreen__lifterDetailsContainer">
            <h3
              className="rankingDemoScreen__header--lifterDetails">
              Enter Lifter Details
          </h3>
            <Input
              label="Gender"
              inputChanged={this.handleInput.bind(this, 'gender')} />
            <Input
              label="WeightClass"
              inputChanged={this.handleInput.bind(this, 'weightCategory')} />
          </div>
          <div className="rankingDemoScreen__lifterResultsContainer">
            <h3
              className="rankingDemoScreen__header--lifterDetails">
              Enter Lifter Results
          </h3>
            <Input
              label="KettlebellWeight"
              inputChanged={this.handleInput.bind(this, 'kettlebellWeight')} />
            <Input
              label="Event"
              inputChanged={this.handleInput.bind(this, 'eventType')} />
            <Input
              label="Duration"
              inputChanged={this.handleInput.bind(this, 'duration')} />
            <Input
              label="Total Repetitions"
              inputChanged={this.handleInput.bind(this, 'repetitions')} />
          </div>
        </div>
        <button
          className="rankingDemoScreen__submit"
          onClick={this.getRanking.bind(this)}>
          Get Ranking
          </button>
        {this.props.ranking && 
          <p>Ranking {this.props.ranking}</p>
        }
      </div>
    );
  }

  getRanking() {
    this.props.dispatch(eventsActions.getRanking());
  }

  handleInput(type, value) {
    this.props.dispatch(eventsActions.setLifterData(type, value))
  }
}

function mapStateToProps(state) {
  return {
    ranking: eventsSelectors.getRanking(state),
  };
}

export default connect(mapStateToProps)(RankingDemoScreen);

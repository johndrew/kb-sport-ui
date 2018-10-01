import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventsSelectors from '../store/events/reducer';
import * as eventsActions from '../store/events/actions';
import Repetitions from '../components/rankingFields/Repetitions';
import WeightClass from '../components/rankingFields/WeightClass';
import Duration from '../components/rankingFields/Duration';
import KettlebellWeight from '../components/rankingFields/KettlebellWeight';
import Gender from '../components/rankingFields/Gender';
import EventType from '../components/rankingFields/EventType';
import Button from '../components/buildingBlocks/Button';
import Banner from '../components/general/Banner';
import Results from '../components/Results';
import './RankingDemoScreen.scss';

class RankingDemoScreen extends Component {
  render() {
    return (
      <div className="rankingDemoScreen__container">
        <Banner>
          <h1 className="rankingDemoScreen__header">Get Ranking Demo</h1>
        </Banner>
        <div className="rankingDemoScreen__detailsContainer">
          <div className="rankingDemoScreen__lifterDetailsContainer">
            <h3
              className="rankingDemoScreen__header--lifterDetails">
              Enter Lifter Details
            </h3>
            <Gender
              label="Gender"
              optionChanged={this.handleInput.bind(this, 'gender')} />
            <WeightClass
              label="WeightClass"
              optionChanged={this.handleInput.bind(this, 'weightCategory')} />
          </div>
          <div className="rankingDemoScreen__lifterResultsContainer">
            <h3
              className="rankingDemoScreen__header--lifterDetails">
              Enter Lifter Results
            </h3>
            <KettlebellWeight
              label="KettlebellWeight"
              optionChanged={this.handleInput.bind(this, 'kettlebellWeight')} />
            <EventType
              label="Event"
              optionChanged={this.handleInput.bind(this, 'eventType')} />
            <Duration
              label="Duration"
              optionChanged={this.handleInput.bind(this, 'duration')} />
            <Repetitions
              label="Total Repetitions"
              inputChanged={this.handleInput.bind(this, 'repetitions')} />
          </div>
        </div>
        <div className="rankingDemoScreen__resultsContainer">
          <Button
            className="rankingDemoScreen__submit"
            clickHandler={this.getRanking.bind(this)}
            label="Get Ranking" />
          <Results className="rankingDemoScreen__result" {...this.props} />
        </div>
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
    rankingRequestError: eventsSelectors.getRankingError(state),
    loading: eventsSelectors.hasRankingRequestBeenMade(state),
  };
}

export default connect(mapStateToProps)(RankingDemoScreen);

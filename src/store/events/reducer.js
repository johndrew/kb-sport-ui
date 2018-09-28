import { fromJS } from 'immutable';
import * as types from './actionTypes';

export const initialState = fromJS({
  lifter: {
    gender: null,
    weightCategory: null,
    kettlebellWeight: null,
    eventType: null,
    duration: null,
    repetitions: null,
    ranking: null,
  },
  rankingRequestError: null,
  rankingRequestStarted: false,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    // USER ACTION REDUCERS
    case types.LIFTER_DATA_ADDED:
      return state.mergeIn(['lifter'], action.data);

    // API REDUCERS
    case types.RANKING_REQUEST_STARTED:
        return state
          .merge({
            rankingRequestStarted: true,
            rankingRequestError: null,
          })
          .mergeIn(['lifter'], {
            ranking: null,
          });
    case types.RANKING_RETRIEVED:
      return state
        .mergeIn(['lifter'], {
          ranking: action.ranking,
        })
        .merge({
          rankingRequestError: null,
          rankingRequestStarted: false,
        });
    case types.RANKING_NOT_FOUND:
      return state
        .merge({
          rankingRequestError: 'No ranking found',
          rankingRequestStarted: false,
        })
        .mergeIn(['lifter'], {
          ranking: null,
        });
    case types.RANKING_RETRIEVE_ERROR:
      return state
        .merge({
          rankingRequestError: 'Could not get ranking',
          rankingRequestStarted: false,
        })
        .mergeIn(['lifter'], {
          ranking: null,
        });
    default:
      return state;
  }
}

// SELECTORS

export function getLifterParams(state) {
  let data = state.events.get('lifter');
  data = data.delete('ranking');

  return data;
}

export function getRanking(state) {
  return state.events.getIn(['lifter', 'ranking']);
}

export function getRankingError(state) {
  return state.events.get('rankingRequestError');
}

export function hasRankingRequestBeenMade(state) {
  return state.events.get('rankingRequestStarted');
}
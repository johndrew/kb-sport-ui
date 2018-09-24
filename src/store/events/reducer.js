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
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIFTER_DATA_ADDED:
      return state.mergeIn(['lifter'], action.data);
    case types.RANKING_RETRIEVED:
      return state.mergeIn(['lifter'], {
        ranking: action.ranking,
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
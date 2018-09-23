import { fromJS } from 'immutable';
import * as types from './actionTypes';

const initialState = fromJS({
  tmp: {
    ranking: null,
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.RANKING_RETRIEVED:
      return state.merge({
        tmp: {
          ranking: action.ranking,
        },
      });
    default:
      return state;
  }
}

// SELECTORS

export function getRanking(state) {
  return state.events.getIn(['tmp', 'ranking']);
}
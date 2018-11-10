import { fromJS } from 'immutable';
import * as types from './actionTypes';

export const initialState = fromJS({
    lifters: [],
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.LIFTERS_FETCHED:
            return state.merge({
                lifters: action.lifters,
            });
        default:
            return state;
    }
}

// SELECTORS

export function getLifters(state) {

    return state.lifters.get('lifters');
}
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

export function getAllLifters(state) {

    return state.lifters.get('lifters');
}

export function getLifters(state, lifterIds) {

    return getAllLifters(state).filter(lifter => lifterIds.includes(lifter.get('lifterId')));
}

export function getLiftersBesides(state, lifterIds) {

    return getAllLifters(state).filter(lifter => !lifterIds.includes(lifter.get('lifterId')));
}

export function filterByGender(lifters, gender) {

    return gender === 'female' ?
        lifters.filter(lifter => lifter.get('gender') !== 'women') : 
        lifters.filter(lifter => lifter.get('gender') !== 'men');     
}

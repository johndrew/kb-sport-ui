import { fromJS } from 'immutable';
import * as types from './actionTypes';

export const initialState = fromJS({
    details: [],
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.DETAILS_FETCHED:
            return state.merge({
                details: action.details,
            });
        default:
            return state;
    }
}

/* SELECTORS */

export function getAllEventDetails(state) {

    return state.eventDetails.get('details');
}

export function getDetailsForEvent(state, eventId) {

    return getAllEventDetails(state).filter(detail => detail.get('eventId') === eventId);
}

export function getRegisteredLifters(state, eventId) {

    return getDetailsForEvent(state, eventId).map(event => event.get('lifterId'));
}
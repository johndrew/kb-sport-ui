import { fromJS } from 'immutable';
import * as types from './actionTypes';

export const initialState = fromJS({
    events: [],
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.EVENTS_FETCHED:
            return state.merge({
                events: action.events,
            });
        default:
            return state;
    }
}

// SELECTORS

export function getEvents(state) {
    
    return state.events.get('events');
}

export function getEvent(state, eventId) {

    return getEvents(state).find(event => event.get('eventId') === eventId);
}

export function getRegisteredLifters(event) {

    if (!event) return [];

    return event.get('lifters', fromJS({ values: [] })).get('values');
}
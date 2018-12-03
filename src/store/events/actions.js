import * as types from './actionTypes';

export function fetchEvents() {

    return {
        type: types.FETCH_EVENTS,
    };
}

export function cancelFetch() {

    return {
        type: types.FETCH_CANCELLED,
    }
}
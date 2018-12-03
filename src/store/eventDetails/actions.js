import * as types from './actionTypes';

export function fetchDetails() {

    return {
        type: types.FETCH_DETAILS,
    };
}

export function cancelFetch() {

    return {
        type: types.FETCH_CANCELLED,
    }
}
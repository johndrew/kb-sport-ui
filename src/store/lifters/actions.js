import * as types from './actionTypes';

export function fetchLifters() {

    return {
        type: types.FETCH_LIFTERS,
    };
}

export function cancelFetch() {

    return {
        type: types.FETCH_CANCELLED,
    }
}
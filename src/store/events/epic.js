import { ajax } from 'rxjs/ajax';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';
import { HOST, GET_ALL_PATH } from '../../services/eventsService';

// action creators
const fetchEventsFulfilled = events => ({ type: types.EVENTS_FETCHED, events });

// epic
export function fetchEvents(action$, state$) {

  return action$.pipe(
    ofType(types.FETCH_EVENTS),
    switchMap(params => {
      return timer(0, 2500).pipe(
        mergeMap(action =>
          ajax.getJSON(`${HOST}${GET_ALL_PATH}`).pipe(
            map(response => fetchEventsFulfilled(response))
          )
        )
      )
    })
  );
}
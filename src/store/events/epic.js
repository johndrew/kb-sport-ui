import { ajax } from 'rxjs/ajax';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';

const URL = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com/dev/events';

// action creators
const fetchEventsFulfilled = events => ({ type: types.EVENTS_FETCHED, events });

// epic
export function fetchEvents(action$, state$) {

  return action$.pipe(
    ofType(types.FETCH_EVENTS),
    switchMap(params => {
      return timer(0, 1000).pipe(
        mergeMap(action =>
          ajax.getJSON(URL).pipe(
            map(response => fetchEventsFulfilled(response))
          )
        )
      )
    })
  );
}
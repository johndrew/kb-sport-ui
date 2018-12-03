import { ajax } from 'rxjs/ajax';
import { map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';
import { HOST, GET_ALL_PATH } from '../../services/eventDetailsService';

// action creators
const fetchEventDetailsFulfilled = details => ({ type: types.DETAILS_FETCHED, details });

// epic
export function fetchEventDetails(action$, state$) {

  return action$.pipe(
    ofType(types.FETCH_DETAILS),
    switchMap(params => {
      return timer(0, 5000).pipe(
        mergeMap(action =>
          ajax.getJSON(`${HOST}${GET_ALL_PATH}`).pipe(
            map(response => fetchEventDetailsFulfilled(response))
          )
        ),
        takeUntil(action$.pipe(
          ofType(types.FETCH_CANCELLED)
        ))
      )
    })
  );
}
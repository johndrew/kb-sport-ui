import { ajax } from 'rxjs/ajax';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { ofType } from 'redux-observable';
import * as types from './actionTypes';
import { HOST, GET_ALL_PATH } from '../../services/liftersService';

// action creators
const fetchLiftersFulfilled = lifters => ({ type: types.LIFTERS_FETCHED, lifters });

// epic
export function fetchLifters(action$, state$) {

  return action$.pipe(
    ofType(types.FETCH_LIFTERS),
    switchMap(params => {
      return timer(0, 2500).pipe(
        mergeMap(action =>
          ajax.getJSON(`${HOST}${GET_ALL_PATH}`).pipe(
            map(response => fetchLiftersFulfilled(response))
          )
        )
      )
    })
  );
}
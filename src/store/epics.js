import { combineEpics } from 'redux-observable';
import { fetchEvents } from './events/epic';

export default combineEpics(
    fetchEvents,
);

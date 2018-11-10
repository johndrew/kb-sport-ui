import { combineEpics } from 'redux-observable';
import { fetchEvents } from './events/epic';
import { fetchLifters } from './lifters/epic';

export default combineEpics(
    fetchEvents,
    fetchLifters,
);

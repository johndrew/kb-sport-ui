import { combineEpics } from 'redux-observable';
import { fetchEvents } from './events/epic';
import { fetchLifters } from './lifters/epic';
import { fetchEventDetails } from './eventDetails/epic';

export default combineEpics(
    fetchEvents,
    fetchLifters,
    fetchEventDetails,
);

export const HOME = '/';
export const EVENTS = '/events';
export const EVENT = '/events/:eventId';
export const getEventRoute = eventId => EVENT.replace(':eventId', eventId);
export const LIFTERS = '/lifters';
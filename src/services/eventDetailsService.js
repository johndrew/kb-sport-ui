export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const GET_ALL_PATH = `${BASE_PATH}/event/details`;
export const getLifterRegisterPath = (eventId) => `${BASE_PATH}/event/${eventId}/registerLifters`;
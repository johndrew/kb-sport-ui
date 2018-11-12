// TODO: un-export
export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const GET_ALL_PATH = BASE_PATH;
export const ADD_PATH = `${BASE_PATH}/event/add`;
export const getDeletePath = (eventId) => `${BASE_PATH}/event/${eventId}/delete`;
export const getLifterRegisterPath = (eventId) => `${BASE_PATH}/event/${eventId}/registerLifters`;

class EventsService {

    getFetch() {
        return fetch;
    }

    async addEvent(type, duration) {

        if (!type) throw new Error('type is required');
        if (!duration) throw new Error('duration is required');

        return this.getFetch()(`${HOST}${ADD_PATH}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                type,
                duration,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('DEBUG: Successfully added event');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to add event', err);
                throw new Error('Failed to add event');
            });
    }

    async deleteEvent(eventId) {

        if (!eventId) throw new Error('eventId is required');

        return this.getFetch()(`${HOST}${getDeletePath(eventId)}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('DEBUG: Successfully deleted event');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to delete event', err);
                throw new Error('Failed to delete event');
            });
    }

    async registerLifter(eventId, lifterId) {

        if (!eventId) throw new Error('eventId is required');
        if (!lifterId) throw new Error('lifterId is required');

        return this.getFetch()(`${HOST}${getLifterRegisterPath(eventId)}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lifterId,
            }),
        })
            .then((response) => {
                console.log('DEBUG: Successfully registered lifter');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to register lifter', err);
                throw new Error('Failed to register lifter');
            });
    }
}

export default new EventsService();

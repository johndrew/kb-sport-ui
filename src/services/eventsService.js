export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const ADD_PATH = `${BASE_PATH}/event/add`;
export const getDeletePath = (eventId) => `${BASE_PATH}/event/${eventId}/delete`;

class EventsService {

    async addEvent(type, duration) {

        if (!type) throw new Error('type is required');
        if (!duration) throw new Error('duration is required');

        return fetch(`${HOST}${ADD_PATH}`, {
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

        return fetch(`${HOST}${getDeletePath(eventId)}`, {
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
}

export default new EventsService();

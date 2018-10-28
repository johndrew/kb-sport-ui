export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const ADD_PATH = `${BASE_PATH}/event/add`;

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
}

export default new EventsService();

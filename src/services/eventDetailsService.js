export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const GET_ALL_PATH = `${BASE_PATH}/event/details`;
export const getLifterRegisterPath = (eventId) => `${BASE_PATH}/event/${eventId}/registerLifters`;
export const getLifterUpdatePath = (eventId, lifterId) => `${BASE_PATH}/event/${eventId}/lifter/${lifterId}/details`;

class EventDetailsService {

    getFetch() {
        return fetch;
    }

    async updateLifter(eventId, lifterId, details) {

        if (!eventId) throw new Error('eventId is required');
        if (!lifterId) throw new Error('eventId is required');
        if (!details) throw new Error('details are required');

        return this.getFetch()(`${HOST}${getLifterUpdatePath(eventId, lifterId)}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                details: {
                    kettlebellWeight: details.kettlebellWeight,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {

                console.log('DEBUG: Successfully updated lifter for event');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to update lifter for event', err);
                throw new Error('Failed to update lifter for event');
            });
    }
}

export default new EventDetailsService();

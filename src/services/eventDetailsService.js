export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/events';
export const GET_ALL_PATH = `${BASE_PATH}/event/details`;
export const getLifterRegisterPath = (eventId) => `${BASE_PATH}/event/${eventId}/registerLifters`;
export const getLifterUpdatePath = (eventId, lifterId) => `${BASE_PATH}/event/${eventId}/lifter/${lifterId}/details`;

class EventDetailsService {

    getFetch() {
        return fetch;
    }

    async updateLifter(eventId, lifterId, details, contextDetails) {

        if (!eventId) throw new Error('eventId is required');
        if (!lifterId) throw new Error('eventId is required');
        if (!details) throw new Error('details are required');
        if (!contextDetails) throw new Error('context details are required');
        if (!contextDetails.weight) throw new Error('weight is required');
        if (!contextDetails.eventType) throw new Error('eventType is required');
        if (!contextDetails.eventDuration) throw new Error('eventDuration is required');
        if (!contextDetails.gender) throw new Error('gender is required');
        if (!contextDetails.weightClass) throw new Error('weightClass is required');

        return this.getFetch()(`${HOST}${getLifterUpdatePath(eventId, lifterId)}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                weight: contextDetails.weight,
                eventType: contextDetails.eventType,
                eventDuration: contextDetails.eventDuration,
                gender: contextDetails.gender,
                weightClass: contextDetails.weightClass,
                details: {
                    kettlebellWeight: details.kettlebellWeight,
                    totalRepetitions: details.totalRepetitions,
                }
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

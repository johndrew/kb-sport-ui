export const HOST = 'https://nfg0lrs4g1.execute-api.us-west-2.amazonaws.com';
export const BASE_PATH = '/dev/lifters';
export const GET_ALL_PATH = BASE_PATH;
export const ADD_PATH = `${BASE_PATH}/lifter/add`;
export const getDeletePath = (lifterId) => `${BASE_PATH}/lifter/${lifterId}/delete`;
export const getUpdatePath = (lifterId) => `${BASE_PATH}/lifter/${lifterId}/update`;

class LiftersService {

    getFetch() {

        return fetch;
    }

    async addLifter({
        firstName,
        lastName,
        gender,
    }) {

        if (!firstName) throw new Error('firstName is required');
        if (!lastName) throw new Error('lastName is required');
        if (!gender) throw new Error('gender is required');

        return this.getFetch()(`${HOST}${ADD_PATH}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                firstName,
                lastName,
                gender,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('DEBUG: Successfully added lifter');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to add lifter', err);
                throw new Error('Failed to add lifter');
            });
    }

    async deleteLifter(lifterId) {

        if (!lifterId) throw new Error('lifterId is required');

        return this.getFetch()(`${HOST}${getDeletePath(lifterId)}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('DEBUG: Successfully deleted lifter');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to delete lifter', err);
                throw new Error('Failed to delete lifter');
            });
    }

    async updateLifter(lifterId, fieldsToUpdate, gender) {

        if (!lifterId) throw new Error('lifterId is required');
        if (!fieldsToUpdate) throw new Error('fields are required');
        if (!gender) throw new Error('gender is required');

        return this.getFetch()(`${HOST}${getUpdatePath(lifterId)}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gender,
                fields: fieldsToUpdate,
            }),
        })
            .then((response) => {
                console.log('DEBUG: Successfully updated lifter');
                return response;
            })
            .catch((err) => {

                console.error('ERROR: Failed to update lifter', err);
                throw new Error('Failed to update lifter');
            });
    }
}

export default new LiftersService();

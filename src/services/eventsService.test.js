import fetchMock from 'fetch-mock';
import eventsService, { HOST, ADD_PATH } from './eventsService';

describe(__filename, () => {

    describe('method addEvent', () => {

        const params = {
            type: 'Long Cycle',
            duration: '10min',
        };

        describe('Positive Tests', () => {

            beforeEach(() => {

                fetchMock.mock(`${HOST}${ADD_PATH}`, 200);
            });

            afterEach(() => {

                fetchMock.restore();
            });

            it('should successfully add an event', async () => {

                await expect(eventsService.addEvent(params.type, params.duration)).resolves.toBeTruthy();
            });
        });

        describe('Negative Tests', () => {

            it('should error when type is missing', async () => {

                await expect(eventsService.addEvent(null, params.duration)).rejects.toBeTruthy();
            });

            it('should error when duration is missing', async () => {

                await expect(eventsService.addEvent(params.type, null)).rejects.toBeTruthy();
            });

            describe.skip('when network call fails', () => {

                beforeEach(() => {

                    // FIXME:
                    // fetchMock.mock(`${HOST}${ADD_PATH}`, 500);
                    fetchMock.mock(`${HOST}${ADD_PATH}`, { throw: new Error('Bad kitty') });
                });

                afterEach(() => {

                    fetchMock.restore();
                });

                it('should error when call fails', async () => {

                    await expect(eventsService.addEvent(params.type, params.duration)).rejects.toBeTruthy();
                });
            });
        });
    });
});
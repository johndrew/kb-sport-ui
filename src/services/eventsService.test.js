import eventsService from './eventsService';

describe(__filename, () => {

    describe('method addEvent', () => {

        const params = {
            type: 'Long Cycle',
            duration: '10min',
        };

        describe('Positive Tests', () => {

            beforeEach(() => {

                jest.spyOn(eventsService, 'getFetch').mockImplementation(() => () => Promise.resolve('success'));
            });

            afterEach(() => {

                eventsService.getFetch.mockRestore();
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

            describe('when network call fails', () => {

                beforeEach(() => {

                    jest.spyOn(eventsService, 'getFetch')
                        .mockImplementation(() => () => Promise.reject(new Error('could not add')));
                });

                afterEach(() => {

                    eventsService.getFetch.mockRestore();
                });

                it('should error when call fails', async () => {

                    await expect(eventsService.addEvent(params.type, params.duration)).rejects.toBeTruthy();
                });
            });
        });
    });

    describe('method deleteEvent', () => {

        const eventId = 'foo';
        
        describe('Positive Tests', () => {

            beforeEach(() => {
                
                jest.spyOn(eventsService, 'getFetch').mockImplementation(() => () => Promise.resolve('success'));
            });

            afterEach(() => {
                
                eventsService.getFetch.mockRestore();
            });

            it('should delete event', async () => {
                
                await expect(eventsService.deleteEvent(eventId)).resolves.toBeTruthy();
            });
        });
        
        describe('Negative Tests', () => {

            it('should error if eventId is missing', async () => {
                
                await expect(eventsService.deleteEvent(null)).rejects.toBeTruthy();
            });

            describe('when network call fails', () => {

                beforeEach(() => {

                    jest.spyOn(eventsService, 'getFetch')
                        .mockImplementation(() => () => Promise.reject(new Error('could not delete')));
                });

                afterEach(() => {
                    
                    eventsService.getFetch.mockRestore();
                });
                
                it('should error when call fails', async () => {
                
                    await expect(eventsService.deleteEvent(eventId)).rejects.toBeTruthy();
                });
            });
        });
    });
});
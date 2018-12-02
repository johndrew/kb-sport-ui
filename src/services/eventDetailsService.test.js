import eventDetailsService from './eventDetailsService';

describe(__filename, () => {

    describe('method updateLifter', () => {

        const eventId = 'foo';
        const lifterId = 'bar';
        const details = {
            kettlebellWeight: '20',
        };
        const contextDetails = {
            weight: '80.2',
            eventType: 'Long Cycle',
            eventDuration: '10min',
            gender: 'men',
            weightClass: 'Bantamweight',
        };
        
        describe('Positive Tests', () => {

            beforeEach(() => {

                jest.spyOn(eventDetailsService, 'getFetch')
                    .mockImplementation(() => () => Promise.resolve('success'));
            });

            it('should resolve if successful', async () => {
                
                await eventDetailsService.updateLifter(eventId, lifterId, details, contextDetails);
            });
        });
        
        describe('Negative Tests', () => {

            it('should error if eventId is missing', async () => {
                
                await expect(eventDetailsService.updateLifter(null, lifterId, details, contextDetails)).rejects.toBeTruthy();
            });

            it('should error if lifterId is missing', async () => {
                
                await expect(eventDetailsService.updateLifter(eventId, null, details, contextDetails)).rejects.toBeTruthy();
            });

            it('should error if details are missing', async () => {
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, null, contextDetails)).rejects.toBeTruthy();
            });

            it('should error if context details are missing', async () => {
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, null)).rejects.toBeTruthy();
            });

            it('should error if weight is missing', async () => {

                const context = Object.assign({}, contextDetails, { weight: undefined });
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, context)).rejects.toBeTruthy();
            });

            it('should error if event type is missing', async () => {

                const context = Object.assign({}, contextDetails, { eventType: undefined });
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, context)).rejects.toBeTruthy();
            });

            it('should error if event duration is missing', async () => {

                const context = Object.assign({}, contextDetails, { eventDuration: undefined });
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, context)).rejects.toBeTruthy();
            });

            it('should error if gender is missing', async () => {

                const context = Object.assign({}, contextDetails, { gender: undefined });
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, context)).rejects.toBeTruthy();
            });

            it('should error if weight class is missing', async () => {

                const context = Object.assign({}, contextDetails, { weightClass: undefined });
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, details, context)).rejects.toBeTruthy();
            });

            describe('when network error occurs', () => {

                beforeEach(() => {

                    jest.spyOn(eventDetailsService, 'getFetch')
                        .mockImplementation(() => () => Promise.reject(new Error('could not register')));
                });

                afterEach(() => {
                    
                    eventDetailsService.getFetch.mockRestore();
                });

                it('should error if network error occurs', async () => {
                
                    await expect(eventDetailsService.updateLifter(eventId, lifterId, details)).rejects.toBeTruthy();
                });
            });
        });
    });
});
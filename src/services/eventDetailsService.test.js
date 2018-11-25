import eventDetailsService from './eventDetailsService';

describe(__filename, () => {

    describe('method updateLifter', () => {

        const eventId = 'foo';
        const lifterId = 'bar';
        const details = {
            kettlebellWeight: '20',
        };
        
        describe('Positive Tests', () => {

            beforeEach(() => {

                jest.spyOn(eventDetailsService, 'getFetch')
                    .mockImplementation(() => () => Promise.resolve('success'));
            });

            it('should resolve if successful', async () => {
                
                await eventDetailsService.updateLifter(eventId, lifterId, details);
            });
        });
        
        describe('Negative Tests', () => {

            it('should error if eventId is missing', async () => {
                
                await expect(eventDetailsService.updateLifter(null, lifterId, details)).rejects.toBeTruthy();
            });

            it('should error if lifterId is missing', async () => {
                
                await expect(eventDetailsService.updateLifter(eventId, null, details)).rejects.toBeTruthy();
            });

            it('should error if details are missing', async () => {
                
                await expect(eventDetailsService.updateLifter(eventId, lifterId, null)).rejects.toBeTruthy();
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
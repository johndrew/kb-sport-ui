import liftersService from './liftersService';

describe(__filename, () => {

    describe('method addLifter', () => {

        const addLifter = {
            firstName: 'bob',
            lastName: 'smith',
            gender: 'men',
        };

        describe('Positive Tests', () => {

            it('should resolve if call is successful');
        });
        
        describe('Negative Tests', () => {

            it('should error if firstName is missing', async () => {

                const lifter = Object.assign({}, addLifter, { firstName: null });
                
                await expect(liftersService.addLifter(lifter)).rejects.toBeTruthy();
            });

            it('should error if lastName is missing', async () => {
                
                const lifter = Object.assign({}, addLifter, { lastName: null });

                await expect(liftersService.addLifter(lifter)).rejects.toBeTruthy();
            });

            it('should error if gender is missing', async () => {
                
                const lifter = Object.assign({}, addLifter, { gender: null });

                await expect(liftersService.addLifter(lifter)).rejects.toBeTruthy();
            });

            it('should error if network call fails');
        });
    });

    describe('method deleteLifter', () => {
        
        describe('Positive Tests', () => {

            it('should resolve if successful');
        });
        
        describe('Negative Tests', () => {

            it('should error if lifterId is missing', async () => {
                
                await expect(liftersService.deleteLifter(null)).rejects.toBeTruthy();
            });

            it('should error if network call fails');
        });
    });

    describe('method updateLifter', () => {

        const lifterId = 'foo';
        const fieldsToUpdate = {
            weightClass: 'Heavyweight',
        };
        
        describe('Positive Tests', () => {

            beforeEach(() => {

                jest.spyOn(liftersService, 'getFetch')
                    .mockImplementation(() => () => Promise.resolve('success'));
            });

            afterEach(() => {

                liftersService.getFetch.mockRestore();
            });

            it('should resolve if successful', async () => {

                await expect(liftersService.updateLifter(lifterId, fieldsToUpdate)).resolves.toBeTruthy();
            });
        });
        
        describe('Negative Tests', () => {

            it('should error if lifterId is missing', async () => {
                
                await expect(liftersService.updateLifter(null, fieldsToUpdate)).rejects.toBeTruthy();
            });

            it('should error if there are no fields to update', async () => {

                await expect(liftersService.updateLifter(lifterId, null)).rejects.toBeTruthy();
            });

            describe('when a network error occurs', () => {

                beforeEach(() => {
                    
                    jest.spyOn(liftersService, 'getFetch')
                        .mockImplementation(() => () => Promise.reject(new Error('could not update')));
                });

                afterEach(() => {
                    
                    liftersService.getFetch.mockRestore();
                });
                
                it('should error', async () => {
                    
                    await expect(liftersService.updateLifter(lifterId, fieldsToUpdate)).rejects.toBeTruthy();
                });
            });
        });
    });
});
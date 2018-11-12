import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ChooseLifter from './ChooseLifter';
import { initialState as initialEventState } from '../../../store/events/reducer';
import { initialState as initialLifterState } from '../../../store/lifters/reducer';

describe(__filename, () => {

    let mockStore;
    beforeAll(() => {
        
        mockStore = configureStore([]);
    });

    it('renders correctly', () => {

        const wrapper = shallow(
            <ChooseLifter
                store={mockStore({
                    events: initialEventState,
                    lifters: initialLifterState,
                })} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
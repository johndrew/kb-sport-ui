import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EventsScreen from './EventsScreen';
import { initialState } from '../../store/events/reducer';

describe(__filename, () => {

    let mockStore;
    beforeAll(() => {
        
        mockStore = configureStore([]);
    });

    it('renders correctly', () => {

        const wrapper = shallow(
            <EventsScreen store={mockStore({ events: initialState })} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
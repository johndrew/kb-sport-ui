import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EventViewScreen from './EventViewScreen';
import { initialState as initialEventState } from '../../store/events/reducer';
import { initialState as initialLifterState } from '../../store/lifters/reducer';

describe(__filename, () => {

    let mockStore;
    beforeAll(() => {
        
        mockStore = configureStore([]);
    });

    it('renders correctly', () => {

        const wrapper = shallow(
            <EventViewScreen
                store={mockStore({
                    events: initialEventState,
                    lifters: initialLifterState,
                })}
                eventId='foo' />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
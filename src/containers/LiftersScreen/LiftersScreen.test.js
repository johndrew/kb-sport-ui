import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import LiftersScreen from './LiftersScreen';
import { initialState } from '../../store/lifters/reducer';

describe(__filename, () => {

    let mockStore;
    beforeAll(() => {
        
        mockStore = configureStore([]);
    });

    it('renders correctly', () => {

        const wrapper = shallow(<LiftersScreen store={mockStore({ lifters: initialState })} />);

        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = shallow(<HomeScreen />);

        expect(wrapper).toMatchSnapshot();
    });
});
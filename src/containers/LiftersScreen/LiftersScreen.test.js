import React from 'react';
import { mount } from 'enzyme';
import LiftersScreen from './LiftersScreen';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<LiftersScreen />);

        expect(wrapper).toMatchSnapshot();
    });
});
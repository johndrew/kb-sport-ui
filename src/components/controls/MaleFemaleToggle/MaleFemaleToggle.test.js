import React from 'react';
import { mount } from 'enzyme';
import MaleFemaleToggle from './MaleFemaleToggle';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<MaleFemaleToggle />);

        expect(wrapper).toMatchSnapshot();
    });
});
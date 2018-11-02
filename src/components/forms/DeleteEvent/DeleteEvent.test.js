import React from 'react';
import { mount } from 'enzyme';
import DeleteEvent from './DeleteEvent';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<DeleteEvent />);

        expect(wrapper).toMatchSnapshot();
    });
});
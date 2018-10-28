import React from 'react';
import { mount } from 'enzyme';
import AddEvent from './AddEvent';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<AddEvent />);

        expect(wrapper).toMatchSnapshot();
    });
});
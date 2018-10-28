import React from 'react';
import { mount } from 'enzyme';
import EventsIcon from './EventsIcon';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<EventsIcon />);

        expect(wrapper).toMatchSnapshot();
    });
});
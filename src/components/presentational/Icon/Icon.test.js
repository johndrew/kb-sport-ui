import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';

describe(__filename, () => {
    it('renders correctly', () => {
        const wrapper = mount(<Icon />);

        expect(wrapper).toMatchSnapshot();
    });
});
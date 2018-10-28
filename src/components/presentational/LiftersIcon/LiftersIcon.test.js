import React from 'react';
import { mount } from 'enzyme';
import LiftersIcon from './LiftersIcon';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<LiftersIcon />);

        expect(wrapper).toMatchSnapshot();
    });
});
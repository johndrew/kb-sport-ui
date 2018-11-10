import React from 'react';
import { mount } from 'enzyme';
import AddLifter from './AddLifter';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<AddLifter />);

        expect(wrapper).toMatchSnapshot();
    });
});
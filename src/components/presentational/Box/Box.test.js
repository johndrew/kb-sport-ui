import React from 'react';
import { mount } from 'enzyme';
import Box from './Box';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<Box></Box>);

        expect(wrapper).toMatchSnapshot();
    });
});
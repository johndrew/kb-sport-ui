import React from 'react';
import { mount } from 'enzyme';
import BoxCollection from './BoxCollection';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<BoxCollection />);

        expect(wrapper).toMatchSnapshot();
    });
});
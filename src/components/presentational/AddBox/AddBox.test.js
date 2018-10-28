import React from 'react';
import { mount } from 'enzyme';
import AddBox from './AddBox';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<AddBox />);

        expect(wrapper).toMatchSnapshot();
    });
});
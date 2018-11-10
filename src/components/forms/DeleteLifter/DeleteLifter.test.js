import React from 'react';
import { shallow } from 'enzyme';
import DeleteLifter from './DeleteLifter';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = shallow(<DeleteLifter />);

        expect(wrapper).toMatchSnapshot();
    });
});
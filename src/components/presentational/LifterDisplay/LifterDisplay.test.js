import React from 'react';
import { mount } from 'enzyme';
import LifterDisplay from './LifterDisplay';
import { fromJS } from 'immutable';

describe(__filename, () => {

    let props;
    beforeEach(() => {
        
        props = {
            lifter: fromJS({ 
                gender: 'female',
                firstName: 'Sally',
                lastName: 'Ann',
            }),
        };
    });

    it('renders correctly', () => {

        const wrapper = mount(<LifterDisplay {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
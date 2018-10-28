import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
import EventBox from './EventBox';

describe(__filename, () => {

    const testEvent = fromJS({ type: 'Long Cycle', duration: '10min' });

    it('renders correctly', () => {

        const wrapper = mount(<EventBox event={testEvent} />);

        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import { mount } from 'enzyme';
import Modal from 'react-modal';
import ModalWrapper from './ModalWrapper';

// FIXME: test is freezing
describe.skip(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<ModalWrapper
            triggerComponent={() => <p></p>}>
            {() => <p></p>}
        </ModalWrapper>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should open modal when prop is set', () => {
        
        const wrapper = mount(<ModalWrapper
            triggerComponent={({ open }) => <button onClick={open}></button>}>
            {() => <p></p>}
        </ModalWrapper>);

        wrapper.find('button').simulate('click');
        expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    });

    it('should have modal closed by default', () => {
        
        const wrapper = mount(<ModalWrapper
            triggerComponent={() => <p></p>}>
            {() => <p></p>}
        </ModalWrapper>);

        expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    })
});
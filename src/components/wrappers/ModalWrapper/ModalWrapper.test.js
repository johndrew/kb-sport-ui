import React from 'react';
import { mount } from 'enzyme';
import Modal from 'react-modal';
import ModalWrapper from './ModalWrapper';

describe(__filename, () => {

    it('renders correctly', () => {

        const wrapper = mount(<ModalWrapper><p></p></ModalWrapper>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should open modal when prop is set', () => {
        
        const wrapper = mount(<ModalWrapper open={true}><p></p></ModalWrapper>);

        expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    });

    it('should not open modal when prop is not set', () => {
        
        const wrapper = mount(<ModalWrapper open={false}><p></p></ModalWrapper>);

        expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    });

    it('should have modal closed by default', () => {
        
        const wrapper = mount(<ModalWrapper><p></p></ModalWrapper>);

        expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    })
});
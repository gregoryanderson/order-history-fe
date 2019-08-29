import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {

    //first test fails, but i dont know why
    it('should update to state when handle change is called', () => {
        const wrapper = shallow(<Form addPurchase={jest.fn()}/>)
        const mockEvent = {
            target: {
            description: "Greg",
        }
    }

        const expectedDescription= "Greg";
        wrapper.instance().handleChange(mockEvent);
        console.log(wrapper.state)
        expect(wrapper.state('description')).toEqual(expectedDescription);

    })

    it('should call clearInputs when submitPurchase is called', () => {
        const wrapper = shallow(<Form addPurchase={jest.fn()}/>)
        wrapper.instance().clearInputs = jest.fn()
        wrapper.instance().submitPurchase({ preventDefault: jest.fn() });

        expect(wrapper.instance().clearInputs).toHaveBeenCalled()
    })

    it('should run submitPurchase when the button is clicked', () => {
        const wrapper = shallow(<Form addPurchase={jest.fn()}/>)

        wrapper.instance().submitPurchase = jest.fn();
        const mockEvent = { preventDefault: jest.fn() }
        wrapper.instance().forceUpdate();
        wrapper.find('button').simulate('click', mockEvent)

        expect(wrapper.instance().submitPurchase).toHaveBeenCalled();
    })
})
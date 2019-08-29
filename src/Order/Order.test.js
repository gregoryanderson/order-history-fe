import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow(<Order 
            img={'https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg'}
            name="order name"
            description="this in a nice order"
            price={500}
            id={4}
            key={4}
            deleteOrder={jest.fn}
        />)

        expect(wrapper).toMatchSnapshot();
    })

    it('should run the deleteOrder function when the delete button is clicked', () => {

        const deleteOrderMock = jest.fn()
        const wrapper = shallow(<Order 
            img={'https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg'}
            name="order name"
            description="this in a nice order"
            price={500}
            id={4}
            key={4}
            deleteOrder={deleteOrderMock}
        />)

        wrapper.find('button').simulate('click');

        expect(deleteOrderMock).toHaveBeenCalledWith(4)
    })
})
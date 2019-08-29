import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';


describe('Container', () => {
    it('should match the snapshot affliated with it', () => {
        const orders = [{  
            img:'https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg',
            name:"order name",
            description:"this in a nice order",
            price:500,
            id:4,
            key:4,
            deleteOrder: jest.fn()
        }]
        
        
        const wrapper = shallow(
            <Container 
            orders={orders} 
            deleteOrder={jest.fn()} 
          />
        )
    
        expect(wrapper).toMatchSnapshot()
    })
})

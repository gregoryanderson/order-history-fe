import React from 'react';
import Order from '../Order/Order';
import './Container.css';

const Container = ({orders, deleteOrder}) => {
    const orderCards = orders.map(order => {
        return (
        <Order 
            img={order.img}
            name={order.name}
            description={order.description}
            price={order.price}
            id={order.id}
            key={order.id}
            deleteOrder={deleteOrder}
        />
        )
    })

    return (
        <section>
            {orderCards}
        </section>
    )
}

export default Container;
import React from 'react';
import './Order.css';

const Order = ({photo, name, price, description, id, deleteOrder }) => {

    return (
        <article className="order">
            <div className="photo">
                {photo}
            </div>
            <div className="text">
                {name}
                {description}
            </div>
            <div className="price">
                {price}
                <button onClick={() => deleteOrder(id)}>Remove From History!</button>
            </div>
        </article>
    )
}


export default Order;
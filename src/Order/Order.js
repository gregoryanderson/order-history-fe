import React from 'react';
import './Order.css';

const Order = ({photo, name, price, description, id, deleteOrder }) => {

    return (
        <article>
            <div>
                {photo}
            </div>
            <div>
                {name}
                {description}
            </div>
            <div>
                {price}
                <button onClick={() => deleteOrder(id)}>Remove From History!</button>
            </div>
        </article>
    )
}


export default Order;
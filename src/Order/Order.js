import React from 'react';
import './Order.css';

const Order = ({img, name, price, description, id, deleteOrder }) => {

    return (
        <article className="order">
            <div className="photo">
                <img src={img} height="50px" width="50px"/>
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
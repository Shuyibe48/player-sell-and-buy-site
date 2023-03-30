import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {id, name, Position, ratings, price} = props.player
    return (
        <div className='cart'>
            <h5>#Id: {id}</h5>
            <h3>Player Name: {name}</h3>
            <h4>Position: {Position}</h4>
            <p>Rating: {ratings} Star</p>
            <h3>Price: ${price}m</h3>
        </div>
    );
};

export default Cart;
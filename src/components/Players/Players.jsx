import React from 'react';
import './Player.css'

const Players = (props) => {
    const {name, price, Position, ratings, img} = props.player
    const specificPlayer = props.specificPlayer
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img}/>
            </div>
            <div className='card-body'>
                <h3>{name}</h3>
                <h6>Position: {Position}</h6>
                <p>Ratings: {ratings} Star</p>
                <h4>Price: ${price}m</h4>
                <button onClick={() => specificPlayer(props.player)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Players;
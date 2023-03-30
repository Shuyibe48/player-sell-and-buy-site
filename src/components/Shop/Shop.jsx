import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Shop.css'

const Shop = () => {
    const [players, setPlayers] = useState([])
    const [playerCart, setPlayerCart] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const specificPlayer = (player) => {
        setPlayerCart(player)
    }

    return (
        <div className='shop'>
            <div className='players'>
                {
                    players.map(player => <Players
                        key={player.id}
                        player={player}
                        specificPlayer={specificPlayer}
                    ></Players>)
                }
            </div>
            <div className='cart'>
                <Cart
                    player={playerCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
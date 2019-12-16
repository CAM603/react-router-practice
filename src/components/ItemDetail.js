import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Item({match}) {
    console.log(match)
    useEffect(() => {
        fetchItem()
        
    }, [match.params.id])
    
    const [item, setItem ] = useState({});
    const [pic, setPic] = useState()
    const [moves, setMoves] = useState([])

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
        setPic(item.sprites.front_default)
        setMoves(item.moves)
    }
    
    return (
    <div>
        <h1>{item.name}</h1>
        <img src={pic}/>
        {moves.map((move, index) => (
            <p key={index}>{move.move.name}</p>
        ))}
    </div>
    );
}


export default Item;
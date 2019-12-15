import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Item({match}) {
    useEffect(() => {
        fetchItem()
        
    }, [])
    
    const [item, setItem ] = useState({});
    const [pic, setPic] = useState()

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
        setPic(item.sprites.front_default)
    }
    console.log(item)
    return (
    <div>
        <h1>{item.name}</h1>
        <img src={pic}/>
    </div>
    );
}


export default Item;
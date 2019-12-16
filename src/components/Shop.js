import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Shop() {
    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems ] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const items = await data.json();
        console.log(items)
        setItems(items.results);
    }
    return (
    <div className="shop">
        {items.map((item, index) => (
            
            <h1 key={index}>
                <Link to={`/shop/${index + 1}`}>{item.name}</Link>
            </h1>
        ))}
    </div>
    );
}


export default Shop;
import React, { useState, useEffect } from 'react';



function Shop() {
    useEffect(() => {
        fetchItems();
    }, [])
    const fetchItems = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        const items = await data.json();
        console.log(items)
    }
    return (
    <div>
        <h1>Shop</h1>
    </div>
    );
}


export default Shop;
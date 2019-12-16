import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function Item(props) {
    // Style
    const {
        match,
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    // Fetch data
    useEffect(() => {
        fetchItem()
        
    }, [match.params.id])
    
    const [item, setItem ] = useState({});
    const [pic, setPic] = useState();
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
        setPic(item.sprites.front_default)
        setMoves(item.moves)
        setStats(item.stats)
    }
    console.log(stats)
    return (
    <div className="item">
        <div className="card">
            <h1>{item.name}</h1>
            <div className="card-img">
                <img src={pic}/>
            </div>
            <div>
                {stats.map((stat, index) => (
                <p key={index}>{stat.stat.name}: {stat.base_stat} </p>
                ))}
            </div>
            <Button color="danger" onClick={toggle}>Moves</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Moves</ModalHeader>
                <ModalBody>
                {moves.map((move, index) => (
                    
                        <p key={index}>{move.move.name}</p>
                    
                ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    </div>
    );
}


export default Item;
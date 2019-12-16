import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Navbar, NavbarBrand, Nav } from 'reactstrap';


function Navigation() {
    return (
    <nav className="navigation">
        <Navbar fixed="fixed" color="light">
            <NavbarBrand>Logo</NavbarBrand>
            <Nav>
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                    <Link to="/shop">
                        <p>Shop</p>
                    </Link>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
            </Nav>
        </Navbar>
    </nav>
    );
}


export default Navigation;
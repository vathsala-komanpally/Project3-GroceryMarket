import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { CategoriesNavBar } from './CategoriesNavBar';
import FormControl from 'react-bootstrap/FormControl'
import { Cart } from './Cart';

const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/catalogue', label: 'Catalogue' },
    { to: '/reciepes', label: 'Reciepes' },
    { to: '/contact', label: 'Contact' },
]

const NavBar = (props) => {
    const [cart, setCart] = useState([]);
   
    const handleCart = () => {
        setCart(cart);
    }
    return (
        <div>
            <div className="navbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Welcome! to Grocery Page</Navbar.Brand>
                    <Nav className="mr-auto">
                        {items.map(({ to, label }) => (
                            <Nav.Link key={to} href={to}>{label}</Nav.Link>
                        ))}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
                    <Button variant="light" onClick={handleCart}>Cart  {cart.length}</Button>
            </div>
            <CategoriesNavBar />
        </div>
    )
}

export { NavBar };

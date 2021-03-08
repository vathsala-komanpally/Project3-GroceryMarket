import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About'
import { Catalogue } from '../pages/Catalogue'
import { Reciepes } from '../pages/Recipes'
import { Contact } from '../pages/Contact'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const items = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/catalogue', label: 'Catalogue' },
    { to: '/reciepes', label: 'Reciepes' },
    { to: '/contact', label: 'Contact' },
]

const NavBar = () => {
    return (
        <Router>
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
                    </div>
            <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/catalogue"><Catalogue /></Route>
                <Route path="/reciepes"><Reciepes /></Route>
                <Route path="/contact"><Contact /></Route>
            </Switch>
            </div>
            </Router >
    )
}

export { NavBar };

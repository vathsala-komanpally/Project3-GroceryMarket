import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About'
import { Catalogue } from '../pages/Catalogue'
import { Reciepes } from '../pages/Recipes'
import { Contact } from '../pages/Contact'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const items = [
    { to: '/user/home', label: 'Home' },
    { to: '/user/about', label: 'About' },
    { to: '/user/catalogue', label: 'Catalogue' },
    { to: '/user/reciepes', label: 'Reciepes' },
    { to: '/user/contact', label: 'Contact' },
]

const StartPage = () => {
    return (
        <Router>
        <div>
            <Breadcrumb>
            {items.map(({ to, label }) => (
                 <Breadcrumb.Item key={to} href={to}>{label}</Breadcrumb.Item>
                // <Link key={to} to={to}>
                //     {label}
                // </Link>
            ))}
            </Breadcrumb>
            <Switch>
            <Route path="/user/home"><Home/></Route>
            <Route path="/user/about"><About/></Route>
            <Route path="/user/catalogue"><Catalogue/></Route>
            <Route path="/user/reciepes"><Reciepes/></Route>
            <Route path="/user/contact"><Contact/></Route>
            </Switch>
                </div>
            </Router>
    )
}

export { StartPage };

{/* <nav>
                <Link to="/user/home">Home</Link>
                <Link to="/user/about">About</Link>
                <Link to="/user/about">Catalogue</Link>
                <Link to="/user/about">Reciepes</Link>
                <Link to="/user/about">Contact</Link>
            </nav>
            <Route exact path="/user/home">
                <About />
            </Route> */}